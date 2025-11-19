
import React, { useState, useEffect, useRef } from 'react';
import { IconLogo, IconDashboard, IconSurveys, IconReferrals, IconSettings, IconHelp, IconBell, IconMoney, IconCheckCircle, IconBarChart, IconChevronRight, IconWarning, SURVEYS_DATA, IconSignOut, IconMenu, IconClose, IconFire, IconAward, IconTrendingUp, ACHIEVEMENTS_DATA } from '../constants';
import SurveysPage from './SurveysPage';
import TakeSurveyPage from './TakeSurveyPage';
import SubscriptionPage from './SubscriptionPage';
import PaymentPage from './PaymentPage';
import SettingsPage from './SettingsPage';
import WithdrawPage from './WithdrawPage';
import ReferralsPage from './ReferralsPage';
import HelpPage from './HelpPage';
import AchievementsPage from './AchievementsPage';
import { SurveyType } from '../types';
import type { SurveyInfo, RecentEarning, SubscriptionPlan, DailyCompletion, StreakInfo } from '../types';

const Sidebar: React.FC<{
    onSignOut: () => void;
    activeView: string;
    onNavigate: (view: string) => void;
    balance: number;
    isMobile?: boolean;
}> = ({ onSignOut, activeView, onNavigate, balance, isMobile }) => {
    const navItems = [
        { id: 'dashboard', icon: <IconDashboard />, name: 'Dashboard' },
        { id: 'surveys', icon: <IconSurveys />, name: 'Surveys' },
        { id: 'achievements', icon: <IconAward />, name: 'Achievements' },
        { id: 'referrals', icon: <IconReferrals />, name: 'Referrals' },
        { id: 'settings', icon: <IconSettings />, name: 'Settings' },
        { id: 'help', icon: <IconHelp />, name: 'Help' },
    ];

    return (
        <div className="bg-acid-neutral flex flex-col h-full p-4 text-acid-content">
            <div className="flex items-center gap-3 px-2 py-4">
                <IconLogo />
                <span className="text-xl font-bold">SurveyPlus</span>
            </div>
            <nav className="flex-grow mt-6">
                <ul className="space-y-1">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button onClick={() => onNavigate(item.id)} className={`w-full flex items-center gap-3 px-3 py-2 rounded-md font-medium text-base transition-colors ${activeView === item.id ? 'bg-acid-primary/20 text-acid-primary' : 'text-gray-300 hover:bg-white/10'}`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 rounded-xl bg-gradient-to-br from-acid-primary to-acid-accent text-acid-base-100 text-center shadow-lg shadow-acid-primary/20">
                 <p className="font-semibold">Available Balance</p>
                 <p className="text-4xl font-bold my-2">Ksh {balance.toFixed(2)}</p>
                 <button onClick={() => onNavigate('settings')} className="w-full bg-white/20 font-semibold py-2 rounded-lg mt-2 hover:bg-white/30 transition">Withdraw</button>
            </div>
             <div className="pt-4 mt-4 border-t border-acid-base-100">
                <button onClick={onSignOut} className="w-full flex items-center gap-3 px-3 py-2 rounded-md font-medium text-base text-gray-300 hover:bg-white/10">
                    <IconSignOut />
                    <span>Sign Out</span>
                </button>
             </div>
        </div>
    );
};

const Header: React.FC<{ user: any | null; onSignOut: () => void; onNavigate: (view: string) => void; onMenuClick: () => void; }> = ({ user, onSignOut, onNavigate, onMenuClick }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownContainerRef = useRef<HTMLDivElement>(null);

    const handleSignOut = () => {
        setIsDropdownOpen(false);
        onSignOut();
    };

    const handleNavigate = (view: string) => {
        setIsDropdownOpen(false);
        onNavigate(view);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const userInitial = user?.fullName?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U';
    const userName = user?.fullName || user?.email?.split('@')[0] || 'User';

    return (
        <header className="flex items-center justify-between h-16 bg-acid-neutral border-b border-acid-base-100 px-4 sm:px-8 flex-shrink-0">
            <button onClick={onMenuClick} className="lg:hidden text-gray-300 hover:text-acid-content">
                <IconMenu className="w-6 h-6" />
            </button>
            <div className="flex-1 flex justify-end items-center gap-4">
                <button className="relative text-gray-400 hover:text-acid-content">
                    <IconBell />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-acid-error ring-2 ring-acid-neutral"></span>
                </button>
                <div className="relative" ref={dropdownContainerRef}>
                    <button
                        onClick={() => setIsDropdownOpen(prev => !prev)}
                        className={`flex items-center gap-2 p-1 rounded-lg transition-colors duration-200 ${isDropdownOpen ? 'bg-acid-base-100' : 'bg-transparent hover:bg-acid-base-100'}`}
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-acid-primary to-acid-accent flex items-center justify-center text-acid-base-100 font-bold text-lg flex-shrink-0">
                            {userInitial}
                        </div>
                        <span className="hidden sm:inline font-semibold text-acid-content">{userName}</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-acid-neutral rounded-xl shadow-lg border border-acid-base-100 py-2 z-50">
                            <div className="px-4 py-2 mb-2">
                                <p className="font-bold text-acid-content truncate">{user?.fullName}</p>
                                <p className="text-sm text-gray-400 truncate">{user?.email}</p>
                            </div>
                            <hr className="border-acid-base-100"/>
                            <div className="py-1">
                                <button onClick={() => handleNavigate('settings')} className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-acid-content hover:bg-acid-base-100 transition-colors">
                                    <IconSettings className="w-5 h-5 text-gray-400" />
                                    Settings
                                </button>
                                <button onClick={handleSignOut} className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-acid-error hover:bg-acid-error/10 transition-colors">
                                    <IconSignOut className="w-5 h-5" />
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode, footer?: React.ReactNode }> = ({ title, value, icon, footer }) => (
    <div className="bg-acid-neutral p-5 rounded-xl border border-acid-neutral/60 flex-1 flex flex-col shadow-sm">
        <div className="flex-grow">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-medium text-gray-400">{title}</h3>
                    <p className="text-3xl font-bold text-acid-content mt-2">{value}</p>
                </div>
                {icon}
            </div>
        </div>
        <div className="mt-4 min-h-[36px] flex flex-col justify-end">
            {footer}
        </div>
    </div>
);

const StreakTracker: React.FC<{ streakCount: number }> = ({ streakCount }) => {
    return (
        <div className="bg-gradient-to-r from-acid-secondary to-acid-success p-6 rounded-2xl text-acid-base-100 shadow-lg shadow-acid-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <IconFire className="w-12 h-12" />
                <div>
                    <h2 className="text-2xl font-bold">Daily Streak</h2>
                    <p className="text-gray-800">Complete a survey every day to keep your streak alive!</p>
                </div>
            </div>
            <div className="text-center">
                <p className="text-5xl font-extrabold">{streakCount}</p>
                <p className="font-semibold">{streakCount === 1 ? 'Day' : 'Days'}</p>
            </div>
        </div>
    );
};

const DashboardView: React.FC<{
    user: any | null;
    onNavigate: (view: string) => void;
    totalEarnings: number;
    surveysCompleted: number;
    availableBalance: number;
    recentEarnings: RecentEarning[];
    streak: StreakInfo;
    achievements: string[];
}> = ({ user, onNavigate, totalEarnings, surveysCompleted, availableBalance, recentEarnings, streak, achievements }) => {
    const paypalEmail = user?.paypal_email || null;
    const recentAchievements = ACHIEVEMENTS_DATA.filter(ach => achievements.includes(ach.id)).slice(0, 3);

    return (
    <>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-acid-content">Dashboard</h1>
                <p className="text-gray-400">Welcome back, {user?.fullName?.split(' ')[0] || 'User'} 👋</p>
            </div>
            <button onClick={() => onNavigate('surveys')} className="bg-acid-primary text-acid-base-100 font-semibold py-2.5 px-5 rounded-lg shadow-md shadow-acid-primary/30 hover:opacity-90 transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
               <IconSurveys className="fill-transparent hidden sm:inline" /> <span>Take Surveys & Earn</span>
            </button>
        </div>

        {!paypalEmail && (
            <div className="p-4 mb-6 bg-acid-warning/10 border border-acid-warning/30 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <IconWarning className="text-acid-warning h-5 w-5 flex-shrink-0" />
                <p className="text-sm text-acid-warning flex-grow">
                    <span className="font-semibold">Add a withdrawal method to receive payments.</span>
                </p>
                <button onClick={() => onNavigate('settings')} className="font-semibold text-sm text-acid-warning hover:underline flex-shrink-0 self-end sm:self-center">Add Now &rarr;</button>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <StatCard
                title="Total Earnings"
                value={`Ksh ${totalEarnings.toFixed(2)}`}
                icon={<div className="p-3 bg-acid-primary/10 rounded-full"><IconMoney className="text-acid-primary"/></div>}
                footer={totalEarnings > 0 ? (
                    <div className="flex items-center gap-1 text-sm text-acid-success font-medium">
                        <IconTrendingUp className="w-4 h-4" />
                        <span>Earnings on the rise</span>
                    </div>
                ) : null}
            />
            <StatCard
                title="Surveys Completed"
                value={String(surveysCompleted)}
                icon={<div className="p-3 bg-acid-accent/10 rounded-full"><IconCheckCircle className="text-acid-accent"/></div>}
                footer={<button onClick={e => onNavigate('surveys')} className="text-sm font-medium text-acid-primary hover:underline inline-block">Lifetime completions &rarr;</button>}
            />
            <StatCard
                title="Referral Earnings"
                value="Ksh 0.00"
                icon={<div className="p-3 bg-acid-success/10 rounded-full"><IconReferrals className="text-acid-success"/></div>}
                footer={<button onClick={() => onNavigate('referrals')} className="text-sm font-medium text-acid-primary hover:underline inline-block">View referral program &rarr;</button>}
            />
            <StatCard
                title="Available Balance"
                value={`Ksh ${availableBalance.toFixed(2)}`}
                icon={<div className="p-3 bg-acid-primary/10 rounded-full"><IconMoney className="text-acid-primary"/></div>}
                footer={<button onClick={() => onNavigate('settings')} className="w-full bg-acid-primary text-acid-base-100 font-semibold py-2 rounded-lg hover:opacity-90 transition">Withdraw</button>}
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                <StreakTracker streakCount={streak.count} />
                <div className="bg-acid-neutral p-4 sm:p-6 rounded-xl border border-acid-neutral/60 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-acid-content">Recent Earnings</h2>
                    {recentEarnings.length === 0 ? (
                        <div className="text-center py-16">
                            <IconMoney className="text-5xl text-gray-600 mx-auto" />
                            <p className="mt-4 text-gray-400">No earnings yet</p>
                            <p className="text-sm text-gray-500">Complete a survey to see your earnings here.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {recentEarnings.map(earning => (
                                <div key={earning.id} className="flex justify-between items-center p-3 bg-acid-base-100 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-acid-success/10 rounded-full"><IconCheckCircle className="text-acid-success" /></div>
                                        <div>
                                            <p className="font-medium text-acid-content">{earning.description}</p>
                                            <p className="text-sm text-gray-400">{earning.date}</p>
                                        </div>
                                    </div>
                                    <p className="font-bold text-acid-success">+Ksh {earning.amount.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-acid-neutral p-4 sm:p-6 rounded-xl border border-acid-neutral/60 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-acid-content">Recent Achievements</h2>
                {recentAchievements.length > 0 ? (
                    <div className="space-y-4">
                        {recentAchievements.map(ach => (
                            <div key={ach.id} className="flex items-center gap-4 p-3 bg-acid-accent/10 rounded-lg">
                                <div className="text-acid-accent flex-shrink-0">{ach.icon}</div>
                                <div>
                                    <p className="font-bold text-acid-content">{ach.title}</p>
                                    <p className="text-sm text-gray-400">{ach.description}</p>
                                </div>
                            </div>
                        ))}
                         <button onClick={() => onNavigate('achievements')} className="w-full mt-4 font-semibold text-sm text-acid-primary hover:underline">View All Achievements &rarr;</button>
                    </div>
                ) : (
                     <div className="text-center py-16">
                        <IconAward className="text-5xl text-gray-600 mx-auto" />
                        <p className="mt-4 text-gray-400">No achievements yet</p>
                        <p className="text-sm text-gray-500">Complete surveys to earn badges!</p>
                    </div>
                )}
            </div>
        </div>
    </>
);
}

const MobileSidebar: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                onClick={onClose}
                aria-hidden="true"
            ></div>
            <div
                className="fixed top-0 left-0 bottom-0 w-64 bg-acid-neutral z-50 transition-transform duration-300 ease-in-out lg:hidden"
                style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
                role="dialog"
                aria-modal="true"
            >
                {children}
            </div>
        </>
    );
};


const DashboardPage: React.FC<{ user: any | null; onSignOut: () => void; }> = ({ user, onSignOut }) => {
    const [activeView, setActiveView] = useState('dashboard');
    const [currentSurvey, setCurrentSurvey] = useState<SurveyInfo | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // App-wide state, synced with backend
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [surveysCompleted, setSurveysCompleted] = useState(0);
    const [availableBalance, setAvailableBalance] = useState(0);
    const [recentEarnings, setRecentEarnings] = useState<RecentEarning[]>([]);
    const [completedSurveyIds, setCompletedSurveyIds] = useState<number[]>([]);
    const [dailyCompletion, setDailyCompletion] = useState<DailyCompletion>({ date: '', count: 0 });
    const [achievements, setAchievements] = useState<string[]>([]);
    const [streak, setStreak] = useState<StreakInfo>({ count: 0, lastCompletedDate: '' });

    useEffect(() => {
        if (user) {
            // Fetch user data from your backend API
            const fetchUserData = async () => {
                try {
                    const response = await import('../services/api').then(mod => mod.getUserStats());
                    const stats = response.data;

                    setTotalEarnings(stats.totalEarnings);
                    setSurveysCompleted(stats.surveysCompleted);
                    setAvailableBalance(stats.availableBalance);
                    setRecentEarnings(stats.recentEarnings);
                    setCompletedSurveyIds(stats.completedSurveyIds);
                    setDailyCompletion(stats.dailyCompletion);
                    setAchievements(stats.achievements);
                    setStreak(stats.streak);
                } catch (error) {
                    console.error('Error fetching user stats:', error);
                    // Fallback to default values or show error message
                    setTotalEarnings(0);
                    setSurveysCompleted(0);
                    setAvailableBalance(0);
                    setRecentEarnings([]);
                    setCompletedSurveyIds([]);
                    setDailyCompletion({ date: '', count: 0 });
                    setAchievements([]);
                    setStreak({ count: 0, lastCompletedDate: '' });
                }
            };

            fetchUserData();
        }
    }, [user]);

    const handleTakeSurvey = (survey: SurveyInfo) => {
        setCurrentSurvey(survey);
        setActiveView('taking-survey');
    };

    const handleSurveyComplete = async (reward: number, surveyId: number) => {
        // Send the update to your backend API
        try {
            const response = await import('../services/api').then(mod => mod.updateSurveyStats(surveyId, reward));
            const updatedStats = response.data.user;

            // Update local state with new stats
            setTotalEarnings(updatedStats.totalEarnings);
            setSurveysCompleted(updatedStats.surveysCompleted);
            setAvailableBalance(updatedStats.availableBalance);
            setRecentEarnings(updatedStats.recentEarnings);
            setCompletedSurveyIds(updatedStats.completedSurveyIds);
            setDailyCompletion(updatedStats.dailyCompletion);
            setAchievements(updatedStats.achievements);
            setStreak(updatedStats.streak);

            // Navigate back to dashboard
            setActiveView('dashboard');
            setCurrentSurvey(null);
        } catch (error) {
            console.error('Error updating survey stats:', error);
            // Show error message to user
            alert('There was an error completing the survey. Please try again.');
        }
    };

    const handleBackFromSurvey = () => {
        setActiveView('surveys');
        setCurrentSurvey(null);
    }

    const handleNavigate = (view: string) => {
        if (['dashboard', 'surveys', 'referrals', 'settings', 'help', 'subscriptions', 'withdraw', 'achievements'].includes(view)) {
            setActiveView(view);
            setIsSidebarOpen(false);
        }
    }

    const handleSelectPlan = (plan: SubscriptionPlan) => {
        setSelectedPlan(plan);
        setActiveView('payment');
    };

    const handleSignOutAndClose = () => {
        onSignOut();
        setIsSidebarOpen(false);
    }

    const renderContent = () => {
        switch(activeView) {
            case 'dashboard':
                return <DashboardView
                            user={user}
                            onNavigate={handleNavigate}
                            totalEarnings={totalEarnings}
                            surveysCompleted={surveysCompleted}
                            availableBalance={availableBalance}
                            recentEarnings={recentEarnings}
                            streak={streak}
                            achievements={achievements}
                        />;
            case 'surveys':
                return <SurveysPage
                            onTakeSurvey={handleTakeSurvey}
                            completedSurveyIds={completedSurveyIds}
                            onNavigateToSubscriptions={() => handleNavigate('subscriptions')}
                            dailySurveyCompletions={dailyCompletion.count}
                        />;
            case 'taking-survey':
                if (currentSurvey) {
                    return <TakeSurveyPage survey={currentSurvey} onComplete={handleSurveyComplete} onBack={handleBackFromSurvey} />;
                }
                setActiveView('surveys');
                return null;
            case 'subscriptions':
                return <SubscriptionPage onSelectPlan={handleSelectPlan} />;
            case 'payment':
                if (selectedPlan) {
                    return <PaymentPage plan={selectedPlan} onBack={() => setActiveView('subscriptions')} user={user} />;
                }
                return <SubscriptionPage onSelectPlan={handleSelectPlan} />;
            case 'settings':
                return <SettingsPage user={user} availableBalance={availableBalance} onNavigate={handleNavigate} />;
            case 'withdraw':
                return <WithdrawPage user={user} availableBalance={availableBalance} onBack={() => handleNavigate('settings')} onNavigate={handleNavigate} />;
            case 'referrals':
                return <ReferralsPage />;
            case 'help':
                return <HelpPage />;
            case 'achievements':
                return <AchievementsPage unlockedAchievementIds={achievements} />;
            default:
                return <DashboardView
                            user={user}
                            onNavigate={handleNavigate}
                            totalEarnings={totalEarnings}
                            surveysCompleted={surveysCompleted}
                            availableBalance={availableBalance}
                            recentEarnings={recentEarnings}
                            streak={streak}
                            achievements={achievements}
                        />;
       }
    }

    return (
        <div className="flex h-screen bg-acid-base-100 overflow-hidden text-acid-content">
            <div className="hidden lg:block w-64 flex-shrink-0 border-r border-acid-neutral">
                <Sidebar onSignOut={onSignOut} activeView={activeView} onNavigate={handleNavigate} balance={availableBalance} />
            </div>

            <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
                <Sidebar
                    onSignOut={handleSignOutAndClose}
                    activeView={activeView}
                    onNavigate={handleNavigate}
                    balance={availableBalance}
                    isMobile={true}
                />
            </MobileSidebar>

            <div className="flex-1 flex flex-col min-w-0">
                <Header
                    user={user}
                    onSignOut={onSignOut}
                    onNavigate={handleNavigate}
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;