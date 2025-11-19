import React, { useState } from 'react';
import { QuestionType } from '../types';
import type { SurveyQuestion } from '../types';
import { generateSurveyQuestions } from '../services/geminiService';
import { IconSparkles } from '../constants';

const QuestionCard: React.FC<{ question: SurveyQuestion; onUpdate: (updatedQuestion: SurveyQuestion) => void; onDelete: (id: string) => void; }> = ({ question, onUpdate, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
            <button onClick={() => onDelete(question.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
            <input 
                type="text"
                value={question.questionText}
                onChange={(e) => onUpdate({ ...question, questionText: e.target.value })}
                className="text-lg font-semibold w-full border-b-2 border-transparent focus:border-brand-primary outline-none mb-4"
                placeholder="Type your question here"
            />
            
            {question.questionType === QuestionType.MULTIPLE_CHOICE && (
                <div className="space-y-2">
                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input type="radio" disabled className="text-brand-primary"/>
                            <input 
                                type="text" 
                                value={option}
                                onChange={(e) => {
                                    const newOptions = [...question.options];
                                    newOptions[index] = e.target.value;
                                    onUpdate({ ...question, options: newOptions });
                                }}
                                className="w-full py-1 border-b border-gray-200 focus:border-gray-400 outline-none"
                                placeholder={`Option ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            )}
            {question.questionType === QuestionType.RATING && (
                 <div className="flex items-center justify-between text-sm text-gray-500 mt-2 px-2">
                    <span>{question.options[0] || 'Lowest'}</span>
                    <div className="flex gap-2">
                        {[1,2,3,4,5].map(i => <div key={i} className="h-8 w-8 border rounded-full flex items-center justify-center">{i}</div>)}
                    </div>
                    <span>{question.options[1] || 'Highest'}</span>
                </div>
            )}
            {question.questionType === QuestionType.TEXT && (
                <textarea 
                    disabled
                    placeholder="Respondent's answer will go here..."
                    className="w-full p-2 border border-dashed border-gray-300 rounded-md mt-2 bg-gray-50"
                />
            )}
        </div>
    );
}

const SurveyBuilder: React.FC = () => {
    const [title, setTitle] = useState("My Awesome Survey");
    const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
    const [aiTopic, setAiTopic] = useState("");
    const [numberOfQuestions, setNumberOfQuestions] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addQuestion = (type: QuestionType) => {
        const newQuestion: SurveyQuestion = {
            id: Date.now().toString(),
            questionText: "",
            questionType: type,
            options: type === QuestionType.MULTIPLE_CHOICE ? ["", ""] : type === QuestionType.RATING ? ['1 - Very Poor', '5 - Very Good'] : []
        };
        setQuestions([...questions, newQuestion]);
    };

    const updateQuestion = (updatedQuestion: SurveyQuestion) => {
        setQuestions(questions.map(q => q.id === updatedQuestion.id ? updatedQuestion : q));
    };

    const deleteQuestion = (id: string) => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    const handleGenerate = async () => {
        if (!aiTopic.trim()) {
            setError("Please enter a topic for the AI.");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const generated = await generateSurveyQuestions(aiTopic, numberOfQuestions);
            setQuestions([...questions, ...generated]);
        } catch (err: any) {
            setError(err.message || "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-teal-50 min-h-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-3xl font-bold w-full bg-transparent border-b-2 border-gray-300 focus:border-brand-primary outline-none pb-2 mb-8"
                    placeholder="Survey Title"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-8 space-y-6">
                        {questions.length === 0 && !isLoading && (
                            <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg">
                                <h2 className="text-xl font-semibold text-gray-600">Your survey is empty!</h2>
                                <p className="text-gray-500 mt-2">Add questions from the sidebar or use the AI generator to start.</p>
                            </div>
                        )}
                        {questions.map(q => (
                            <QuestionCard key={q.id} question={q} onUpdate={updateQuestion} onDelete={deleteQuestion} />
                        ))}
                        {isLoading && (
                            <div className="flex items-center justify-center gap-4 p-8 bg-white/50 rounded-lg">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
                                <span className="text-gray-600">Generating brilliant questions...</span>
                            </div>
                        )}
                    </div>
                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                <h3 className="font-semibold text-lg mb-4">Add Question</h3>
                                <div className="space-y-3">
                                    <button onClick={() => addQuestion(QuestionType.MULTIPLE_CHOICE)} className="w-full text-left p-3 bg-gray-100 hover:bg-brand-primary-light hover:text-brand-primary rounded-md transition">Multiple Choice</button>
                                    <button onClick={() => addQuestion(QuestionType.TEXT)} className="w-full text-left p-3 bg-gray-100 hover:bg-brand-primary-light hover:text-brand-primary rounded-md transition">Text Input</button>
                                    <button onClick={() => addQuestion(QuestionType.RATING)} className="w-full text-left p-3 bg-gray-100 hover:bg-brand-primary-light hover:text-brand-primary rounded-md transition">Rating Scale</button>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 bg-gradient-to-br from-indigo-50 to-teal-50">
                                <h3 className="font-semibold text-lg mb-4 flex items-center"><IconSparkles /> Generate with AI</h3>
                                <p className="text-sm text-gray-600 mb-4">Describe your survey topic and let AI create questions for you.</p>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="ai-topic" className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                                        <textarea
                                            id="ai-topic"
                                            value={aiTopic}
                                            onChange={e => setAiTopic(e.target.value)}
                                            placeholder="e.g., Customer satisfaction for a new coffee shop"
                                            className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                            rows={3}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="num-questions" className="block text-sm font-medium text-gray-700 mb-1">Number of Questions</label>
                                        <input
                                            id="num-questions"
                                            type="number"
                                            value={numberOfQuestions}
                                            onChange={e => setNumberOfQuestions(Math.max(1, Math.min(10, parseInt(e.target.value, 10) || 1)))}
                                            min="1"
                                            max="10"
                                            className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                        />
                                    </div>
                                </div>
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                <button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4 bg-brand-primary text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition disabled:bg-gray-400 flex items-center justify-center">
                                    {isLoading ? 'Generating...' : 'Generate Questions'}
                                </button>
                            </div>

                            <button className="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
                                Publish Survey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyBuilder;