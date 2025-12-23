import Header from "./HeaderMinimal";
import Footer from "./Footer";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectLayout = ({ 
    title, 
    subtitle, 
    role, 
    year, 
    tools, 
    heroImage, 
    overview, 
    videoID, 
    galleryImages = [] 
}) => {
    
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedIndex]);

    // === NAVIGATION LOGIC ===
    const handleNext = useCallback((e) => {
        e?.stopPropagation();
        setDirection(1); 
        setSelectedIndex((prev) => (prev + 1) % galleryImages.length); 
    }, [galleryImages]);

    const handlePrev = useCallback((e) => {
        e?.stopPropagation();
        setDirection(-1); 
        setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, [galleryImages]);

    const handleClose = useCallback(() => {
        setDirection(0);
        setSelectedIndex(null);
    }, []);

    const handleOpen = (index) => {
        setDirection(0);
        setSelectedIndex(index);
    };

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handleNext, handlePrev, handleClose]);

    // === DATA HELPER ===
    const getItemData = (item) => {
        if (!item) return null;
        
        if (typeof item === 'string') {
            return { type: 'image', src: item, desc: null };
        }

        return {
            type: item.type || 'image',
            src: item.src,
            videoId: item.videoId,
            desc: item.desc,
            thumb: item.type === 'youtube' 
                ? (item.thumb || `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`)
                : item.src
        };
    };

    const currentItem = getItemData(galleryImages[selectedIndex]);

    // === ANIMATION VARIANTS ===
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : direction < 0 ? -500 : 0, 
            opacity: 0,
            scale: direction === 0 ? 0.9 : 1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction > 0 ? -500 : direction < 0 ? 500 : 0, 
            opacity: 0,
            scale: direction === 0 ? 0.9 : 1
        })
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Header />

            <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
                
                {/* 1. HEADER SECTION */}
                <div className="mb-20 border border-zinc-800 bg-black">
                    <div className="p-8 md:p-12 border-b border-zinc-800">
                        <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4 block">{subtitle}</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-white leading-[0.9]">{title}</h1>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-zinc-800">
                            <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">My Role</h3>
                            <div className="flex flex-wrap gap-2">
                                {role.split(',').map((r, index) => (
                                    <span key={index} className="px-3 py-1 border border-zinc-800 text-xs text-zinc-300 rounded-full bg-zinc-900/50">
                                        {r.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-2 p-8 border-b md:border-b-0 md:border-r border-zinc-800">
                            <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Year</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 border border-zinc-800 text-xs text-zinc-300 rounded-full bg-zinc-900/50">
                                    {year}
                                </span>
                            </div>
                        </div>

                        <div className="md:col-span-6 p-8">
                            <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Software</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, index) => (
                                    <span key={index} className="px-3 py-1 border border-zinc-800 text-xs text-zinc-300 rounded-full bg-zinc-900/50">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. HERO IMAGE */}
                <div className={`w-full bg-zinc-900 border border-zinc-800 mb-20 overflow-hidden ${heroImage ? '' : 'aspect-video'}`}>
                    {heroImage ? (
                        <img src={heroImage} alt={title} className="w-full h-auto block" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-700">NO HERO IMAGE</div>
                    )}
                </div>

                {/* 3. OVERVIEW & VIDEO SECTION */}
                {videoID ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-bold uppercase mb-6 border-b border-zinc-800 pb-4">Project Overview</h2>
                            <div className="text-zinc-400 leading-relaxed whitespace-pre-line text-lg font-light">{overview}</div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="w-full aspect-video bg-zinc-900 border border-zinc-800">
                                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mb-24">
                        <h2 className="text-2xl font-bold uppercase mb-6 border-b border-zinc-800 pb-4">Project Overview</h2>
                        <div className="text-zinc-400 leading-relaxed whitespace-pre-line text-lg font-light">
                            {overview}
                        </div>
                    </div>
                )}


                {/* 4. IMAGE GALLERY */}
                {galleryImages.length > 0 && (
                    <div className="border-t border-zinc-800 pt-20">
                        <h2 className="text-2xl font-bold uppercase mb-12">Gallery</h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {galleryImages.map((rawItem, index) => {
                                const item = getItemData(rawItem);

                                return (
                                    <div 
                                        key={index} 
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => handleOpen(index)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleOpen(index)}
                                        className="relative group border border-zinc-800 bg-zinc-900 overflow-hidden aspect-square cursor-pointer"
                                    >
                                        <img 
                                            src={item.thumb} 
                                            alt={`Gallery ${index}`} 
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                                        />
                                        
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                            {item.type === 'youtube' ? (
                                                <i className='bx bx-play-circle text-5xl text-white'></i>
                                            ) : (
                                                <i className='bx bx-zoom-in text-3xl text-white'></i>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

            </main>
            
            <Footer />

            {/* === 5. ANIMATED LIGHTBOX MODAL === */}
            <AnimatePresence>
                {selectedIndex !== null && currentItem && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                        onClick={handleClose}
                    >
                        {/* CLOSE BUTTON */}
                        <button 
                            onClick={handleClose}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-zinc-500 hover:text-white transition-colors z-50 bg-black/50 rounded-full p-2"
                        >
                            <i className='bx bx-x text-4xl md:text-5xl'></i>
                        </button>

                        {/* PREV BUTTON */}
                        {galleryImages.length > 1 && (
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
                            >
                                <i className='bx bx-chevron-left text-5xl md:text-6xl'></i>
                            </button>
                        )}

                        {/* NEXT BUTTON */}
                        {galleryImages.length > 1 && (
                            <button
                                onClick={handleNext}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
                            >
                                <i className='bx bx-chevron-right text-5xl md:text-6xl'></i>
                            </button>
                        )}
                        
                        {/* MAIN CONTENT CARD */}
                        <AnimatePresence mode='wait' custom={direction}>
                            <motion.div 
                                key={selectedIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                // UPDATED: 
                                // 1. Reduced max-h to 70vh to prevent overlapping the thumbnail strip at the bottom
                                className={`flex flex-col shadow-2xl relative border border-zinc-800 bg-zinc-900 max-h-[70vh] 
                                    ${currentItem.type === 'youtube' 
                                        ? 'w-full max-w-6xl' 
                                        : 'w-auto max-w-[90vw] min-w-[300px]'
                                    }`
                                }
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div 
                                    className={`flex items-center justify-center overflow-hidden flex-grow relative 
                                        ${currentItem.type === 'youtube' 
                                            ? 'w-full bg-black aspect-video' 
                                            : 'w-auto bg-transparent'
                                        }`
                                    }
                                >
                                    
                                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-mono z-10 border border-white/10">
                                        {selectedIndex + 1} / {galleryImages.length}
                                    </div>

                                    {/* CONDITIONAL RENDERING: VIDEO VS IMAGE */}
                                    {currentItem.type === 'youtube' ? (
                                        <div className="w-full h-full">
                                            <iframe 
                                                className="w-full h-full" 
                                                src={`https://www.youtube.com/embed/${currentItem.videoId}?autoplay=1`} 
                                                title="YouTube Gallery" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        // UPDATED: Adjusted max-h for the image specifically
                                        <img 
                                            src={currentItem.src} 
                                            alt="Full Screen" 
                                            className="max-w-full max-h-[60vh] w-auto h-auto object-contain mx-auto"
                                        />
                                    )}

                                </div>

                                {/* DESCRIPTION */}
                                {currentItem.desc && (
                                    // UPDATED: Added "w-0 min-w-full" to force text to wrap based on container width
                                    <div className="p-4 md:p-6 border-t border-zinc-800 bg-zinc-950 flex-shrink-0 w-0 min-w-full">
                                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light break-words">
                                            {currentItem.desc}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* THUMBNAIL STRIP */}
                        {/* Ensure z-index is higher (z-[60]) so it sits on top if they ever do cross */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[80vw] p-2 hidden md:flex z-[60]" onClick={(e) => e.stopPropagation()}>
                            {galleryImages.map((rawItem, idx) => {
                                const item = getItemData(rawItem);
                                const isSelected = selectedIndex === idx;
                                return (
                                    <button 
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const newDirection = idx > selectedIndex ? 1 : -1;
                                            setDirection(newDirection);
                                            setSelectedIndex(idx);
                                        }}
                                        className={`relative w-12 h-12 border transition-all overflow-hidden ${
                                            isSelected ? 'border-white scale-110' : 'border-zinc-700 opacity-50 hover:opacity-100'
                                        }`}
                                    >
                                        <img 
                                            src={item.thumb} 
                                            className="w-full h-full object-cover" 
                                            alt="thumb" 
                                        />
                                        {item.type === 'youtube' && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                <i className='bx bx-play text-white text-lg'></i>
                                                </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ProjectLayout;