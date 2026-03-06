import { motion } from 'framer-motion';
import { contactUSView } from '../../assets';


const ContactHero = () => {
    return (
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">

            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                style={{
                    backgroundImage: `url("${contactUSView}")`,
                }}
            >

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto custom-hero-pt mt-16 md:mt-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-iloko-yellow/20 text-iloko-yellow border border-iloko-yellow/30 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                        Get In Touch
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-iloko-yellow to-yellow-200 italic">Us</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto line-relaxed drop-shadow-md font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Have questions about our programs or admissions? Our team is here to help you navigate your journey at Iloko.
                </motion.p>
            </div>

        </section>
    );
};

export default ContactHero;
