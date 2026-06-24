import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: "What is the age requirement for admission?",
        answer: "For Primary 1, children should be at least 5 years old by September of the admission year. Other classes are placed based on age and the last class completed."
    },
    {
        id: 2,
        question: "Do you accept mid-term or mid-year transfers?",
        answer: "Yes. We admit children as they come, and transfer pupils should bring their last report card and transfer documents."
    },
    {
        id: 3,
        question: "What subjects are covered in the entrance examination?",
        answer: "The entrance screening helps us understand the child's level so we can place them correctly and support them well."
    },
    {
        id: 4,
        question: "Is transportation available?",
        answer: "Yes. School buses are available for day students living within the service area."
    },
    {
        id: 5,
        question: "What is the school year schedule?",
        answer: "The academic session begins in September each year, although pupils can also be admitted as they come."
    },
    {
        id: 6,
        question: "Does the school support all faiths?",
        answer: "Yes. Iloko Model Kiddies Academy is non-religious-based, admits pupils of all faiths, and includes prayer times for both Muslims and Christians."
    }
];

const AdmissionsFAQ = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif text-iloko-red mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-iloko-red to-iloko-yellow italic">Questions</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Find quick answers about age, transfers, transport, fees, and school visits.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openId === faq.id ? 'border-iloko-yellow/50 bg-iloko-yellow/5 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <span className={`font-semibold text-lg pr-8 transition-colors duration-300 ${openId === faq.id ? 'text-iloko-yellow' : 'text-iloko-red'}`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openId === faq.id ? 'bg-iloko-yellow text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100/50 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-slate-600 mb-4">Still have questions?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center text-iloko-red font-semibold hover:text-iloko-green transition-colors duration-300 border-b-2 border-transparent hover:border-iloko-green pb-1"
                    >
                        Contact the School Office
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default AdmissionsFAQ;
