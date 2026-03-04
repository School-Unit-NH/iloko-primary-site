import { motion } from 'framer-motion';

const GalleryHero = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">

            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto custom-hero-pt mt-16 md:mt-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white border border-white/20 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                        Campus Life
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Moments at <span className="text-transparent bg-clip-text bg-gradient-to-r from-iloko-yellow to-yellow-200 italic">Iloko</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Explore our vibrant community through a visual journey of campus life, academic pursuits, and extracurricular excellence.
                </motion.p>
            </div>

        </section>
    );
};

export default GalleryHero;
