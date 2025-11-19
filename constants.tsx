
import React from 'react';
import { SurveyQuestion, QuestionType, SurveyInfo, SurveyType, Achievement } from './types';

export const IconLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="32" height="32" rx="8" fill="#EEF2FF"/>
        <path d="M10 16H13V19H10V16Z" fill="#4F46E5"/>
        <path d="M14.5 16H17.5V19H14.5V16Z" fill="#4F46E5"/>
        <path d="M19 16H22V19H19V16Z" fill="#4F46E5"/>
        <path d="M10 11.5H13V14.5H10V11.5Z" fill="#4F46E5"/>
        <path d="M14.5 11.5H17.5V14.5H14.5V11.5Z" fill="#4F46E5"/>
        <path d="M19 11.5H22V14.5H19V11.5Z" fill="#4F46E5"/>
    </svg>
);

export const IconDashboard = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor"/></svg>;
export const IconSurveys = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor"/><path d="M14 2V8H20" fill="currentColor"/><path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>;
export const IconReferrals = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 21V19C22.9992 17.5033 22.1121 16.1738 20.7389 15.5424" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 3.54242C18.3731 4.17376 19.2594 5.50334 19.26 7C19.26 8.49666 18.3731 9.82624 17 10.4576" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconSettings = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-1 1.73v.44a2 2 0 0 0 .18 1l.25.43a2 2 0 0 1 0 2l-.25.43a2 2 0 0 0-.18 1v.44a2 2 0 0 0 1 1.73l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1-1.73v-.44a2 2 0 0 0-.18-1l-.25-.43a2 2 0 0 1 0-2l.25-.43a2 2 0 0 0 .18-1v-.44a2 2 0 0 0-1-1.73l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconHelp = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6714 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconBell = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7305C12.6946 21.9063 12.3504 22.0001 12 22C11.6496 22.0001 11.3054 21.9063 11.0018 21.7305C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconMoney = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 9V7C17 4.239 14.761 2 12 2C9.239 2 7 4.239 7 7V9M19 9H5C3.895 9 3 9.895 3 11V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V11C21 9.895 20.105 9 19 9ZM12 17C10.896 17 10 16.104 10 15C10 13.896 10.896 13 12 13C13.104 13 14 13.896 14 15C14 16.104 13.104 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconCheckCircle = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconBarChart = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconChevronRight = (props: React.SVGProps<SVGSVGElement>) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconWarning = (props: React.SVGProps<SVGSVGElement>) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 15V10M10 5H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconClock = (props: React.SVGProps<SVGSVGElement>) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconSuccessCircle = (props: React.SVGProps<SVGSVGElement>) => <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="36" cy="36" r="36" fill="#D1FADF"/><path d="M24 36.5L33 45L48 28" stroke="#039855" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>


export const IconClipboard = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>;
export const IconCrown = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/></svg>;


export const IconCheck = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 6 9 17l-5-5"/></svg>;
export const IconCheckCircleBG = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="10" cy="10" r="10" fill="#EEF2FF"/>
        <path d="M6.5 10.5L9 13L13.5 8" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const IconChevronDown = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>;
export const IconChevronLeft = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const IconStar = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;
export const IconMail = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
export const IconPhone = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
export const IconLocation = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

export const IconLock = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
export const IconClose = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

export const IconCopy = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>;
export const IconDocumentCheck = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>;

export const IconUser = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
export const IconMobile = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;

export const IconEye = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
export const IconEyeOff = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>;

