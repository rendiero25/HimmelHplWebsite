import Home from "./pages/Index";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import floatingWhatsapp from "./assets/floating-whatsapp.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6282124103644" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform duration-300"
      >
        <img src={floatingWhatsapp} alt="Chat on WhatsApp" className="w-16 h-16 drop-shadow-lg" />
      </a>

      {/* Hidden other pages for now as we focus on Home UI */}
      {/* 
      <Product />
      <Catalog />
      <AboutUs />
      <Contact /> 
      */}
    </div>
  );
}

export default App;
