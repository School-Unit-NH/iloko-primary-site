import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

const items = [
    {
        id: 1,
        title: "Academic Session Begins",
        detail: "Every September",
        time: "New intake begins each year",
        location: "Iloko Model Kiddies Academy",
    },
    {
        id: 2,
        title: "Campus Visits",
        detail: "Monday to Thursday",
        time: "10:00 AM - 2:00 PM",
        location: "Call or WhatsApp ahead",
    },
    {
        id: 3,
        title: "Entrance Screening",
        detail: "By appointment",
        time: "Friendly child placement check",
        location: "Admissions Office",
    },
    {
        id: 4,
        title: "Application Support",
        detail: "Available year-round",
        time: "As students come",
        location: "Administrative Office, Iloko-Ijesa",
    },
    {
        id: 5,
        title: "School Bus Service",
        detail: "For day students",
        time: "Available locally",
        location: "Route coverage by arrangement",
    }
];

const ImportantDates = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <motion.span
                            className="text-iloko-yellow font-semibold tracking-wider uppercase text-sm mb-4 block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Plan Ahead
                        </motion.span>
                        <motion.h2
                            className="text-4xl lg:text-5xl font-serif text-iloko-red mb-6 leading-tight"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Important <br /><span className="italic">Updates</span>
                        </motion.h2>
                        <motion.p
                            className="text-slate-600 mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Keep these key reminders in mind when planning your child's admission or school visit.
                        </motion.p>

                        <motion.div
                            className="bg-iloko-red/5 p-6 rounded-2xl border border-iloko-red/10 flex items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <AlertCircle className="text-iloko-green shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-semibold text-iloko-red mb-1">Visit Before You Apply</h4>
                                <p className="text-sm text-slate-600">
                                    We welcome parents and guardians to come and see the school before completing the form.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3 w-full space-y-6">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="bg-white border hover:border-iloko-yellow/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center group"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="bg-iloko-red text-white rounded-xl p-4 min-w-[150px] text-center shrink-0 group-hover:bg-iloko-green transition-colors duration-300">
                                    <span className="block text-sm font-medium opacity-80 uppercase tracking-wider mb-2">
                                        Reminder
                                    </span>
                                    <span className="block text-lg font-bold leading-tight">
                                        {item.detail}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-iloko-red mb-3 group-hover:text-iloko-green transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-slate-500 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-iloko-yellow" />
                                            {item.time}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-iloko-yellow" />
                                            {item.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-slate-50 items-center justify-center text-slate-400 group-hover:scale-110 group-hover:bg-iloko-yellow/10 group-hover:text-iloko-yellow transition-all duration-300">
                                    <Calendar size={24} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImportantDates;