export const IconSparkles = (props: React.SVGProps<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3Z"/></svg>;

export const IconGift = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>;
export const IconShare = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>;
export const IconTwitter = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
export const IconFacebook = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.14 9.5 5.32v2.14H6v4.44h3.5v12h4.5v-12h3.81l.42-4.44z"/></svg>;
export const IconWhatsapp = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.11 4.9C17.22 3 14.71 1.93 12.1 1.93c-5.16 0-9.36 4.2-9.36 9.36 0 1.76.49 3.48 1.41 4.95L2.05 22l6.25-2.1c1.38.81 2.94 1.24 4.56 1.24h.01c5.15 0 9.35-4.2 9.35-9.36 0-2.5-1-4.88-2.65-6.7zM12.1 20.2c-1.46 0-2.88-.38-4.1-1.05l-.3-.18-3.07.95.96-2.99-.2-.31c-.74-1.2-1.13-2.6-1.13-4.05 0-4.34 3.53-7.87 7.87-7.87 2.11 0 4.1.83 5.56 2.29 1.48 1.48 2.29 3.45 2.29 5.57-.01 4.34-3.53 7.87-7.86 7.87zm4.4-6.39c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.18-.54.06s-1.04-.38-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72s-.01-.39.11-.51c.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.5-.41-.43-.56-.44-.14-.01-.3 0-.46 0s-.43.06-.66.31c-.22.25-.86 1-.86 2.44s.88 2.83 1 3.02c.12.2.66 1.34 3.23 2.62.52.26.93.41 1.25.52.51.17.97.14 1.32.09.4-.05 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18s-.22-.17-.46-.29z"/></svg>;

export const IconExclamationCircle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="32" cy="32" r="32" fill="#FFFAEB"/>
        <path d="M32 21.3333V34.6667" stroke="#F79009" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 42.6667H32.0267" stroke="#F79009" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const IconSearch = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;

export const IconSignOut = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;

export const IconMenu = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;

export const IconPaypal = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M10.42.49c-1.03.14-2.1.8-2.67 1.83-.6.98-.72 2.2-.43 3.32.28 1.1.98 1.94 2.1 2.37 1.18.44 2.6.32 3.65-.26.3-.17.6-.3.9-.32.32-.03.62.08.87.27.23.18.42.44.5.72.1.28.1.58.02.87-.25.87-.92 1.4-1.74 1.62-1.4.38-2.98.1-4.22-.6-1.2-.7-2.1-1.77-2.64-3.1-.53-1.3-.7-2.8-.4-4.2.33-1.42 1.1-2.72 2.2-3.65C9.82.02 12.03-.31 13.9.3c.36.12.7.28 1.02.5.32.2.6.43.8.7s.3.58.28.9c-.04.3-.2.6-.44.82-.23.2-.5.34-.8.42-.7.17-1.42.1-2.1-.2-1.1-.48-1.8-1.4-2.22-2.5z M22.42 8.71c-.2-.23-.5-.4-.8-.47-1-.23-2.03-.2-3.04.1-.7.2-1.38.5-2 .88-.6.4-1.13.88-1.6 1.4-.5.53-1 1.1-1.33 1.76-.32.6-.5 1.3-.5 2s.1 1.4.4 2c.3.6.7 1.1 1.2 1.5s1.1.7 1.8.8c.7.1 1.3 0 2-.2.6-.2 1.2-.5 1.7-.9s.9-1 1.2-1.6c.3-.6.5-1.3.5-2s-.1-1.4-.4-2c-.3-.6-.7-1.1-1.2-1.5s-1.1-.7-1.8-.8c-.7-.1-1.3 0-2 .2-.6.2-1.2.5-1.7.9s-.9 1-1.2 1.6c-.2.4-.3.9-.3 1.3s.1.9.3 1.3c.2.4.5.8.9 1s.8.4 1.3.4h.1c.5 0 1-.2 1.4-.5.4-.3.7-.8.8-1.3.1-.3.1-.7 0-1-.1-.3-.3-.6-.6-.8s-.6-.3-.9-.2c-.3.1-.6.2-.8.4s-.4.4-.5.7c-.1.3-.1.6 0 .9.1.5.4 1 .9 1.3.5.3 1.1.5 1.7.4.6-.1 1.2-.3 1.6-.7s.8-.8 1.1-1.4c.3-.6.4-1.2.4-1.9s-.1-1.3-.4-1.9c-.3-.6-.7-1.1-1.2-1.5s-1.1-.7-1.8-.8c-.7-.1-1.3 0-2 .2-.6.2-1.2.5-1.7.9s-.9 1-1.2 1.6c-.3.6-.5 1.3-.5 2s.1 1.4.4 2c.3.6.7 1.1 1.2 1.5.5.4 1.1.7 1.8.8.7.1 1.3 0 2-.2s1.2-.5 1.7-.9c.5-.4.9-1 1.2-1.6.3-.6.5-1.3.5-2s-.1-1.4-.4-2c-.3-.6-.7-1.1-1.2-1.5s-1.1-.7-1.7-.8c-.4-.1-.7-.1-1.1-.1-1.1 0-2.2.4-3 1.1-.8.7-1.3 1.7-1.5 2.8-.2 1.1-.1 2.3.4 3.3s1.2 1.8 2.2 2.3c1 .5 2.1.6 3.2.3.3-.1.6-.2.9-.4.3-.2.5-.5.7-.8.2-.3.2-.7.2-1s-.1-.6-.3-.9z"/></svg>;
export const IconMpesa = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#39B54A"/>
    <path d="M14 36V12H18.5L24 26L29.5 12H34V36H29.5V19.5L24 33.5L18.5 19.5V36H14Z" fill="white"/>
  </svg>
);

