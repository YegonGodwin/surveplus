import React, { useState } from 'react';
import { IconClose } from '../constants';

interface AddWithdrawalMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (email: string) => Promise<void>;
  isSaving: boolean;
}

const AddWithdrawalMethodModal: React.FC<AddWithdrawalMethodModalProps> = ({ isOpen, onClose, onSave, isSaving }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSaveClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    await onSave(email);
  };
  
  const handleClose = () => {
    setEmail('');
    setError('');
    onClose();
  }

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
        
        <h2 id="modal-title" className="text-xl font-bold text-acid-content">Add PayPal Account</h2>
        
        <div className="mt-4 text-left">
            <label htmlFor="paypal-email" className="block text-sm font-medium text-gray-400 mb-1">
                PayPal Email Address
            </label>
            <input
                id="paypal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g., yourname@example.com"
                className={`w-full p-3 bg-acid-base-100 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition ${error ? 'border-acid-error ring-acid-error/50' : 'border-acid-neutral/60 focus:ring-acid-primary'}`}
                aria-describedby="email-error"
            />
            {error ? 
                <p id="email-error" className="text-acid-error text-sm mt-1">{error}</p>
                : <p className="text-sm text-gray-500 mt-2">Enter the email associated with your PayPal account.</p>
            }
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClose}
            className="w-full py-2.5 px-4 rounded-lg border border-gray-600 bg-acid-neutral text-acid-content font-semibold hover:bg-acid-base-100 transition"
          >
            Cancel
          </button>
          <button 
            onClick={handleSaveClick}
            disabled={isSaving}
            className="w-full py-2.5 px-4 rounded-lg bg-acid-primary text-acid-base-100 font-semibold hover:opacity-90 transition disabled:bg-gray-600"
          >
            {isSaving ? 'Saving...' : 'Save PayPal Account'}
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

export default AddWithdrawalMethodModal;