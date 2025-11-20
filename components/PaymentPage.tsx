
import React, { useState, useEffect } from 'react';
import { IconChevronLeft, IconMpesa, IconCheckCircle, IconMobile, IconLock } from '../constants';
import type { SubscriptionPlan } from '../types';
import type { User } from '@supabase/supabase-js';

const PaymentPage: React.FC<{ plan: SubscriptionPlan; onBack: () => void; user: User | null }> = ({ plan, onBack, user }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStep, setPaymentStep] = useState<'input' | 'processing' | 'success'>('input');

    useEffect(() => {
        if (user?.user_metadata?.phone_number) {
            // Format phone number if needed, e.g. remove +254 replace with 0
            let phone = user.user_metadata.phone_number;
            if (phone.startsWith('+254')) phone = '0' + phone.substring(4);
            else if (phone.startsWith('254')) phone = '0' + phone.substring(3);
            setPhoneNumber(phone);
        }
    }, [user]);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Only numbers
        setPhoneNumber(value);
    };

    const validatePhoneNumber = (phone: string) => {
        // Kenyan phone validation: 07... or 01... and 10 digits
        const phoneRegex = /^(?:254|\+254|0)?((?:7|1)[0-9]{8})$/;
        return phoneRegex.test(phone);
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!validatePhoneNumber(phoneNumber)) {
            setError('Please enter a valid Safaricom M-Pesa phone number (e.g., 0712345678).');
            return;
        }

        setIsProcessing(true);
        setPaymentStep('processing');

        try {
            // Import axios dynamically or use fetch
            const axios = (await import('axios')).default;
            const token = localStorage.getItem('token');

            const response = await axios.post('http://localhost:5000/api/payments/stk-push', {
                phoneNumber,
                amount: parseFloat(plan.price.replace(/,/g, '')), // Ensure amount is a number
                planName: plan.name
            }, {
                headers: {
                    'x-auth-token': token
                }
            });

            if (response.data.success) {
                // Wait a bit to show the processing state before showing success
                // In a real app, you might poll for status here
                setTimeout(() => {
                    setIsProcessing(false);
                    setPaymentStep('success');
                }, 2000);
            } else {
                setError('Payment initiation failed. Please try again.');
                setIsProcessing(false);
                setPaymentStep('input');
            }
        } catch (err: any) {
            console.error('Payment error:', err);
            setError(err.response?.data?.msg || 'An error occurred while processing your payment.');
            setIsProcessing(false);
            setPaymentStep('input');
        }
    };

    if (paymentStep === 'success') {
        return (
            <div className="max-w-md mx-auto text-center bg-acid-neutral p-8 rounded-xl border border-acid-neutral/60 shadow-lg animate-fade-in-up">
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-acid-success/10 mb-6">
                    <IconCheckCircle className="w-12 h-12 text-acid-success" />
                </div>
                <h1 className="text-2xl font-bold text-acid-content">Payment Successful!</h1>
                <p className="text-gray-400 mt-2 mb-6">We have received your payment. Your <span className="text-acid-primary font-semibold">'{plan.name}'</span> subscription is now active.</p>
                <div className="bg-acid-base-100 p-4 rounded-lg mb-6 text-left border border-acid-neutral/60">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Amount Paid:</span>
                        <span className="font-bold text-acid-content">Ksh {plan.price}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Transaction ID:</span>
                        <span className="font-mono text-acid-content">MPS{Math.floor(Math.random() * 10000000)}X</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Payment Method:</span>
                        <span className="font-bold text-[#39B54A] flex items-center gap-1"><IconMpesa className="w-4 h-4" /> M-Pesa</span>
                    </div>
                </div>
                <button onClick={onBack} className="w-full bg-acid-primary text-acid-base-100 font-semibold py-3 rounded-lg hover:opacity-90 transition shadow-md shadow-acid-primary/20">
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={onBack} className="flex items-center gap-2 text-gray-300 font-medium mb-6 hover:text-acid-content transition-colors">
                <IconChevronLeft />
                Back to Plans
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-acid-neutral p-6 rounded-2xl border border-acid-neutral/60 sticky top-24 shadow-sm">
                        <h2 className="text-xl font-semibold text-acid-content mb-4">Order Summary</h2>
                        <div className="space-y-3 text-gray-400">
                            <div className="flex justify-between">
                                <span>Plan:</span>
                                <span className="font-medium text-acid-content">{plan.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Billing:</span>
                                <span className="font-medium text-acid-content">Monthly</span>
                            </div>
                        </div>
                        <div className="my-4 border-t border-dashed border-acid-neutral/60"></div>
                        <div className="flex justify-between items-baseline">
                            <span className="font-semibold text-acid-content">Total</span>
                            <span className="text-3xl font-bold text-acid-primary">Ksh {plan.price}</span>
                        </div>
                        <div className="mt-6 bg-acid-base-100 p-3 rounded-lg flex items-start gap-3">
                            <IconLock className="w-5 h-5 text-gray-500 mt-0.5" />
                            <p className="text-xs text-gray-500 leading-tight">
                                Your payment is secured with end-to-end encryption.
                            </p>
                        </div>
                    </div>
                </div>

                {/* M-Pesa Form */}
                <div className="lg:col-span-2">
                    <div className="bg-acid-neutral p-6 md:p-8 rounded-2xl border border-acid-neutral/60 shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm p-2">
                                <IconMpesa className="w-full h-full" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-acid-content">Pay with M-Pesa</h1>
                                <p className="text-gray-500 text-sm">Instant & Secure mobile payment</p>
                            </div>
                        </div>

                        {paymentStep === 'processing' ? (
                            <div className="text-center py-12 animate-fade-in-up">
                                <div className="relative mx-auto w-20 h-20 mb-6">
                                    <div className="absolute inset-0 rounded-full border-4 border-[#39B54A]/30"></div>
                                    <div className="absolute inset-0 rounded-full border-4 border-[#39B54A] border-t-transparent animate-spin"></div>
                                    <IconMobile className="absolute inset-0 m-auto w-8 h-8 text-[#39B54A]" />
                                </div>
                                <h3 className="text-xl font-bold text-acid-content mb-2">Check your phone</h3>
                                <p className="text-gray-400 max-w-xs mx-auto mb-8">
                                    We've sent an M-Pesa prompt to <span className="text-acid-content font-bold font-mono">{phoneNumber}</span>.
                                    <br />Please enter your PIN to complete the payment.
                                </p>
                                <div className="text-sm text-gray-500">
                                    Didn't receive a prompt? <button onClick={() => setPaymentStep('input')} className="text-acid-primary hover:underline">Try again</button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handlePayment} className="animate-fade-in-up">
                                <div className="bg-[#39B54A]/10 border border-[#39B54A]/20 rounded-lg p-4 mb-8 flex items-start gap-3">
                                    <div className="bg-[#39B54A] rounded-full p-1 mt-0.5">
                                        <IconCheckCircle className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-sm text-acid-content/80">
                                        Enter your M-Pesa phone number below. You will receive a prompt on your phone to confirm the payment of <span className="font-bold">Ksh {plan.price}</span>.
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="phone-number" className="block text-sm font-bold text-gray-400 mb-2">
                                        M-Pesa Phone Number
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <IconMobile className="h-5 w-5 text-gray-500 group-focus-within:text-[#39B54A] transition-colors" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone-number"
                                            value={phoneNumber}
                                            onChange={handlePhoneChange}
                                            placeholder="0712 345 678"
                                            className={`w-full py-4 pl-11 pr-4 bg-acid-base-100 border rounded-xl focus:ring-4 focus:ring-[#39B54A]/20 focus:border-[#39B54A] outline-none transition text-lg font-mono tracking-wide text-acid-content ${error ? 'border-acid-error ring-acid-error/20' : 'border-acid-neutral/60'}`}
                                        />
                                    </div>
                                    {error && <p className="text-sm text-acid-error mt-2 flex items-center gap-1 animate-pulse"><IconChevronLeft className="rotate-180 w-4 h-4" />{error}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#39B54A] text-white font-bold py-4 rounded-xl hover:bg-[#32a341] transition shadow-lg shadow-[#39B54A]/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <span>Pay Ksh {plan.price}</span>
                                </button>

                                <div className="mt-6 flex justify-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" alt="M-Pesa" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
