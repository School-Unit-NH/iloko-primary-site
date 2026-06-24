import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
    {
        icon: MapPin,
        title: "Visit Us",
        lines: [
            "Iloko Model Kiddies Academy",
            "Chief Elijah Fasogbon Way, Ijeda Road",
            "Iloko-Ijesa, Osun State"
        ]
    },
    {
        icon: Phone,
        title: "Call Us",
        lines: [
            "General Enquiries:",
            "08033607953",
            "Admissions / WhatsApp:",
            "08066067063"
        ]
    },
    {
        icon: Mail,
        title: "Email Us",
        lines: [
            "Information:",
            "ilokomodel.principal@gmail.com",
            "Admissions:",
            "admissions@ilokocollege.edu.ng"
        ]
    },
    {
        icon: Clock,
        title: "Office Hours",
        lines: [
            "Monday - Thursday",
            "10:00 AM - 2:00 PM",
            "Visits by",
            "appointment"
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ContactInfoBox = () => {
    return (
        <motion.div
            className="grid sm:grid-cols-2 gap-8 h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
            {contactDetails.map((detail, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col group"
                >
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-iloko-red mb-6 group-hover:bg-iloko-red group-hover:text-white transition-colors duration-300 shadow-sm">
                        <detail.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-iloko-red mb-4 font-serif">
                        {detail.title}
                    </h3>
                    <div className="text-slate-600 leading-relaxed space-y-1">
                        {detail.lines.map((line, i) => (
                            <p key={i} className={i % 2 === 0 && detail.title !== "Visit Us" && detail.title !== "Office Hours" ? "text-xs font-bold text-slate-400 uppercase tracking-wider pt-2" : "min-w-0 break-words"}>
                                {line}
                            </p>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ContactInfoBox;
