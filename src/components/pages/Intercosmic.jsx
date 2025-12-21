import ProjectLayout from "../ProjectLayout";

const Intercosmic = () => {
    return (
        <ProjectLayout
            title="Intercosmic Drifters"
            subtitle="Digital Environment"
            role="Environment Artist, Technical Artist, Look Development"
            year="2022"
            tools={["Unreal Engine 5", "Photoshop CC", "Premiere Pro CC"]}
            heroImage="/projects/intercosmic/manuel-toledo-missiontominerva-00.jpeg"
            videoID="iNYxcbm9fCo" // This is the main overview video
            overview={`
                This project was created for the "Mission to Minerva" challenge hosted by KitBash3D. It focuses on cinematic composition and technical environment art within Unreal Engine 5.
                
                The goal was to create a sense of vast scale and isolation by juxtaposing the heavy industrial aesthetic of the Minerva kit against a custom-designed celestial backdrop. To achieve this, I utilized procedural set dressing by creating custom Actor Blueprints to scatter and randomize Megascan rocks, generating a dense and natural-looking asteroid field. For the texture and material art, I photobashed pre-made space HDRI maps in Photoshop to create the planet and nebula textures for a specific stylized look, while building custom material blueprints in Unreal to handle shader complexity. Finally, I focused on cinematography by implementing camera shake and sequencer animation to simulate the physical rumble of the spacecraft engines.
            `}

            // === GALLERY SECTION ===
            galleryImages={[
                // Standard Image
                { 
                    src: "/projects/intercosmic/manuel-toledo-missiontominerva-01.jpeg"  
                },                
                // Standard Image
                { 
                    src: "/projects/intercosmic/manuel-toledo-missiontominerva-02.jpeg"  
                },
                 // Image with description
                { 
                    src: "/thumbnails/intercosmic.png",
                    desc: "Integrated the texture assets into a Maya pipeline and generated another image using the Arnold renderer."
                }
            ]}
        />
    );
};

export default Intercosmic;