import { motion } from 'framer-motion';
import { BookMarked, UserPlus, HeartHandshake } from 'lucide-react';
import { class1, class2, schoolView3 } from '../../assets';

const supportServices = [
    {
        id: "support-library",
        title: "Strong Foundations",
        description: "We focus on reading, writing, and number work so every child builds a stable base for future learning.",
        icon: BookMarked,
        image: class1,
    },
    {
        id: "support-tutoring",
        title: "Extra Guidance",
        description: "Teachers give extra support where needed and help children settle comfortably into the right class and pace.",
        icon: UserPlus,
        image: class2,
    },
    {
        id: "support-counseling",
        title: "Care and Safety",
        description: "Our clinic, security, and child-friendly environment help families feel confident about daily school life.",
        icon: HeartHandshake,
        image: schoolView3,
    }
];

const AcademicSupport = () => {
    return (
        <section className="py-24 bg-slate-100 relative">
            <div className="absolute inset-0 bg-iloko-red/5" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif text-iloko-red mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Academic <span className="text-iloko-green italic">Support</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We support children with care, guidance, and a safe environment so they can learn comfortably and steadily.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {supportServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="relative h-48">
                                <div className="overflow-hidden h-full">
                                    <img
                                        loading="lazy"
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-iloko-red/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>

                                <div className="absolute -bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-iloko-yellow z-20 group-hover:bg-iloko-yellow group-hover:text-white transition-colors duration-300">
                                    <service.icon size={24} />
                                </div>
                            </div>
                            <div className="p-8 pt-10 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-iloko-red mb-3 group-hover:text-iloko-green transition-colors">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicSupport;
