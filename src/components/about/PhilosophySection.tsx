import { motion } from 'framer-motion';
import { NavLink } from 'react-router';
import { ArrowRight } from 'lucide-react';

const PhilosophySection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 rounded-3xl p-10 lg:p-16 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-iloko-red mb-6">
                            Ready to Experience Iloko?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
                            Our educational philosophy centers on active, project-based learning. We don't just teach for exams; we ignite a lifelong passion for discovery. Join us and be part of a vibrant learning community.
                        </p>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/3 flex justify-center lg:justify-end w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <NavLink
                            to="/admissions"
                            className="inline-flex items-center justify-center gap-3 bg-iloko-green text-white px-8 py-4 rounded-full font-semibold hover:bg-red-800 transition-colors duration-300 w-full sm:w-auto"
                        >
                            Apply Now
                            <ArrowRight size={20} />
                        </NavLink>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
