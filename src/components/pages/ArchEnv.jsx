import ProjectLayout from "../ProjectLayout";

const ArchEnv = () => {
    return (
        <ProjectLayout
            title="Architectural Environment"
            subtitle="Digital Environment"
            role="Visualization, Modeling, Set Dressing, Lighting"
            year="2021"
            tools={["Autodesk Maya", "RenderMan", "Substance Painter"]}
            heroImage="/portfolio/thumbnails/ArchShot6.png"
            videoID="" // This is the main overview video
            overview={
                <>
                    This 5-week group project focused on designing and visualizing a concept for a new Texas A&M Esports facility within the Post Oak Mall. Working collaboratively with a team of four, we developed a complete floor plan divided into three key sections: reception, public area, and student area.

                    <br /><br />

                    My primary responsibility was the Reception area, for which I handled all whiteboxing, modeling, set dressing, and lighting. I designed the space to function as a multi-use hub, integrating a public arcade zone, a high-capacity reception desk for event management, and an organic, flowy waiting area. Additionally, I modeled the core technology assets, monitors, keyboards, and mice, that were distributed across the entire facility, ensuring consistency in the team's final renders. I also managed the texture implementation for my section, utilizing assets created by my teammates to finalize the look.
                </>
            }

            // === GALLERY SECTION ===
            galleryImages={[
                // Standard Image
                { 
                    src: "/portfolio/projects/ArchEnv/ArchShot1.png"  
                },                
                // Standard Image
                { 
                    src: "/portfolio/projects/ArchEnv/ArchShot2.png"
                },
                 // Image with description
                { 
                    src: "/portfolio/projects/ArchEnv/ArchShot3.png"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/ArchShot4.png"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/ArchShot5.png"
                },
                { 
                    src: "/portfolio/thumbnails/ArchShot6.png"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/arcade.jpg"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/stool.jpg"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/frontDesk.jpg"
                },                
                { 
                    src: "/portfolio/projects/ArchEnv/keyboard.jpg"
                },                
                { 
                    src: "/portfolio/projects/ArchEnv/monitor.jpg"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/mouse.jpg"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/hugeCouch.jpg"
                },
                { 
                    src: "/portfolio/projects/ArchEnv/miniCouch.jpg"
                }
            ]}
        />
    );
};

export default ArchEnv;