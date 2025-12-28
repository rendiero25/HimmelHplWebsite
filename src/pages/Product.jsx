import React, { useState, useEffect, useMemo } from 'react';
import productsData from '../data/products.json';
import { flattenProducts } from '../utils/productUtils';
import { BsChevronLeft, BsChevronRight, BsSearch } from 'react-icons/bs';

// Philosophy Images (Reuse from Home)
import section3Image1 from '../assets/home/section3-image1.png';
import section3Image2 from '../assets/home/section3-image2.png';
import section3Image3 from '../assets/home/section3-image3.png';
import section3Image4 from '../assets/home/section3-image4.png';
import section3Image5 from '../assets/home/section3-image5.png';
import section3Image6 from '../assets/home/section3-image6.png';
import section3Image7 from '../assets/home/section3-image7.png';

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState(productsData[0]?.['kategori-produk'] || 'hpl');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    // Philosophy Slider State
    const [currentPhilosophySlide, setCurrentPhilosophySlide] = useState(0);
    const philosophySlides = [section3Image1, section3Image2, section3Image3, section3Image4, section3Image5, section3Image6, section3Image7];

    const nextPhilosophySlide = () => setCurrentPhilosophySlide(prev => (prev + 1) % philosophySlides.length);
    const prevPhilosophySlide = () => setCurrentPhilosophySlide(prev => (prev - 1 + philosophySlides.length) % philosophySlides.length);


    // 1. Get current category object
    const currentCategoryData = useMemo(() => {
        return productsData.find(cat => cat['kategori-produk'] === selectedCategory);
    }, [selectedCategory]);

    // 2. Flatten data for this category
    const flatProducts = useMemo(() => {
        if (!currentCategoryData) return [];
        return flattenProducts(currentCategoryData['data-produk']);
    }, [currentCategoryData]);

    // 3. Filter by Search
    const filteredProducts = useMemo(() => {
        return flatProducts.filter(p => 
            p['nama-produk'].toLowerCase().includes(searchQuery.toLowerCase()) || 
            (p['kode-produk'] && p['kode-produk'].toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [flatProducts, searchQuery]);

    // 4. Pagination Logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(start, start + itemsPerPage);
    }, [filteredProducts, currentPage]);

    // Reset page on category or search change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery]);
    
    // Modal State
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };


    // Formatting Category Name for Title
    const formatCategoryTitle = (slug) => {
        const map = {
            'hpl': 'High Pressure Laminate (HPL)',
            'edging-pvc': 'Edging PVC',
            'pvc-board': 'PVC Board',
            'wpc-pooldeck': 'WPC Pool Deck',
            'spc-flooring': 'SPC Flooring',
            'vinyl-flooring': 'Vinyl Flooring',
            'wpc-wallpanel': 'WPC Wall Panel'
        };
        return map[slug] || slug.replace('-', ' ');
    };
    
    // Category Description (Placeholder based on design intuition or generic)
    const getCategoryDescription = (slug) => {
        if(slug === 'hpl') return "Bahan pelapis yang digunakan lapisan teratas atau finishing pada furniture berbahan kayu, sehingga menampilkan tampilan yang halus namun berstruktur. Material finishing yang cukup banyak unggulan, seperti tahan gores dan kuat, resistensi infiltrasi, higienis, sangat tahan terhadap noda dan panas, anti statis, lebih sehat dan mudah dibersihkan serta dipelihara.";
        if(slug === 'edging-pvc') return "Salah satu produk pelapis sekaligus pelindung sisi samping sebuah furniture seperti meja, lemari maupun backdrop. Edging ini terbuat dari bahan resin sehingga menghasilkan produk yang tahan akan benturan, cocok untuk melindungi sisi samping furniture Anda.";
        if(slug === 'pvc-board') return "Produk material yang dihasilkan melalui pemerosesan dengan menggunakan mesin ekstrusi proses foam. Selain itu pada proses saat produksinya tidak menggunakan bahan-bahan kimia beracun seperti di antaranya asbes, formatin, kadmium, dan timbal. Memiliki bobot yang ringan dan tampilan elegan sangat cocok digunakan untuk membuat interior rumah menjadi lebih indah";
        if(slug === 'wpc-pooldeck') return "Inovasi baru yang menjadi solusi ideal pengganti solid wood decking. Seperti namanya, material WPC ini terbuat dari campuran plastik daur ulang dan kayu natural. Campuran kayu yang digunakan pada WPC diambil dari sisa hasil olahan kayu, seperti misalnya serbuk kayu dan sumber fiber lainnya, seperti bambu atau sekam padi. WPC dikenal awet dan tahan lama";
        if(slug === 'spc-flooring') return "Tipe material lantai, berbahan utama Stone Polymer Composite (SPC). Dengan unsur komponen adalah bubuk batu alam (limestone) yang dikombinasikan dengan resin (plastic polymer). Pelapis lantai vinyl ini merupakan pengembangan dari versi luxury vinyl tiles (LVT). lantai ini juga dikenal karena ketahananya terhadap air dan goresan, serta mudah dipasang.";
        if(slug === 'vinyl-flooring') return "Jenis lantai yang terbuat dari plastik polivinil klorida (PVc) yang dicampur dengan bahan-bahan lain seperti plastikizer, pigmen, dan stablizer. Material ini dapat dibuat dalam bentuk lembaran atau tile yang mudah dipotong dan dipasang sesuai dengan ukuran dan bentuk ruangan. Jenis permukaan lantai ini memiliki ciri khasnyater sendiri, yaitu punya motif kayu dengan harga yang terjangkau";
        if(slug === 'wpc-wallpanel') return "panel pelapis dinding inovatif yang terbuat dari Wood Plastic Composite, campuran serat kayu/serbuk kayu dan plastik daur ulang, menjadikannya material kuat, tahan air, rayap, dan cuaca, dengan tampilan estetis menyerupai kayu alami, sering digunakan sebagai alternatif modern untuk pelapis dinding interior/eksterior yang mudah dipasang dan minim perawatan.";
        return "Discover our high-quality range of products designed to elevate your interior spaces.";
    };

    // Helper to dynamically load images that are in src/data. 
    // Vite needs import.meta.glob or generic import. 
    // Given the previous user context on recursive generation script, it seems they just put paths strings.
    // Let's create a specialized Image component or helper.

    const resolveImage = (path) => {
        return path; 
    };

    return (
        <div className="pt-24 min-h-screen bg-[#F5F1EA] font-primary relative">
            
            {/* Header Text */}
            <div className="text-center py-10 px-4">
                <p className="text-sm tracking-[0.2em] text-black/50 uppercase mb-4">Produk Kami</p>
                <h1 className="font-secondary text-5xl md:text-6xl text-gray-900">Elegance Awaits You</h1>
            </div>

            {/* Category Tabs */}
            <div className="container mx-auto px-4 md:px-0 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {productsData.map((cat) => (
                        <button
                            key={cat['kategori-produk']}
                            onClick={() => setSelectedCategory(cat['kategori-produk'])}
                            className={`cursor-pointer  px-6 py-2 rounded-full border text-xs uppercase tracking-wider transition-all
                                ${selectedCategory === cat['kategori-produk'] 
                                    ? 'bg-primary text-white font-semibold' 
                                    : 'bg-transparent border-gray-300 text-gray-500 hover:border-gray-400'}`}
                        >
                            {formatCategoryTitle(cat['kategori-produk']).replace(/\(.*\)/, '').trim()} {/* Short label for tab */}
                        </button>
                    ))}
                </div>
            </div>

            {/* Title & Search */}
            <div className="container mx-auto px-6 md:px-0 mb-8 md:mb-12 flex flex-col justify-between items-end gap-6 md:gap-12">
                <div className="w-full flex flex-col md:flex-row justify-between items-end">
                    <h2 className="md:max-w-lg font-medium text-3xl md:text-7xl leading-tight">{formatCategoryTitle(selectedCategory)}</h2>
                    <p className="text-black text-xl leading-relaxed max-w-3xl">
                        {getCategoryDescription(selectedCategory)}
                    </p>
                </div>
                
                {/* Search Bar */}
                <div className="w-full relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:border-gray-500 text-sm"
                    />
                    <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-6 md:px-0 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
                    {paginatedProducts.map((product, idx) => (
                        <div key={idx} className="flex flex-col items-center cursor-pointer group" onClick={() => openModal(product)}>
                            <div className="w-full aspect-[3/4] overflow-hidden mb-3 bg-gray-200 relative">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 transition-colors duration-300"></div>
                                <img 
                                    src={product['image-produk']} 
                                    alt={product['nama-produk']} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xs font-medium text-center uppercase tracking-wide px-2 group-hover:text-primary transition-colors">
                                {product['nama-produk'].replace(/.jpg$/i, '')}
                            </h3>
                            <p className="text-[10px] text-gray-500 text-center">{product['kode-produk']}</p>
                        </div>
                    ))}
                </div>
                
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-400">No products found.</div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mb-20 text-xs font-medium">
                   <button 
                     onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                     disabled={currentPage === 1}
                     className="disabled:opacity-30 hover:text-gray-600"
                   >
                     PREV
                   </button>
                   <div className="flex gap-2">
                     {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === page ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-200'}`}
                        >
                            {page}
                        </button>
                     ))}
                   </div>
                   <button 
                     onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                     disabled={currentPage === totalPages}
                     className="disabled:opacity-30 hover:text-gray-600"
                   >
                     NEXT
                   </button>
                </div>
            )}


            {/* --- PHILOSOPHY SECTION (Reused) --- */}
            <section className="relative min-h-[80vh] flex justify-center items-center overflow-hidden">
                <div className="absolute inset-0">
                    {philosophySlides.map((slide, index) => (
                        <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentPhilosophySlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                        <img src={slide} alt={`Philosophy ${index}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent h-1/2 self-end"></div>
                </div>
                
                <div className="container mx-auto px-6 md:px-0 relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-white h-full pt-40 md:pt-0">
                    <div className="max-w-xl">
                        <p className="text-md tracking-widest mb-3 text-center md:text-left">Tingkatkan Pengalaman Hidup Anda</p>
                        <h2 className="font-primary text-5xl md:text-7xl leading-tight font-medium text-center md:text-left">
                            We design <br />
                            the places <br />
                            where people <br />
                            love to be <br />
                            together.
                        </h2>
                    </div>
                    
                    <div className="flex md:self-end gap-4 mb-20 md:mb-4">
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

             {/* MODAL POPUP */}
             {selectedProduct && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white p-2 md:p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row gap-6 md:gap-10 shadow-2xl animate-fadeIn"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                    >
                         {/* Close Button */}
                         <button 
                            onClick={closeModal}
                            className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-2 text-gray-500 hover:text-black transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                         {/* Image Section */}
                        <div className="w-full md:w-1/2 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                            <img 
                                src={selectedProduct['image-produk']} 
                                alt={selectedProduct['nama-produk']} 
                                className="w-full h-full object-contain max-h-[500px]"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left py-4">
                            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">{formatCategoryTitle(selectedCategory)}</span>
                            <h2 className="text-3xl md:text-5xl font-secondary text-gray-900 mb-6 leading-tight">
                                {selectedProduct['nama-produk'].replace(/.jpg$/i, '')}
                            </h2>
                            
                            <div className="space-y-4 text-sm md:text-base text-gray-700">
                                <div className="border-b border-gray-100 pb-2">
                                    <span className="block text-xs uppercase text-gray-400 tracking-wider mb-1">Kode Produk</span>
                                    <span className="font-medium">{selectedProduct['kode-produk']}</span>
                                </div>
                                {/* Add more details here if available in JSON, e.g. Dimensions, Texture */}
                                {/* Example placeholder for now as JSON structure only showed these */}
                                
                                <div className="pt-6">
                                    <a href="/contact" onClick={closeModal} className="inline-block bg-black text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                        Hubungi Kami
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;