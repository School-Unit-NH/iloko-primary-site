import { Calendar, ArrowRight } from 'lucide-react';

const news = [
    {
        category: "Campus News",
        title: "Iloko Science Team Wins Lagos State Science Olympiad",
        date: "Oct 15, 2026",
        image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        excerpt: "Our upper primary robotics team secured first place at the highly competitive state tournament..."
    },
    {
        category: "Events",
        title: "Annual Inter-House Sports Competition Approaching",
        date: "Nov 02, 2026",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        excerpt: "Join us for a weekend celebrating the incredible athletic and sportsmanship talents of our students."
    }
];

const events = [
    { day: "24", month: "Oct", title: "Open House for Prospective Families", time: "9:00 AM - 1:00 PM" },
    { day: "31", month: "Oct", title: "PTA General Meeting", time: "10:00 AM" },
    { day: "05", month: "Nov", title: "Primary Boys Football Semifinals", time: "4:00 PM @ School Field" },
];

const NewsEvents = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">


                    <div className="lg:col-span-2">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-4xl font-serif font-bold text-iloko-red">Latest News</h2>
                            <button className="text-iloko-green font-semibold flex items-center gap-1 hover:text-iloko-red transition-colors">
                                View All <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {news.map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[4/3]">
                                        <img loading="lazy"
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-iloko-yellow text-iloko-red text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-iloko-red mb-2 group-hover:text-iloko-green transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-700 line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="lg:col-span-1">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-4xl font-serif font-bold text-iloko-red">Upcoming</h2>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50">
                            <div className="space-y-6">
                                {events.map((event, index) => (
                                    <div key={index} className="flex gap-4 group cursor-pointer hover:bg-white p-2 -m-2 rounded-lg transition-colors">
                                        <div className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl min-w-[70px] h-[80px] group-hover:bg-iloko-red group-hover:text-white transition-colors group-hover:border-iloko-red shadow-sm">
                                            <span className="text-sm font-semibold uppercase tracking-wider text-iloko-green group-hover:text-iloko-yellow">{event.month}</span>
                                            <span className="text-3xl font-bold">{event.day}</span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="font-bold text-iloko-red group-hover:text-iloko-green transition-colors">{event.title}</h4>
                                            <p className="text-sm text-slate-600">{event.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-8 py-3 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:border-iloko-red hover:text-iloko-red transition-colors">
                                Full Calendar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
