import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);


        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);


            setTimeout(() => {
                setIsSubmitted(false);

                const form = document.getElementById('contact-form') as HTMLFormElement;
                if (form) form.reset();
            }, 5000);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden relative"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-iloko-red via-iloko-yellow to-iloko-green"></div>

            <div className="p-8 md:p-10">
                <h2 className="text-3xl font-serif font-bold text-iloko-red mb-2">Send a Message</h2>
                <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you promptly.</p>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                        <p className="text-slate-600">Thank you for reaching out. We've received your inquiry and will respond to the email provided shortly.</p>
                    </motion.div>
                ) : (
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-semibold text-slate-700 block">First Name <span className="text-iloko-green">*</span></label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iloko-yellow/50 focus:border-iloko-yellow transition-all duration-300 bg-slate-50 focus:bg-white"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-semibold text-slate-700 block">Last Name <span className="text-iloko-green">*</span></label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iloko-yellow/50 focus:border-iloko-yellow transition-all duration-300 bg-slate-50 focus:bg-white"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700 block">Email Address <span className="text-iloko-green">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iloko-yellow/50 focus:border-iloko-yellow transition-all duration-300 bg-slate-50 focus:bg-white"
                                placeholder="john.doe@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-semibold text-slate-700 block">Subject of Inquiry</label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iloko-yellow/50 focus:border-iloko-yellow transition-all duration-300 bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                    backgroundPosition: `right 1rem center`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundSize: `1.5em 1.5em`,
                                }}
                            >
                                <option value="general">General Inquiry</option>
                                <option value="admissions">Admissions & Enrollment</option>
                                <option value="academics">Curriculum & Academics</option>
                                <option value="support">Technical Support</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-slate-700 block">Your Message <span className="text-iloko-green">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-iloko-yellow/50 focus:border-iloko-yellow transition-all duration-300 bg-slate-50 focus:bg-white resize-none"
                                placeholder="How can we help you today?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full group relative px-8 py-4 bg-iloko-red text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin text-iloko-yellow" />
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </>
                                )}
                            </span>

                            <div className="absolute inset-0 bg-iloko-green translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 rounded-xl z-0"></div>
                        </button>
                    </form>
                )}
            </div>
        </motion.div>
    );
};

export default ContactForm;
