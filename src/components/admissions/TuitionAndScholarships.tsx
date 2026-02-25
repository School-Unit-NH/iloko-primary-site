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
                        We believe that quality education should be accessible. Our fee structure is transparent, and we offer robust scholarship programs to support outstanding and deserving students.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* Tuition Overview Card */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col h-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-iloko-red mb-2">Fee Overview</h3>
                        <p className="text-slate-500 mb-8">Comprehensive education with transparent pricing.</p>

                        <div className="space-y-6 flex-grow">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-red text-lg">Tuition Covers Academics & Co-curriculars</h4>
                                    <p className="text-slate-600 text-sm mt-1">Our standard fees cover all core academic instruction, access to laboratories, library resources, and standard co-curricular activities.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-red text-lg">Boarding vs. Day Setup</h4>
                                    <p className="text-slate-600 text-sm mt-1">Fees vary slightly depending on whether the student is a full boarder, weekly boarder, or day student. Boarding fees are comprehensive of meals and accommodation.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-red text-lg">Flexible Payment Plans</h4>
                                    <p className="text-slate-600 text-sm mt-1">We offer annual, termly, and specialized installment plans to ease the financial commitment for parents.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex gap-3 text-sm">
                                <Info className="shrink-0 mt-0.5" size={18} />
                                <p>For a detailed breakdown of current academic year fees, please contact the admissions office or download our comprehensive fee schedule.</p>
                            </div>
                            <button className="w-full mt-6 py-4 rounded-xl border-2 border-iloko-red text-iloko-red font-semibold hover:bg-iloko-red hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                                Download Fee Schedule <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Scholarships Card */}
                    <motion.div
                        className="bg-iloko-red rounded-3xl p-8 md:p-12 shadow-xl text-white flex flex-col h-full relative overflow-hidden"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-iloko-yellow/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 bg-iloko-yellow/20 text-iloko-yellow rounded-2xl flex items-center justify-center mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">Scholarships & Aid</h3>
                            <p className="text-slate-300 mb-8">Empowering excellence regardless of background.</p>

                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="font-semibold text-iloko-yellow text-xl flex items-center gap-2 mb-2">
                                        Academic Excellence Awards
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Awarded to incoming students who achieve the top scores in our entrance examinations. These highly competitive scholarships can cover up to 50% of tuition fees.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-yellow text-xl flex items-center gap-2 mb-2">
                                        Sports & Arts Scholarships
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Designed for students demonstrating exceptional talent in athletics, music, or the fine arts, subject to an audition or portfolio review.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-iloko-yellow text-xl flex items-center gap-2 mb-2">
                                        Need-Based Financial Aid
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        A limited number of bursaries are available to support students from disadvantaged backgrounds who meet our rigorous academic standards.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <button className="w-full py-4 rounded-xl bg-iloko-yellow text-iloko-red font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                                    Learn About Applications <ArrowRight size={18} />
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
