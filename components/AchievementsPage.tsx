import React from 'react';
import { ACHIEVEMENTS_DATA, IconAward } from '../constants';
import type { Achievement } from '../types';

interface AchievementsPageProps {
    unlockedAchievementIds: string[];
}

const AchievementCard: React.FC<{ achievement: Achievement, isUnlocked: boolean }> = ({ achievement, isUnlocked }) => {
    const cardClasses = isUnlocked
        ? 'bg-acid-accent/10 border-acid-accent/50'
        : 'bg-acid-neutral border-acid-neutral/60';
    
    const iconContainerClasses = isUnlocked
        ? 'bg-acid-accent text-acid-base-100'
        : 'bg-acid-base-100 text-gray-500';
    
    const textClasses = isUnlocked ? 'text-acid-accent' : 'text-gray-500';
    const titleClasses = isUnlocked ? 'text-acid-content' : 'text-gray-400';

    return (
        <div className={`p-6 rounded-2xl border ${cardClasses} flex flex-col items-center text-center transition-all duration-300 ${isUnlocked ? 'shadow-md shadow-acid-accent/10' : ''}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${iconContainerClasses} transition-colors`}>
                {achievement.icon}
            </div>
            <h3 className={`font-bold text-lg ${titleClasses}`}>{achievement.title}</h3>
            <p className="text-sm text-gray-400 flex-grow mt-1">{achievement.description}</p>
            {isUnlocked && (
                <div className="mt-4 font-bold text-sm py-1 px-3 bg-acid-accent/20 rounded-full text-acid-accent">
                    UNLOCKED
                </div>
            )}
        </div>
    );
};

const AchievementsPage: React.FC<AchievementsPageProps> = ({ unlockedAchievementIds }) => {
    const unlockedCount = unlockedAchievementIds.length;
    const totalCount = ACHIEVEMENTS_DATA.length;

    return (
        <div>
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-acid-content tracking-tight">Your Achievements</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">
                    Track your progress and unlock badges for your hard work!
                </p>
            </div>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto bg-acid-neutral p-5 rounded-2xl border border-acid-neutral/60 mb-12 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-semibold text-gray-300">Completion Progress</h2>
                    <p className="font-bold text-acid-primary">{unlockedCount} / {totalCount}</p>
                </div>
                <div className="w-full bg-acid-base-100 rounded-full h-2.5">
                    <div 
                        className="bg-acid-primary h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ACHIEVEMENTS_DATA.map(achievement => (
                    <AchievementCard 
                        key={achievement.id}
                        achievement={achievement}
                        isUnlocked={unlockedAchievementIds.includes(achievement.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AchievementsPage;