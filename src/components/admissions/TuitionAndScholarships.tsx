import { motion } from 'framer-motion';
import { Check, Info, ArrowRight, Award } from 'lucide-react';

const TuitionAndScholarships = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif text-iloko-red mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Tuition & <span className="text-iloko-green italic">Scholarships</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We keep fees affordable and offer support for families who need flexibility or financial assistance.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <motion.div
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col h-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-iloko-red mb-2">Fee Overview</h3>
                        <p className="text-slate-500 mb-8">Fees are paid termly and shared on request.</p>

                        <div className="space-y-6 flex-grow">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-red text-lg">What Fees Usually Cover</h4>
                                    <p className="text-slate-600 text-sm mt-1">Tuition, learning materials, sports, co-curricular activities, and access to school facilities.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-red text-lg">Day Student Support</h4>
                                    <p className="text-slate-600 text-sm mt-1">School bus transportation is available for day students living within the service area.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-red text-lg">Flexible Support</h4>
                                    <p className="text-slate-600 text-sm mt-1">Families with genuine financial concerns may speak confidentially to the Principal for help.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex gap-3 text-sm">
                                <Info className="shrink-0 mt-0.5" size={18} />
                                <p>For the current fee breakdown, please contact the admissions office or ask for a fee schedule through the school website.</p>
                            </div>
                            <button className="w-full mt-6 py-4 rounded-xl border-2 border-iloko-red text-iloko-red font-semibold hover:bg-iloko-red hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                                Request Fee Breakdown <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-iloko-red rounded-3xl p-8 md:p-12 shadow-xl text-white flex flex-col h-full relative overflow-hidden"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-iloko-yellow/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 bg-iloko-yellow/20 text-iloko-yellow rounded-2xl flex items-center justify-center mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">Scholarships & Aid</h3>
                            <p className="text-slate-300 mb-8">Support is available for deserving families and students.</p>

                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="font-semibold text-iloko-yellow text-xl flex items-center gap-2 mb-2">
                                        Merit-Based Scholarships
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Offered to indigent students in the community who perform exceptionally well in the entrance examination.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-yellow text-xl flex items-center gap-2 mb-2">
                                        Sibling Discount
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Available for families with at least three siblings enrolled.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-yellow text-xl flex items-center gap-2 mb-2">
                                        Need-Based Assistance
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Parents can write confidentially to the Principal if they need help with fees.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <button className="w-full py-4 rounded-xl bg-iloko-yellow text-iloko-red font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                                    Learn About Admissions <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TuitionAndScholarships;
