import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

const dates = [
    {
        id: 1,
        title: "Application Deadline",
        date: "May 15, 2026",
        time: "11:59 PM (WAT)",
        location: "Online Portal or Main Office",
        type: "deadline"
    },
    {
        id: 2,
        title: "First Entrance Examination",
        date: "June 6, 2026",
        time: "9:00 AM Prompt",
        location: "Main School Hall, Iloko",
        type: "exam"
    },
    {
        id: 3,
        title: "Second Entrance Examination",
        date: "June 20, 2026",
        time: "9:00 AM Prompt",
        location: "Main School Hall / Regional Centers",
        type: "exam"
    },
    {
        id: 4,
        title: "Interview Week",
        date: "July 6 - 10, 2026",
        time: "Scheduled Individually",
        location: "Administrative Block",
        type: "interview"
    },
    {
        id: 5,
        title: "New Student Orientation",
        date: "August 28, 2026",
        time: "10:00 AM",
        location: "School Auditorium",
        type: "event"
    }
];

const ImportantDates = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Sticky Sidebar Info */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <motion.span
                            className="text-iloko-yellow font-semibold tracking-wider uppercase text-sm mb-4 block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Mark Your Calendar
                        </motion.span>
                        <motion.h2
                            className="text-4xl lg:text-5xl font-serif text-iloko-red mb-6 leading-tight"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Important <br /><span className="italic">Dates</span>
                        </motion.h2>
                        <motion.p
                            className="text-slate-600 mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Missing a deadline can delay your admission process. Keep track of these key dates for the upcoming academic session to ensure a smooth application journey.
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
                                <h4 className="font-semibold text-iloko-red mb-1">Late Applications</h4>
                                <p className="text-sm text-slate-600">
                                    Applications received after the deadline will only be considered subject to available space in the requested class.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Timeline / Cards */}
                    <div className="lg:w-2/3 w-full space-y-6">
                        {dates.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="bg-white border hover:border-iloko-yellow/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center group"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Date Box */}
                                <div className="bg-iloko-red text-white rounded-xl p-4 min-w-[120px] text-center shrink-0 group-hover:bg-iloko-green transition-colors duration-300">
                                    <span className="block text-sm font-medium opacity-80 uppercase tracking-wider mb-1">
                                        {item.date.split(' ')[0]}
                                    </span>
                                    <span className="block text-3xl font-bold">
                                        {item.date.split(' ')[1].replace(',', '')}
                                    </span>
                                    <span className="block text-sm opacity-80 mt-1">
                                        {item.date.split(' ')[2]}
                                    </span>
                                </div>

                                {/* Details */}
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

                                {/* Icon indicator based on type */}
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
