import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import ScrollAnimation from './ScrollAnimation';

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef<number | null>(null);
  
  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    
    autoPlayIntervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);
  };
  
  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };
  
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying]);
  
  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
  
  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };
  
  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Function to handle View Details click
  const handleViewDetails = (product: any) => {
    // Navigate to product detail page using the path from product data
    window.location.href = product.path;
    // Alternative: if using React Router, you can use:
    // navigate(product.path);
  };

  return (
    <section id="products" className="py-10 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <ScrollAnimation direction="up">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-3 sm:mb-4 px-2">
              Our Premium Product Range
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2} distance={30}>
          <div className="relative max-w-6xl mx-auto">
            {/* Product Carousel */}
            <div className="overflow-hidden rounded-lg shadow-md bg-white">
              <div 
                className="transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="min-w-full p-3 sm:p-4 md:p-6 flex flex-col lg:flex-row items-center"
                  >
                    <div className="w-full lg:w-1/2 mb-4 sm:mb-6 lg:mb-0 lg:pr-4 xl:pr-8">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-2 sm:px-0">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 mb-3 sm:mb-4">
                        {product.name}
                      </h3>
                      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        {product.description}
                      </p>
                      <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-red-600 mr-2 text-sm sm:text-base">•</span>
                            <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleViewDetails(product)}
                        className="inline-block bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-1 sm:left-2 lg:left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-navy-900 p-1.5 sm:p-2 rounded-full shadow-md transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-1 sm:right-2 lg:right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-navy-900 p-1.5 sm:p-2 rounded-full shadow-md transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Indicator Dots */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ProductShowcase;