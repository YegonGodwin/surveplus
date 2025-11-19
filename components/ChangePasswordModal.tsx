import React, { useState } from 'react';
import { IconClose, IconEye, IconEyeOff } from '../constants';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdatePassword: (password: string) => Promise<string | null>;
  isUpdating: boolean;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose, onUpdatePassword, isUpdating }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;
  
  const handleClose = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setError(null);
    onClose();
  };

  const handleUpdateClick = async () => {
    setError(null);
    if (!newPassword || newPassword.length < 6) {
        setError('New password must be at least 6 characters long.');
        return;
    }
    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match.');
      return;
    }
    
    // Supabase updateUser with password doesn't require the current password.
    // This field is included to match the UI design.
    const apiError = await onUpdatePassword(newPassword);
    if (apiError) {
        setError(apiError);
    } else {
        handleClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-acid-neutral text-acid-content rounded-2xl p-8 max-w-md w-full relative shadow-xl shadow-acid-primary/20 border border-acid-neutral/60 transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-acid-content transition-colors" aria-label="Close modal">
          <IconClose />
        </button>
        
        <h2 id="modal-title" className="text-xl font-bold text-acid-content">Change Password</h2>
        
        <div className="mt-6 space-y-4 text-left">
            <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
                <div className="relative">
                    <input id="current-password" type={showCurrentPassword ? 'text' : 'password'} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full p-3 pr-10 bg-acid-base-100 border border-acid-neutral/60 rounded-lg focus:ring-2 focus:ring-acid-primary focus:border-transparent outline-none transition" />
                    <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-acid-content" aria-label={showCurrentPassword ? "Hide password" : "Show password"}>
                        {showCurrentPassword ? <IconEyeOff /> : <IconEye />}
                    </button>
                </div>
            </div>
            <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-400 mb-1">New Password</label>
                <div className="relative">
                    <input id="new-password" type={showNewPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full p-3 pr-10 bg-acid-base-100 border border-acid-neutral/60 rounded-lg focus:ring-2 focus:ring-acid-primary focus:border-transparent outline-none transition" />
                    <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-acid-content" aria-label={showNewPassword ? "Hide password" : "Show password"}>
                        {showNewPassword ? <IconEyeOff /> : <IconEye />}
                    </button>
                </div>
            </div>
             <div>
                <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-400 mb-1">Confirm New Password</label>
                <input id="confirm-new-password" type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} className="w-full p-3 bg-acid-base-100 border border-acid-neutral/60 rounded-lg focus:ring-2 focus:ring-acid-primary focus:border-transparent outline-none transition" />
            </div>
            {error && <p className="text-acid-error text-sm text-center pt-2">{error}</p>}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={handleClose} className="w-full py-2.5 px-4 rounded-lg border border-gray-600 bg-acid-neutral text-acid-content font-semibold hover:bg-acid-base-100 transition">
            Cancel
          </button>
          <button 
            onClick={handleUpdateClick}
            disabled={isUpdating}
            className="w-full py-2.5 px-4 rounded-lg bg-acid-primary text-acid-base-100 font-semibold hover:opacity-90 transition disabled:bg-gray-600"
          >
            {isUpdating ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ChangePasswordModal;