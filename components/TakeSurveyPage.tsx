
import React, { useState, useEffect } from 'react';
import { type SurveyInfo, QuestionType, type SurveyQuestion } from '../types';
import { SURVEY_QUESTIONS_BANK } from '../constants';
import { IconClock, IconCheck, IconSuccessCircle, IconChevronRight } from '../constants';
import { generateSurveyQuestions } from '../services/geminiService';

type SurveyStep = 'instructions' | 'questions' | 'complete';
type Answers = Record<string, string | string[]>;

const TakeSurveyPage: React.FC<{
    survey: SurveyInfo;
    onComplete: (reward: number, surveyId: number) => void;
    onBack: () => void;
}> = ({ survey, onComplete, onBack }) => {
    const [step, setStep] = useState<SurveyStep>('instructions');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [timer, setTimer] = useState(0);
    const [isNextDisabled, setIsNextDisabled] = useState(true);

    const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
    const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
    const [questionError, setQuestionError] = useState<string | null>(null);
    
    const currentQuestion = questions[currentQuestionIndex];
    const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

    useEffect(() => {
        const fetchOrGenerateQuestions = async () => {
            setIsLoadingQuestions(true);
            setQuestionError(null);
            try {
                const predefinedQuestions = SURVEY_QUESTIONS_BANK[survey.id];
                if (predefinedQuestions) {
                    setQuestions(predefinedQuestions);
                } else {
                    const generated = await generateSurveyQuestions(survey.title, survey.questions);
                    setQuestions(generated);
                }
            } catch (err: any) {
                console.error("Failed to get survey questions:", err);
                setQuestionError(err.message || "Could not load survey questions. Please try again later.");
            } finally {
                setIsLoadingQuestions(false);
            }
        };

        fetchOrGenerateQuestions();
    }, [survey]);

    const isAnswered = (questionId: string) => {
        if (!questionId) return false;
        const answer = answers[questionId];
        if (Array.isArray(answer)) {
            return answer.length > 0;
        }
        return !!answer;
    };

    useEffect(() => {
        if (step === 'questions' && currentQuestion) {
            setTimer(0);
            setIsNextDisabled(true);

            const interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);

            const nextButtonTimeout = setTimeout(() => {
                if (isAnswered(currentQuestion.id)) {
                    setIsNextDisabled(false);
                }
            }, 4000);

            return () => {
                clearInterval(interval);
                clearTimeout(nextButtonTimeout);
            };
        }
    }, [step, currentQuestionIndex, currentQuestion]);

    useEffect(() => {
        if (step === 'questions' && timer >= 4 && currentQuestion && isAnswered(currentQuestion.id)) {
            setIsNextDisabled(false);
        }
    }, [answers, timer, step, currentQuestion]);

    const handleStartSurvey = () => {
        setStep('questions');
    };

    const handleAnswerChange = (questionId: string, value: string, isMulti: boolean) => {
        setAnswers(prev => {
            if (isMulti) {
                const currentAnswer = (prev[questionId] as string[] || []);
                const newAnswer = currentAnswer.includes(value)
                    ? currentAnswer.filter(item => item !== value)
                    : [...currentAnswer, value];
                return { ...prev, [questionId]: newAnswer };
            }
            return { ...prev, [questionId]: value };
        });
    };
    
    const goToNextQuestion = () => {
        if (isAnswered(currentQuestion.id)) {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            }
        }
    };

    const handleCompleteSurvey = () => {
        if (isAnswered(currentQuestion.id)) {
            setStep('complete');
        }
    };
    
    if (isLoadingQuestions) {
        return (
            <div className="flex flex-col items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-acid-primary"></div>
                <p className="mt-4 text-gray-400">Preparing your survey...</p>
            </div>
        );
    }

    if (questionError) {
        return (
            <div className="max-w-3xl mx-auto bg-acid-neutral p-4 sm:p-8 rounded-xl border border-acid-error/50 text-center">
                 <h2 className="text-xl font-bold text-acid-error">Oops! Something went wrong.</h2>
                <p className="text-gray-400 mt-2">{questionError}</p>
                 <button onClick={onBack} className="mt-6 bg-acid-primary text-acid-base-100 font-semibold py-2 px-6 rounded-lg">
                    Back to Surveys
                </button>
            </div>
        );
    }

    const renderQuestionInput = () => {
        switch (currentQuestion.questionType) {
            case QuestionType.MULTIPLE_CHOICE:
                const isMulti = currentQuestion.allowMultipleAnswers || false;
                const InputType = isMulti ? 'checkbox' : 'radio';
                
                return (
                    <div className="space-y-4 mb-8">
                        {currentQuestion.options.map((option, index) => (
                             <label key={index} className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${ (Array.isArray(answers[currentQuestion.id]) ? (answers[currentQuestion.id] as string[]).includes(option) : answers[currentQuestion.id] === option) ? 'border-acid-primary bg-acid-primary/10 ring-2 ring-acid-primary' : 'border-acid-neutral/60 bg-acid-neutral hover:border-gray-600'}`}>
                                <input 
                                    type={InputType}
                                    name={currentQuestion.id}
                                    value={option}
                                    checked={isMulti ? (answers[currentQuestion.id] as string[] || []).includes(option) : answers[currentQuestion.id] === option}
                                    onChange={() => handleAnswerChange(currentQuestion.id, option, isMulti)}
                                    className={`h-5 w-5 text-acid-primary focus:ring-acid-primary bg-acid-neutral border-acid-neutral/60 ${isMulti ? 'rounded' : 'rounded-full'}`}
                                />
                                <span className="ml-3 text-acid-content font-medium">{option}</span>
                            </label>
                        ))}
                    </div>
                );
            case QuestionType.TEXT:
                return (
                     <div className="mb-8">
                        <textarea
                            value={(answers[currentQuestion.id] as string) || ''}
                            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value, false)}
                            placeholder="Type your answer here..."
                            rows={5}
                            className="w-full p-3 bg-acid-base-100 border border-acid-neutral/60 rounded-lg focus:ring-2 focus:ring-acid-primary focus:border-transparent outline-none transition"
                        />
                    </div>
                );
            case QuestionType.RATING:
                 return (
                     <div className="flex flex-col items-center justify-center text-sm text-gray-400 my-8">
                        <div className="flex gap-1 sm:gap-2">
                            {[1,2,3,4,5].map(i => (
                                <button key={i} onClick={() => handleAnswerChange(currentQuestion.id, String(i), false)} className={`h-10 w-10 sm:h-12 sm:w-12 border rounded-full flex items-center justify-center text-lg font-bold transition ${answers[currentQuestion.id] === String(i) ? 'bg-acid-primary text-acid-base-100 border-acid-primary' : 'bg-acid-neutral hover:border-acid-primary text-acid-content border-acid-neutral/60'}`}>{i}</button>
                            ))}
                        </div>
                        <div className="flex justify-between w-full max-w-xs mt-2 px-2">
                            <span>{currentQuestion.options[0] || 'Lowest'}</span>
                            <span>{currentQuestion.options[1] || 'Highest'}</span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }


    if (step === 'instructions') {
        return (
            <div className="max-w-3xl mx-auto bg-acid-neutral p-4 sm:p-8 rounded-xl border border-acid-neutral/60">
                <h1 className="text-2xl font-bold text-acid-content mb-4">{survey.title}</h1>
                <div className="bg-acid-primary/10 p-4 sm:p-6 rounded-lg border border-acid-primary/20 mb-6">
                    <h2 className="font-semibold text-lg text-acid-primary mb-3">Important Instructions</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-3"><IconCheck className="text-acid-primary w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5}/><span>Please do not leave or refresh the page until you complete the survey</span></li>
                        <li className="flex items-start gap-3"><IconCheck className="text-acid-primary w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5}/><span>Take your time to read each question carefully</span></li>
                        <li className="flex items-start gap-3"><IconCheck className="text-acid-primary w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5}/><span>You must wait 4 seconds before proceeding to the next question</span></li>
                        <li className="flex items-start gap-3"><IconCheck className="text-acid-primary w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={2.5}/><span>Answer honestly and to the best of your knowledge</span></li>
                    </ul>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center bg-acid-base-100 p-4 rounded-lg mb-8 gap-4">
                    <div className="text-center flex-1">
                        <p className="text-sm text-gray-400">Reward Amount</p>
                        <p className="font-bold text-lg text-acid-content">Ksh {survey.reward.toFixed(2)}</p>
                    </div>
                    <div className="text-center flex-1">
                        <p className="text-sm text-gray-400">Estimated Time</p>
                        <p className="font-bold text-lg text-acid-content">{survey.estimatedTime} mins</p>
                    </div>
                    <div className="text-center flex-1">
                        <p className="text-sm text-gray-400">Questions</p>
                        <p className="font-bold text-lg text-acid-content">{questions.length}</p>
                    </div>
                </div>
                <button 
                    onClick={handleStartSurvey}
                    className="w-full bg-acid-primary text-acid-base-100 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                    Start Survey <IconChevronRight />
                </button>
            </div>
        );
    }
    
    if (step === 'questions' && currentQuestion) {
        return (
            <div className="max-w-3xl mx-auto">
                <div className="bg-acid-neutral p-4 sm:p-5 rounded-xl border border-acid-neutral/60 mb-6">
                    <div className="flex justify-between items-center text-sm font-medium text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                            <IconClock className="w-5 h-5" />
                            <span>{timer}s</span>
                        </div>
                        <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                        <span className="font-bold text-acid-primary">Ksh {survey.reward.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-acid-base-100 rounded-full h-1.5">
                        <div className="bg-acid-primary h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="bg-acid-neutral p-4 sm:p-8 rounded-xl border border-acid-neutral/60">
                    <h2 className="text-lg font-semibold text-acid-content mb-6">{currentQuestion.questionText}</h2>
                    
                    {renderQuestionInput()}
                    
                    {currentQuestionIndex < questions.length - 1 ? (
                        <button 
                            onClick={goToNextQuestion}
                            disabled={isNextDisabled || !isAnswered(currentQuestion.id)}
                            className="w-full bg-acid-primary text-acid-base-100 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
                        >
                            Next Question <IconChevronRight />
                        </button>
                    ) : (
                         <button 
                            onClick={handleCompleteSurvey}
                            disabled={isNextDisabled || !isAnswered(currentQuestion.id)}
                            className="w-full bg-acid-primary text-acid-base-100 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
                        >
                            Complete Survey
                        </button>
                    )}
                </div>
            </div>
        );
    }
    
    if (step === 'complete') {
        return (
             <div className="max-w-2xl mx-auto text-center bg-acid-neutral p-6 sm:p-12 rounded-xl border border-acid-neutral/60">
                <IconSuccessCircle fill="#00ff00" className="mx-auto mb-6" />
                <h1 className="text-2xl sm:text-3xl font-bold text-acid-content mb-2">Congratulations!</h1>
                <p className="text-lg text-gray-400 mb-8">You've successfully completed the survey and earned Ksh {survey.reward.toFixed(2)}</p>
                <button 
                    onClick={() => onComplete(survey.reward, survey.id)}
                    className="bg-acid-primary text-acid-base-100 font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition"
                >
                    Back to Dashboard
                </button>
            </div>
        )
    }

    return null;
};

export default TakeSurveyPage;
