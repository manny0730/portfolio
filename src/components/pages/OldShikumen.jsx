import ProjectLayout from "../ProjectLayout";

const OldShikumen = () => {
    return (
        <ProjectLayout
            title="Old Shikumen"
            subtitle="Digital Environment"
            role="Modeling, Lighting"
            year="2023"
            tools={["Autodesk Maya", "Autodesk Arnold", "ZBrush"]}
            heroImage="/portfolio/thumbnails/manuel-toledo-oldshikumensocialmedia.jpeg"
            videoID="" // This is the main overview video
            overview={
                <>
                    This environment is a 3D recreation of a concept piece from the animated feature film "Wish Dragon," originally designed by <a href="https://www.artstation.com/artwork/g2qqgQ" target="_blank" rel="noreferrer" className="text-white hover:underline font-normal">Jason Song</a>. Created as a portfolio piece during my time at AnimSchool, my goal was to faithfully translate the charm and specific stylistic language of the movie's 2D concept art into a fully realized 3D space.
                    
                    <br /><br />

                    Under the guidance of mentor Brien Hindman, I was responsible for all aspects of the pipeline. I modeled the environment in Autodesk Maya, carefully matching the shapes and silhouettes of the original design, and used ZBrush to add the necessary organic details. The lighting and look development were executed in Arnold to capture the warm, lived-in atmosphere of the Shikumen lane, bridging the gap between stylized concept and production-ready 3D environment.
                </>
            }

            // === GALLERY SECTION ===
            galleryImages={[
                // Standard Image
                { 
                    src: "/portfolio/thumbnails/manuel-toledo-oldshikumensocialmedia.jpeg"  
                },                
                // Standard Image
                { 
                    src: "/portfolio/projects/OldShikumen/manuel-toledo-oldshikumencolor.jpeg"  
                },
                 // Image with description
                { 
                    src: "/portfolio/projects/OldShikumen/manuel-toledo-oldshikumenclay.jpeg",
                    desc: "Clay Render."
                },
                 // Image with description
                { 
                    src: "/portfolio/projects/OldShikumen/manuel-toledo-oldshikumenwireframe.jpeg",
                    desc: "Wireframe Render."
                },
                 // Image with description
                { 
                    src: "/portfolio/projects/OldShikumen/manuel-toledo-oldshikumenconcept.jpeg",
                    desc: "Concept Art by Jason Song."
                }
            ]}
        />
    );
};

export default OldShikumen;