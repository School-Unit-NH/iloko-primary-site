import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

const CurriculumOverview = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif text-iloko-red mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our <span className="text-iloko-yellow italic">Curriculum</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our curriculum supports children from creche to primary with age-appropriate learning, strong foundations, and steady academic progress.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">


                    <motion.div
                        className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-iloko-yellow/30 transition-colors duration-300 group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-16 h-16 bg-iloko-red text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-iloko-red mb-4">Nursery & Lower Primary <span className="text-xl font-normal text-slate-500 block sm:inline mt-1 sm:mt-0">(Nursery - Primary 3)</span></h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            This stage builds the habits, confidence, and early academic skills children need through playful lessons, guidance, and repeated practice.
                        </p>

                        <div className="space-y-4 mb-8">
                            <h4 className="font-semibold text-iloko-red border-b border-slate-200 pb-2">Core Areas</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-iloko-yellow"></div>Numeracy</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-iloko-yellow"></div>Literacy</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-iloko-yellow"></div>Basic Science</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-iloko-yellow"></div>Social and Citizenship Studies</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-iloko-yellow"></div>Creative Arts</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-iloko-yellow"></div>Digital Technology</li>
                            </ul>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-100 text-sm text-slate-500 flex items-start gap-3">
                            <span className="font-bold text-iloko-red shrink-0">Focus:</span>
                            <p>Developing strong foundational skills, curiosity, and a love for learning in a playful but structured environment.</p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="bg-iloko-red text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >

                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 transition-transform duration-700 group-hover:scale-150"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-iloko-yellow text-iloko-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-3xl text-iloko-white font-bold mb-4">Upper Primary <span className="text-xl font-normal text-slate-300 block sm:inline mt-1 sm:mt-0">(Primary 4 - 6)</span></h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                In Upper Primary, children strengthen reading, writing, arithmetic, and confidence so they are ready for the next stage of learning.
                            </p>

                            <div className="space-y-4 mb-8">
                                <h4 className="font-semibold text-iloko-yellow border-b border-white/20 pb-2">Core Subjects</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                                        <h5 className="font-bold text-white mb-1">Core Learning</h5>
                                        <p className="text-xs text-slate-300">English, Mathematics, Basic Science</p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                                        <h5 className="font-bold text-white mb-1">Social Studies</h5>
                                        <p className="text-xs text-slate-300">Citizenship, values, and community awareness</p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                                        <h5 className="font-bold text-white mb-1">Creative Growth</h5>
                                        <p className="text-xs text-slate-300">Art, music, sports, and clubs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-sm text-slate-300 flex items-start gap-3 backdrop-blur-sm">
                                <span className="font-bold text-iloko-yellow shrink-0">Culmination:</span>
                                <p>Preparation for the next class with confidence, strong habits, and readiness for future placement.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CurriculumOverview;
