
import React from 'react';
import { IconCrown, IconCheckCircleBG, IconChevronRight } from '../constants';
import type { SubscriptionPlan } from '../types';

const PLANS_DATA: SubscriptionPlan[] = [
  {
    name: 'Business Basic',
    price: '5',
    isPopular: false,
    features: [
      '5 surveys per day',
      'Up to Ksh 750 monthly income',
      'Up to Ksh 25 daily income',
      'Ksh 225 min. withdrawal',
      'Ksh 5 - Ksh 8 per survey',
    ],
  },
  {
    name: 'Business Premium',
    price: '12',
    isPopular: true,
    features: [
      '10 surveys per day',
      'Up to Ksh 1500 monthly income',
      'Up to Ksh 50 daily income',
      'Ksh 225 min. withdrawal',
      'Ksh 5 - Ksh 8 per survey',
    ],
  },
  {
    name: 'Business Expert',
    price: '20',
    isPopular: false,
    features: [
      '20 surveys per day',
      'Up to Ksh 3000 monthly income',
      'Up to Ksh 100 daily income',
      'Ksh 225 min. withdrawal',
      'Ksh 5 - Ksh 8 per survey',
    ],
  },
];

const SubscriptionPlanCard: React.FC<{ plan: SubscriptionPlan, onSelectPlan: (plan: SubscriptionPlan) => void }> = ({ plan, onSelectPlan }) => {
  const cardClasses = plan.isPopular
    ? 'border-acid-primary border-2 shadow-2xl shadow-acid-primary/30 relative transform lg:scale-105'
    : 'border-acid-neutral/60 hover:shadow-xl hover:shadow-acid-accent/10 transition-shadow duration-300';

  const buttonClasses = plan.isPopular
    ? 'bg-gradient-to-br from-acid-primary to-acid-accent text-acid-base-100'
    : 'bg-acid-primary text-acid-base-100';

  return (
    <div className={`flex flex-col p-8 bg-acid-neutral rounded-2xl border ${cardClasses}`}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-acid-primary text-acid-base-100 text-xs font-bold px-4 py-1.5 rounded-full">
          Popular
        </div>
      )}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-acid-content">{plan.name}</h3>
        <IconCrown className="text-acid-secondary w-7 h-7" />
      </div>
      <div className="flex items-baseline mb-6">
        <span className="text-5xl font-extrabold text-acid-content">Ksh {plan.price}</span>
        <span className="text-lg font-medium text-gray-400">/month</span>
      </div>
      <ul className="space-y-4 flex-grow mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <IconCheckCircleBG />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => onSelectPlan(plan)}
        className={`w-full font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-sm ${buttonClasses}`}>
        Select Plan <IconChevronRight />
      </button>
    </div>
  );
};

const SubscriptionPage: React.FC<{ onSelectPlan: (plan: SubscriptionPlan) => void }> = ({ onSelectPlan }) => {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-acid-content">Choose Your Plan</h1>
        <p className="text-lg text-gray-400 mt-2">Select a subscription plan that best fits your needs</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {PLANS_DATA.map((plan) => (
          <SubscriptionPlanCard key={plan.name} plan={plan} onSelectPlan={onSelectPlan} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
