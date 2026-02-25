import { motion } from 'framer-motion';

const HistorySection = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text side */}
                    <motion.div
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-iloko-red uppercase mb-3">Heritage</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-iloko-red mb-8">
                            Five Decades of <span className="text-iloko-green italic">Impact</span>
                        </h3>

                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                            <p>
                                Founded in 1970 by visionary educators, Iloko Primary School began with a humble cohort of 50 students in a small building. Our founders believed that a rigorous education combined with character training could profoundly change the trajectory of young lives.
                            </p>
                            <p>
                                Over the years, we have grown into a sprawling 50-acre campus with state-of-the-art facilities, serving over 1,000 students annually. Despite our growth, we have never lost sight of our founding ethos: to know and nurture every individual student.
                            </p>
                            <p>
                                Today, Iloko alumni can be found leading top organizations, conducting groundbreaking research, and serving their communities across Nigeria and the globe. Our legacy is written in the success and integrity of the young men and women who pass through our gates.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Historic campus building"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay tag */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                                <span className="block text-3xl font-bold text-iloko-red mb-1">Est. 1970</span>
                                <span className="text-sm text-slate-600 font-semibold uppercase tracking-wider">A Legacy of Excellence</span>
                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-iloko-yellow/20 rounded-full blur-3xl z-0"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-iloko-blue/20 rounded-full blur-3xl z-0"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HistorySection;
