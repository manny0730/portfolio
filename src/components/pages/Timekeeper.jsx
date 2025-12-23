import ProjectLayout from "../ProjectLayout";

const Timekeeper = () => {
    return (
        <ProjectLayout
            title="The Timekeeper"
            subtitle="Short Film"
            role="Project Management, Environment Art, Layout, Look Development, Graphic Design"
            year="2021"
            tools={["Autodesk Maya", "RenderMan", "Substance Designer", "Substance Painter", "Foundry Nuke", "Premiere Pro CC", "Photoshop CC", "Illustrator CC"]}
            heroImage="/portfolio/thumbnails/TK_Shot4.png"
            videoID="O-WUI-i8fBI" // This is the main overview video
            overview={
                <>
                    Created over a 4-month production cycle at the Texas A&M Visualization Department, The Timekeeper is a collaborative 3D animated short film produced by a team of seven. The project utilized a comprehensive pipeline, with all assets created, rigged, and animated in Autodesk Maya and rendered using Pixar's RenderMan.

                    <br /><br />

                    My primary contributions were in Project Management and Environment Art. I was responsible for modeling the environment, handling set dressing and layout to support the narrative, and rigging environmental elements for animation. Additionally, I managed the surfacing workflow, graphic design elements, and the final credit sequence. The film integrated a diverse toolset, including Substance Painter/Designer for texturing and Nuke/Premiere Pro for compositing and editing.
                </>
            }

            // === GALLERY SECTION ===
            galleryImages={[
                // Standard Image
                { 
                    src: "/portfolio/projects/Timekeeper/TimeKeeperPoster.jpg"  
                },
                { 
                    src: "/portfolio/projects/Timekeeper/brick_shaded.png"  
                },                
                // Standard Image
                { 
                    src: "/portfolio/projects/Timekeeper/brick_grayMAT.png"
                },
                 // Image with description
                { 
                    src: "/portfolio/projects/Timekeeper/planks_shaded.png"
                },
                { 
                    src: "/portfolio/projects/Timekeeper/planks_grayMAT.png"
                },
                {
                    src: "/portfolio/projects/Timekeeper/concrete.png"  
                },
                { 
                    src: "/portfolio/projects/Timekeeper/manilaRope.png"  
                },
                { 
                    src: "/portfolio/projects/Timekeeper/dock.jpg",
                    desc: "Modeled in Autodesk Maya & textured in Substance Painter."  
                },
                { 
                    src: "/portfolio/projects/Timekeeper/lantern.jpg",
                    desc: "Modeled lamp with NURBs."  
                },
            ]}
        />
    );
};

export default Timekeeper;