export const IconAward = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>;
export const IconFire = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2c2.4 2.4 3.6 4.8 3.6 7.2 0 2.4-1.2 4.8-3.6 7.2-2.4-2.4-3.6-4.8-3.6-7.2 0-2.4 1.2-4.8 3.6-7.2z"></path><path d="M15.6 14.4c2.4-2.4 3.6-4.8 3.6-7.2 0-2.4-1.2-4.8-3.6-7.2"></path></svg>;
export const IconTrendingUp = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;


export const SURVEYS_DATA: SurveyInfo[] = [
    { id: 1, title: 'SurveyPlus', questions: 7, reward: 85.0, estimatedTime: 11, type: SurveyType.SPECIAL, tag: 'Always Available' },
    { id: 2, title: 'Safaricom M-PESA', questions: 7, reward: 92.5, estimatedTime: 11, type: SurveyType.PAID },
    { id: 3, title: 'Equity Bank', questions: 6, reward: 78.0, estimatedTime: 9, type: SurveyType.FREE },
    { id: 4, title: 'Naivas Supermarket', questions: 7, reward: 89.0, estimatedTime: 11, type: SurveyType.PAID },
    { id: 5, title: 'Kenya Airways', questions: 7, reward: 95.0, estimatedTime: 11, type: SurveyType.PAID },
    { id: 6, title: 'Brookside Dairy', questions: 5, reward: 80.0, estimatedTime: 8, type: SurveyType.FREE },
    { id: 7, title: 'Jumia Kenya', questions: 7, reward: 90.0, estimatedTime: 11, type: SurveyType.PAID },
    { id: 8, title: 'KCB Bank', questions: 7, reward: 88.0, estimatedTime: 11, type: SurveyType.PAID },
    { id: 9, title: 'Twiga Foods', questions: 6, reward: 83.0, estimatedTime: 9, type: SurveyType.PAID },
    { id: 10, title: 'Co-operative Bank', questions: 5, reward: 79.0, estimatedTime: 8, type: SurveyType.FREE },
    { id: 11, title: 'Zuku', questions: 7, reward: 91.0, estimatedTime: 11, type: SurveyType.PAID },
    { id: 12, title: 'Java House', questions: 6, reward: 82.0, estimatedTime: 9, type: SurveyType.PAID },
    { id: 13, title: 'Kipepeo Clothing', questions: 6, reward: 81.0, estimatedTime: 9, type: SurveyType.PAID },
    { id: 14, title: 'KPLC', questions: 7, reward: 86.0, estimatedTime: 9, type: SurveyType.PAID },
    { id: 15, title: 'Bidco Africa', questions: 5, reward: 77.0, estimatedTime: 8, type: SurveyType.FREE },
    { id: 16, title: 'Airtel Kenya', questions: 7, reward: 93.0, estimatedTime: 10, type: SurveyType.PAID },
    { id: 17, title: 'Tusker', questions: 6, reward: 84.0, estimatedTime: 9, type: SurveyType.PAID },
    { id: 18, title: 'GOTV Kenya', questions: 5, reward: 76.0, estimatedTime: 8, type: SurveyType.PAID },
    { id: 19, title: 'Artcaffe', questions: 5, reward: 87.0, estimatedTime: 7, type: SurveyType.FREE },
    { id: 20, title: 'Carrefour Kenya', questions: 6, reward: 75.0, estimatedTime: 9, type: SurveyType.FREE },
    { id: 21, title: 'Garden City Mall', questions: 7, reward: 94.0, estimatedTime: 10, type: SurveyType.FREE },
    { id: 22, title: 'Bolt Kenya', questions: 5, reward: 96.0, estimatedTime: 8, type: SurveyType.FREE },
    { id: 23, title: 'Little Cabs', questions: 4, reward: 97.0, estimatedTime: 6, type: SurveyType.FREE },
];

