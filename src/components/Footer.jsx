import React from 'react';
import certificates from '../assets/footer/certificates.png';
import mailIcon from '../assets/footer/mail-icon.png';
import phoneIcon from '../assets/footer/phone-icon.png';
import whatsappIcon from '../assets/footer/whatsapp-icon.png';
import bgShadow1 from '../assets/footer/redShadow-footerbg1.png';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <img src={bgShadow1} alt="" className="absolute -top-20 -left-20 max-w-none" />
      </div>

      <div className="relative container mx-auto px-6 xl:px-0 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Left Call to Action */}
          <div className="w-full">
            <p className="text-sm tracking-widest mb-4 text-white">Gratis Konsultasi</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Dapatkan konsultasi gratis bersama <br /> ahlinya <span className="font-normal text-gray-300">
                dan temukan produk terbaik untuk rumah, <br /> kantor, maupun tempat bisnis Anda.</span>
            </h2>
            
            <div className='flex flex-col md:flex-row justify-between items-left md:items-center mt-16 gap-10'>
              <div className="flex flex-wrap gap-10 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
                  <span className='text-white'>021-2944-0077</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={whatsappIcon} alt="WA" className="w-4 h-4" />
                  <span className='text-white'>0821-2410-3644</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={mailIcon} alt="Email" className="w-4 h-4" />
                  <span className='text-white'>marketing@himmelhpl.com</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 text-sm font-medium tracking-wide text-white">
                <a href="#" className="hover:text-white transition-colors">Services</a>
                <a href="#" className="hover:text-white transition-colors">Product</a>
                <a href="#" className="hover:text-white transition-colors">Catalog</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Kantor</a>
              </div>
            </div>
            
             {/* Certificates */}
             <div className="mt-10">
                <img src={certificates} alt="Certificates" className="w-[20rem] object-contain opacity-80" />
             </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-10 text-center">
            <h1 className="text-4xl md:text-[5.6rem] font-light tracking-[0.1em] leading-normal md:leading-none">
                HIMMEL <span className="font-thin">|</span> <span className="tracking-normal capitalize font-thin">designed for quality life</span>
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-center mt-25 text-sm text-white/50 gap-10">
               <span>© 2024 Himmel. All rights reserved. Design and developed by <a href="http://rendiero.site" className="font-bold text-white">rendiero.</a></span>
               <div className="flex gap-4 ">
                  <a href="https://www.instagram.com/himmel.hpl/?hl=en" className="hover:opacity-80 transition-opacity">Instagram</a>
                  <a href="https://www.facebook.com/himmel.hpl/" className="hover:opacity-80 transition-opacity">Facebook</a>
                  <a href="https://www.tiktok.com/@himmelhpl" className="hover:opacity-80 transition-opacity">TikTok</a>
               </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
