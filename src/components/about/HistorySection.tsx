import { motion } from 'framer-motion';
import { schoolView5 } from '../../assets';

const HistorySection = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">


                    <motion.div
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-iloko-red uppercase mb-3">Heritage</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-iloko-red mb-8">
                            The Story of <span className="text-iloko-green italic">IMKA</span>
                        </h3>

                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                            <p>
                                Iloko Model Kiddies Academy opened in September 2019 as the primary section of the wider Iloko Model family. It was created to give younger children a strong and caring beginning to formal education.
                            </p>
                            <p>
                                The school has grown into a trusted home for creche, kindergarten, nursery, and primary pupils, with a culture of discipline, care, and steady academic progress.
                            </p>
                            <p>
                                Under the leadership of Mr. Fatomilola Oladosu Abiodun, IMKA continues to invest in safety, digital learning, trained staff, and child-centered development.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="w-full lg:w-1/2 relative order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img loading="lazy"
                                src={schoolView5}
                                alt="School environment"
                                className="w-full h-auto object-cover"
                            />

                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                                <span className="block text-3xl font-bold text-iloko-red mb-1">Since 2019</span>
                                <span className="text-sm text-slate-600 font-semibold uppercase tracking-wider">Growing Young Minds</span>
                            </div>
                        </div>


                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-iloko-yellow/20 rounded-full blur-3xl z-0"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-iloko-blue/20 rounded-full blur-3xl z-0"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HistorySection;
