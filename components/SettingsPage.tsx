
import React, { useState } from 'react';
import api from '../services/api'; // Assuming you have an api service
import { IconUser, IconPaypal, IconLock, IconMoney } from '../constants';
import AddWithdrawalMethodModal from './AddMpesaModal';
import ChangePasswordModal from './ChangePasswordModal';

interface SettingsPageProps {
    user: any | null; // Change User type from Supabase to a generic 'any' or a custom User type
    availableBalance: number;
    onNavigate: (view: string) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ user, availableBalance, onNavigate }) => {
    const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    
    const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
    const [passwordLastChangedText, setPasswordLastChangedText] = useState("Never changed");

    const [error, setError] = useState<string | null>(null);

    const paypalEmail = user?.paypal_email || null; // Access directly from user object

    const handleSavePaypalEmail = async (email: string) => {
        setIsSaving(true);
        setError(null);
        try {
            // Make API call to update user's paypal_email
            await api.put(`/users/${user?.id}`, { paypal_email: email }); // Assuming a PUT endpoint for user updates
            setWithdrawalModalOpen(false);
        } catch (err: any) {
            console.error("Error saving PayPal email:", err.message);
            setError("Could not save email. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleUpdatePassword = async (newPassword: string): Promise<string | null> => {
        setIsUpdatingPassword(true);
        try {
            // Make API call to update user's password
            await api.put(`/users/${user?.id}/password`, { newPassword }); // Assuming a PUT endpoint for password updates
            setPasswordLastChangedText("Just now");
            setChangePasswordModalOpen(false);
            return null; // Success
        } catch (err: any) {
            console.error("Error updating password:", err.message);
            return err.message.includes("new password should be different") 
                ? "New password must be different from the old one."
                : "Failed to update password. Please try again.";
        } finally {
            setIsUpdatingPassword(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-acid-content mb-8">Settings</h1>
            
            <div className="space-y-10">
                {/* Profile Information */}
                <div className="bg-acid-neutral p-6 md:p-8 rounded-xl border border-acid-neutral/60">
                    <h2 className="text-xl font-semibold text-acid-content mb-6">Profile Information</h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-acid-base-100 flex items-center justify-center text-gray-500 flex-shrink-0">
                            <IconUser className="w-8 h-8"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 flex-grow w-full">
                            <div>
                                <p className="text-sm font-medium text-gray-400">Name</p>
                                <p className="text-acid-content font-semibold">{user?.fullName || 'N/A'}</p>
                            </div>
                             <div>
                                <p className="text-sm font-medium text-gray-400">Email</p>
                                <p className="text-acid-content font-semibold truncate">{user?.email || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Withdrawal Methods */}
                <div className="bg-acid-neutral p-6 md:p-8 rounded-xl border border-acid-neutral/60">
                     <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                        <h2 className="text-xl font-semibold text-acid-content">Withdrawal Methods</h2>
                        <button 
                            onClick={() => setWithdrawalModalOpen(true)}
                            className="bg-acid-primary text-acid-base-100 font-semibold py-2.5 px-5 rounded-lg shadow-sm hover:opacity-90 transition w-full md:w-auto"
                        >
                            {paypalEmail ? 'Edit Withdrawal Method' : 'Add Withdrawal Method'}
                        </button>
                    </div>
                    {paypalEmail ? (
                         <div className="flex items-center justify-between p-4 bg-acid-base-100 rounded-lg border border-acid-neutral/60">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-acid-accent/10 rounded-full">
                                    <IconPaypal className="text-acid-accent" />
                                </div>
                                <div>
                                    <p className="font-semibold text-acid-content">PayPal</p>
                                    <p className="text-gray-400">{paypalEmail}</p>
                                </div>
                            </div>
                            <span className="text-xs font-medium bg-acid-success/10 text-acid-success py-1 px-2 rounded-full">Primary</span>
                        </div>
                    ) : (
                        <div className="text-center py-16 border-2 border-dashed border-gray-700 rounded-lg">
                            <IconPaypal className="mx-auto text-gray-600 h-12 w-12" />
                            <p className="mt-4 text-gray-400 font-medium">No withdrawal methods added yet</p>
                        </div>
                    )}
                </div>
                
                {/* Withdrawal */}
                <div className="bg-acid-neutral p-6 md:p-8 rounded-xl border border-acid-neutral/60">
                    <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                         <div>
                            <h2 className="text-xl font-semibold text-acid-content mb-4">Withdrawal</h2>
                            <p className="text-sm font-medium text-gray-400">Available Balance</p>
                            <p className="text-2xl font-bold text-acid-content mt-1">Ksh {availableBalance.toFixed(2)}</p>
                        </div>
                        <button 
                            onClick={() => onNavigate('withdraw')}
                            className="bg-acid-primary text-acid-base-100 font-semibold py-2.5 px-5 rounded-lg shadow-sm hover:opacity-90 transition flex items-center justify-center gap-2 w-full md:w-auto">
                           <IconMoney className="w-5 h-5 -ml-1" /> Withdraw Funds
                        </button>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-acid-neutral p-6 md:p-8 rounded-xl border border-acid-neutral/60">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                        <h2 className="text-xl font-semibold text-acid-content">Security</h2>
                        <button 
                            onClick={() => setChangePasswordModalOpen(true)}
                            className="bg-acid-primary text-acid-base-100 font-semibold py-2.5 px-5 rounded-lg shadow-sm hover:opacity-90 transition w-full md:w-auto">
                            Change Password
                        </button>
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-acid-base-100 flex items-center justify-center flex-shrink-0">
                            <IconLock className="w-6 h-6 text-gray-400" strokeWidth="2" />
                        </div>
                        <div>
                            <p className="font-semibold text-acid-content">Password</p>
                            <p className="text-sm text-gray-400">Last changed {passwordLastChangedText}</p>
                        </div>
                    </div>
                </div>
            </div>

            <AddWithdrawalMethodModal 
                isOpen={isWithdrawalModalOpen}
                onClose={() => setWithdrawalModalOpen(false)}
                onSave={handleSavePaypalEmail}
                isSaving={isSaving}
            />

            <ChangePasswordModal
                isOpen={isChangePasswordModalOpen}
                onClose={() => setChangePasswordModalOpen(false)}
                onUpdatePassword={handleUpdatePassword}
                isUpdating={isUpdatingPassword}
            />
        </div>
    );
};

export default SettingsPage;