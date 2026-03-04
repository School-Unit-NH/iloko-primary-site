import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">


                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 relative z-10">
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Students studying"
                                className="w-full h-[200px] sm:h-[300px] object-cover rounded-2xl shadow-xl mt-6 sm:mt-12"
                            />
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Campus architecture"
                                className="w-full h-[250px] sm:h-[400px] object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-iloko-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
                    </motion.div>


                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-iloko-red uppercase mb-3">Our Legacy</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-iloko-red mb-8">
                            A Tradition of <span className="text-iloko-green italic">Excellence</span>
                        </h3>

                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            Founded on the principles of academic rigor and character development, Iloko Primary School has been a beacon of educational excellence in Nigeria for over five decades. Our unique approach blends strong moral foundations with innovative, project-based learning.
                        </p>
                        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
                            We empower our students to think critically, act compassionately, and lead confidently. Join a diverse community where every individual's potential is recognized and nurtured.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10 border-t border-b border-slate-200 py-6">
                            <div>
                                <span className="block text-4xl font-bold text-iloko-red mb-1">10:1</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Student-Faculty Ratio</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-iloko-red mb-1">100%</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">University Admission Rate</span>
                            </div>
                        </div>

                        <NavLink
                            to="/about"
                            className="inline-block border-b-2 border-iloko-green text-iloko-red font-bold pb-1 hover:text-iloko-green transition-colors"
                        >
                            Explore Our History →
                        </NavLink>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