export const FEATURES_DATA = [
    {
        icon: <IconSparkles />,
        title: "AI-Powered Questions",
        description: "Generate relevant survey questions in seconds with our smart AI assistant.",
    },
    {
        icon: <IconBarChart />,
        title: "Real-time Analytics",
        description: "Track responses as they come in and visualize data with beautiful charts.",
    },
    {
        icon: <IconMoney />,
        title: "Earn Rewards",
        description: "Get paid for your opinions. Withdraw your earnings quickly via PayPal.",
    },
    {
        icon: <IconAward />,
        title: "Unlock Achievements",
        description: "Stay motivated by earning badges for your progress and maintaining streaks.",
    },
];

export const TESTIMONIALS_DATA = [
    {
        quote: "This is the best survey tool I've ever used. The AI features save me so much time!",
        author: "Jane Doe",
        role: "Marketing Manager, TechCorp",
    },
    {
        quote: "I love how easy it is to create a survey and see the results instantly. Highly recommended!",
        author: "John Smith",
        role: "Product Manager, Innovate Inc.",
    },
];

export const FAQ_DATA = [
    {
        question: "How do I get paid?",
        answer: "You can withdraw your earnings directly to your PayPal account. Payouts are processed within 24 hours.",
    },
    {
        question: "Is it free to join?",
        answer: "Yes, creating an account on SurveyPlus is completely free. You can start taking surveys and earning money right away.",
    },
    {
        question: "How does the AI question generator work?",
        answer: "Just provide a topic for your survey, and our AI will generate a set of relevant and well-structured questions for you to use or edit.",
    },
    {
        question: "Can I create my own questions?",
        answer: "Absolutely! You have full control. You can use the AI-generated questions, write your own from scratch, or mix and match.",
    },
];

const surveyPlusIntroQuestions: SurveyQuestion[] = [
    { id: 'q1', questionText: "How did you hear about us?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Youtube", "Twitter", "Instagram", "Facebook", "Friend", "Our Website"] },
    { id: 'q2', questionText: "We partner with thousand of businesses and brands to help you earn. These brands rely on your answers to advance their work thats why its important to write great answers", questionType: QuestionType.MULTIPLE_CHOICE, options: ["I understand", "Okay"] },
    { id: 'q3', questionText: "SurveyPlus allows you to earn money from every survey. You will receive your payment when you submit your survey.", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Looks Good", "I understand"] },
    { id: 'q4', questionText: "Researchers on our platform sometimes look for people with specific experience. As a result you may be disqualified from certain surveys", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Looks Good", "I understand"] },
    { id: 'q5', questionText: "Every day, you will have access to one survey. You can upgrade your account from your profile if you need more surveys. This survey is free and you can take another one", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Looks Good", "I understand"] },
    { id: 'q6', questionText: "We pay you when you complete a survey from a brand and when that brand accepts your answers. Sometimes it can take a few days for your answer to be approved.", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Looks Good", "I understand"] },
    { id: 'q7', questionText: "Have friends? We will pay you Ksh 1 for every survey you friend completes", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Looks Good", "I understand"] },
];

const equityBankQuestions: SurveyQuestion[] = [
    { id: 'eq1', questionText: "Which Equity Bank services do you currently use?", questionType: QuestionType.MULTIPLE_CHOICE, allowMultipleAnswers: true, options: ["Savings Account", "Loans", "Mobile Banking", "Insurance", "Investment Services"] },
    { id: 'eq2', questionText: "How satisfied are you with Equity Bank's customer service?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"] },
    { id: 'eq3', questionText: "What motivates you to bank with Equity Bank?", questionType: QuestionType.TEXT, options: [] },
    { id: 'eq4', questionText: "How often do you use Equity Bank's mobile app, Eazzy Banking?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"] },
    { id: 'eq5', questionText: "Rate the accessibility of Equity Bank branches or agents on a scale of 1-5.", questionType: QuestionType.RATING, options: ["1 - Poor", "5 - Excellent"] },
    { id: 'eq6', questionText: "What new financial product would you like Equity Bank to offer?", questionType: QuestionType.TEXT, options: [] },
];

const brooksideDairyQuestions: SurveyQuestion[] = [
    { id: 'bd1', questionText: "Which Brookside Dairy products do you purchase most frequently?", questionType: QuestionType.MULTIPLE_CHOICE, allowMultipleAnswers: true, options: ["Milk", "Yoghurt", "Ghee", "Butter", "Cream", "None of the above"] },
    { id: 'bd2', questionText: "How would you rate the quality of Brookside Dairy products?", questionType: QuestionType.RATING, options: ["1 - Poor", "5 - Excellent"] },
    { id: 'bd3', questionText: "Where do you typically buy Brookside products?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Supermarket", "Local Kiosk", "Wholesale", "Online"] },
    { id: 'bd4', questionText: "What's one thing you would improve about Brookside products?", questionType: QuestionType.TEXT, options: [] },
    { id: 'bd5', questionText: "Have you tried their new plant-based milk alternatives?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Yes", "No", "I wasn't aware of them"] },
];

