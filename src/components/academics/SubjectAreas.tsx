import { motion } from 'framer-motion';
import { Languages, Calculator, Globe, Laptop, Brush, Users } from 'lucide-react';

const learningAreas = [
    {
        id: "area-literacy",
        title: "Literacy",
        description: "Reading, writing, speaking, and listening skills that help children communicate clearly and grow in confidence.",
        icon: Languages,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        id: "area-numeracy",
        title: "Numeracy",
        description: "Counting, number sense, and practical mathematics built through regular practice and guided support.",
        icon: Calculator,
        color: "text-green-500",
        bgColor: "bg-green-50",
    },
    {
        id: "area-social",
        title: "Social Studies",
        description: "Helping pupils understand family, community, values, and responsible citizenship from an early age.",
        icon: Globe,
        color: "text-amber-500",
        bgColor: "bg-amber-50",
    },
    {
        id: "area-technology",
        title: "Digital Technology",
        description: "Age-appropriate computer exposure that introduces children to simple technology skills in a guided way.",
        icon: Laptop,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
    },
    {
        id: "area-creativity",
        title: "Creative Arts",
        description: "Art, music, drama, and expression that help children discover talent and enjoy learning.",
        icon: Brush,
        color: "text-red-500",
        bgColor: "bg-red-50",
    },
    {
        id: "area-values",
        title: "Character Building",
        description: "Daily habits, prayer time, respect, and teamwork that shape good behavior and healthy relationships.",
        icon: Users,
        color: "text-teal-500",
        bgColor: "bg-teal-50",
    },
];

const SubjectAreas = () => {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif text-iloko-red mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Learning <span className="text-iloko-yellow italic">Areas</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our program blends academic basics, creativity, technology, and character development so every child grows well-rounded.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {learningAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-iloko-yellow/30 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 ${area.bgColor} ${area.color}`}>
                                <area.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-iloko-red mb-3 group-hover:text-iloko-green transition-colors">
                                {area.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubjectAreas;
