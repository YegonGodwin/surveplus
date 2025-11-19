import React from 'react';
import { IconClose, IconExclamationCircle } from '../constants';

interface DailyLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

const DailyLimitModal: React.FC<DailyLimitModalProps> = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-acid-neutral text-acid-content rounded-2xl p-6 max-w-sm w-full text-center relative shadow-xl shadow-acid-warning/20 border border-acid-neutral/60 transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold text-acid-content">Daily Limit Reached</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-acid-content transition-colors" aria-label="Close modal">
                <IconClose />
            </button>
        </div>
        
        <div className="mx-auto my-5 flex justify-center">
            <IconExclamationCircle stroke="#ff7f00" fill="#ff7f00" />
        </div>
        <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-acid-content mb-2">You've Reached Your Daily Survey Limit</h2>
        <p className="text-gray-400 mb-6">
          Upgrade your plan to take more surveys per day and increase your earning potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-lg border border-gray-600 bg-acid-neutral text-acid-content font-semibold hover:bg-acid-base-100 transition"
          >
            Cancel
          </button>
          <button 
            onClick={onUpgrade}
            className="w-full py-2.5 px-4 rounded-lg bg-acid-primary text-acid-base-100 font-semibold hover:opacity-90 transition"
          >
            Upgrade Plan
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

export default DailyLimitModal;