import { useLocation, useOutlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
            <Navbar />
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scroll(0, 0)}>
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex-grow flex flex-col"
                >
                    {outlet}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default Layout;
