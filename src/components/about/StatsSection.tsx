import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, Globe } from 'lucide-react';

const stats = [
    { icon: Users, value: '1,200+', label: 'Enrolled Students' },
    { icon: BookOpen, value: '10:1', label: 'Student-Teacher Ratio' },
    { icon: Trophy, value: '100%', label: 'University Acceptance' },
    { icon: Globe, value: '50+', label: 'Alumni Across the Globe' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const StatsSection = () => {
    return (
        <section className="py-20 bg-iloko-yellow relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-iloko-red/10 rounded-full flex items-center justify-center mb-4">
                                    <Icon className="w-8 h-8 text-iloko-red" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-iloko-red mb-2">{stat.value}</h3>
                                <p className="text-iloko-red/80 font-semibold uppercase tracking-wider text-sm">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
