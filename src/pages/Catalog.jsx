import CatalogCover from "../assets/catalog/catalogcover.png";
import CatalogFile from "../assets/catalog/E-CatalogHPLHimmel.pdf";
import CatalogBg from "../assets/catalog/catalogpagebg.png";
import FadeIn from "../components/FadeIn";

const Catalog = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-10 flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img src={CatalogBg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div> {/* Overlay for readability */}
            </div>

            <div className="container mx-auto px-6 xl:px-16 2xl:px-2 relative z-10 flex flex-col items-center md:items-start gap-12 md:gap-0">
                {/* Catalog Cover */}
                 <FadeIn direction="right" delay={0.2} className="w-full md:w-1/3 max-w-sm shrink-0">
                    <img src={CatalogCover} alt="Himmel Catalog" className="w-full h-auto rounded-sm transform hover:scale-105 transition-transform duration-500" />
                </FadeIn>

                {/* Content */}
                <FadeIn direction="up" delay={0.4} className="md:mt-10 w-full md:w-2/3 text-white text-center md:text-left">
                     <p className="text-lg md:text-xl font-regular leading-relaxed mb-12 opacity-90 max-w-2xl">
                        They are nature while adding so much more. <br className="hidden md:block"/>
                        The collection streches beyond traditional <br className="hidden md:block"/>
                        looks at times and touches on trend with <br className="hidden md:block"/>
                        graphic interpretations.
                    </p>

                    <div className="space-y-4">
                        <p className="font-bold text-lg">Download our catalog below</p>
                        <a 
                            href={CatalogFile} 
                            download
                            className="inline-block bg-gradient-to-r from-primary to-[#801115] hover:bg-[#a82222] text-white overflow-hidden text-md font-medium py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/50 cursor-pointer"
                        >
                            Download
                        </a>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Catalog;