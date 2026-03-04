import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Loader2 } from 'lucide-react';


const generateMockImages = () => {
    const categories = ["Campus", "Academics", "Sports", "Events"];
    const baseImages = [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1606900609363-2f0851f50a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
    ];

    return Array.from({ length: 24 }).map((_, i) => ({
        id: i + 1,
        src: baseImages[i % baseImages.length],
        alt: `Gallery image showing ${categories[i % 4].toLowerCase()} activities`,
        category: categories[i % categories.length]
    }));
};

const galleryImages = generateMockImages();
const categories = ["All", "Campus", "Academics", "Sports", "Events"];
const IMAGES_PER_PAGE = 9;

const GalleryGrid = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);


    const filteredImages = useMemo(() => {
        if (activeCategory === "All") return galleryImages;
        return galleryImages.filter(img => img.category === activeCategory);
    }, [activeCategory]);


    const displayedImages = useMemo(() => {
        return filteredImages.slice(0, visibleCount);
    }, [filteredImages, visibleCount]);

    const hasMoreImages = displayedImages.length < filteredImages.length;

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setVisibleCount(IMAGES_PER_PAGE);
    };


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleLoadMore = () => {
        setIsLoading(true);

        setTimeout(() => {
            setVisibleCount(prev => prev + IMAGES_PER_PAGE);
            setIsLoading(false);
        }, 600);
    };

    return (
        <section className="py-20 bg-slate-50 min-h-screen relative z-20 -mt-10 rounded-t-[3rem]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${activeCategory === category
                                ? 'bg-iloko-red text-white scale-105 shadow-md'
                                : 'bg-white text-slate-600 hover:bg-iloko-red/5 hover:text-iloko-red border border-slate-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedImages.map((image, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: (index % IMAGES_PER_PAGE) * 0.05 }}
                                key={image.id}
                                className={`relative group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer ${index % 4 === 0 ? 'sm:row-span-2' : ''
                                    }`}
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-iloko-red/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <span className="text-iloko-yellow text-xs font-bold uppercase tracking-wider mb-1 block">
                                                    {image.category}
                                                </span>
                                                <p className="text-white font-medium line-clamp-2 pr-4">
                                                    {image.alt}
                                                </p>
                                            </div>
                                            <div className="shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                                                <ZoomIn size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


                {filteredImages.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        No images found for this category.
                    </div>
                )}


                {hasMoreImages && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className="group relative px-8 py-4 bg-white border border-slate-200 text-iloko-red font-semibold rounded-full shadow-sm hover:shadow-md hover:border-iloko-yellow/50 transition-all duration-300 disabled:opacity-70 flex items-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {isLoading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin text-iloko-yellow" />
                                        Loading Photos...
                                    </>
                                ) : (
                                    "Load More Photos"
                                )}
                            </span>

                            <div className="absolute inset-0 bg-iloko-red/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                        </button>
                    </div>
                )}
            </div>


            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-iloko-yellow bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all z-[101]"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        <motion.img
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Enlarged gallery view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GalleryGrid;
