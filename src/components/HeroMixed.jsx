import 'boxicons/css/boxicons.min.css';
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// IMPORT THE DATA
import { 
    reelContributions, 
    xrProjects, 
    envProjects, 
    gameProjects, 
    filmProjects 
} from "../data/projectData";

const HeroMixed = () => {
  // === LOGIC ===
  const [isReelOpen, setIsReelOpen] = useState(false);

  useEffect(() => {
    if (isReelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isReelOpen]);

  // === NEW SCROLL FUNCTION ===
  const handleScroll = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tickerText = "Autodesk Maya | Autodesk AutoCAD | SketchUp | ZBrush | Gaea | Unreal Engine | Twinmotion | Lumion | Substance Painter | Photoshop CC | Illustrator CC | Premiere Pro CC | After Effects CC | Unity | Houdini |";

  return (
    <main className="flex flex-col min-h-screen relative bg-black text-white">
        
        {/* === SECTION: HERO LANDING === */}
        <div id="hero" className="relative w-full h-screen overflow-hidden border-b border-zinc-800">
            
            {/* 1. SPLINE BG */}
            <div className='absolute inset-0 z-0'>
                <div className="w-full h-full opacity-60"> 
                    <Spline scene="https://prod.spline.design/xIaUG4fIWXYUJL-k/scene.splinecode" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none"></div>
            </div>

            {/* 2. BIG TYPOGRAPHY HERO */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto pt-20 pointer-events-none">
                <p className="text-zinc-400 font-mono text-xs md:text-sm tracking-[0.2em] mb-4 uppercase">
                    Manuel Toledo / Portfolio
                </p>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mix-blend-overlay opacity-90">
                    XR DEVELOPER | <br />
                    3D ARTIST
                </h1>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-12 gap-8 border-t border-white/20 pt-8">
                    <div className="max-w-md">
                         <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                            Creative 3D Artist dedicated to crafting high-fidelity worlds for games, short films, and immersive AR/VR. Bridging the gap between art and technology to seamlessly integrate visual assets into compelling experiences.
                        </p>
                    </div>

                    <div className="flex gap-4 pointer-events-auto">
                        <div className="relative">
                            {/* === BREATHING GLOW EFFECT === */}
                            <div className="absolute -inset-1 bg-white/60 blur-md rounded-sm animate-pulse"></div>
                            
                            <button 
                                onClick={() => setIsReelOpen(true)}
                                className="relative flex items-center gap-2 px-6 py-3 bg-white text-black font-bold hover:bg-zinc-200 transition-colors z-10"
                            >
                                <i className='bx bx-play text-xl'></i> DEMO REEL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* === TICKER === */}
        <div className="w-full overflow-hidden border-b border-zinc-800 py-3 bg-zinc-900/50 backdrop-blur-sm z-20 flex">
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-start gap-10 pr-10">
                {[...Array(2)].map((_, i) => (
                    <span key={i} className="text-zinc-500 font-mono uppercase tracking-widest text-xs whitespace-nowrap">
                        {tickerText}
                    </span>
                ))}
            </div>
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-start gap-10 pr-10">
                {[...Array(2)].map((_, i) => (
                    <span key={i} className="text-zinc-500 font-mono uppercase tracking-widest text-xs whitespace-nowrap">
                        {tickerText}
                    </span>
                ))}
            </div>
        </div>

        {/* === CATEGORY NAVIGATION === */}
        <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800 py-4 overflow-x-auto">
            <div className="px-6 md:px-12 flex gap-8 min-w-full w-max md:w-full justify-center md:justify-start">
                <a href="#xr" onClick={(e) => handleScroll(e, 'xr')} className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">XR</a>
                <a href="#digital" onClick={(e) => handleScroll(e, 'digital')} className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Environments</a>
                <a href="#game" onClick={(e) => handleScroll(e, 'game')} className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Game Design</a>
                <a href="#film" onClick={(e) => handleScroll(e, 'film')} className="text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">Films</a>
            </div>
        </div>

        {/* === PROJECT SECTIONS === */}
        <ProjectSection id="xr" title="Extended Reality" projects={xrProjects} icon="cube-alt" />
        <ProjectSection id="digital" title="Digital Environments" projects={envProjects} icon="layer" />
        <ProjectSection id="game" title="Game Design" projects={gameProjects} icon="joystick" />
        <ProjectSection id="film" title="Short Films" projects={filmProjects} icon="film" />


        {/* === DEMO REEL MODAL === */}
        {isReelOpen && (
            <div 
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
                onClick={() => setIsReelOpen(false)}
            >
                <div 
                    className="relative w-full max-w-7xl bg-black border border-zinc-800 flex flex-col md:flex-row h-full max-h-[85vh] shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setIsReelOpen(false)} 
                        className="absolute -top-12 right-0 md:-top-16 text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span className="font-mono text-xs tracking-widest uppercase">Close</span>
                        <i className='bx bx-x text-4xl'></i>
                    </button>

                    <div className="w-full md:w-3/4 bg-black border-b md:border-b-0 md:border-r border-zinc-800 flex items-center justify-center relative">
                         <iframe 
                            className="w-full h-full aspect-video md:aspect-auto" 
                            src="https://www.youtube.com/embed/EJzDaYT_j0o?si=Uco3BMf5Gb0jGols" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="w-full md:w-1/4 flex flex-col bg-zinc-950 overflow-hidden">
                        <div className="p-6 border-b border-zinc-800">
                            <h3 className="text-xl font-bold uppercase tracking-tighter text-white">Demo Reel</h3>
                            <p className="text-zinc-500 text-xs font-mono mt-1">BREAKDOWN</p>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {reelContributions.map((item, index) => (
                                <div key={index} className="p-6 border-b border-zinc-800 hover:bg-zinc-900 transition-colors group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <i className='bx bx-time-five text-zinc-600 group-hover:text-white transition-colors'></i>
                                        <span className="text-white font-mono text-xs bg-zinc-800 px-2 py-1 rounded-sm border border-zinc-700">{item.time}</span>
                                    </div>
                                    <p className="text-zinc-400 text-xs leading-relaxed font-light text-left">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

    </main>
  )
}

// === HELPER COMPONENT (UPDATED FOR BETTER LEGIBILITY) ===
const ProjectSection = ({ id, title, projects, icon }) => (
    <section id={id} className="border-b border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[50vh]">
            
            {/* Left Title Column */}
            <div className="md:col-span-3 lg:col-span-2 p-6 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-950">
                <div className="sticky top-24">
                    <i className={`bx bx-${icon} text-3xl mb-4 text-zinc-600`}></i>
                    <h2 className="text-2xl font-bold uppercase tracking-tighter">{title}</h2>
                    <p className="mt-4 text-xs text-zinc-500 font-mono">{projects.length} PROJECTS</p>
                </div>
            </div>

            {/* Right Content Grid */}
            <div className="md:col-span-9 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <Link 
                        to={project.link || "#"} 
                        key={project.id} 
                        className="group relative border-b border-r border-zinc-800 aspect-square md:aspect-[4/3] overflow-hidden bg-black cursor-pointer block"
                    >
                        {/* 1. IMAGE LAYER */}
                        <div className="absolute inset-0">
                             {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <i className={`bx bx-${icon} text-6xl opacity-20 group-hover:opacity-10 transition-opacity`}></i>
                                </div>
                            )}
                        </div>

                        {/* 2. DARK GRADIENT OVERLAY (Added for legibility) */}
                        {/* This gradient is always there slightly, but gets darker on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                        {/* 3. TEXT CONTENT LAYER */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-zinc-400 shadow-black drop-shadow-md">
                                    0{index + 1}
                                </span>
                                <i className='bx bx-plus text-xl text-zinc-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300 drop-shadow-md'></i>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg shadow-black text-white">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-zinc-300 line-clamp-3 group-hover:text-white transition-colors drop-shadow-md shadow-black font-medium leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

export default HeroMixed;