import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { class1, class2, schoolView1 } from '../../assets';


const programs = [
    {
        title: "Nursery & Lower Primary",
        description: "Building strong foundations through interactive learning and core skill development to prepare for their educational journey.",
        image: class1,
        tags: ["Core Subjects", "Creative Arts", "Early Learning"]
    },
    {
        title: "Upper Primary (Primary 4-6)",
        description: "Rigorous academic preparation fostering critical thinking and excellence for National Common Entrance Examinations.",
        image: class2,
        tags: ["Common Entrance Prep", "Student Leadership", "Project-based"]
    },
    {
        title: "STEM Innovation Hub",
        description: "State-of-the-art facilities where students engage in robotics, coding, and advanced scientific research.",
        image: schoolView1,
        tags: ["Robotics", "Computer Science", "Lab Research"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProgramsSection = () => {
    return (
        <section className="py-24 bg-iloko-red text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-iloko-yellow uppercase mb-3">Academic Pathways</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Discover Your Potential</h3>
                        <p className="text-lg text-slate-200">
                            Our comprehensive programs are designed to ignite curiosity and foster deep learning across all disciplines.
                        </p>
                    </div>
                    <NavLink
                        to="/academics"
                        className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full hover:bg-iloko-yellow hover:text-iloko-red transition-all duration-300 shrink-0"
                    >
                        View All Programs
                    </NavLink>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img loading="lazy"
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-iloko-red to-transparent opacity-80"></div>
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <ArrowUpRight size={20} className="text-white" />
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <h4 className="text-2xl text-iloko-yellow  font-serif font-bold mb-3">{program.title}</h4>
                                <p className="text-slate-200 mb-6 flex-grow">{program.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {program.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-slate-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramsSection;
