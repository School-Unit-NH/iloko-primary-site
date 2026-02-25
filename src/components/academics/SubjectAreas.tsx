import { motion } from 'framer-motion';
import { Languages, Calculator, Globe, Laptop, Brush, Users } from 'lucide-react';

const departments = [
    {
        id: "dept-languages",
        title: "Languages",
        description: "Fostering effective communication through mastery of English, French, and major Nigerian languages, alongside profound literary analysis.",
        icon: Languages,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        id: "dept-math-sci",
        title: "Mathematics & Sciences",
        description: "Cultivating analytical thinking and empirical observation through rigorous coursework in Mathematics, Physics, Chemistry, and Biology.",
        icon: Calculator,
        color: "text-green-500",
        bgColor: "bg-green-50",
    },
    {
        id: "dept-humanities",
        title: "Humanities",
        description: "Exploring the human experience and societal evolution through History, Government, Geography, and Religious Studies.",
        icon: Globe,
        color: "text-amber-500",
        bgColor: "bg-amber-50",
    },
    {
        id: "dept-technology",
        title: "Technology & Engineering",
        description: "Preparing students for the digital age with comprehensive training in Computer Studies, Basic Technology, and Data Processing.",
        icon: Laptop,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
    },
    {
        id: "dept-arts",
        title: "Arts & Aesthetics",
        description: "Encouraging creative expression and appreciation of beauty through Fine Arts, Music, and Drama.",
        icon: Brush,
        color: "text-red-500",
        bgColor: "bg-red-50",
    },
    {
        id: "dept-commercial",
        title: "Business & Commerce",
        description: "Instilling financial literacy and entrepreneurial acumen through Economics, Accounting, and Commerce.",
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
                        Academic <span className="text-iloko-yellow italic">Departments</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our specialized departments are staffed by expert educators passionate about their disciplines, ensuring rigorous and engaging instruction.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept, index) => (
                        <motion.div
                            key={dept.id}
                            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-iloko-yellow/30 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 ${dept.bgColor} ${dept.color}`}>
                                <dept.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-iloko-red mb-3 group-hover:text-iloko-green transition-colors">
                                {dept.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {dept.description}
                            </p>

                            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-sm font-semibold text-iloko-yellow cursor-pointer hover:underline">Explore Syllabus</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SubjectAreas;
