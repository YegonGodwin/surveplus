
import React, { useState } from 'react';
import { IconClipboard, IconCrown, IconClock, SURVEYS_DATA } from '../constants';
import { type SurveyInfo, SurveyType } from '../types';
import SubscriptionModal from './SubscriptionModal';
import DailyLimitModal from './DailyLimitModal';

const SurveyCard: React.FC<{ 
    survey: SurveyInfo; 
    onSurveyClick: (survey: SurveyInfo) => void;
}> = ({ survey, onSurveyClick }) => {
    
    const cardStyles = {
        [SurveyType.SPECIAL]: 'bg-acid-success/10 border-acid-success/30',
        [SurveyType.PAID]: 'bg-acid-secondary/10 border-acid-secondary/30',
        [SurveyType.FREE]: 'bg-acid-neutral border-acid-neutral/60',
    };

    const iconBgStyles = {
        [SurveyType.SPECIAL]: 'bg-acid-success/20 text-acid-success',
        [SurveyType.PAID]: 'bg-acid-secondary/20 text-acid-secondary',
        [SurveyType.FREE]: 'bg-gray-700 text-gray-300',
    }

    const buttonStyles = {
        [SurveyType.SPECIAL]: 'bg-acid-success hover:opacity-90 text-acid-base-100',
        [SurveyType.PAID]: 'bg-acid-primary hover:opacity-90 text-acid-base-100',
        [SurveyType.FREE]: 'bg-acid-base-100 hover:bg-opacity-90 text-acid-content border border-acid-neutral',
    }

    const crownStyles = {
        [SurveyType.SPECIAL]: 'text-acid-success',
        [SurveyType.PAID]: 'text-acid-secondary',
        [SurveyType.FREE]: 'text-gray-600',
    }

    return (
        <div className={`p-5 rounded-2xl border ${cardStyles[survey.type]} flex flex-col shadow-sm hover:shadow-lg hover:shadow-acid-primary/10 hover:-translate-y-1 transition-all duration-300`}>
            {survey.tag && (
                <div className="flex items-center gap-2 text-xs font-medium text-acid-success mb-4">
                    <IconClock className="text-acid-success" />
                    <span>{survey.tag}</span>
                </div>
            )}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgStyles[survey.type]}`}>
                        <IconClipboard />
                    </div>
                    <div>
                        <h3 className="font-bold text-acid-content">{survey.title}</h3>
                        <p className="text-sm text-gray-400">{survey.questions} questions</p>
                    </div>
                </div>
                <IconCrown className={`flex-shrink-0 ${crownStyles[survey.type]}`} />
            </div>
            <div className="flex-grow flex items-center justify-between">
                <p className="text-lg font-bold text-acid-content">
                    Ksh {(survey.reward).toFixed(2)}
                </p>
                <button 
                    onClick={() => onSurveyClick(survey)} 
                    className={`font-semibold py-2 px-5 rounded-lg transition-colors shadow-sm hover:shadow-md ${buttonStyles[survey.type]}`}>
                    Take Survey
                </button>
            </div>
            <div className="mt-4 pt-4 border-t border-dashed border-acid-neutral text-sm text-gray-500">
                Estimated time: <span className="font-medium text-gray-300">{survey.estimatedTime} mins</span>
            </div>
        </div>
    );
};

const SurveysPage: React.FC<{ 
    onTakeSurvey: (survey: SurveyInfo) => void; 
    completedSurveyIds: number[];
    onNavigateToSubscriptions: () => void;
    dailySurveyCompletions: number;
}> = ({ onTakeSurvey, completedSurveyIds, onNavigateToSubscriptions, dailySurveyCompletions }) => {
    const [isSubModalOpen, setIsSubModalOpen] = useState(false);
    const [selectedPaidSurvey, setSelectedPaidSurvey] = useState<SurveyInfo | null>(null);
    const [isLimitModalOpen, setLimitModalOpen] = useState(false);

    const availableSurveys = SURVEYS_DATA.filter(survey => !completedSurveyIds.includes(survey.id));

    const handleSurveyClick = (survey: SurveyInfo) => {
        // Daily limit of 2 only applies to FREE surveys.
        if (survey.type === SurveyType.FREE && dailySurveyCompletions >= 2) {
            setLimitModalOpen(true);
            return;
        }

        if (survey.type === SurveyType.PAID) {
            setSelectedPaidSurvey(survey);
            setIsSubModalOpen(true);
        } else { // Handle FREE and SPECIAL surveys
            onTakeSurvey(survey);
        }
    }

    const handleViewPlans = () => {
        setIsSubModalOpen(false);
        onNavigateToSubscriptions();
    }
    
    const handleUpgradeFromLimit = () => {
        setLimitModalOpen(false);
        onNavigateToSubscriptions();
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-acid-content">Available Surveys</h1>
                    <p className="text-gray-400">Complete surveys and earn rewards</p>
                </div>
                <div className="hidden sm:flex items-center gap-6 text-sm text-gray-300 font-medium">
                    <div className="flex items-center gap-2">
                        <IconCrown className="text-acid-secondary"/>
                        <span>Paid Survey</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconCrown className="text-gray-600"/>
                        <span>Free Survey</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {availableSurveys.map(survey => (
                    <SurveyCard 
                        key={survey.id} 
                        survey={survey} 
                        onSurveyClick={handleSurveyClick}
                    />
                ))}
            </div>

            {selectedPaidSurvey && (
                <SubscriptionModal 
                    isOpen={isSubModalOpen}
                    onClose={() => {setIsSubModalOpen(false); setSelectedPaidSurvey(null);}}
                    surveyReward={selectedPaidSurvey.reward}
                    onViewPlans={handleViewPlans}
                />
            )}

            <DailyLimitModal
                isOpen={isLimitModalOpen}
                onClose={() => setLimitModalOpen(false)}
                onUpgrade={handleUpgradeFromLimit}
            />
        </div>
    );
};

export default SurveysPage;
