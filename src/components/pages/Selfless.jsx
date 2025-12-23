import ProjectLayout from "../ProjectLayout";

const Selfless = () => {
    return (
        <ProjectLayout
            title="Selfless"
            subtitle="Game Design"
            role="Lead Programmer, Environment Art, Technical Art"
            year="2019"
            tools={["Unreal Engine 4","Autodesk Maya", "Blender", "Substance Painter", "After Effects", "Photoshop CC", "Illustrator CC", "Audacity"]}
            heroImage="/portfolio/thumbnails/SelflessTitleScreen.png"
            videoID="Ssv1QB5B_O4" // This is the main overview video
            overview={
                <>
                    Selfless is a short video game developed over a 4-month period in collaboration with Sergio Alonzo-Macias and Adrienne Bulos. While the artistic responsibilities, such as modeling and texturing, were shared among the team, I took on the primary role of Lead Programmer for the entire project.

                    <br /><br />

                    My contributions extended beyond code to include significant asset creation. I modeled and textured key environmental elements for both the first and second levels, including trees, cliffs, mountains, and the pedestal end-point assets, utilizing a workflow involving Blender, Maya, and Substance Painter. I also handled technical art tasks, such as modeling, texturing, and animating the water shader in Unreal Engine.
                </>
            }

            // === GALLERY SECTION ===
            galleryImages={[
                // Standard Image
                { 
                    src: "/portfolio/thumbnails/SelflessTitleScreen.png",
                    desc: "Title screen: Tree stumps were modeled and textured by Adrienne Bulos. The rest of the environment was modeled and textured by Manuel Toledo through Blender."  
                },
                { 
                    src: "/portfolio/projects/Selfless/Mountain.jpg",
                    desc: "This asset was used for the second level as part of our environment. The mountain was modeled and textured by Manuel Toledo through Blender."                      
                },                
                // Standard Image
                { 
                    src: "/portfolio/projects/Selfless/Water.jpg",
                    desc: "This asset was used for the second level of our game. The water was modeled, textured, and animated by Manuel Toledo through Unreal Engine."
                },
                 // Image with description
                { 
                    src: "/portfolio/projects/Selfless/Ice_Imp.jpg",
                    desc: "This enemy, as we call it Imp, was modeled by Sergio Macias and Manuel Toledo through Maya. The Imp was textured accordingly to the game level by Adrienne Bulos."
                },
                { 
                    src: "/portfolio/projects/Selfless/Pedestal.jpg",
                    desc: "This asset was used as an end point for each level. It was modeled and textured by Manuel Toledo through Maya and Substance Painter."
                },
                {
                    src: "/portfolio/projects/Selfless/Tree_2.jpg",
                    desc: "This double branched tree was used for the first level as part of our environment. It was modeled and textured by Manuel Toledo through Maya and Substance Painter."  
                },
                { 
                    src: "/portfolio/projects/Selfless/Tree_1.jpg",
                    desc: "This single branched tree was used for the first level as part of our environment. It was modeled and textured by Manuel Toledo through Maya and Substance Painter."  
                },
                { 
                    src: "/portfolio/projects/Selfless/Cliff.jpg",
                    desc: "This cliff and other similar models were used as a platform for the first level. It was modeled and textured by Manuel Toledo through Maya and Substance Painter."  
                }
            ]}
        />
    );
};

export default Selfless;