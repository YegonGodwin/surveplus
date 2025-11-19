
import React from 'react';
import { IconLock, IconClose } from '../constants';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  surveyReward: number;
  onViewPlans: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose, surveyReward, onViewPlans }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-acid-neutral text-acid-content rounded-2xl p-8 max-w-sm w-full text-center relative shadow-xl shadow-acid-primary/20 border border-acid-neutral/60 transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-acid-content transition-colors" aria-label="Close modal">
          <IconClose />
        </button>
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-acid-primary/10 mb-4">
            <IconLock className="w-8 h-8 text-acid-primary" />
        </div>
        <h2 id="modal-title" className="text-xl font-bold text-acid-content mb-2">Paid Survey</h2>
        <p className="text-gray-400 mb-6">
          This is a paid survey worth Ksh {surveyReward.toFixed(2)}. Subscribe to a plan to start earning from paid surveys.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-lg border border-gray-600 bg-acid-neutral text-acid-content font-semibold hover:bg-acid-base-100 transition"
          >
            Cancel
          </button>
          <button 
            onClick={onViewPlans}
            className="w-full py-2.5 px-4 rounded-lg bg-acid-primary text-acid-base-100 font-semibold hover:opacity-90 transition"
          >
            View Subscription Plans
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

export default SubscriptionModal;