const cooperativeBankQuestions: SurveyQuestion[] = [
    { id: 'cb1', questionText: "Are you a Co-operative Bank customer?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Yes", "No"] },
    { id: 'cb2', questionText: "How familiar are you with Co-operative Bank's MCo-op Cash mobile banking service?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Very familiar", "Somewhat familiar", "Not familiar at all"] },
    { id: 'cb3', questionText: "What factor is most important to you when choosing a bank?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Low fees", "Customer service", "Branch accessibility", "Online banking features"] },
    { id: 'cb4', questionText: "How would you rate Co-operative Bank's reputation in Kenya?", questionType: QuestionType.RATING, options: ["1 - Very Poor", "5 - Excellent"] },
    { id: 'cb5', questionText: "If you could suggest one new service for Co-op Bank, what would it be?", questionType: QuestionType.TEXT, options: [] },
];

const bidcoAfricaQuestions: SurveyQuestion[] = [
    { id: 'ba1', questionText: "Which of the following Bidco Africa brands have you used?", questionType: QuestionType.MULTIPLE_CHOICE, allowMultipleAnswers: true, options: ["Kimbo", "Elianto", "Golden Fry", "Noodies", "Gental", "Tily"] },
    { id: 'ba2', questionText: "How satisfied are you with the value for money of Bidco products?", questionType: QuestionType.RATING, options: ["1 - Very Unsatisfied", "5 - Very Satisfied"] },
    { id: 'ba3', questionText: "What comes to mind when you think of the brand Bidco Africa?", questionType: QuestionType.TEXT, options: [] },
    { id: 'ba4', questionText: "Do you find Bidco products to be easily available in your local shops?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Always available", "Mostly available", "Sometimes available", "Rarely available"] },
    { id: 'ba5', questionText: "How important is it to you that Bidco products are locally manufactured in Kenya?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Very important", "Somewhat important", "Not important"] },
];

const artcaffeQuestions: SurveyQuestion[] = [
    { id: 'ac1', questionText: "How often do you visit an Artcaffe branch?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"] },
    { id: 'ac2', questionText: "What do you typically order at Artcaffe?", questionType: QuestionType.MULTIPLE_CHOICE, allowMultipleAnswers: true, options: ["Coffee/Tea", "Pastries/Desserts", "Meals (Breakfast/Lunch/Dinner)", "Cocktails/Wine"] },
    { id: 'ac3', questionText: "Please rate the ambiance and decor of Artcaffe restaurants.", questionType: QuestionType.RATING, options: ["1 - Poor", "5 - Excellent"] },
    { id: 'ac4', questionText: "What is your favorite thing about Artcaffe?", questionType: QuestionType.TEXT, options: [] },
    { id: 'ac5', questionText: "Would you be interested in an Artcaffe loyalty program?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Yes, definitely", "Maybe", "No"] },
];

const carrefourKenyaQuestions: SurveyQuestion[] = [
    { id: 'ck1', questionText: "How frequently do you shop at Carrefour Kenya?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Once a week", "A few times a month", "Once a month", "Less than once a month"] },
    { id: 'ck2', questionText: "What do you like most about shopping at Carrefour?", questionType: QuestionType.MULTIPLE_CHOICE, allowMultipleAnswers: true, options: ["Wide product selection", "Prices & promotions", "Quality of fresh produce", "Customer service", "Store layout"] },
    { id: 'ck3', questionText: "On a scale of 1-5, how would you rate your checkout experience (waiting time, staff friendliness)?", questionType: QuestionType.RATING, options: ["1 - Very Poor", "5 - Very Good"] },
    { id: 'ck4', questionText: "Have you used the Carrefour Kenya App (MAF Carrefour)?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Yes, regularly", "Yes, a few times", "No, I haven't", "I didn't know they had one"] },
    { id: 'ck5', questionText: "What product category would you like to see more variety in at Carrefour?", questionType: QuestionType.TEXT, options: [] },
    { id: 'ck6', questionText: "How likely are you to recommend Carrefour to a friend or family member?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Very Likely", "Likely", "Neutral", "Unlikely", "Very Unlikely"] },
];

