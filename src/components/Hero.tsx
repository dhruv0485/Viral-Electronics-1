import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const desktopImages = [
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377202/b1_gnmf9y.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377201/b2_qosp7f.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377200/b3_fn4iab.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377202/b4_ah10k8.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377202/b5_naqp8r.png'
  ];
  
  const mobileImages = [
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377211/m1_l0wlzn.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377211/m3_rmg36y.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377211/m2_vfm539.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377212/m4_ajtjjb.png',
    'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377212/m5_qtq37h.png'
  ];
  
  const backgroundImages = isMobile ? mobileImages : desktopImages;
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[80vh] sm:h-screen flex items-center bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 z-10 -mt-64 sm:mt-0">
        <div className="max-w-4xl px-2 sm:px-0">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Premium Wires & Cables Manufacturer Since 1982
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            ISO 9001:2015 Certified | Global Exports | Custom Solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="#products"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base lg:text-lg group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
        {desktopImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              currentImageIndex === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
};

export default Hero;