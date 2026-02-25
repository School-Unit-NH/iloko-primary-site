import { NavLink } from 'react-router';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="bg-iloko-red/60 text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <h2 className="text-3xl font-serif font-bold mb-6 text-white">ILOKO</h2>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Empowering students to discover their potential through innovative education, character development, and a vibrant community.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-iloko-yellow hover:text-iloko-red transition-all duration-300">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-iloko-yellow hover:text-iloko-red transition-all duration-300">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-iloko-yellow hover:text-iloko-red transition-all duration-300">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-iloko-yellow hover:text-iloko-red transition-all duration-300">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><NavLink to="/about" className="text-slate-300 hover:text-iloko-yellow transition-colors">About Us</NavLink></li>
                                <li><NavLink to="/admissions" className="text-slate-300 hover:text-iloko-yellow transition-colors">Admissions</NavLink></li>
                                <li><NavLink to="/academics" className="text-slate-300 hover:text-iloko-yellow transition-colors">Academics</NavLink></li>
                                <li><NavLink to="/gallery" className="text-slate-300 hover:text-iloko-yellow transition-colors">Gallery</NavLink></li>
                                <li><NavLink to="/contact" className="text-slate-300 hover:text-iloko-yellow transition-colors">Contact</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block text-white">Programs</h3>
                            <ul className="space-y-3">
                                <li><NavLink to="/academics" className="text-slate-300 hover:text-iloko-yellow transition-colors">Nursery & Lower Primary</NavLink></li>
                                <li><NavLink to="/academics" className="text-slate-300 hover:text-iloko-yellow transition-colors">Upper Primary</NavLink></li>
                                <li><NavLink to="/academics" className="text-slate-300 hover:text-iloko-yellow transition-colors">STEM Innovation Hub</NavLink></li>
                                <li><NavLink to="/gallery" className="text-slate-300 hover:text-iloko-yellow transition-colors">Sports & Athletics</NavLink></li>
                                <li><NavLink to="/gallery" className="text-slate-300 hover:text-iloko-yellow transition-colors">Creative Arts</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block text-white">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <MapPin size={20} className="text-iloko-yellow flex-shrink-0 mt-1" />
                                    <span className="text-slate-300">123 Education Crescent<br />Lekki Phase 1, Lagos, Nigeria</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Phone size={20} className="text-iloko-yellow flex-shrink-0" />
                                    <a href="tel:+2345551234567"><span className="text-slate-300">+234 (555) 123-4567</span></a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail size={20} className="text-iloko-yellow flex-shrink-0" />
                                    <a href="mailto:admissions@iloko.edu"><span className="text-slate-300">admissions@iloko.edu</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                        <p>&copy; {new Date().getFullYear()} Iloko Primary School. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
