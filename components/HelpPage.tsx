
import React, { useState, useMemo } from 'react';
import { HELP_PAGE_DATA, IconSearch, IconChevronDown, IconMail, IconPhone, IconChevronRight } from '../constants';

interface FAQ {
    question: string;
    answer: string;
}

const AccordionItem: React.FC<{ faq: FAQ; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-acid-neutral/60">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left py-5 px-1"
            aria-expanded={isOpen}
        >
            <span className="font-semibold text-acid-content text-lg">{faq.question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-acid-primary' : 'text-gray-400'}`}>
                <IconChevronDown />
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
            <div className="pb-5 pr-4 text-gray-400 leading-relaxed">
                {faq.answer}
            </div>
        </div>
    </div>
);


const HelpPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) {
            return HELP_PAGE_DATA;
        }

        const lowercasedFilter = searchTerm.toLowerCase();
        
        return HELP_PAGE_DATA.map(category => {
            const filteredFaqs = category.faqs.filter(faq =>
                faq.question.toLowerCase().includes(lowercasedFilter) ||
                faq.answer.toLowerCase().includes(lowercasedFilter)
            );
            return { ...category, faqs: filteredFaqs };
        }).filter(category => category.faqs.length > 0);
    }, [searchTerm]);

    const handleAccordionClick = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div>
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-acid-content tracking-tight">Help & Support</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400">
                    Have questions? We're here to help.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
                <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search for topics, questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-4 pl-12 pr-4 bg-acid-neutral border border-acid-neutral/60 rounded-lg focus:ring-2 focus:ring-acid-primary focus:border-transparent outline-none transition shadow-sm text-acid-content"
                    aria-label="Search help topics"
                />
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-12">
                {filteredData.length > 0 ? (
                    filteredData.map((category, catIndex) => (
                        <div key={category.category}>
                            <h2 className="text-2xl font-bold text-acid-content mb-4 pb-2 border-b-2 border-acid-neutral/60">{category.category}</h2>
                            <div className="space-y-1">
                                {category.faqs.map((faq, faqIndex) => {
                                    const faqId = `${catIndex}-${faqIndex}`;
                                    return (
                                        <AccordionItem
                                            key={faqId}
                                            faq={faq}
                                            isOpen={openAccordion === faqId}
                                            onClick={() => handleAccordionClick(faqId)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-16 bg-acid-neutral rounded-lg border border-dashed border-acid-neutral/60">
                        <h3 className="text-xl font-semibold text-gray-300">No Results Found</h3>
                        <p className="text-gray-500 mt-2">We couldn't find any answers matching your search for "{searchTerm}".</p>
                        <p className="text-gray-500 mt-1">Try different keywords or contact support below.</p>
                    </div>
                )}
            </div>
            
            {/* Contact Card */}
            <div className="max-w-4xl mx-auto mt-16 bg-acid-neutral p-8 rounded-2xl shadow-lg border border-acid-neutral/60">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-acid-content">Still need help?</h3>
                        <p className="text-gray-400 mt-1">Our support team is available to assist you.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 font-semibold py-2.5 px-5 rounded-lg border border-gray-600 bg-acid-neutral text-acid-content hover:bg-acid-base-100 transition">
                            <IconPhone className="w-5 h-5"/> Call Us
                        </button>
                         <button className="w-full sm:w-auto flex items-center justify-center gap-2 font-semibold py-2.5 px-5 rounded-lg bg-acid-primary text-acid-base-100 hover:opacity-90 transition">
                            <IconMail className="w-5 h-5"/> Contact Support <IconChevronRight className="w-5 h-5 -mr-1.5"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;