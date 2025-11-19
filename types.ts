import type React from 'react';

export enum Page {
  LANDING,
  DASHBOARD,
  SIGNUP,
  LOGIN,
}

export enum QuestionType {
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    TEXT = "TEXT",
    RATING = "RATING",
}

export interface SurveyQuestion {
    id: string;
    questionText: string;
    questionType: QuestionType;
    options: string[];
    allowMultipleAnswers?: boolean;
}

export interface FeatureInfo {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export enum SurveyType {
    SPECIAL,
    PAID,
    FREE,
}

export interface SurveyInfo {
    id: number;
    title: string;
    questions: number;
    reward: number;
    estimatedTime: number;
    type: SurveyType;
    tag?: string;
}

export interface RecentEarning {
    id: number;
    description: string;
    date: string;
    amount: number;
}

export interface SubscriptionPlan {
  name: string;
  price: string;
  isPopular: boolean;
  features: string[];
}

export interface DailyCompletion {
  date: string;
  count: number;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    milestone: number;
    type: 'surveys' | 'earnings' | 'streak';
}

export interface StreakInfo {
    count: number;
    lastCompletedDate: string; // ISO date string 'YYYY-MM-DD'
}