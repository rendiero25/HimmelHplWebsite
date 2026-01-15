import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { flattenProducts } from '../utils/productUtils';
import { BsChevronLeft, BsChevronRight, BsSearch, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import FadeIn from '../components/FadeIn';
import StaggerContainer from '../components/StaggerContainer';
import { motion } from 'motion/react';

// Philosophy Images (Reuse from Home)
import section3Image1 from '../assets/home/section3-image1.png';
import section3Image2 from '../assets/home/section3-image2.png';
import section3Image3 from '../assets/home/section3-image3.png';
import section3Image4 from '../assets/home/section3-image4.png';
import section3Image5 from '../assets/home/section3-image5.png';
import section3Image6 from '../assets/home/section3-image6.png';
import section3Image7 from '../assets/home/section3-image7.png';

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || productsData[0]?.['kategori-produk'] || 'hpl');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;
    
    // HPL Dropdown States
    const [openDropdown, setOpenDropdown] = useState(null); // 'woodgrain', 'pattern', 'solid', or null
    const [selectedSubcategory, setSelectedSubcategory] = useState(null); // e.g., 'Woodgrain Texture'

    // Sync selectedCategory when categoryFromUrl changes
    useEffect(() => {
        if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [categoryFromUrl]);

    // Update URL when category changes
    const handleCategoryChange = (slug) => {
        setSelectedCategory(slug);
        setSelectedSubcategory(null); // Reset subcategory when changing category
        setSearchParams({ category: slug });
    };

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

    // 3. Filter by Search and Subcategory
    const filteredProducts = useMemo(() => {
        let products = flatProducts;

        // HPL Subcategory filtering
        if (selectedCategory === 'hpl' && selectedSubcategory) {
            products = products.filter(p => {
                return p['image-produk'].includes(`/${selectedSubcategory}/`);
            });
        }

        // WPC Pool Deck, WPC Wall Panel, Flooring subcategory filtering
        if ((selectedCategory === 'wpc-pooldeck' || selectedCategory === 'wpc-wallpanel' || selectedCategory === 'flooring') && selectedSubcategory) {
            products = products.filter(p => {
                return p['image-produk'].includes(`/${selectedSubcategory}/`);
            });
        }

        // Only apply search filter if searchQuery is not empty
        const trimmedSearch = searchQuery.trim().toLowerCase();
        if (trimmedSearch === '') {
            return products;
        }

        return products.filter(p => 
            p['nama-produk'].toLowerCase().includes(trimmedSearch) || 
            (p['kode-produk'] && p['kode-produk'].toLowerCase().includes(trimmedSearch))
        );
    }, [flatProducts, searchQuery, selectedCategory, selectedSubcategory]);

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
            'uv-board': 'UV Board',
            'edging-pvc': 'Edging PVC',
            'pvc-board': 'PVC Board',
            'wpc-pooldeck': 'WPC Pool Deck',
            'flooring': 'Flooring',
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
        if(slug === 'flooring') return "Pilihan terbaik untuk pelapis lantai interior yang menawarkan berbagai material berkualitas tinggi dengan tampilan estetis dan daya tahan optimal. Tersedia dalam berbagai jenis seperti SPC Flooring, Solid Wood Flooring, dan Vinyl Flooring untuk memenuhi kebutuhan interior ruangan Anda.";
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

    const hplStructure = [
        {
            name: 'HPL Woodgrain',
            id: 'hpl-woodgrain',
            subitems: ['Woodgrain Texture', 'Woodgrain Super', 'Woodgrain Gloss', 'Woodgrain']
        },
        {
            name: 'HPL Pattern',
            id: 'hpl-pattern',
            subitems: ['Pattern', 'Pattern Texture', 'Pattern Metal', 'Pattern Gloss'] // 'Pattern' maps to folder 'Pattern'
        },
        {
            name: 'HPL Solid',
            id: 'hpl-solid',
            subitems: ['Solid', 'Solid Gloss', 'Solid Doff']
        }
    ];

    // WPC Pool Deck Subcategory Structure
    const poolDeckStructure = [
        { name: 'WPC Pool Deck', id: 'wpc-pooldeck', folderName: 'wpc-pooldeck' },
        { name: 'Solid Wood Pool Deck', id: 'solidwood-pooldeck', folderName: 'solidwood-pooldeck' }
    ];

    // WPC Wall Panel Subcategory Structure
    const wallPanelStructure = [
        { name: 'WPC Wall Panel', id: 'wpc-wallpanel-sub', folderName: 'wpc-wallpanel' },
        { name: 'Solid Wood Wall Panel', id: 'solidwood-wallpanel', folderName: 'solidwood-wallpanel' }
    ];

    // Flooring Subcategory Structure
    const flooringStructure = [
        { name: 'SPC Flooring', id: 'spc-flooring', folderName: 'spc-flooring' },
        { name: 'Solid Wood Flooring', id: 'solidwood-flooring', folderName: 'solidwood-flooring' },
        { name: 'Vinyl Flooring', id: 'vinyl-flooring', folderName: 'vinyl-flooring' }
    ];

    const toggleDropdown = (id) => {
        setOpenDropdown(prev => prev === id ? null : id);
    };

    const handleHplSubClick = (sub, e) => {
        e.stopPropagation();
        setSelectedSubcategory(sub);
        setSearchParams({ category: 'hpl' }); // Ensure URL stays hpl
         // Reset page to 1
        setCurrentPage(1);
    };

    const handleSubCategoryClick = (folderName, category, e) => {
        e.stopPropagation();
        setSelectedSubcategory(folderName);
        setSearchParams({ category: category });
        setCurrentPage(1);
    };

    return (
        <div className="pt-10 md:pt-24 min-h-screen bg-gradient-to-b from-white via-white to-third font-primary relative">
            
            {/* Header Text */}
            <FadeIn delay={0.2} direction="down" className="text-center py-10 px-4">
                <p className="text-sm tracking-[0.2em] text-black/50 uppercase mb-4">Produk Kami</p>
                <h1 className="font-secondary text-4xl md:text-6xl text-gray-900">Elegance Awaits You</h1>
            </FadeIn>

            {/* Category Tabs */}
            <div className="container mx-auto px-4 xl:px-16 3xl:px-0 mb-12">
                <div className="flex flex-wrap justify-center gap-2">
                    {productsData.map((cat) => {
                        const isHpl = cat['kategori-produk'] === 'hpl';
                        const isActiveCat = selectedCategory === cat['kategori-produk'];

                        return (
                            <button
                                key={cat['kategori-produk']}
                                onClick={() => {
                                    handleCategoryChange(cat['kategori-produk']);
                                    if(isHpl) {
                                         setSelectedSubcategory(null); 
                                         setOpenDropdown(null);
                                    }
                                }}
                                className={`cursor-pointer px-6 py-2 rounded-full font-bold border text-sm uppercase tracking-wider transition-all
                                    ${isActiveCat 
                                        ? 'bg-primary text-white font-semibold' 
                                        : 'bg-transparent border-gray-300 text-gray-500 hover:border-gray-400'}`}
                            >
                                {formatCategoryTitle(cat['kategori-produk']).replace(/\(.*\)/, '').trim()}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Title & Search */}
            <FadeIn direction="up" className="container mx-auto px-6 xl:px-16 2xl:px-2 mb-8 md:mb-12 flex flex-col justify-between items-end gap-6 md:gap-12">
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <h2 className="md:max-w-lg font-medium text-4xl md:text-7xl leading-tight">{formatCategoryTitle(selectedCategory)}</h2>
                    <p className="text-black text-lg md:text-xl leading-relaxed max-w-3xl">
                        {getCategoryDescription(selectedCategory)}
                    </p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full mt-4 md:mt-0">
                    <input 
                        type="text" 
                        placeholder="Search product..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-third/50 rounded-full py-4 px-6 focus:outline-none placeholder-black/50 font-primary"
                    />
                    <BsSearch className="absolute right-0 top-5 text-black/50 mr-6" />
                </div>
            </FadeIn>

            {/* HPL Extended Navigation */}
            {selectedCategory === 'hpl' && (
                <div className="container mx-auto px-6 xl:px-16 2xl:px-2 -mt-8 flex flex-col md:flex-row justify-start items-start gap-2 xl:gap-6 py-6 animate-fadeIn">
                        {hplStructure.map((group) => (
                            <div key={group.id} className="w-full md:w-auto flex flex-col items-center md:items-start min-w-[100px]">
                                <button 
                                    onClick={() => toggleDropdown(group.id)}
                                    className="cursor-pointer border border-primary py-2 px-6 rounded-full flex items-center justify-between w-full md:w-auto gap-2 text-sm font-semibold uppercase tracking-wider text-gray-800 mb-3 transition-colors p-2 hover:bg-primary hover:text-white"
                                >
                                    {group.name}
                                    {openDropdown === group.id ? <BsChevronUp className="text-sm" /> : <BsChevronDown className="text-sm"/>}
                                </button>
                                
                                {/* Dropdown Items */}
                                {openDropdown === group.id && (
                                    <div className="flex flex-col gap-2 pl-4 w-full md:w-auto animate-fadeIn">
                                        {group.subitems.map(sub => (
                                            <button
                                                key={sub}
                                                onClick={(e) => handleHplSubClick(sub, e)}
                                                className={`cursor-pointer text-sm text-left uppercase tracking-wide transition-all p-2 rounded hover:font-bold
                                                    ${selectedSubcategory === sub ? 'text-primary font-bold bg-primary text-white rounded-full px-6 py-2' : ''}`}
                                            >
                                                {sub === 'Pattern' ? 'Pattern Pattern' : sub}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            )}

            {/* WPC Pool Deck Subcategory Navigation */}
            {selectedCategory === 'wpc-pooldeck' && (
                <div className="container mx-auto px-6 xl:px-16 2xl:px-2 -mt-8 flex flex-wrap justify-start items-center gap-2 xl:gap-4 py-6 animate-fadeIn">
                    {poolDeckStructure.map((item) => (
                        <button
                            key={item.id}
                            onClick={(e) => handleSubCategoryClick(item.folderName, 'wpc-pooldeck', e)}
                            className={`mb-3 cursor-pointer border py-2 px-6 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors p-2 hover:bg-primary hover:text-white
                                ${selectedSubcategory === item.folderName ? 'bg-primary text-white border-primary' : 'border-primary text-gray-800 hover:text-primary'}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}

            {/* WPC Wall Panel Subcategory Navigation */}
            {selectedCategory === 'wpc-wallpanel' && (
                <div className="container mx-auto px-6 xl:px-16 2xl:px-2 -mt-8 flex flex-wrap justify-start items-center gap-2 xl:gap-4 py-6 animate-fadeIn">
                    {wallPanelStructure.map((item) => (
                        <button
                            key={item.id}
                            onClick={(e) => handleSubCategoryClick(item.folderName, 'wpc-wallpanel', e)}
                            className={`mb-3 cursor-pointer border py-2 px-6 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors p-2 hover:bg-primary hover:text-white
                                ${selectedSubcategory === item.folderName ? 'bg-primary text-white border-primary' : 'border-primary text-gray-800 hover:text-primary'}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Flooring Subcategory Navigation */}
            {selectedCategory === 'flooring' && (
                <div className="container mx-auto px-6 xl:px-16 2xl:px-2 -mt-8 flex flex-wrap justify-start items-center gap-2 xl:gap-4 py-6 animate-fadeIn">
                    {flooringStructure.map((item) => (
                        <button
                            key={item.id}
                            onClick={(e) => handleSubCategoryClick(item.folderName, 'flooring', e)}
                            className={`mb-3 cursor-pointer border py-2 px-6 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors p-2 hover:bg-primary hover:text-white
                                ${selectedSubcategory === item.folderName ? 'bg-primary text-white border-primary' : 'border-primary text-gray-800 hover:text-primary'}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Product Grid */}
            <div className="container mx-auto px-6 xl:px-16 2xl:px-2 mb-16">
                <StaggerContainer key={selectedCategory + currentPage} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
                    {paginatedProducts.map((product, idx) => {
                        const itemVariants = {
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        };
                        
                        return (
                            <motion.div 
                                key={idx} 
                                variants={itemVariants}
                                className="flex flex-col items-center cursor-pointer group" 
                                onClick={() => openModal(product)}
                            >
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
                            </motion.div>
                        );
                    })}
                
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-400">No products found.</div>
                )}
                </StaggerContainer>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col justify-center items-center gap-10 mb-20 text-md font-medium"> 
                   <div className="flex flex-wrap items-center justify-center gap-5 md:gap-2 mx-4">
                     {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-full ${currentPage === page ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-200'}`}
                        >
                            {page}
                        </button>
                     ))}
                   </div>

                   <div className="flex gap-8">
                        <button 
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="cursor-pointer disabled:opacity-30 hover:text-gray-600 ml-6 md:ml-0"
                    >
                        PREV
                    </button>

                    <button 
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="cursor-pointer disabled:opacity-30 hover:text-gray-600 mr-6 md:mr-0"
                    >
                        NEXT
                    </button>
                   </div>
                   
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
                
                <div className="container mx-auto px-6 xl:px-16 2xl:px-2 relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-white h-full pt-40 md:pt-0">
                    <FadeIn delay={0.2} direction="up" className="max-w-xl">
                        <p className="text-md tracking-widest mb-3 text-center md:text-left">Tingkatkan Pengalaman Hidup Anda</p>
                        <h2 className="font-primary text-4xl md:text-7xl leading-tight font-medium text-center md:text-left">
                            We design <br />
                            the places <br />
                            where people <br />
                            love to be <br />
                            together.
                        </h2>
                    </FadeIn>
                    
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
                            className="cursor-pointer absolute top-2 right-2 md:top-4 md:right-4 z-50 p-2 text-gray-500 hover:text-black transition-colors"
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
                                className="w-full h-full object-cover max-h-[500px]"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left py-4 px-4 md:px-0">
                            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">{formatCategoryTitle(selectedCategory)}</span>
                            <h2 className="text-3xl md:text-5xl font-secondary text-gray-900 mb-2 leading-tight">
                                {selectedProduct['nama-produk'].replace(/.jpg$/i, '')}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                                {selectedProduct['description']}
                            </p>
                            
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