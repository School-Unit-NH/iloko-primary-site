import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Target } from 'lucide-react';

const features = [
    {
        icon: <BookOpen className="w-8 h-8 text-iloko-yellow" />,
        title: "Academic Excellence",
        description: "Rigorous curriculum reflecting the best of the Nigerian and international academic standards."
    },
    {
        icon: <Users className="w-8 h-8 text-iloko-yellow" />,
        title: "Vibrant Community",
        description: "A diverse and inclusive environment where every student is known, valued, and supported."
    },
    {
        icon: <Globe className="w-8 h-8 text-iloko-yellow" />,
        title: "Global Perspective",
        description: "Preparing students for a connected world through deep local roots and global perspectives."
    },
    {
        icon: <Target className="w-8 h-8 text-iloko-yellow" />,
        title: "Ethics & Leadership",
        description: "Developing ethical leaders committed to integrity, empathy, and national development."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const FeaturesSection = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-iloko-green uppercase mb-3">Our Pillars</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-iloko-red mb-6">The Iloko Difference</h3>
                    <p className="text-lg text-slate-700">
                        We believe in educating the whole child. Our approach balances academic rigor with personal growth, preparing students not just for higher education, but for life.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            variants={itemVariants}
                        >
                            <div className="w-16 h-16 rounded-xl bg-iloko-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-iloko-red mb-3">{feature.title}</h4>
                            <p className="text-slate-700 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
