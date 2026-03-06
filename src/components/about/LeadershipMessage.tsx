import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const LeadershipMessage = () => {
    return (
        <section className="py-24 bg-iloko-red text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-iloko-blue/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-iloko-yellow/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">


                    <motion.div
                        className="w-full lg:w-5/12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-iloko-yellow rounded-2xl transform translate-x-4 translate-y-4"></div>
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Head of School"
                                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl border-4 border-white/10"
                            />
                        </div>
                    </motion.div>


                    <motion.div
                        className="w-full lg:w-7/12"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <Quote className="w-16 h-16 text-iloko-yellow/50 mb-6" />

                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-white">
                            "Education is not just about academic excellence; it is about building the character required to use that knowledge for the good of society."
                        </h2>

                        <div className="space-y-4 text-slate-300 text-lg mb-10 leading-relaxed">
                            <p>
                                Welcome to Iloko Primary School. For over fifty years, we have been committed to creating an environment where young minds can flourish. Our approach is holistic—we believe that every student has unique talents waiting to be discovered and nurtured.
                            </p>
                            <p>
                                As we look to the future, we remain dedicated to our core values, combining traditional wisdom with modern innovation to prepare our students for the challenges of tomorrow.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-white mb-1">Dr. Samuel Adeyemi</h4>
                            <p className="text-iloko-yellow uppercase tracking-wider text-sm font-semibold">Principal & Head of School</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LeadershipMessage;