const gardenCityMallQuestions: SurveyQuestion[] = [
    { id: 'gcm1', questionText: "What is your primary reason for visiting Garden City Mall?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Shopping", "Dining", "Entertainment (Cinema, etc.)", "Business/Work", "Window shopping"] },
    { id: 'gcm2', questionText: "How would you rate the overall cleanliness and maintenance of the mall?", questionType: QuestionType.RATING, options: ["1 - Very Dirty", "5 - Very Clean"] },
    { id: 'gcm3', questionText: "Which store or restaurant is your favorite at Garden City Mall?", questionType: QuestionType.TEXT, options: [] },
    { id: 'gcm4', questionText: "How easy or difficult is it to find parking at the mall during peak hours?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"] },
    { id: 'gcm5', questionText: "Have you visited the Garden City Business Park or Residences?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Yes, Business Park", "Yes, Residences", "Yes, both", "No, neither"] },
    { id: 'gcm6', questionText: "How satisfied are you with the variety and quality of shops available?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"] },
    { id: 'gcm7', questionText: "What kind of new store or attraction would you like to see at Garden City Mall?", questionType: QuestionType.TEXT, options: [] },
];

const boltKenyaQuestions: SurveyQuestion[] = [
    { id: 'bk1', questionText: "How often do you use Bolt for ride-hailing?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Several times a week", "Once a week", "A few times a month", "Rarely"] },
    { id: 'bk2', questionText: "What is the main reason you choose Bolt over other services?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Lower price", "Faster arrival time", "Better app experience", "Vehicle quality", "Driver professionalism"] },
    { id: 'bk3', questionText: "Please rate the safety and reliability of Bolt rides on a scale of 1-5.", questionType: QuestionType.RATING, options: ["1 - Very Unsafe", "5 - Very Safe"] },
    { id: 'bk4', questionText: "Have you used other Bolt services like Bolt Food or Bolt Boda?", questionType: QuestionType.MULTIPLE_CHOICE, allowMultipleAnswers: true, options: ["Bolt Food", "Bolt Boda (Motorbike)", "Bolt Package", "None of these"] },
    { id: 'bk5', questionText: "What could Bolt do to improve your experience as a rider?", questionType: QuestionType.TEXT, options: [] },
];

const littleCabsQuestions: SurveyQuestion[] = [
    { id: 'lc1', questionText: "How did you first hear about Little Cabs?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Safaricom promotion", "Word of mouth/Friend", "Social Media", "App Store", "Other"] },
    { id: 'lc2', questionText: "On a scale of 1-5, how would you rate the affordability of Little Cabs compared to competitors?", questionType: QuestionType.RATING, options: ["1 - Very Expensive", "5 - Very Affordable"] },
    { id: 'lc3', questionText: "What feature of the Little app do you find most useful?", questionType: QuestionType.TEXT, options: [] },
    { id: 'lc4', questionText: "Which ride option do you use most often?", questionType: QuestionType.MULTIPLE_CHOICE, options: ["Little (Basic)", "Comfort", "Lady-bug (Female Driver)", "I use them equally", "I wasn't aware of the options"] },
];

export const SURVEY_QUESTIONS_BANK: { [key: number]: SurveyQuestion[] } = {
  1: surveyPlusIntroQuestions,
  3: equityBankQuestions,
  6: brooksideDairyQuestions,
  10: cooperativeBankQuestions,
  15: bidcoAfricaQuestions,
  19: artcaffeQuestions,
  20: carrefourKenyaQuestions,
  21: gardenCityMallQuestions,
  22: boltKenyaQuestions,
  23: littleCabsQuestions,
};

