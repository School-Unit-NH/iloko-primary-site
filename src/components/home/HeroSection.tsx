import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { schoolBanner } from '../../assets';

const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background image overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url("${schoolBanner}")`,
                }}
            >
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto custom-hero-pt">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-iloko-yellow/20 text-iloko-yellow border border-iloko-yellow/30 text-sm font-semibold tracking-wider uppercase mb-6">
                        Excellence. Character. Community.
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Inspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-iloko-yellow to-yellow-200">Minds</span>,<br />
                    Shaping <span className="italic">Futures</span> */}
                    ILOKO MODEL KIDDIES ACADEMY
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    A vibrant educational community dedicated to empowering students with the skills, knowledge, and character to lead in Nigeria and the world.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <NavLink
                        to="/admissions"
                        className="group flex items-center gap-2 bg-iloko-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-iloko-green transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
                    >
                        Apply Now
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="group flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        Discover IMKA
                    </NavLink>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            {/* <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-sm font-medium tracking-widest uppercase mb-2">Scroll</span>
                <div className="w-px h-16 bg-white/30 relative overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-white absolute top-0"
                        animate={{ top: ['-50%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </div>
            </motion.div> */}
        </section>
    );
};

export default HeroSection;
