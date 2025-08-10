import { otherProducts } from '../data/products';
import ScrollAnimation from './ScrollAnimation';
import { Link } from 'react-router-dom';

const OtherProducts = () => {
  return (
    <section id="other-products" className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <ScrollAnimation direction="up">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-3 sm:mb-4 px-2">
              More Industrial Solutions
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {/* Responsive Grid - Optimized for 2 products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
            {otherProducts.map((product, index) => (
              <ScrollAnimation 
                key={index} 
                direction="up" 
                delay={0.1 * (index + 1)} 
                distance={40}
              >
                <Link to={product.path} className="block w-full max-w-sm">
                  <div className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full cursor-pointer">
                    <div className="h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-navy-900 text-center leading-tight">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;