import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IMKALOGO } from '../../assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const hasSolidBg = isScrolled;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Academics', path: '/academics' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${hasSolidBg ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/" className={`flex items-center text-2xl font-serif font-bold ${hasSolidBg ? 'text-iloko-red' : 'text-white gap-2'}`}>
                            <img
                                src={IMKALOGO}
                                alt="IMKA"
                                className="h-12 w-auto"
                            />
                            IMKA.
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium uppercase tracking-wider transition-colors ${hasSolidBg ? 'hover:text-iloko-green' : 'hover:text-iloko-yellow'
                                    } ${hasSolidBg
                                        ? isActive ? 'text-iloko-red font-bold' : 'text-slate-700'
                                        : isActive ? 'text-white font-bold' : 'text-white/90'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    <NavLink to="/admissions" className="hidden lg:flex bg-iloko-red text-white px-6 py-2 rounded-full font-medium hover:bg-slate-900 transition-colors shadow-lg">
                        Apply Now
                    </NavLink>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            className={`${hasSolidBg ? 'text-iloko-red' : 'text-white'} hover:text-iloko-yellow focus:outline-none`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={"lg:hidden -z-10 bg-white top-full border-t border-gray-100 shadow-xl absolute w-full left-0 transition-all duration-300 " + (isOpen ? "opacity-100 translate-y-0" : "-translate-y-[100%] opacity-0")}>
                <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-3 py-4 text-base font-medium border-b border-gray-50 ${isActive ? 'text-iloko-red font-bold bg-slate-50' : 'text-slate-700 hover:text-iloko-red hover:bg-slate-50'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="mt-6 px-3">
                        <NavLink
                            to="/admissions"
                            onClick={() => setIsOpen(false)}
                            className="w-full block text-center bg-iloko-green text-white px-6 py-3 rounded-full font-medium hover:bg-slate-900 transition-colors shadow-md"
                        >
                            Apply Now
                        </NavLink>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
