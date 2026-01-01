import ImageSlideshow1 from "../assets/aboutus/aboutus-slideshow-1.png";
import ImageSlideshow2 from "../assets/aboutus/aboutus-slideshow-2.png";
import FadeIn from "../components/FadeIn";
import StaggerContainer from "../components/StaggerContainer";
import ImageSlideshow3 from "../assets/aboutus/aboutus-slideshow-3.png";
import ImageSlideshow4 from "../assets/aboutus/aboutus-slideshow-4.png";
import ImageSlideshow5 from "../assets/aboutus/aboutus-slideshow-5.png";
import ImageSlideshow6 from "../assets/aboutus/aboutus-slideshow-1.png";
import ImageSlideshow7 from "../assets/aboutus/aboutus-slideshow-2.png";
import MissionValuesBg from "../assets/aboutus/aboutus-missionvalues-bg.png";
import Certificate from "../assets/footer/certificates.png";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AboutUs = () => {
    return (
        <div className="pt-10 md:pt-24 bg-gradient-to-b from-white via-third to-third text-gray-900 font-sans overflow-x-hidden">
            
            {/* 1. About Himmel Section */}
            <section className="container mx-auto px-6 py-16 text-center max-w-5xl">
                <FadeIn delay={0.2} direction="up">
                  <p className="text-black/50 text-sm uppercase tracking-[0.2em] mb-4">Our Story</p>
                  <h1 className="font-secondary text-4xl md:text-6xl text-gray-900 mb-10">About Himmel</h1>
                  <div className="space-y-6 text-lg text-black font-medium leading-relaxed">
                      <p>
                          HIMMEL is a leading provider of interior solutions. As one of Indonesia’s largest High Pressure Laminates (HPL) brand, 
                          our continuous investments in innovation and operation maintain the recognition of HIMMEL as a premium national brand. 
                          With a solid reputation and adoption in the market, HIMMEL has grown to be the most recognized brand for surfaces in 
                          Indonesia. Our extensive offerings from HPL, flooring, PVC Board and high quality solutions for beautiful interiors and spaces. 
                          We always pride ourselves on our quality, service, and wide selection of product lines, and our sales consultants are trained 
                          as experts to provide creative solutions to our clients and ensure that every product meets their needs. 
                          Designed For Quality Life
                      </p>
                  </div>
                </FadeIn>
            </section>

            {/* 2. Gallery Section */}
            <FadeIn direction="up" delay={0.5}>
                <section className="md:pb-20">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        slidesPerView={"auto"}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        className="gallery-swiper w-full"
                    >
                        {[ImageSlideshow1, ImageSlideshow2, ImageSlideshow3, ImageSlideshow4, ImageSlideshow5, ImageSlideshow6, ImageSlideshow7].map((img, index) => (
                            <SwiperSlide key={index} className="!w-[70vw] md:!w-[25vw] py-4">
                                <div className="w-[450px] h-[250px] overflow-hidden transition-all duration-700 hover:scale-[1.02] shadow-lg">
                                    <img src={img} alt={`Himmel Workspace ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </FadeIn>

            {/* 3. Why Choose Us Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <FadeIn direction="up" delay={0.1}>
                        <h2 className="text-4xl md:text-7xl font-secondary mb-10 text-black">Why choose us</h2>
                        <p className="font-medium max-w-4xl mx-auto mb-16 text-lg text-black">
                            By continuously monitoring market conditions and maintaining maximum performance for our partners, 
                            Himmel will always have the advantage of being a reliable partner in providing competent service.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <FadeIn delay={0.2} direction="up" className="space-y-3">
                            <h3 className="font-bold text-xl text-gray-900 font-primary">Competitive Pricing</h3>
                            <p className="text-black text-lg font-regular leading-relaxed px-4">
                                We always provide the best prices for our partners
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up" className="space-y-3">
                            <h3 className="font-bold text-xl text-gray-900 font-primary">Professional Workforce</h3>
                            <p className="text-black text-lg font-regular leading-relaxed px-4">
                                Supported by a professional workforce both in the field and in service
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.6} direction="up" className="space-y-3">
                            <h3 className="font-bold text-xl text-gray-900 font-primary">Supervision and Control</h3>
                            <p className="text-black text-lg font-regular leading-relaxed px-4">
                                Maintaining quality and speed in delivery is one of our passions.
                            </p>
                        </FadeIn>
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

                <div className="container mx-auto px-6 xl:px-16 2xl:px-2 relative z-10 text-white flex flex-col items-start gap-12">
                    <FadeIn delay={0.2} direction="right" className="max-w-xl">
                        <h3 className="font-bold text-xl mb-4">Our Mission</h3>
                        <p className="text-lg leading-relaxed pr-4">
                            To become a source of blessing for all stakeholders <br className="hidden md:block"/>
                            as a world-class family-oriented business lead <br className="hidden md:block"/>
                            by professional.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="right" className="max-w-xl">
                        <h3 className="font-bold text-xl mb-4">Our Values</h3>
                        <p className="text-lg leading-relaxed pr-4">
                            Achieve great customer satisfaction through <br className="hidden md:block"/>
                            providing the best quality home-improvement <br className="hidden md:block"/>
                            products that conform to market needs and are <br className="hidden md:block"/>
                            supplied on time.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="right" className="max-w-xl">
                        <h3 className="font-bold text-xl mb-6">Our Certificate</h3>
                        <img src={Certificate} alt="Himmel Certificates" className="w-[18rem] md:w-[30rem] object-contain" />
                    </FadeIn>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;