import ProjectLayout from "../ProjectLayout";

const LiveActionExtension = () => {
    return (
        <ProjectLayout
            title="Live Action Set Extension"
            subtitle="Digital Environment"
            role="NURBS Modeling, Lighting, Compositing"
            year="2021"
            tools={["Autodesk Maya", "RenderMan", "Photoshop CC"]}
            heroImage="/portfolio/thumbnails/LiveActionExtensionSet.jpg"
            videoID="" // This is the main overview video
            overview={
                <>
                    This 3-week individual project focused on the challenge of integrating CG assets into live-action footage. The goal was to seamlessly recreate a scene from the 1946 film The Best Years of Our Lives by modeling a Douglas DC-6 airplane and ground equipment entirely in NURBS and compositing them into a photograph I took myself.

                    <br /><br />

                    I began by analyzing film reference and searching blueprints to accurately model the aircraft panel-by-panel. Instead of traditional polygonal modeling, I utilized NURBS in Autodesk Maya to achieve the smooth, manufactured curvature. Texturing was handled in RenderMan to replicate the specific metal and rubber finishes of the era. The final composite involved camera matching a 50mm live-action plate with the Maya camera and utilizing shadow catchers (holdouts) to ground the CG elements realistically within the black-and-white aesthetic of the original film.
                </>
            }

            // === GALLERY SECTION ===
            galleryImages={[
                // Standard Image
                { 
                    src: "/portfolio/projects/LiveActionExtension/SS2.JPG"  
                },                
                // Standard Image
                { 
                    src: "/portfolio/projects/LiveActionExtension/progress_13.jpg"
                },
                 // Image with description
                { 
                    src: "/portfolio/projects/LiveActionExtension/compare_03.jpg",
                    desc: "Comparison side by side of the reference image before final compositing."
                },
                { 
                    src: "/portfolio/projects/LiveActionExtension/plane_and_Reference.jpg"
                }
            ]}
        />
    );
};

export default LiveActionExtension;