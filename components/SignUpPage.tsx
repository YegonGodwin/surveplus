import React, { useState } from 'react';
import { register } from '../services/api';
import { IconLogo, IconEye, IconEyeOff } from '../constants';

const SignUpPage: React.FC<{ onNavigateToLanding: () => void; onNavigateToLogin: () => void; onRegisterSuccess: (userData: any) => void; }> = ({ onNavigateToLanding, onNavigateToLogin, onRegisterSuccess }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        if (fullName.trim().length < 3) {
            setError("Full name must be at least 3 characters long.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {
            const response = await register({ fullName, email, phone, password });
            // Store the token in localStorage to trigger automatic redirect to dashboard
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                // Extract user data from response and pass to parent
                const userData = response.data.user || { fullName, email };
                // Trigger the success callback with user data to update parent state and redirect
                onRegisterSuccess(userData);
            }
            setSuccess(true);
        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.msg) {
                setError(err.response.data.msg);
            } else {
                setError("An unknown error occurred. Please try again.");
            }
            console.error("Sign up request failed: ", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-dracula-background text-dracula-foreground p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8 cursor-pointer" onClick={onNavigateToLanding}>
                    <IconLogo />
                    <h1 className="text-2xl font-bold text-dracula-foreground mt-2">SurveyPlus</h1>
                </div>
                <div className="bg-dracula-current-line p-8 rounded-xl shadow-lg shadow-dracula-purple/10 border border-dracula-comment/30">
                    <h2 className="text-xl font-semibold text-center text-dracula-foreground">Create your account</h2>
                    <p className="text-center text-dracula-comment mt-1 mb-6">Start earning from your opinions.</p>

                    {success ? (
                        <div className="text-center p-4 bg-dracula-green/10 text-dracula-green rounded-lg">
                            <h3 className="font-semibold">Success!</h3>
                            <p>You have successfully created your account. Redirecting to dashboard...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-dracula-comment" htmlFor="full-name">Full Name</label>
                                <input id="full-name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-dracula-background border border-dracula-comment/50 rounded-md placeholder-dracula-comment focus:outline-none focus:ring-2 focus:ring-dracula-pink focus:border-transparent transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-dracula-comment" htmlFor="email">Email</label>
                                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-dracula-background border border-dracula-comment/50 rounded-md placeholder-dracula-comment focus:outline-none focus:ring-2 focus:ring-dracula-pink focus:border-transparent transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-dracula-comment" htmlFor="phone">Phone Number</label>
                                <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-dracula-background border border-dracula-comment/50 rounded-md placeholder-dracula-comment focus:outline-none focus:ring-2 focus:ring-dracula-pink focus:border-transparent transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-dracula-comment" htmlFor="password">Password</label>
                                <div className="relative mt-1">
                                    <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required className="block w-full px-3 py-2 pr-10 bg-dracula-background border border-dracula-comment/50 rounded-md placeholder-dracula-comment focus:outline-none focus:ring-2 focus:ring-dracula-pink focus:border-transparent transition" />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-dracula-comment hover:text-dracula-foreground" aria-label={showPassword ? "Hide password" : "Show password"}>
                                        {showPassword ? <IconEyeOff /> : <IconEye />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-dracula-comment" htmlFor="confirm-password">Confirm Password</label>
                                 <div className="relative mt-1">
                                    <input id="confirm-password" type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="block w-full px-3 py-2 pr-10 bg-dracula-background border border-dracula-comment/50 rounded-md placeholder-dracula-comment focus:outline-none focus:ring-2 focus:ring-dracula-pink focus:border-transparent transition" />
                                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-dracula-comment hover:text-dracula-foreground" aria-label={showConfirmPassword ? "Hide password" : "Show password"}>
                                        {showConfirmPassword ? <IconEyeOff /> : <IconEye />}
                                    </button>
                                </div>
                            </div>

                            {error && <p className="text-dracula-red text-sm text-center">{error}</p>}

                            <button type="submit" disabled={loading} className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-bold text-dracula-background bg-dracula-pink hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dracula-pink disabled:bg-dracula-comment transition transform hover:-translate-y-0.5 shadow-md shadow-dracula-pink/20">
                                {loading ? 'Creating account...' : 'Sign Up'}
                            </button>
                        </form>
                    )}
                </div>
                 <p className="text-center text-sm text-dracula-comment mt-6">
                    Already have an account?{' '}
                    <button onClick={onNavigateToLogin} className="font-medium text-dracula-pink hover:underline">Log in</button>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;