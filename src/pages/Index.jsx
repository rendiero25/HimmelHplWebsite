import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import StaggerContainer from '../components/StaggerContainer';

// Hero Assets
import heroSlide1 from '../assets/home/hero-slideshow1.png';
import heroSlide2 from '../assets/home/hero-slideshow2.png';
import heroSlide3 from '../assets/home/hero-slideshow3.png';
import redCircle from '../assets/home/red-circle.png';

// Section Images
import section2Image from '../assets/home/section2-image.png';
import section3Image1 from '../assets/home/section3-image1.png';
import section3Image2 from '../assets/home/section3-image2.png';
import section3Image3 from '../assets/home/section3-image3.png';
import section3Image4 from '../assets/home/section3-image4.png';
import section3Image5 from '../assets/home/section3-image5.png';
import section3Image6 from '../assets/home/section3-image6.png';
import section3Image7 from '../assets/home/section3-image7.png';

// Product Images
import daftarProdukImg from '../assets/home/daftarproduk-image.png';
import hplImg from '../assets/home/hpl-image.png';
import pvcBoardImg from '../assets/home/pvcboard-image.png';
import wpcPoolDeckImg from '../assets/home/wpcpooldeck-image.png';
import spcFlooringImg from '../assets/home/spcflooring-image.png';
import vinylFlooringImg from '../assets/home/vinylflooring-image.png';
import edgingPvcImg from '../assets/home/edgingpvc-image.png';
import wpcWallPanelImg from '../assets/home/wpcwallpanel-image.png';
import uvBoardImg from '../assets/home/uvboard-image.webp';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroSlide1, heroSlide2, heroSlide3];

  const [currentPhilosophySlide, setCurrentPhilosophySlide] = useState(0);
  const philosophySlides = [
    section3Image1,
    section3Image2,
    section3Image3,
    section3Image4,
    section3Image5,
    section3Image6,
    section3Image7
  ];

  const nextPhilosophySlide = () => {
    setCurrentPhilosophySlide((prev) => (prev + 1) % philosophySlides.length);
  };

  const prevPhilosophySlide = () => {
    setCurrentPhilosophySlide((prev) => (prev - 1 + philosophySlides.length) % philosophySlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="font-primary text-gray-800">
      
      {/* --- HERO SECTION --- */}
      {/* --- HERO SECTION --- */}
      <section className="relative md:h-screen md:min-h-[600px] bg-gradient-to-br from-white to-third flex items-center overflow-hidden">
        
        {/* Container for Left Content */}
        <div className="container mx-auto px-6 xl:px-16 2xl:px-2 h-full flex items-start md:items-center relative z-10 pointer-events-none xl:pt-20 mb-[38rem] md:mb-0">
           
           <div className="w-full md:w-1/2 pointer-events-auto h-1/2 md:h-full flex flex-col justify-center relative pt-20 md:pt-0">
             {/* Vertical Line - Inside Wrapper now, relative to this column */}
             <div className="absolute left-[37%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-third/0 to-third hidden md:block"></div>
             
             {/* Top Right Intro Text */}
             <FadeIn delay={0.2} direction="down" className="hidden xl:flex flex-col absolute top-0 left-[52%] 2xl:mt-10">
                <h3 className="font-primary font-medium text-black text-3xl leading-tight mb-4">
                  Your <br/>
                  Partner In <br/>
                  Interior <br/>
                  Development.
                </h3>
                <a href="/about-us" className="text-red-600 text-sm font-bold tracking-widest uppercase hover:text-red-700 transition-colors">
                  Read more
                </a>
             </FadeIn>

             <FadeIn delay={0.4} direction="up">
               <h1 className="md:mt-30 font-secondary text-black font-medium text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] relative z-10 mix-blend-multiply">
                 Himmel.<br />
                 Designed for <br />
                 quality life
               </h1>
             </FadeIn>
             
             <FadeIn delay={0.6} direction="up" className="flex flex-col xl:flex-row gap-18 text-sm md:text-xs font-reguler tracking-wide uppercase md:pt-12 max-w-xl">
                <div className="w-[50%] xl:w-[35%] 2xl:w-[50%] flex flex-row justify-between items-start gap-2 border-t border-black pt-4">
                   <span className='text-black text-lg'>01</span>
                   <span className="text-black text-lg md:text-right leading-relaxed normal-case block">Contact us immediately to ask something</span>
                </div>
                <div className="w-[50%] xl:w-[35%] 2xl:w-[50%] flex flex-row justify-between items-start gap-2 border-t border-black pt-4">
                   <span className='text-black text-lg'>02</span>
                   <span className="text-black text-lg md:text-right leading-relaxed normal-case block">Our collection in interior development</span>
                </div>
             </FadeIn>

             {/* Red Circle Button - Positioned relative to content now, or absolute? 
                 Design usually has it overlapping image or centered.
                 Previous: absolute right-4 ... transform
                 Let's keep it consistent with previous logic or attach to the right of this container?
             */}
           </div>
           
             {/* Red Circle Button (Absolute centered on the split line) */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:block pointer-events-auto">
                <motion.img 
                  src={redCircle} 
                  alt="Explore" 
                  className="w-20 h-20 md:w-24 md:h-24 hover:scale-105 transition-transform cursor-pointer" 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
            </div>
        </div>

        {/* Right Slideshow - Absolute Position */}
        <div className="absolute bottom-0 md:top-0 right-0 w-full md:w-1/2 h-1/2 md:h-full z-0">
           {slides.map((slide, index) => (
             <div 
               key={index}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
             >
                <img src={slide} alt={`Slide ${index}`} className="w-full h-full object-cover" />
             </div>
           ))}
           
           {/* Slider Controls */}
           <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 text-white text-xs tracking-widest z-10 font-secondary">
              <span className="text-xl">0{currentSlide + 1}</span>
              <span className="block h-[1px] w-12 bg-white/50 my-auto"></span>
              <span className="opacity-50 text-xl">03</span>
           </div>
        </div>
      </section>


      {/* --- ABOUT SECTION --- */}
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-end items-start py-30">
         <div className="absolute inset-0">
            <img src={section2Image} alt="About Himmel" className="w-full h-full object-cover"/>
         </div>
         <div className="container mx-auto px-6 xl:px-0 relative z-10 h-full text-white">
            <FadeIn delay={0.2} direction="up">
              <p className="font-primary text-xl md:text-3xl leading-relaxed opacity-90 max-w-4xl">
                 <span className='font-bold'>Himmel </span>is a leading provider of interior solutions. <br /> 
                      As one of Indonesia’s largest High Pressure Laminates (HPL) brand, 
                      our continuous investments in innovation and operation maintain 
                      the recognition of HIMMEL as a premium national brand. 
                      With a solid reputation and adoption in the market, HIMMEL has 
                      grown to be the most recognized brand for surfaces in Indonesia. 
                      Our extensive offerings from HPL, flooring, PVC Board and high 
                      quality solutions for beautiful interiors and spaces.
              </p>
            </FadeIn>
         </div>
      </section>


      {/* --- PRODUCT GRID SECTION --- */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         
         {/* 1. Daftar Produk (Red) */}
         <div className="relative group overflow-hidden bg-red-600 h-100 md:h-150 flex items-center justify-center p-8 text-center text-white">
            <img src={daftarProdukImg} alt="Daftar Produk" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
               <h3 className="text-5xl leading-tight">Daftar<br/>Produk</h3>
            </div>
         </div>

          {/* 2. High Pressure Laminate */}
         <FadeIn delay={0.1} direction="up" className="h-full w-full">
           <div 
              onClick={() => navigate('/product?category=hpl')}
              className="relative group overflow-hidden h-100 md:h-150 cursor-pointer w-full"
           >
              <img src={hplImg} alt="HPL" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="px-6 xl:px-0 absolute text-center text-white h-full w-full flex flex-col justify-center items-center">
                 <h3 className="font-bold text-3xl mb-2 leading-relaxed">High Pressure<br/>Laminate (HPL)</h3>
                 <p className="text-md max-w-sm leading-relaxed">Bahan pelapis yang digunakan lapisan 
                    teratas atau finishing pada furnitur kayu,
                    sehingga menampilkan tampilan yang
                    halus namun bertekstur</p>
              </div>
           </div>
         </FadeIn>

         {/* 3. PVC Board */}
         <FadeIn delay={0.2} direction="up" className="h-full w-full">
           <div 
              onClick={() => navigate('/product?category=pvc-board')}
              className="relative group overflow-hidden h-100 md:h-150 cursor-pointer w-full"
           >
              <img src={pvcBoardImg} alt="PVC Board" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="px-6 xl:px-0 absolute text-center text-white h-full w-full flex flex-col justify-center items-center">
                 <h3 className="font-bold text-3xl mb-2 leading-relaxed">PVC Board</h3>
                 <p className="text-md max-w-sm leading-relaxed">Produk material yang dihasilkan melalui
                    pemrosesan dengan menggunakan mesin
                    proses foam</p>
              </div>
           </div>
         </FadeIn>

          <FadeIn delay={0.6} direction="up" className="h-full w-full">
              <div
                  onClick={() => navigate('/product?category=edging-pvc')}
                  className="relative group overflow-hidden h-100 md:h-150 cursor-pointer w-full"
              >
                  <img src={edgingPvcImg} alt="Edging PVC" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                  <div className="px-6 xl:px-0 absolute text-center text-white h-full w-full flex flex-col justify-center items-center">
                      <h3 className="font-bold text-3xl mb-2 leading-relaxed">Edging PVC</h3>
                      <p className="text-md max-w-sm leading-relaxed">Salah satu produk pelapis sekaligus
                          pelindung sisi samping sebuah furnitur meja, lemari, maupun backdrop</p>
                  </div>
              </div>
          </FadeIn>

          {/* 5. SPC Flooring */}
          <FadeIn delay={0.4} direction="up" className="h-full w-full">
              <div
                  onClick={() => navigate('/product?category=flooring')}
                  className="relative group overflow-hidden h-100 md:h-150 cursor-pointer w-full"
              >
                  <img src={spcFlooringImg} alt="SPC Flooring" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                  <div className="px-6 xl:px-0 absolute text-center text-white h-full w-full flex flex-col justify-center items-center">
                      <h3 className="font-bold text-3xl mb-2 leading-relaxed">Flooring</h3>
                      <p className="text-md max-w-sm leading-relaxed">Tipe material lantai, berbahan utama
                          stone polymer composite (SPC) </p>
                  </div>
              </div>
          </FadeIn>

         {/* 4. WPC Pool Deck */}
         <FadeIn delay={0.3} direction="up" className="h-full w-full">
            <div 
               onClick={() => navigate('/product?category=wpc-pooldeck')}
               className="relative group overflow-hidden h-100 md:h-150 cursor-pointer w-full"
            >
               <img src={wpcPoolDeckImg} alt="WPC Pool Deck" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
               <div className="px-6 xl:px-0 absolute text-center text-white h-full w-full flex flex-col justify-center items-center">
                  <h3 className="font-bold text-3xl mb-2 leading-relaxed">Pool Deck</h3>
                  <p className="text-md max-w-sm leading-relaxed">Inovasi baru yang menjadi solusi ideal
                     pengganti solid wood decking</p>
               </div>
            </div>
         </FadeIn>

           {/* 8. WPC Wall Panel */}
         <FadeIn delay={0.7} direction="up" className="h-full w-full">
            <div 
               onClick={() => navigate('/product?category=wpc-wallpanel')}
               className="relative group overflow-hidden h-100 md:h-150 cursor-pointer w-full"
            >
               <img src={wpcWallPanelImg} alt="WPC Wall Panel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
               <div className="px-6 xl:px-0 absolute text-center text-white h-full w-full flex flex-col justify-center items-center">
                  <h3 className="font-bold text-3xl mb-2 leading-relaxed">WPC Wall Panel</h3>
                  <p className="text-md max-w-sm leading-relaxed">Salah satu produk pelapis sekaligus
                  pelindung sisi samping sebuah furnitur meja, lemari, maupun backdrop</p>
               </div>
            </div>
         </FadeIn>


          {/* 6. UV board */}
          <FadeIn delay={0.5} direction="up" className="h-full w-full xl:col-span-2 lg:col-span-2">
             <div
                onClick={() => navigate('/product?category=uv-board')}
                className="relative group overflow-hidden h-100 md:h-150 cursor-pointer w-full"
             >
                <img src={uvBoardImg} alt="Vinyl Flooring" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="px-6 xl:px-0 absolute text-center text-white h-full w-full flex flex-col justify-center items-center">
                   <h3 className="font-bold text-3xl mb-2 leading-relaxed">UV Board</h3>
                   <p className="text-md max-w-sm leading-relaxed">panel dekoratif modern dari bahan PVC atau MDF yang permukaannya dilapisi cat khusus lalu dikeringkan dengan sinar Ultraviolet (UV)</p>
                </div>
             </div>
          </FadeIn>

      </StaggerContainer>


      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative min-h-screen flex justify-center items-center">
         <div className="absolute inset-0">
             {philosophySlides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentPhilosophySlide ? 'opacity-100' : 'opacity-0'}`}
                >
                   <img src={slide} alt={`Philosophy ${index}`} className="w-full h-full object-cover" />
                </div>
             ))}
             {/* Gradient Overlay from bottom */}
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-[90%] self-end"></div>
         </div>
         
         <div className="container mx-auto px-6 xl:px-16 3xl:px-0 relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-white">
             <div className="max-w-xl h-full">
                 <FadeIn delay={0.2} direction="up">
                   <p className="text-md tracking-widest mb-3 text-center md:text-left">Tingkatkan Pengalaman Hidup Anda</p>
                   <h2 className="font-primary text-4xl md:text-7xl leading-tight font-medium text-center md:text-left">
                      We design <br />
                      the places <br />
                      where people <br />
                      love to be <br />
                      together.
                   </h2>
                 </FadeIn>
             </div>
             
             {/* Slider Navigation Icons */}
             <div className="flex md:self-end gap-4 mb-4">
               <button 
                  onClick={prevPhilosophySlide}
                  className="cursor-pointer w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition"
               >
                  <BsChevronLeft className="w-5 h-5" />
               </button>
               <button 
                  onClick={nextPhilosophySlide}
                  className="cursor-pointer w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition"
               >
                  <BsChevronRight className="w-5 h-5" />
               </button>
             </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
