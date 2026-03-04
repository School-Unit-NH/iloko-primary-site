import { motion } from 'framer-motion';
import { Download, CalendarDays } from 'lucide-react';

const AcademicCTA = () => {
    return (
        <section className="py-20 bg-iloko-yellow relative overflow-hidden">

            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-iloko-red" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-iloko-red font-bold mb-6">
                        Dive Deeper into Our Program
                    </h2>
                    <p className="text-xl text-iloko-red/80 mb-10 max-w-2xl mx-auto">
                        Download the full course catalog or review our academic calendar to see how we structure the school year for success.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <button className="group flex items-center gap-3 bg-iloko-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-iloko-red transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl">
                        <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                        Download Syllabus
                    </button>

                    <button className="group flex items-center gap-3 bg-transparent text-iloko-red border-2 border-iloko-red px-8 py-4 rounded-full font-bold text-lg hover:bg-iloko-red hover:text-white transition-all duration-300 w-full sm:w-auto justify-center">
                        <CalendarDays size={20} />
                        Academic Calendar
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default AcademicCTA;