export const HELP_PAGE_DATA = [
    {
        category: "Getting Started",
        faqs: [
            { question: "How do I create an account?", answer: "To create an account, click the 'Sign Up' button on the landing page. You'll need to provide your full name, email, and phone number, then create a password. After submitting, you'll receive a verification email to activate your account." },
            { question: "Is SurveyPlus free to join?", answer: "Yes, joining SurveyPlus is completely free. You can sign up, take free surveys, and earn money without any initial cost. We also offer optional paid subscription plans that give you access to more surveys and higher earning potential." },
            { question: "How do I take my first survey?", answer: "Once you're logged in, navigate to the 'Surveys' page from the sidebar. Here, you'll see a list of available surveys. Simply click 'Take Survey' on any card to begin. We recommend starting with the 'SurveyPlus' introduction survey!" },
        ]
    },
    {
        category: "Surveys & Earnings",
        faqs: [
            { question: "How much can I earn per survey?", answer: "The reward for each survey varies depending on its length, complexity, and type (Free or Paid). You can see the reward amount listed on each survey card before you begin." },
            { question: "Why are some surveys 'Paid' and others 'Free'?", answer: "Free surveys are available to all users. Paid surveys are exclusive to users with an active subscription plan. These often have higher rewards and are more frequent, providing a way to significantly boost your earnings." },
            { question: "How many free surveys can I take per day?", answer: "Free users can complete up to two free surveys per day. This limit resets every 24 hours. To take more surveys, you can upgrade to one of our subscription plans." },
            { question: "What happens if I get disqualified from a survey?", answer: "Sometimes, a survey requires participants with specific demographics or experiences. If your initial answers don't match the criteria, you may be disqualified. Don't worry, this is normal and won't affect your account standing." },
        ]
    },
    {
        category: "Payments & Withdrawals",
        faqs: [
            { question: "How do I withdraw my earnings?", answer: "You can withdraw your available balance via PayPal. First, ensure you have added your PayPal email in the 'Settings' page. Then, go to 'Settings' > 'Withdraw' to initiate the process, provided you have met the minimum withdrawal amount." },
            { question: "Is there a minimum withdrawal amount?", answer: "Yes, the current minimum withdrawal amount is Ksh 225. You can see your progress towards this goal on the 'Withdraw' page in your settings." },
            { question: "How long does a withdrawal take to process?", answer: "Withdrawals are typically processed within 24-48 hours. You will receive a confirmation once the transaction is complete." },
            { question: "How do I add or change my PayPal email?", answer: "Navigate to the 'Settings' page. Under 'Withdrawal Methods', you can add a new PayPal email or edit an existing one. Please ensure the email is correct to avoid payment issues." },
        ]
    },
    {
        category: "Account & Referrals",
        faqs: [
            { question: "How do I change my password?", answer: "You can change your password by going to the 'Settings' page and clicking on 'Change Password' in the 'Security' section. You will be prompted to enter your current and new password." },
            { question: "How does the referral program work?", answer: "Go to the 'Referrals' page to find your unique referral link. Share this link with friends. When a friend signs up using your link and completes their first survey, you will receive a Ksh 1 bonus in your account." },
            { question: "Where can I find my referral statistics?", answer: "The 'Referrals' page shows your total referral earnings and the number of friends who have successfully joined using your link." },
        ]
    }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
    { id: 'surveys_1', title: 'Survey Starter', description: 'Complete your first survey.', icon: <IconAward className="w-8 h-8"/>, milestone: 1, type: 'surveys' },
    { id: 'surveys_5', title: 'Survey Enthusiast', description: 'Complete 5 surveys.', icon: <IconAward className="w-8 h-8"/>, milestone: 5, type: 'surveys' },
    { id: 'surveys_10', title: 'Survey Pro', description: 'Complete 10 surveys.', icon: <IconAward className="w-8 h-8"/>, milestone: 10, type: 'surveys' },
    { id: 'earnings_5', title: 'Pocket Change', description: 'Earn a total of Ksh 5.', icon: <IconMoney className="w-8 h-8"/>, milestone: 5, type: 'earnings' },
    { id: 'earnings_20', title: 'Serious Earner', description: 'Earn a total of Ksh 20.', icon: <IconMoney className="w-8 h-8"/>, milestone: 20, type: 'earnings' },
    { id: 'streak_3', title: 'On a Roll', description: 'Maintain a 3-day streak.', icon: <IconFire className="w-8 h-8"/>, milestone: 3, type: 'streak' },
    { id: 'streak_7', title: 'Fire Starter', description: 'Maintain a 7-day streak.', icon: <IconFire className="w-8 h-8"/>, milestone: 7, type: 'streak' },
];