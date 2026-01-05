import ProjectLayout from "../ProjectLayout";

const AstraLens = () => {
    return (
        <ProjectLayout
            title="Astra Lens"
            subtitle="Mixed Reality"
            role="Backend Development, Procedural Generation, UI Programming"
            year="2025"
            tools={["Unity", "C#", "NASA API", "Meta Quest 2"]}
            heroImage="/portfolio/thumbnails/XRCC-Thumbnail.png"
            videoID="Bax3GlZafEY" // This is the main overview video
            overview={
                <>
                    Developed for XRCC, Astra Lens is a mixed-reality application designed to transform the NASA Exoplanet Archive into an immersive, room-scale experience. Working within a team of four, I served as the primary backend developer for the TRAPPIST-1 system generation.

                    <br /><br />

                    I developed a robust C# backend to dynamically fetch, parse, and visualize real-time JSON data from the NASA Exoplanet Archive API, utilizing Gemini to optimize the sorting logic. My technical focus was on building the procedural spawning systems; I implemented trigonometric positioning for randomized yet accurate orbital placement and created a custom spacing algorithm to ensure visual clarity between planetary bodies. Additionally, I ensured data integrity by creating filters for the latest scientific publications and enhanced user navigation through the implementation of billboard-tracked spatial UI elements.
                </>
            }

            // === GALLERY SECTION ===
            galleryImages={[
    { 
        src: "/portfolio/projects/AstraLens/Certificate.png",        
    }
]}
        />
    );
};

export default AstraLens;