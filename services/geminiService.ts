
import { GoogleGenAI, Type } from "@google/genai";
import type { SurveyQuestion } from '../types';
import { QuestionType } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this context, we assume the key is present.
  console.warn("API key not found. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const surveyQuestionSchema = {
  type: Type.OBJECT,
  properties: {
    questionText: { type: Type.STRING, description: "The text of the survey question." },
    questionType: {
      type: Type.STRING,
      enum: [QuestionType.MULTIPLE_CHOICE, QuestionType.TEXT, QuestionType.RATING],
      description: "The type of the question."
    },
    options: {
      type: Type.ARRAY,
      description: "A list of options for multiple choice or rating scale questions. Should be an empty array for TEXT type.",
      items: { type: Type.STRING }
    },
    allowMultipleAnswers: { type: Type.BOOLEAN, description: "Whether multiple options can be selected for a MULTIPLE_CHOICE question." }
  },
  required: ["questionText", "questionType", "options"]
};

export const generateSurveyQuestions = async (topic: string, numberOfQuestions: number): Promise<SurveyQuestion[]> => {
  if (!API_KEY) {
    throw new Error("API key is not configured.");
  }
  
  try {
    const systemInstruction = "You are an expert survey designer. Your task is to generate high-quality, unbiased, and engaging survey questions based on a given topic. You must strictly adhere to the provided JSON schema for the output. The output must be a valid JSON array of question objects.";
    
    const prompt = `Please generate exactly ${numberOfQuestions} survey questions for a survey about the brand or product: "${topic}".

The questions should be diverse and cover different aspects of customer experience and perception. Include a mix of the following question types as defined in the JSON schema:
- MULTIPLE_CHOICE: For questions about preferences, usage frequency, or choices. Provide at least 2 relevant and distinct options. The 'allowMultipleAnswers' property can be true or false.
- TEXT: For open-ended feedback, suggestions, or detailed opinions. For this type, the 'options' property MUST be an empty array.
- RATING: To rate a specific aspect on a 5-point scale. For this type, the 'options' property MUST contain exactly two strings: a label for the lowest score (e.g., "Very Dissatisfied") and a label for the highest score (e.g., "Very Satisfied").

Ensure the generated questions are varied and not repetitive.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: surveyQuestionSchema
        },
      },
    });

    const jsonText = response.text?.trim();

    if (!jsonText) {
        console.error("Gemini API returned an empty or null response text.", { response });
        throw new Error("AI returned an empty response.");
    }
    
    let generatedQuestions;
    try {
        generatedQuestions = JSON.parse(jsonText);
    } catch (parseError) {
        console.error("Failed to parse JSON response from Gemini API.", { jsonText, parseError });
        throw new Error("AI returned an invalid format.");
    }
    
    if (!Array.isArray(generatedQuestions)) {
        console.error("Parsed response is not an array.", { generatedQuestions });
        throw new Error("AI returned an unexpected data structure.");
    }

    // Add a unique ID to each question and sanitize data
    return generatedQuestions.map((q: Omit<SurveyQuestion, 'id'>) => ({
      ...q,
      id: `gen-${Math.random().toString(36).substr(2, 9)}`,
      options: Array.isArray(q.options) ? q.options : [],
    }));
  } catch (error) {
    console.error("Detailed error generating survey questions:", error);
    // The generic message is kept to match the user's screenshot and provide a friendly error.
    // The detailed error is logged to the console for debugging.
    throw new Error("Failed to generate questions. The AI may be busy, or the topic may be too sensitive. Please try again.");
  }
};
