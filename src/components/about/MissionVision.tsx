import { motion } from 'framer-motion';
import { Target, Compass, Star } from 'lucide-react';

const MissionVision = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-50 p-10 lg:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-iloko-yellow/10 rounded-bl-full -z-0"></div>
                        <Target className="w-12 h-12 text-iloko-green mb-6 relative z-10" />
                        <h2 className="text-3xl font-serif font-bold text-iloko-red mb-4 relative z-10">Our Mission</h2>
                        <p className="text-lg text-slate-700 leading-relaxed relative z-10">
                            To empower students with the knowledge, skills, and moral foundation necessary to excel academically and contribute positively to society. We strive to cultivate critical thinkers who are compassionate and resilient.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-iloko-red p-10 lg:p-12 rounded-3xl text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0"></div>
                        <Compass className="w-12 h-12 text-iloko-yellow mb-6 relative z-10" />
                        <h2 className="text-3xl font-serif font-bold text-white mb-4 relative z-10">Our Vision</h2>
                        <p className="text-lg text-slate-300 leading-relaxed relative z-10">
                            To be the leading primary educational institution in West Africa, recognized globally for producing innovative leaders who drive sustainable transformation in their communities and the world.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div
                    className="mt-24 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-sm font-bold tracking-widest text-iloko-red uppercase mb-3">Our Principles</h3>
                    <h2 className="text-4xl font-serif font-bold text-iloko-red mb-12">Core Values</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Excellence', desc: 'Striving for the highest standards in all endeavors.' },
                            { title: 'Integrity', desc: 'Acting with honesty, transparency, and strong moral principles.' },
                            { title: 'Innovation', desc: 'Embracing creative solutions to complex problems.' },
                            { title: 'Compassion', desc: 'Fostering a caring, inclusive, and supportive community.' }
                        ].map((value, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-iloko-red group hover:bg-iloko-yellow transition-colors duration-300">
                                    <Star className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-xl font-bold text-iloko-red mb-2">{value.title}</h4>
                                <p className="text-slate-600 w-full max-w-xs">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVision;
