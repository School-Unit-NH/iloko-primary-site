import { MapPin } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="bg-slate-50 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-iloko-green">
          <MapPin size={24} />
        </div>
        <h2 className="text-3xl font-serif text-iloko-red font-bold">
          Find Us on Campus
        </h2>
      </div>

      <div className="w-[80%] mx-auto rounded-2xl overflow-hidden h-[500px] bg-slate-200 relative">
        <iframe
          className="absolute inset-0 w-full h-full"
          title="Iloko Model Kiddies Academy Campus Map"
          src="https://maps.app.goo.gl/AURqH5XDaefDtY9AA"
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
