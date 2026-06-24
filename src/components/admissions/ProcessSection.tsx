import { motion } from 'framer-motion';
import { ClipboardEdit, FileCheck, Users, GraduationCap, CheckCircle } from 'lucide-react';

const processSteps = [
    {
        id: 1,
        title: "Enquiry & Application",
        description: "Collect the form from the school office in Iloko-Ijesa or request guidance online. The application fee is non-refundable.",
        icon: ClipboardEdit,
        color: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        id: 2,
        title: "Document Submission",
        description: "Submit two passport photos, a birth certificate or age declaration, and school report for transfer pupils.",
        icon: FileCheck,
        color: "text-iloko-yellow",
        bgColor: "bg-yellow-100",
    },
    {
        id: 3,
        title: "Entrance Examination",
        description: "Children are assessed in the right class areas so we can place them well and support them properly.",
        icon: GraduationCap,
        color: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        id: 4,
        title: "Interview",
        description: "The child and parent or guardian have a friendly oral interview with the school team.",
        icon: Users,
        color: "text-iloko-green",
        bgColor: "bg-red-100",
    },
    {
        id: 5,
        title: "Offer & Enrollment",
        description: "Once admission is offered, parents complete registration and pay the school fees for the term.",
        icon: CheckCircle,
        color: "text-green-500",
        bgColor: "bg-green-100",
    },
];

const ProcessSection = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-64 h-64 bg-iloko-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-iloko-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif text-iloko-red mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Admission <span className="text-iloko-yellow italic">Process</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our admissions process helps us understand each child and place them in the right class with the right support.
                    </motion.p>
                </div>

                <div className="relative">

                    <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[2px] bg-slate-200 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="flex flex-col items-center text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={`w-24 h-24 rounded-full flex items-center justify-center ${step.bgColor} shadow-md border-4 border-white mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                                    <step.icon size={36} className={step.color} />

                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-iloko-red text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-iloko-red mb-3">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
