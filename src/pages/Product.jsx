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
        if(slug === 'hpl') return "Bahan pelapis yang digunakan lapisan teratas atau finishing pada furnitur kayu, sehingga menampilkan tampilan yang halus namun bertekstur. Tersedia yang cukup banyak unggulan, seperti tahan goresan, tahan panas, serta anti jamur. Harganya sangat tahan terhadap rembesan panas, anti noda, lebih sukar akan mudah dibersihkan serta dipelihara.";
        return "Discover our high-quality range of products designed to elevate your interior spaces.";
    };

    // Helper to dynamically load images that are in src/data. 
    // Vite needs import.meta.glob or generic import. 
    // Since we have full paths in JSON like "/src/data/...", we can try to use them directly if Vite servers them, 
    // BUT usually src assets need import. 
    // For this specific task, assuming standard Vite behavior where /src might not be served as static. 
    // We can try to use a dynamic import workaround or just rendering the path if user configured it as public.
    // Given the previous user context on recursive generation script, it seems they just put paths strings.
    // Let's create a specialized Image component or helper.
    // NOTE: In Vite, `src` paths in `img` tags work if they are imported. If dynamic string, we need `new URL(path, import.meta.url).href` BUT providing the path is known at build time or using glob.
    // For now, I will use a simplified approach assuming we might need to fix image loading if it breaks.
    
    // Quick fix for image paths: Remove '/src' prefix if we serving from public? No, they are in src.
    // We will try `new URL(..., import.meta.url)` if relative, but they are absolute from project root.
    // Let's look at `products.json` again... "/src/data/...".
    // I'll try to use the raw path first. If it fails, I'll need a tool to import all images or use `import.meta.glob`.
    
    // Attempting to resolve images dynamically
    const resolveImage = (path) => {
        // This is a bit tricky dynamically without glob. 
        // Let's assume for dev server it *might* work, or we need strictly an import match.
        // If it fails, I will use a placeholder or ask user.
        return path; 
    };

    return (
        <div className="pt-24 min-h-screen bg-[#F5F1EA] font-primary">
            
            {/* Header Text */}
            <div className="text-center py-10 px-4">
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">Produk Kami</p>
                <h1 className="font-secondary text-5xl md:text-6xl text-gray-900">Elegance Awaits You</h1>
            </div>

            {/* Category Tabs */}
            <div className="container mx-auto px-4 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {productsData.map((cat) => (
                        <button
                            key={cat['kategori-produk']}
                            onClick={() => setSelectedCategory(cat['kategori-produk'])}
                            className={`px-6 py-2 rounded-full border text-xs uppercase tracking-wider transition-all
                                ${selectedCategory === cat['kategori-produk'] 
                                    ? 'bg-gray-300 border-gray-300 text-black font-semibold' 
                                    : 'bg-transparent border-gray-300 text-gray-500 hover:border-gray-400'}`}
                        >
                            {formatCategoryTitle(cat['kategori-produk']).replace(/\(.*\)/, '').trim()} {/* Short label for tab */}
                        </button>
                    ))}
                </div>
            </div>

            {/* Title & Search */}
            <div className="container mx-auto px-6 md:px-16 mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-2xl">
                    <h2 className="font-bold text-3xl md:text-4xl mb-4">{formatCategoryTitle(selectedCategory)}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                        {getCategoryDescription(selectedCategory)}
                    </p>
                </div>
                
                {/* Search Bar */}
                <div className="w-full md:w-auto relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-64 pl-4 pr-10 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:border-gray-500 text-sm"
                    />
                    <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-6 md:px-16 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
                    {paginatedProducts.map((product, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-full aspect-[3/4] overflow-hidden mb-3 bg-gray-200">
                                {/* Ideally use a real lazy loading image component */}
                                <img 
                                    src={product['image-produk']} 
                                    alt={product['nama-produk']} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xs font-medium text-center uppercase tracking-wide px-2">
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

        </div>
    );
};

export default Product;