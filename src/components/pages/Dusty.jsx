import ProjectLayout from "../ProjectLayout";

const Dusty = () => {
    return (
        <ProjectLayout
            title="Dusty"
            subtitle="Game Design"
            role="Project Manager, Asset Implementation, Modeling, Set Dressing, VFX, Programming"
            year="2022"
            tools={["Unreal Engine 5", "Autodesk Maya", "Photoshop CC", "Illustrator CC"]}
            heroImage="/portfolio/thumbnails/DustyRender.jpg"
            videoID="6m-APd1cexo" 
            
            overview={
    <>
        Dusty is a stylized low-poly adventure game that blends a hybrid camera system, allowing players to dynamically switch between first-person slingshot combat and third-person platforming to collect logs. Developed over a four-month timeline to showcase our team's game design capabilities, the project focuses on custom mechanics and character work while utilizing Unreal Engine Marketplace assets for the environment.
        
        <br /><br />
        
        My Role as the Project Manager, I oversaw the development timeline while contributing directly to production. My technical and artistic responsibilities included Asset Implementation, Modeling, Set Dressing, VFX, and Programming.
        
        <br /><br />

        {/* HYPERLINK (Updated Style) */}
        <a 
            href="https://manny0730.itch.io/dusty" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:underline font-normal" // <--- The clean style you liked
        >
            Click here to download the game.
        </a>
    </>
}

            // === GALLERY SECTION ===
            galleryImages={[
                { 
                    type: "youtube",
                    videoId: "qTXLc-NueYQ", 
                    desc: "Full gameplay."
                },
            ]}
        />
    );
};

export default Dusty;