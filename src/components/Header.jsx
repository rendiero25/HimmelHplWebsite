import React from 'react';
import logo from '../assets/header/logo.png';
import facebookIcon from '../assets/header/facebook-icon.png';
import instagramIcon from '../assets/header/instagram-icon.png';
import tiktokIcon from '../assets/header/tiktok-icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20 py-6">
      <div className="container mx-auto px-6 md:px-0 flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row justify-between items-center gap-10 relative">
          <img src={logo} alt="Himmel Logo" className="h-8 md:h-10 object-contain z-30 relative" />

          {/* Hamburger Menu Button */}
          <button 
            className="text-gray-800 hover:text-black focus:outline-none z-30 relative cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-4 w-48 bg-black/60 backdrop-blur-md rounded-lg p-8 shadow-2xl flex flex-col items-start gap-5 z-30">
              <a href="#" className="text-white hover:text-red-500 transition-colors text-xl font-medium">Home</a>
              <a href="#" className="text-white hover:text-red-500 transition-colors text-xl font-medium">Product</a>
              <a href="#" className="text-white hover:text-red-500 transition-colors text-xl font-medium">Catalog</a>
              <a href="#" className="text-white hover:text-red-500 transition-colors text-xl font-medium">About Us</a>
              <a href="#" className="text-white hover:text-red-500 transition-colors text-xl font-medium">Contact Us</a>
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-16">
            <a href="https://www.instagram.com/himmel.hpl/?hl=en" className="hover:opacity-80 transition-opacity"><img src={instagramIcon} alt="Instagram" className="w-6" /></a>
            <a href="https://www.facebook.com/himmel.hpl/" className="hover:opacity-80 transition-opacity"><img src={facebookIcon} alt="Facebook" className="w-3" /></a>
            <a href="https://www.tiktok.com/@himmelhpl" className="hover:opacity-80 transition-opacity"><img src={tiktokIcon} alt="TikTok" className="w-5" /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
