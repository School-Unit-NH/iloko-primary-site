import { motion } from 'framer-motion';
import { Microscope, Code, Lightbulb, Presentation } from 'lucide-react';

const approaches = [
    {
        id: "approach-practical",
        title: "Hands-on Discovery",
        description: "We emphasize experiential learning, particularly in the sciences, moving beyond rote memorization to active, practical experimentation in our well-equipped laboratories.",
        icon: Microscope,
    },
    {
        id: "approach-tech",
        title: "Digital Integration",
        description: "Technology is seamlessly woven into our pedagogy. Students utilize interactive panels, educational software, and coding tools to enhance core skill acquisition.",
        icon: Code,
    },
    {
        id: "approach-critical",
        title: "Critical Thinking",
        description: "Our classrooms are forums for robust debate and analysis. We challenge students to question assumptions, synthesize information, and articulate their own viewpoints logically.",
        icon: Lightbulb,
    },
    {
        id: "approach-collab",
        title: "Collaborative Projects",
        description: "Real-world problem solving often requires teamwork. We integrate group projects and presentations to develop essential communication and leadership skills.",
        icon: Presentation,
    }
];

const LearningApproach = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image / Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="Students collaborating on a project"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-iloko-red/80 via-transparent to-transparent"></div>

                            {/* Overlay text */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <p className="text-white text-lg font-medium italic">"Education is not the learning of facts, but the training of the mind to think."</p>
                            </div>
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-iloko-yellow/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-iloko-green/20 rounded-full blur-2xl -z-10"></div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <motion.span
                            className="text-iloko-green font-semibold tracking-wider uppercase text-sm mb-4 block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Pedagogy
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-iloko-red mb-6 leading-tight"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            How We <span className="italic">Learn</span>
                        </motion.h2>
                        <motion.p
                            className="text-slate-600 mb-10 text-lg"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Our educational philosophy centers on active engagement. We believe students learn best when they are challenged to construct knowledge rather than merely receive it.
                        </motion.p>

                        <div className="space-y-8">
                            {approaches.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="flex gap-5 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-iloko-red group-hover:bg-iloko-red group-hover:text-white group-hover:border-iloko-red transition-all duration-300 shadow-sm">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-iloko-red mb-2 group-hover:text-iloko-green transition-colors">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearningApproach;
