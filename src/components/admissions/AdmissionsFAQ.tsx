import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: "What is the age requirement for admission?",
        answer: "For entry into Nursery, candidates should be at least 3 years old by September of the year of admission. For entry into Primary 1, candidates should be at least 5 years old. Corresponding age requirements apply for other classes. Please contact the admissions office for specific details."
    },
    {
        id: 2,
        question: "Do you accept mid-term or mid-year transfers?",
        answer: "We generally advise students to start at the beginning of the academic year for optimal integration. However, transfers are considered on a case-by-case basis depending on space availability and the applicant's academic standing."
    },
    {
        id: 3,
        question: "What subjects are covered in the entrance examination?",
        answer: "The written entrance examination assesses candidates in Mathematics, English Language, and General Knowledge (including Basic Science and Social Studies). Past questions are not provided, but the exam covers standard primary school curricula."
    },
    {
        id: 4,
        question: "Is boarding compulsory for all students?",
        answer: "No, boarding is not compulsory. We offer full boarding, weekly boarding (Monday to Friday), and day options to cater to different family needs and geographical locations."
    },
    {
        id: 5,
        question: "How can international students apply?",
        answer: "International students follow the same online application process. Interviews can be conducted virtually via video conferencing, and entrance examinations can often be invigilated at the candidate's current school by arrangement."
    },
    {
        id: 6,
        question: "What support is available for students with special educational needs?",
        answer: "We strive to create an inclusive environment. Parents must disclose any diagnosed special needs during the application process so we can assess whether our current learning support resources can adequately meet the child's requirements."
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
                        Find quick answers to common queries about our admissions process, requirements, and policies.
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
                        Contact our Admissions Team
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default AdmissionsFAQ;
