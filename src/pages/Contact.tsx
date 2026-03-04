import ContactHero from '../components/contact/ContactHero';
import ContactInfoBox from '../components/contact/ContactInfoBox';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
    return (
        <main className="bg-slate-50 min-h-screen pb-0">
            <ContactHero />

            <section className="py-20 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">

                        <div className="lg:col-span-2">
                            <ContactInfoBox />
                        </div>


                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <ContactMap />
        </main>
    );
};

export default Contact;
