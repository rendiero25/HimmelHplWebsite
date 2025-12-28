import ImageSlideshow1 from "../assets/aboutus/aboutus-slideshow-1.png";
import ImageSlideshow2 from "../assets/aboutus/aboutus-slideshow-2.png";
import ImageSlideshow3 from "../assets/aboutus/aboutus-slideshow-3.png";
import ImageSlideshow4 from "../assets/aboutus/aboutus-slideshow-4.png";
import ImageSlideshow5 from "../assets/aboutus/aboutus-slideshow-5.png";
import MissionValuesBg from "../assets/aboutus/aboutus-missionvalues-bg.png";
import Certificate from "../assets/footer/certificates.png"

const AboutUs = () => {
    return (
        <div className="pt-24 bg-white text-gray-900 font-sans overflow-x-hidden">
            
            {/* 1. About Himmel Section */}
            <section className="container mx-auto px-6 py-16 text-center max-w-5xl">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Our Story</p>
                <h1 className="text-4xl md:text-6xl font-primary mb-10 text-gray-800">About Himmel</h1>
                <div className="space-y-6 text-sm md:text-[15px] text-gray-700 leading-relaxed font-regular">
                    <p>
                        HIMMEL is a leading provider of interior solutions. As one of Indonesia's largest High Pressure Laminates (HPL) brand, 
                        our continuous investments in innovation and operation maintain the recognition of HIMMEL as a premium national brand.
                    </p>
                    <p>
                        With a solid reputation and adoption in the market, HIMMEL has grown to be the most recognized brand for surfaces in 
                        Indonesia. Our extensive offerings from HPL, flooring, PVC Board and high quality solutions for beautiful interiors and spaces.
                    </p>
                    <p>
                        We always pride ourselves on our quality, service, and wide selection of product lines, and our sales consultants are trained 
                        as experts to provide creative solutions to our clients and ensure that every product meets their needs.
                    </p>
                    <p className="font-bold text-gray-900 pt-4 tracking-wide">Designed For Quality Life</p>
                </div>
            </section>

            {/* 2. Gallery Section */}
            <section className="pb-20">
                <div className="flex flex-row overflow-x-auto no-scrollbar gap-2 px-2 md:gap-4 md:px-4">
                    {[ImageSlideshow1, ImageSlideshow2, ImageSlideshow3, ImageSlideshow4, ImageSlideshow5].map((img, index) => (
                        <div key={index} className="flex-none w-[70vw] md:w-[25vw] aspect-[4/3] overflow-hidden rounded-sm transition-all duration-700 hover:scale-[1.02]">
                            <img src={img} alt={`Himmel Workspace ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Why Choose Us Section */}
            <section className="bg-white py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-primary mb-6 text-gray-900">why choose us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                        By continuously monitoring market conditions and maintaining maximum performance for our partners, 
                        Himmel will always have the advantage of being a reliable partner in providing competent service.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg md:text-xl text-gray-900 font-primary">Competitive Pricing</h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-4">
                                We always provide the best prices for our partners
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg md:text-xl text-gray-900 font-primary">Professional Workforce</h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-4">
                                Supported by a professional workforce both in the field and in service
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg md:text-xl text-gray-900 font-primary">Supervision and Control</h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-4">
                                Maintaining quality and speed in delivery is one of our passions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Mission & Values Section */}
            <section className="relative min-h-[500px] md:min-h-[800px] flex items-center py-20">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img src={MissionValuesBg} alt="Mission and Values" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30"></div> {/* Subtle overlay */}
                </div>

                <div className="container mx-auto px-6 relative z-10 text-white flex flex-col items-start gap-12">
                    <div className="max-w-xl">
                        <h3 className="font-bold text-base md:text-lg mb-4">Our Mission</h3>
                        <p className="text-sm md:text-base leading-relaxed opacity-90 font-light pr-4">
                            To become a source of blessing for all stakeholders <br className="hidden md:block"/>
                            as a world-class family-oriented business lead <br className="hidden md:block"/>
                            by professional.
                        </p>
                    </div>

                    <div className="max-w-xl">
                        <h3 className="font-bold text-base md:text-lg mb-4">Our Values</h3>
                        <p className="text-sm md:text-base leading-relaxed opacity-90 font-light pr-4">
                            Achieve great customer satisfaction through <br className="hidden md:block"/>
                            providing the best quality home-improvement <br className="hidden md:block"/>
                            products that conform to market needs and are <br className="hidden md:block"/>
                            supplied on time.
                        </p>
                    </div>

                    <div className="max-w-xl">
                        <h3 className="font-bold text-base md:text-lg mb-6">Our Certificate</h3>
                        <img src={Certificate} alt="Himmel Certificates" className="w-[18rem] md:w-[24rem] object-contain" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;