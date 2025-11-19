
import React, { useState } from 'react';
import {
    IconCopy,
    IconCheck,
    IconGift,
    IconShare,
    IconTwitter,
    IconFacebook,
    IconWhatsapp,
    IconUser
} from '../constants';

const ReferralStatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; }> = ({ icon, value, label }) => (
    <div className="bg-acid-neutral p-6 rounded-xl border border-acid-neutral/60 flex items-center gap-5 shadow-sm">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-acid-primary/10 text-acid-primary rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-2xl sm:text-3xl font-bold text-acid-content">{value}</p>
            <p className="text-sm font-medium text-gray-400">{label}</p>
        </div>
    </div>
);


const HowItWorksStep: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-acid-primary/10 text-acid-primary rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-acid-content mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const ReferralsPage: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const referralLink = "https://surveyplus.app/ref/godwin123"; // This would be dynamic in a real app

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div>
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-acid-content tracking-tight">Invite Friends, Earn Big!</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">
                    Share the love and get <span className="font-bold text-acid-primary">Ksh 1</span> for every survey your friends complete. It's a win-win!
                </p>
            </div>

            {/* Referral Link Card */}
            <div className="max-w-3xl mx-auto bg-acid-neutral p-6 sm:p-8 rounded-2xl shadow-lg shadow-acid-primary/10 border border-acid-neutral/60 mb-12">
                <h2 className="text-xl font-semibold text-center mb-1">Your Unique Referral Link</h2>
                <p className="text-center text-gray-400 mb-6">Share this link with your friends to start earning.</p>

                <div className="flex flex-col sm:flex-row items-stretch gap-2">
                    <input
                        type="text"
                        readOnly
                        value={referralLink}
                        className="w-full bg-acid-base-100 border border-acid-neutral/60 rounded-lg p-3 font-mono text-gray-300 text-sm sm:text-base"
                    />
                    <button
                        onClick={handleCopy}
                        className={`flex-shrink-0 flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-md transition-all duration-300 ${
                            copied ? 'bg-acid-success/20 text-acid-success' : 'bg-acid-primary text-acid-base-100 hover:opacity-90'
                        }`}
                    >
                        {copied ? <IconCheck className="w-5 h-5" /> : <IconCopy className="w-5 h-5" />}
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                
                <div className="flex items-center justify-center gap-4 mt-6">
                    <p className="text-sm font-medium text-gray-300">Share via:</p>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition"><IconTwitter className="w-5 h-5"/></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"><IconFacebook className="w-5 h-5"/></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"><IconWhatsapp className="w-5 h-5"/></button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
                <ReferralStatCard
                    icon={<IconUser className="w-6 h-6"/>}
                    value="0"
                    label="Friends Joined"
                />
                <ReferralStatCard
                    icon={<IconGift className="w-6 h-6"/>}
                    value="Ksh 0.00"
                    label="Total Referral Earnings"
                />
            </div>

            {/* How It Works Section */}
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-acid-content mb-4">How It Works</h2>
                <p className="text-lg text-gray-400 mb-12">It's as easy as one, two, three.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <HowItWorksStep
                        icon={<IconShare className="w-8 h-8"/>}
                        title="1. Share Your Link"
                        description="Copy your unique link and share it with friends via social media, email, or text."
                    />
                    <HowItWorksStep
                        icon={<IconUser className="w-8 h-8"/>}
                        title="2. Friend Signs Up"
                        description="Your friend signs up for SurveyPlus using your referral link."
                    />
                    <HowItWorksStep
                        icon={<IconGift className="w-8 h-8"/>}
                        title="3. You Both Earn"
                        description="You get a Ksh 1 bonus in your account once they complete their first survey."
                    />
                </div>
            </div>
        </div>
    );
};

export default ReferralsPage;
