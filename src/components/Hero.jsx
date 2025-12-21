import 'boxicons/css/boxicons.min.css';
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from 'react';

const Hero = () => {
  // State to control the Video Modal
  const [isReelOpen, setIsReelOpen] = useState(false);
  // State to control the "Email Copied" message
  const [copySuccess, setCopySuccess] = useState(false);

  // Lock Body Scroll when Modal is Open
  useEffect(() => {
    if (isReelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isReelOpen]);

  // === CLIPBOARD HANDLER ===
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("manueltoledo124@gmail.com");
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // === DATA: DEMO REEL BREAKDOWN ===
  const reelContributions = [
    {
      time: "00:00-00:15",
      desc: "Concept art by Jason Song. Responsible for modeling the entire environment & lighting with Maya/ZBrush during my course at Animschool and mentored by Brien Hindman."
    },
    {
      time: "00:15-00:29",
      desc: "Boat modeled by Ashley Aslett. Responsible for modeling the house and creating the terrain with the use of Megascans in Unreal Engine."
    },
    {
      time: "00:29-00:43",
      desc: "House from Twinmotion's weekly Friday challenges. Responsible for creating the terrain/environment with the use of Twinmotion's assets."
    },
    {
      time: "00:43-01:00",
      desc: "House is commissioned work & modeled by Architect Mario Serna. Responsible for rendering the house to present to the client."
    },
    {
      time: "01:00-01:07",
      desc: "House from Twinmotion's weekly Friday challenges. Responsible for generating the landscape with the use of QuadSpinner/Gaea & utilized Twinmotion's assets to render."
    },
    {
      time: "01:07-01:22",
      desc: "Advanced Manufacturing Technology department from South Texas College provided a Jaguar model & tasked me to alter it to make into a robotic jaguar for 3D printing/manufacturing."
    }
  ];

  // === SECTION 1: EXTENDED REALITY (3 Projects) ===
  const xrProjects = [
    {
      id: 1,
      title: "SCAVENGAR HUNT",
      description: "TBA",
      image: null 
    },
    {
      id: 2,
      title: "FROGGAR",
      description: "An Augmented Reality mini-game built with Unity and the Vuforia Engine SDK. This project utilizes surface tracking technology to anchor interactive gameplay directly onto physical environments.",
      image: null
    },
    {
      id: 3,
      title: "TOWAR DEFENSE",
      description: "An Augmented Reality mini-game built with Unity and the Vuforia SDK. This project utilizes image tracking technology to trigger interactive gameplay on specific visual markers.",
      image: null
    },
  ];

  // === SECTION 2: DIGITAL ENVIRONMENTS (6 Projects) ===
  const envProjects = [
    {
      id: 1,
      title: "AIA LRGV",
      description: "A prototype application exploring architectural presentation workflows in Twinmotion and Unreal Engine. This project demonstrates how firms can implement interactive visualization tools to enhance client reviews.",
      image: null 
    },
    {
      id: 2,
      title: "LAND OF NIGHTMARES",
      description: "A horror-themed environment study blending real-world architecture with game-ready assets. Designed to demonstrate advanced environment art proficiency and atmospheric lighting techniques developed at Texas A&M University.",
      image: null
    },
    {
      id: 3,
      title: "GAME ENVIRONMENT",
      description: "An interactive environment recreation built in Unreal Engine 5, constructed using a custom modular asset kit created specifically for this project. This work demonstrates efficient modular workflows, asset creation, and real-time level packaging.",
      image: null
    },
    {
      id: 4,
      title: "LIVE ACTION SET EXTENSION",
      description: "A photorealistic integration project recreating a pre-1950s film scene. All 3D assets were modeled using NURBS geometry and seamlessly composited into a live-action photographic backplate.",
      image: null
    },
    {
      id: 5,
      title: "ANIMATED MOVIE ENVIRONMENT",
      description: "Produced a short animated sequence that reconstructs a classic movie scene, featuring a custom simulation of natural phenomena to drive the visual narrative.",
      image: null
    },
    {
      id: 6,
      title: "ARCHITECTURAL ENVIRONMENT",
      description: "Designed and visualized a comprehensive concept for a university Esports arena. The project applies advanced environmental design principles to create a cohesive visual presentation of the facility.",
      image: null
    },
  ];

  // === SECTION 3: GAME DESIGN (4 Projects) ===
  const gameProjects = [
    {
      id: 1,
      title: "DUSTY",
      description: "There exists a world where animals are sentient beings. They live in harmony with each other in kingdoms divided among each animal. The High Tree is host to a settlement of beavers who live among dams and eat fish. In it lives Dusty, who has a knack for the slingshot. All was well in The High Tree kingdom until one particularly large beaver, who goes by the name Truckee, wanted to destroy it all. Members from the koala, dog, and bear clans banded together under Truckee... will Dusty be able to stop them?",
      image: null 
    },
    {
      id: 2,
      title: "SPIRIT CATCHER",
      description: "A few months have passed since your father passed, it is a typical night when a scream echoes in the halls of your home. Your mother has been taken by ghosts. Armed with a magical jar, capture ghosts that stand between you and your mother.",
      image: null
    },
    {
      id: 3,
      title: "THE GRATE ESCAPE",
      description: "As a small playable character, you must navigate and escape the house by collecting cheese as you run from the evil mice that chase after you. The reason why you're being chased is unknown, but the hidden truth will be unfolded once the great escape is accomplished...",
      image: null
    },
    {
      id: 4,
      title: "SELFLESS",
      description: "Long ago, the earth and its inhabitants lived together in harmony. Then, everything changed when Doodoohead attacked. Only the elves, protectors of the environment, can restore it. Now, when the world needs them the most, you must help them stop Doodoohead and save the world!",
      image: null
    },
  ];

  // === SECTION 4: SHORT FILMS (3 Projects) ===
  const filmProjects = [
    {
      id: 1,
      title: "THE TIMEKEEPER",
      description: "A wooden robot stands within his cubicle in a clock-tower, but he is asleep at his post. His alarm clock-hat wakes him from his slumber. He realizes it's the top of the next hour and rings the bell.",
      image: null 
    },
    {
      id: 2,
      title: "BIG POP CIRCUS",
      description: "Stamper Squeakbottom is a pincushio porcupine and an aspiring clown. Today he auditions for the circus, where he must perform an act to mae the audience laugh. Stamper makes a balloon sculpture, but things don't go as expected. Stamper is certain he's failed the audition, but will the audience laugh at his performance and pass?",
      image: null
    },
    {
      id: 3,
      title: "GHOSTAL SERVICE",
      description: "This animated short film is a parody advertisement for a non-existent ghost delivery company called Ghostal Service.",
      image: null
    },
  ];

  return (
    <main className="flex flex-col min-h-screen relative bg-gradient-to-b from-black via-zinc-950 to-zinc-900 pb-20">
        
        {/* === TOP SECTION: HERO CONTENT + SPLINE === */}
        <div id="hero" className="flex-1 flex items-center justify-center relative w-full min-h-screen">
            
            {/* 1. TEXT CONTENT */}
            <div className="z-10 flex flex-col items-center text-center px-4 mt-10">
                <div className='introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center mb-5 relative'>
                    <div className="font-bold">
                        Manuel Toledo Portfolio
                    </div>
                </div>

                <div className='max-w-[800px] leading-relaxed'>
                    <h1 className='lg:text-5xl sm:text-4xl text-2xl font-extrabold mb-5 bg-gradient-radial from-violet-400 to-white bg-clip-text text-transparent'>
                        XR DEVELOPER | 3D ARTIST
                    </h1>
                    <p className='max-w-[600px] mx-auto text-gray-300'>
                        Creative 3D Artist dedicated to crafting high-fidelity worlds for games, short films, and immersive AR/VR. Bridging the gap between art and technology to seamlessly integrate visual assets into compelling experiences.
                    </p>
                </div>

                <div className='mt-8 flex gap-5 justify-center flex-wrap w-full max-w-[600px]'>
                    
                    {/* DEMO REEL BUTTON */}
                    <button 
                        onClick={() => setIsReelOpen(true)} 
                        className='w-[208px] h-[33px] inline-flex items-center justify-center border border-gray-400 rounded-full text-sm tracking-wider contact-button hover:bg-white hover:text-black transition-colors'
                    >
                        <i className='bx bx-camera-movie mr-2' ></i> DEMO REEL
                    </button>

                    {/* CONTACT ME BUTTON */}
                    <button 
                        onClick={handleCopyEmail}
                        className={`w-[208px] h-[33px] inline-flex items-center justify-center border border-gray-400 rounded-full text-sm tracking-wider contact-button transition-all duration-300 ${copySuccess ? 'bg-white text-black font-bold border-white' : 'hover:bg-white hover:text-black'}`}
                    >
                        {copySuccess ? (
                            <>
                                <i className='bx bx-check-double mr-2 text-lg'></i> EMAIL COPIED!
                            </>
                        ) : (
                            <>
                                <i className='bx bx-mail-send mr-2'></i> CONTACT ME
                            </>
                        )}
                    </button>

                </div>
            </div>

            {/* 2. SPLINE BACKGROUND */}
            <div className='absolute inset-0 z-0 flex items-center justify-center'>
                <div className="w-full h-full opacity-80"> 
                    <Spline
                        scene="https://prod.spline.design/xIaUG4fIWXYUJL-k/scene.splinecode" 
                    />
                </div>
            </div>
        </div>

        {/* === MAIN TITLE + NAVIGATION === */}
        {/* CHANGED: Removed 'md:items-end' and used 'items-center' to ensure vertical centering on all screens */}
        <div className='relative z-10 container mx-auto px-4 md:px-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider text-center md:text-left bg-gradient-radial from-white to-gray-200 bg-clip-text text-transparent'>
                PORTFOLIO
            </h1>

            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
                <a href="#xr" className="text-sm md:text-lg font-bold tracking-wider bg-gradient-radial from-gray-400 to-white bg-clip-text text-transparent hover:from-violet-400 hover:to-white transition-all cursor-pointer">
                    Extended Reality
                </a>
                <a href="#digital" className="text-sm md:text-lg font-bold tracking-wider bg-gradient-radial from-gray-400 to-white bg-clip-text text-transparent hover:from-violet-400 hover:to-white transition-all cursor-pointer">
                    Digital Environments
                </a>
                <a href="#game" className="text-sm md:text-lg font-bold tracking-wider bg-gradient-radial from-gray-400 to-white bg-clip-text text-transparent hover:from-violet-400 hover:to-white transition-all cursor-pointer">
                    Game Design
                </a>
                <a href="#film" className="text-sm md:text-lg font-bold tracking-wider bg-gradient-radial from-gray-400 to-white bg-clip-text text-transparent hover:from-violet-400 hover:to-white transition-all cursor-pointer">
                    Short Films
                </a>
            </div>
        </div>

        {/* ========================================= */}
        {/* === SECTION 1: EXTENDED REALITY === */}
        {/* ========================================= */}
        <div id="xr" className='relative z-10 container mx-auto px-4 md:px-12 mb-8 mt-10 scroll-mt-32'>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-400 tracking-wide border-b border-gray-800 pb-2 inline-block">
                Extended Reality
            </h2>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {xrProjects.map((project) => (
                    <div key={project.id} className="group relative w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-500 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 group-hover:text-white group-hover:opacity-10 transition-all duration-500">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70" />
                            ) : (
                                <>
                                    <i className='bx bx-cube-alt text-4xl mb-2'></i>
                                    <span className="text-sm font-bold uppercase tracking-widest">{project.title}</span>
                                </>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <p className="text-gray-200 text-sm text-center leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* ========================================= */}
        {/* === SECTION 2: DIGITAL ENVIRONMENTS === */}
        {/* ========================================= */}
        <div id="digital" className='relative z-10 container mx-auto px-4 md:px-12 mb-8 scroll-mt-32'>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-400 tracking-wide border-b border-gray-800 pb-2 inline-block">
                Digital Environments
            </h2>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {envProjects.map((project) => (
                    <div key={project.id} className="group relative w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-500 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 group-hover:text-white group-hover:opacity-10 transition-all duration-500">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70" />
                            ) : (
                                <>
                                    <i className='bx bx-image text-4xl mb-2'></i>
                                    <span className="text-sm font-bold uppercase tracking-widest">{project.title}</span>
                                </>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <p className="text-gray-200 text-sm text-center leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* ========================================= */}
        {/* === SECTION 3: GAME DESIGN === */}
        {/* ========================================= */}
        <div id="game" className='relative z-10 container mx-auto px-4 md:px-12 mb-8 scroll-mt-32'>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-400 tracking-wide border-b border-gray-800 pb-2 inline-block">
                Game Design
            </h2>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {gameProjects.map((project) => (
                    <div key={project.id} className="group relative w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-500 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 group-hover:text-white group-hover:opacity-10 transition-all duration-500">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70" />
                            ) : (
                                <>
                                    <i className='bx bx-joystick text-4xl mb-2'></i>
                                    <span className="text-sm font-bold uppercase tracking-widest">{project.title}</span>
                                </>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <p className="text-gray-200 text-sm text-center leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* ========================================= */}
        {/* === SECTION 4: SHORT FILMS === */}
        {/* ========================================= */}
        <div id="film" className='relative z-10 container mx-auto px-4 md:px-12 mb-8 scroll-mt-32'>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-400 tracking-wide border-b border-gray-800 pb-2 inline-block">
                Short Films
            </h2>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filmProjects.map((project) => (
                    <div key={project.id} className="group relative w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-500 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 group-hover:text-white group-hover:opacity-10 transition-all duration-500">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70" />
                            ) : (
                                <>
                                    <i className='bx bx-film text-4xl mb-2'></i>
                                    <span className="text-sm font-bold uppercase tracking-widest">{project.title}</span>
                                </>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <p className="text-gray-200 text-sm text-center leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* ========================================= */}
        {/* === DEMO REEL POPUP MODAL === */}
        {/* ========================================= */}
        {isReelOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
                
                {/* 1. Modal Positioning Wrapper (Invisible, allows button to float outside) */}
                <div className="relative w-full max-w-5xl flex flex-col max-h-[90vh]">
                    
                    {/* 2. Close Button: Absolute positioned to the wrapper, NOT the content */}
                    <button 
                        onClick={() => setIsReelOpen(false)}
                        className="absolute -top-12 right-0 text-white/70 hover:text-white hover:scale-110 transition-all z-50"
                    >
                        <i className='bx bx-x text-5xl'></i>
                    </button>

                    {/* 3. Modal Content (Background & Overflow Hidden applied here) */}
                    <div className="w-full bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
                        
                        {/* Video Wrapper */}
                        <div className="w-full aspect-video shrink-0 bg-black">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/EJzDaYT_j0o?si=Uco3BMf5Gb0jGols" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Description Content */}
                        <div className="p-6 md:p-8 overflow-y-auto text-left custom-scrollbar">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-700 pb-2">
                                Demo Reel Breakdown
                            </h3>
                            
                            <div className="space-y-6">
                                {reelContributions.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                                        <div className="min-w-[110px]">
                                            <span className="text-violet-400 font-mono font-bold text-sm bg-violet-400/10 px-2 py-1 rounded">
                                                {item.time}
                                            </span>
                                        </div>
                                        <div className="text-gray-300 text-sm leading-relaxed">
                                            {item.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}
        
    </main>
  )
}

export default Hero