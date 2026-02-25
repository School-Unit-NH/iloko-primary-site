import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { NavLink } from 'react-router';

const AdmissionsCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-iloko-red">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            {/* Soft glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-iloko-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-iloko-yellow/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <motion.div
                    className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center mb-8 border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <BookOpen size={40} className="text-iloko-yellow" />
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Ready to Take the <span className="text-iloko-yellow italic">Next Step?</span>
                </motion.h2>

                <motion.p
                    className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Join a community that celebrates excellence, fosters character, and shapes the leaders of tomorrow. Your journey begins here.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <NavLink
                        to="/apply"
                        className="group flex items-center gap-2 bg-iloko-green text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl hover:shadow-iloko-green/30"
                    >
                        Start Your Application
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="group flex items-center gap-2 bg-transparent text-white border-2 border-white/30 px-8 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        Schedule a Tour
                    </NavLink>
                </motion.div>

                <motion.p
                    className="mt-8 text-sm text-slate-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Need help? Call our admissions office at <span className="text-white">+234 (0) 800 ILOKO EDU</span>
                </motion.p>
            </div>
        </section>
    );
};

export default AdmissionsCTA;
