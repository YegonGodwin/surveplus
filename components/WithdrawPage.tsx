
import React from 'react';
import type { User } from '@supabase/supabase-js';
import { IconPaypal, IconChevronLeft } from '../constants';

interface WithdrawPageProps {
    user: User | null;
    availableBalance: number;
    onBack: () => void;
    onNavigate: (view: string) => void;
}

const MINIMUM_WITHDRAWAL = 225;

const WithdrawPage: React.FC<WithdrawPageProps> = ({ user, availableBalance, onBack, onNavigate }) => {
    const paypalEmail = user?.user_metadata?.paypal_email || null;
    const canWithdraw = availableBalance >= MINIMUM_WITHDRAWAL;

    return (
        <div>
            <button onClick={onBack} className="flex items-center gap-2 text-gray-300 font-medium mb-6 hover:text-acid-content">
                <IconChevronLeft />
                Back to Settings
            </button>

            <div className="max-w-3xl mx-auto bg-acid-neutral p-6 md:p-8 rounded-xl border border-acid-neutral/60">
                <h1 className="text-2xl font-bold text-acid-content mb-8">Withdraw Funds</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-acid-base-100 p-6 rounded-lg border border-acid-neutral/60">
                        <p className="text-sm font-medium text-gray-400">Current Balance</p>
                        <p className="text-3xl font-bold text-acid-content mt-1">Ksh {availableBalance.toFixed(2)}</p>
                    </div>
                    <div className="bg-acid-primary/10 p-6 rounded-lg border border-acid-primary/50">
                        <p className="text-sm font-medium text-acid-primary">Withdrawal Goal</p>
                        <p className="text-3xl font-bold text-acid-content mt-1">Ksh {MINIMUM_WITHDRAWAL.toFixed(2)}</p>
                    </div>
                </div>

                {paypalEmail ? (
                    <div className="p-4 bg-acid-primary/10 border border-acid-primary/20 rounded-lg">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                                <IconPaypal className="w-6 h-6 text-acid-primary" />
                            </div>
                            <div>
                                <p className="font-semibold text-acid-content">PayPal Payment</p>
                                <p className="text-sm text-gray-400">Funds will be sent to {paypalEmail}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-4 bg-acid-warning/10 border border-acid-warning/30 rounded-lg text-center">
                        <p className="text-acid-warning font-medium">Please add a PayPal account in settings to withdraw funds.</p>
                    </div>
                )}

                <div className="mt-8 pt-8 border-t border-acid-neutral/60 flex flex-col-reverse sm:flex-row justify-end items-center gap-4">
                    <button 
                        onClick={() => onNavigate('surveys')}
                        className="font-semibold py-2.5 px-6 rounded-lg border border-acid-primary text-acid-primary hover:bg-acid-primary/10 transition w-full sm:w-auto"
                    >
                        Take more surveys to reach withdrawal
                    </button>
                    <button 
                        disabled={!canWithdraw || !paypalEmail}
                        className="font-semibold py-2.5 px-6 rounded-lg bg-acid-primary text-acid-base-100 hover:opacity-90 transition disabled:bg-gray-600 disabled:cursor-not-allowed w-full sm:w-auto"
                    >
                        Withdraw Funds
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WithdrawPage;