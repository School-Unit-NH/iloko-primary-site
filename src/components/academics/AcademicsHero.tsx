import { motion } from 'framer-motion';

const AcademicsHero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background image overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', // Library/Study image
                }}
            >
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto custom-hero-pt">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-iloko-yellow/20 text-iloko-yellow border border-iloko-yellow/30 text-sm font-semibold tracking-wider uppercase mb-6">
                        Academic Excellence
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    A Culture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-iloko-yellow to-yellow-200 italic">Discovery</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Our rigorous curriculum and innovative teaching methods inspire a lifelong love of learning and prepare students for global success.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-sm font-medium tracking-widest uppercase mb-2">Explore</span>
                <div className="w-px h-16 bg-white/30 relative overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-white absolute top-0"
                        animate={{ top: ['-50%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default AcademicsHero;
