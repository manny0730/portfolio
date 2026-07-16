import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderMinimal from "../HeaderMinimal";
import Footer from "../Footer";

const About = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <HeaderMinimal />

            <main className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto w-full">
                
                {/* 1. HERO / INTRO SECTION */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-center">
                    
                    {/* Bio & Actions (Left) */}
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center order-2 md:order-1">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                            Manuel Toledo
                        </h1>
                        <h2 className="text-xl md:text-2xl text-zinc-400 font-light mb-6">
                            3D Artist | XR Developer
                        </h2>
                        
                        <div className="text-zinc-300 leading-relaxed text-lg font-light space-y-4 max-w-2xl">
                            <p>
                                Creative Environment Artist with a passion for crafting immersive 3D worlds. Proficient in creating stunning environments using Maya, Substance Painter, Unreal Engine, and Unity. Skilled in lighting, composition, and game mechanics. Collaborates effectively to seamlessly integrate environments into projects. Dedicated to creating visually stunning and memorable experiences.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a 
                                href="/portfolio/Manuel_Toledo_Resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-zinc-200 transition-colors rounded-full"
                            >
                                <i className='bx bxs-file-pdf text-xl'></i> Download Resume
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/manueltoledo0730" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-colors rounded-full"
                            >
                                <i className='bx bxl-linkedin text-xl'></i> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Profile Image (Right) */}
                    <div className="md:col-span-4 lg:col-span-3 order-1 md:order-2">
                        <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative group">
                            <img 
                                src="/portfolio/profile.png" 
                                alt="Manuel Toledo" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                </section>

                <hr className="border-zinc-800 mb-20" />

                {/* 2. EXPERIENCE SECTION */}
                <section className="mb-24">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-zinc-700"></span> Experience
                    </h3>
                    
                    <div className="flex flex-col gap-4">
                        {experienceData.map((job, index) => (
                            <ExpandableCard key={index} data={job} />
                        ))}
                    </div>
                </section>

                {/* 4. PRESENTATIONS SECTION */}
                <section className="mb-24">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-zinc-700"></span> Presentations
                    </h3>
                    
                    <div className="grid gap-6">
                        {presentationData.map((pres, index) => (
                            <div key={index} className="p-6 md:p-8 border border-zinc-800 bg-zinc-900/30 rounded-xl hover:bg-zinc-900 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h4 className="text-xl font-bold text-white leading-tight">{pres.title}</h4>
                                    <span className="text-zinc-500 font-mono text-xs whitespace-nowrap mt-2 md:mt-0">{pres.date}</span>
                                </div>
                                <h5 className="text-lg text-zinc-300 mb-4">{pres.event}</h5>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed">{pres.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* 3. EDUCATION SECTION */}
                <section className="mb-24">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-zinc-700"></span> Education
                    </h3>
                    
                    <div className="grid gap-6">
                        {educationData.map((edu, index) => (
                            <div key={index} className="p-6 md:p-8 border border-zinc-800 bg-zinc-900/30 rounded-xl hover:bg-zinc-900 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                                    <span className="text-zinc-500 font-mono text-xs">{edu.date}</span>
                                </div>
                                <h5 className="text-lg text-zinc-300 mb-4">{edu.degree}</h5>
                                <p className="text-zinc-400 font-light text-sm">{edu.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. SKILLS SECTION */}
                <section>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-zinc-700"></span> Technical Skills
                    </h3>
                    
                    <div className="flex flex-wrap gap-3">
                        {skillsData.map((skill, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 border border-zinc-800 bg-zinc-900/50 rounded-lg text-sm text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

// === HELPER COMPONENT: EXPANDABLE CARD ===
const ExpandableCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className={`border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-zinc-900' : 'bg-black hover:bg-zinc-900/50'}`}
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 text-left gap-4"
            >
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">{data.role}</h4>
                    <p className="text-zinc-400 text-sm">{data.company}</p>
                </div>
                
                <div className="flex items-center gap-6">
                    <span className="text-zinc-500 font-mono text-xs whitespace-nowrap">{data.date}</span>
                    <i className={`bx bx-chevron-down text-2xl text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}></i>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 md:px-8 pb-8 border-t border-zinc-800/50 pt-6">
                            <ul className="space-y-3">
                                {data.points.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-300 text-sm font-light leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// === DATA ===

const experienceData = [
    {
        role: "Graduate Assistant-Research",
        company: "Texas A&M University",
        date: "May 2026 - Present",
        points: [
            "Building an interactive VR digital twin simulation in Unreal Engine, focusing on real-time spatial visualization and interactive system development.",
            "Integrating live data streaming workflows using MQTT protocols to ingest, process, and map real-world data directly into the virtual environment.",
            "Developing custom solutions for robust data ingestion, optimizing Unreal Engine's performance and managing data loads to ensure seamless rendering within the VR headset.",            
        ]
    },
    {
        role: "Graduate Assistant-Teaching",
        company: "Texas A&M University",
        date: "August 2025 - Present",
        points: [
            "Instructed students in media production, focusing on 3D environment creation, asset modeling, surfacing, and scene layout utilizing Unreal Engine and Autodesk Maya.",
            "Provided technical guidance for the Game Studio and Game Development courses, assisting students in the creation of their game projects.",
            "Delivered technical and artistic critique on 3D composition for the Virtual Production Summer Industry Course, while coordinating directly with industry mentors to facilitate guest lectures, live software demos, and feedback sessions.",            
        ]
    },
    {
        role: "Lab Coordinator",
        company: "South Texas College",
        date: "November 2023 - July 2025",
        points: [
            "Collaborated with faculty and departments to plan/execute 2D graphics and 3D models using Illustrator, AutoCAD, and Maya for events.",
            "Assisted faculty with Animation & Rendering courses.",
            "Instructed students on 3D modeling fundamentals with SketchUp and Maya for renders and 3D printing.",
            "Coordinated scheduling of lab equipment (laser machines, 3D printers) to optimize efficiency.",
            "Designed virtual reality environments for career fairs using Maya and Twinmotion."
        ]
    },
    {
        role: "Lab Assistant",
        company: "South Texas College",
        date: "February 2023 - November 2023",
        points: [
            "Utilized industry software to design graphics/promotional items (2D to 3D) for the Architectural and Engineering Design Technology department.",
            "Operated laser machines and 3D printers."
        ]
    },
    {
        role: "Graphic Designer (Freelance)",
        company: "Y20 Non-Profit Christian Organization",
        date: "July 2017 - May 2020",
        points: [
            "Utilized industry software to design 2D/3D graphics communicating the organization's message.",
            "Managed social media, videography, photography, and promotional designs.",
            "Managed multiple projects simultaneously, meeting tight deadlines with high quality standards."
        ]
    }
];

const presentationData = [
    {
        title: "Exploring Real Time Rendering and Virtual Reality",
        event: "Building Communities Conference & Tradeshow",
        date: "September 2022",
        detail: "Explored emerging technologies with the use of Twinmotion, Unreal Engine 5 and programmed a client presentation tool, attended by over 100 industry experts."
    }
];

const educationData = [
    {
        school: "Texas A&M University",
        degree: "Master of Science, Visualization",
        date: "May 2027",
        detail: "Specializing in developing immersive experiences within Augmented Reality and Virtual Reality environments, leveraging Unity and Unreal Engine."
    },
    {
        school: "Texas A&M University",
        degree: "B.S. Visualization (Minor: Game Design & Development)",
        date: "May 2022",
        detail: "Participated in collaborative projects with interdisciplinary teams of artists, programmers, and designers to create interactive simulations and multimedia installations. Utilized industry-standard software such as Adobe Creative Suite, Substance Suite, Autodesk Maya, and Unreal Engine to produce high-quality and engaging animations that captivate audiences."
    }
];

const skillsData = [
    "Autodesk Maya", "Autodesk AutoCAD", "SketchUp", "ZBrush", "Gaea", 
    "Unreal Engine", "Twinmotion", "Lumion", "Substance Painter", 
    "Photoshop CC", "Illustrator CC", "Premiere Pro CC", "After Effects CC", 
    "Unity", "Houdini"
];

export default About;