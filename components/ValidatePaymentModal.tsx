import React, { useState } from 'react';
import { IconClose } from '../constants';

interface ValidatePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onValidate: (message: string) => void;
}

const ValidatePaymentModal: React.FC<ValidatePaymentModalProps> = ({ isOpen, onClose, onValidate }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleValidateClick = () => {
    if (!message.trim()) {
        setError('Please paste the M-PESA message before validating.');
        return;
    }
    setError('');
    onValidate(message);
  };
  
  const handleClose = () => {
    setMessage('');
    setError('');
    onClose();
  }

  return (
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close modal">
          <IconClose />
        </button>
        
        <h2 id="modal-title" className="text-xl font-bold text-gray-900">Validate Payment</h2>
        
        <div className="mt-4 text-left">
            <label htmlFor="mpesa-message" className="block text-sm font-medium text-gray-700 mb-1">
                Paste M-PESA Message
            </label>
            <textarea
                id="mpesa-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Paste the full M-PESA message here..."
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition ${error ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-brand-primary'}`}
                aria-describedby="message-error"
            />
            {error && <p id="message-error" className="text-red-600 text-sm mt-1">{error}</p>}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClose}
            className="w-full py-2.5 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button 
            onClick={handleValidateClick}
            className="w-full py-2.5 px-4 rounded-lg bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 transition"
          >
            Validate Payment
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

export default ValidatePaymentModal;