
import React, { useState, useEffect } from 'react';
import type { FAQItem, FeatureInfo, Testimonial } from '../types';
import { FEATURES_DATA, TESTIMONIALS_DATA, FAQ_DATA, IconCheck, IconChevronDown, IconChevronLeft, IconChevronRight, IconStar, IconMail, IconPhone, IconLocation, IconLogo, IconMenu, IconClose, IconMoney } from '../constants';

const SurveyIllustration = () => (
    <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
        {/* Glows */}
        <div className="absolute top-0 -left-10 w-48 h-48 bg-dracula-pink/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-10 w-48 h-48 bg-dracula-purple/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow animation-delay-2000" style={{ animationDelay: '2s'}}></div>

        {/* Main rotating element */}
        <div className="relative w-full h-full">
            {/* Dashed Circle */}
            <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '60s' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="#44475a" strokeWidth="0.5" strokeDasharray="2 2"/>
            </svg>
            
            {/* Floating Cards */}
            <div className="absolute top-[10%] left-[5%] w-48 p-3 bg-dracula-current-line/70 backdrop-blur-md rounded-xl shadow-lg border border-dracula-comment/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs font-bold text-dracula-foreground">New Survey</p>
                <p className="text-xs text-dracula-comment">Consumer Habits</p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full bg-dracula-yellow"></div>
                    <div className="w-6 h-6 rounded-full bg-dracula-green"></div>
                    <div className="w-6 h-6 rounded-full bg-dracula-cyan"></div>
                </div>
            </div>

            <div className="absolute bottom-[10%] right-[5%] w-36 p-3 bg-dracula-current-line/70 backdrop-blur-md rounded-xl shadow-lg border border-dracula-comment/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-xs font-bold text-dracula-green">Reward: Ksh 8.00</p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="h-2 w-full bg-dracula-green/20 rounded-full"><div className="h-2 w-3/4 bg-dracula-green rounded-full"></div></div>
                </div>
            </div>

            <div className="absolute bottom-[20%] left-[0%] w-32 p-3 bg-dracula-current-line/70 backdrop-blur-md rounded-xl shadow-lg border border-dracula-comment/20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-xs font-bold text-dracula-foreground">Analytics</p>
                 <svg className="w-full h-8 mt-1" viewBox="0 0 100 40">
                    <path d="M 0 35 Q 25 10, 50 20 T 100 5" stroke="#8be9fd" fill="none" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </div>
            
            <div className="absolute top-[15%] right-[0%] w-24 p-3 bg-dracula-current-line/70 backdrop-blur-md rounded-xl shadow-lg border border-dracula-comment/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="w-8 h-8 mx-auto rounded-full bg-dracula-green flex items-center justify-center">
                    <IconCheck className="text-dracula-background w-5 h-5" strokeWidth={3}/>
                </div>
            </div>
        </div>
    </div>
);


const Hero: React.FC<{ onStart: () => void }> = ({ onStart }) => (
    <section id="home" className="relative bg-dracula-background text-dracula-foreground overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left z-10 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-dracula-current-line text-dracula-pink text-sm font-semibold py-1 px-3 rounded-full mb-4">
                    <IconStar className="text-dracula-yellow"/>
                    Trusted by 10,000+ users
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-dracula-foreground">
                    Your Opinion Matters. <span className="text-dracula-pink">Get Paid For It.</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-dracula-comment max-w-xl mx-auto lg:mx-0">
                    Turn your thoughts into earnings. SurveyPlus connects you with brands that value your feedback. Simple, secure, and rewarding.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <button 
                        onClick={onStart} 
                        className="bg-dracula-pink text-dracula-background font-bold py-3 px-8 rounded-lg shadow-lg shadow-dracula-pink/20 hover:bg-opacity-90 transition-transform transform hover:-translate-y-1"
                    >
                        Start Earning Now &rarr;
                    </button>
                    <a href="#features" className="bg-transparent text-dracula-foreground font-semibold py-3 px-6 rounded-lg hover:bg-dracula-purple hover:text-dracula-background transition text-center border-2 border-dracula-purple shadow-sm">
                        Learn More
                    </a>
                </div>

                 <div className="mt-16 text-center lg:text-left">
                    <p className="font-semibold text-dracula-comment uppercase tracking-wider text-sm">Partnered With Top Brands</p>
                    <div className="mt-4 flex items-center justify-center lg:justify-start gap-6 text-dracula-comment">
                         <svg className="h-6" viewBox="0 0 125 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 23.33V0h8.65v23.33h-8.65Zm16.3 0V0h8.64v23.33h-8.64Zm16.3 0V0h8.64v23.33h-8.64Zm16.3 0V0h8.65v23.33h-8.65Zm16.3 0V0h8.65v23.33h-8.65Z"/></svg>
                        <svg className="h-6" viewBox="0 0 101 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 23.33V0h33.68v7.2H8.65v2.33h20.3v6.73H8.65v7.1h25.03v7.2H0Zm48.54-6.93-4.1-16.4h9.32l-4.1 16.4h-1.12Zm14.2 6.93V0h8.64v23.33h-8.64Zm16.3 0V0h8.64v23.33h-8.64Zm13.52 0V0h8.64v23.33h-8.64Z"/></svg>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center z-0 mt-12 lg:mt-0">
                <SurveyIllustration />
            </div>
        </div>
    </section>
);


