import { MapPin } from 'lucide-react';

const ContactMap = () => {
    return (
        <section className="bg-slate-50 py-12 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-iloko-green">
                    <MapPin size={24} />
                </div>
                <h2 className="text-3xl font-serif text-iloko-red font-bold">Find Us on Campus</h2>
            </div>

            <div className="w-[80%] mx-auto rounded-2xl overflow-hidden h-[500px] bg-slate-200 relative">
 
                <iframe
                    className="absolute inset-0 w-full h-full"
                    title="Iloko Primary School Campus Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5165684347247!2d4.8587391!3d7.6274488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381ce387dcffff%3A0xcfd6dcac759ffcf5!2sOsun%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
        </section>
    );
};

export default ContactMap;