const HowItWorks = () => (
    <section id="how-it-works" className="py-20 bg-dracula-current-line scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center animate-fade-in-up">
                <h2 className="text-base font-semibold text-dracula-pink uppercase tracking-wider">How It Works</h2>
                <p className="mt-2 text-3xl font-extrabold text-dracula-foreground tracking-tight sm:text-4xl">From Sign-Up to Payout in Minutes</p>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-dracula-comment">Getting started is as simple as 1, 2, 3.</p>
            </div>
            <div className="relative mt-12">
                <div className="absolute top-10 left-0 w-full h-0.5 bg-dracula-comment/30 hidden md:block" aria-hidden="true"></div>
                <div className="relative grid md:grid-cols-3 gap-12">
                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative inline-flex items-center justify-center bg-dracula-background h-20 w-20 rounded-full mb-4 ring-8 ring-dracula-current-line border-2 border-dracula-pink">
                           <span className="text-3xl font-bold text-dracula-pink">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-dracula-foreground">Sign Up Free</h3>
                        <p className="text-dracula-comment">Create your account in seconds and get instant access to available surveys.</p>
                    </div>
                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="relative inline-flex items-center justify-center bg-dracula-background h-20 w-20 rounded-full mb-4 ring-8 ring-dracula-current-line border-2 border-dracula-pink">
                           <span className="text-3xl font-bold text-dracula-pink">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-dracula-foreground">Take Surveys</h3>
                        <p className="text-dracula-comment">Choose surveys that interest you and share your valuable opinions.</p>
                    </div>
                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                       <div className="relative inline-flex items-center justify-center bg-dracula-background h-20 w-20 rounded-full mb-4 ring-8 ring-dracula-current-line border-2 border-dracula-pink">
                            <span className="text-3xl font-bold text-dracula-pink">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-dracula-foreground">Get Paid</h3>
                        <p className="text-dracula-comment">Earn rewards for every completed survey and withdraw your earnings easily.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Features = () => (
    <section id="features" className="py-20 bg-dracula-background scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center animate-fade-in-up">
                 <h2 className="text-base font-semibold text-dracula-pink uppercase tracking-wider">Features</h2>
                 <p className="mt-2 text-3xl font-extrabold text-dracula-foreground tracking-tight sm:text-4xl">Everything You Need, and More</p>
                 <p className="mt-4 max-w-2xl mx-auto text-xl text-dracula-comment">Powerful tools designed for simplicity and impact.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {FEATURES_DATA.map((feature: FeatureInfo, index: number) => (
                    <div key={index} className="bg-dracula-current-line p-6 rounded-xl border border-dracula-comment/30 hover:shadow-lg hover:shadow-dracula-pink/10 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                        <div className="text-dracula-green bg-dracula-green/10 inline-block p-4 rounded-full mb-4">{feature.icon}</div>
                        <h3 className="font-semibold text-lg mb-2 text-dracula-foreground">{feature.title}</h3>
                        <p className="text-dracula-comment">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    };
    
    const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

    return (
        <section id="testimonials" className="py-20 bg-dracula-current-line scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center animate-fade-in-up">
                     <h2 className="text-base font-semibold text-dracula-pink uppercase tracking-wider">Testimonials</h2>
                     <p className="mt-2 text-3xl font-extrabold text-dracula-foreground tracking-tight sm:text-4xl">Loved by People Worldwide</p>
                </div>
                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="absolute -top-4 -left-4 text-dracula-pink/20" style={{ fontSize: '120px', lineHeight: '1' }}>
                        &ldquo;
                    </div>
                    <div className="relative bg-dracula-background p-8 md:p-12 rounded-xl text-center border border-dracula-comment/20 animate-fade-in-up">
                        <p className="text-lg md:text-2xl text-dracula-foreground font-medium">"{currentTestimonial.quote}"</p>
                         <div className="mt-6 flex items-center justify-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-dracula-purple flex items-center justify-center font-bold text-dracula-background">{currentTestimonial.author.charAt(0)}</div>
                            <div>
                                <p className="font-bold text-dracula-foreground">{currentTestimonial.author}</p>
                                <p className="text-sm text-dracula-comment">{currentTestimonial.role}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-dracula-current-line rounded-full p-3 shadow-md hover:bg-dracula-comment transition border border-dracula-comment/30">
                        <IconChevronLeft className="text-dracula-foreground" />
                    </button>
                    <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-dracula-current-line rounded-full p-3 shadow-md hover:bg-dracula-comment transition border border-dracula-comment/30">
                        <IconChevronRight className="text-dracula-foreground" />
                    </button>
                </div>
            </div>
        </section>
    );
};

const AccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-dracula-comment/30">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5">
            <span className={`font-semibold text-lg ${isOpen ? 'text-dracula-pink' : 'text-dracula-foreground'}`}>{item.question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-dracula-pink' : 'text-dracula-comment'}`}>
                <IconChevronDown />
            </span>
        </button>
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <p className="pb-5 pr-8 text-dracula-comment leading-relaxed">{item.answer}</p>
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-dracula-background scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center animate-fade-in-up">
                    <h2 className="text-base font-semibold text-dracula-pink uppercase tracking-wider">FAQ</h2>
                    <p className="mt-2 text-3xl font-extrabold text-dracula-foreground tracking-tight sm:text-4xl">Frequently Asked Questions</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-dracula-comment">Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
                </div>
                <div className="max-w-3xl mx-auto mt-12 bg-dracula-current-line rounded-lg shadow-lg border border-dracula-comment/30 p-2 sm:p-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {FAQ_DATA.map((item, index) => (
                        <AccordionItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => (
    <section id="contact" className="py-20 bg-dracula-current-line scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center animate-fade-in-up">
                <h2 className="text-base font-semibold text-dracula-pink uppercase tracking-wider">Contact Us</h2>
                <p className="mt-2 text-3xl font-extrabold text-dracula-foreground tracking-tight sm:text-4xl">Get in Touch</p>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-dracula-comment">We're here to help and answer any question you might have.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* Left side: Contact Info */}
                <div className="lg:col-span-2 bg-gradient-to-br from-dracula-pink to-dracula-purple text-dracula-background p-8 rounded-2xl flex flex-col shadow-xl">
                    <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                    <p className="text-dracula-background/80 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-dracula-background/10 p-2 rounded-full mt-1"><IconMail className="text-dracula-background"/></div>
                            <div>
                                <span className="text-sm text-dracula-background/70">Email</span>
                                <p className="font-semibold text-lg">support@surveyplus.app</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-dracula-background/10 p-2 rounded-full mt-1"><IconPhone className="text-dracula-background"/></div>
                            <div>
                                <span className="text-sm text-dracula-background/70">Phone</span>
                                <p className="font-semibold text-lg">+254 700 123 456</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                             <div className="bg-dracula-background/10 p-2 rounded-full mt-1"><IconLocation className="text-dracula-background"/></div>
                            <div>
                                <span className="text-sm text-dracula-background/70">Address</span>
                                <p className="font-semibold text-lg">Nairobi, Kenya</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right side: Form */}
                <div className="lg:col-span-3 bg-dracula-background p-8 rounded-2xl shadow-xl border border-dracula-comment/20">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium text-dracula-comment mb-1">Full Name</label>
                                <input type="text" id="full-name" placeholder="John Doe" className="w-full p-3 bg-dracula-current-line border border-dracula-comment/50 text-dracula-foreground rounded-lg focus:ring-2 focus:ring-dracula-pink focus:border-transparent outline-none transition" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dracula-comment mb-1">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" className="w-full p-3 bg-dracula-current-line border border-dracula-comment/50 text-dracula-foreground rounded-lg focus:ring-2 focus:ring-dracula-pink focus:border-transparent outline-none transition" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-dracula-comment mb-1">Subject</label>
                            <input type="text" id="subject" placeholder="How can we help you?" className="w-full p-3 bg-dracula-current-line border border-dracula-comment/50 text-dracula-foreground rounded-lg focus:ring-2 focus:ring-dracula-pink focus:border-transparent outline-none transition" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-dracula-comment mb-1">Message</label>
                            <textarea id="message" rows={4} placeholder="Your message here..." className="w-full p-3 bg-dracula-current-line border border-dracula-comment/50 text-dracula-foreground rounded-lg focus:ring-2 focus:ring-dracula-pink focus:border-transparent outline-none transition"></textarea>
                        </div>
                        <div className="text-right">
                             <button type="submit" className="bg-dracula-pink text-dracula-background font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:-translate-y-0.5">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);


const Header: React.FC<{ onNavigateToSignUp: () => void; onNavigateToLogin: () => void; }> = ({ onNavigateToSignUp, onNavigateToLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const headerClasses = `fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
    isScrolled || isMobileMenuOpen ? 'bg-dracula-background/80 backdrop-blur-lg shadow-lg shadow-dracula-background/50 border-b border-dracula-current-line' : 'bg-transparent'
  }`;
  
  const navLinkClasses = `font-medium transition-colors duration-300 ${
    isScrolled || isMobileMenuOpen ? 'text-dracula-comment hover:text-dracula-pink' : 'text-dracula-foreground hover:text-dracula-pink'
  }`;
  
  const brandTextClasses = `transition-colors duration-300 text-dracula-foreground`;

  const loginButtonClasses = `font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-dracula-foreground hover:bg-dracula-current-line`;
  
  const signUpButtonClasses = `font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-dracula-pink/20 bg-dracula-pink text-dracula-background hover:bg-opacity-90`;
    
  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <IconLogo />
          <span className={`text-xl font-bold ${brandTextClasses}`}>SurveyPlus</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className={navLinkClasses}>Home</a>
          <a href="#features" className={navLinkClasses}>Features</a>
          <a href="#how-it-works" className={navLinkClasses}>How It Works</a>
          <a href="#faq" className={navLinkClasses}>FAQ</a>
          <a href="#contact" className={navLinkClasses}>Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <button className={loginButtonClasses} onClick={onNavigateToLogin}>Login</button>
          <button className={signUpButtonClasses} onClick={onNavigateToSignUp}>Sign Up</button>
        </div>

        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={`z-50 relative text-dracula-foreground`}>
                {isMobileMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dracula-background shadow-lg">
              <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-4">
                  <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-dracula-foreground hover:text-dracula-pink py-2">Home</a>
                  <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-dracula-foreground hover:text-dracula-pink py-2">Features</a>
                  <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-dracula-foreground hover:text-dracula-pink py-2">How It Works</a>
                  <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-dracula-foreground hover:text-dracula-pink py-2">Testimonials</a>
                  <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-dracula-foreground hover:text-dracula-pink py-2">FAQ</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-dracula-foreground hover:text-dracula-pink py-2">Contact</a>
                  <div className="pt-4 border-t border-dracula-current-line flex flex-col space-y-3">
                      <button className="w-full text-dracula-pink border border-dracula-pink font-semibold py-2 px-4 rounded-lg" onClick={onNavigateToLogin}>Login</button>
                      <button className="w-full bg-dracula-pink text-dracula-background font-semibold py-2 px-4 rounded-lg" onClick={onNavigateToSignUp}>Sign Up</button>
                  </div>
              </div>
          </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dracula-background text-dracula-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg mb-2">SurveyPlus</h3>
            <p className="text-dracula-comment text-sm">Turn opinions into earnings.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-dracula-comment">
              <li><a href="#features" className="hover:text-dracula-pink">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-dracula-pink">How it Works</a></li>
              <li><a href="#faq" className="hover:text-dracula-pink">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-dracula-comment">
              <li><a href="#" className="hover:text-dracula-pink" onClick={(e) => e.preventDefault()}>About Us</a></li>
              <li><a href="#contact" className="hover:text-dracula-pink">Contact</a></li>
              <li><a href="#" className="hover:text-dracula-pink" onClick={(e) => e.preventDefault()}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-dracula-comment">
              <li><a href="#" className="hover:text-dracula-pink" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" className="hover:text-dracula-pink" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dracula-current-line text-center text-dracula-comment text-sm">
          &copy; {new Date().getFullYear()} SurveyPlus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const LandingPage: React.FC<{ onNavigateToSignUp: () => void; onNavigateToLogin: () => void; }> = ({ onNavigateToSignUp, onNavigateToLogin }) => {
    return (
        <div className="flex flex-col min-h-screen bg-dracula-background">
            <Header onNavigateToSignUp={onNavigateToSignUp} onNavigateToLogin={onNavigateToLogin} />
            <main className="flex-grow">
                <Hero onStart={onNavigateToSignUp} />
                <HowItWorks />
                <Features />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;