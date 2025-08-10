import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

interface ProductCategory {
  name: string;
  path: string;
  subCategories?: { name: string; path: string }[];
}

const productCategories: ProductCategory[] = [
  {
    name: 'Welding Cables',
    path: 'welding-cables',
    subCategories: [
      { name: 'Arc Welding Cables', path: '/products/arc-welding-cables' },
      { name: 'Mig/Tig/CO2 Welding Torch Cables', path: '/products/mig-tig-cables' }
    ]
  },
  {
    name: 'Battery Cables',
    path: 'battery-cables',
    subCategories: [
      { name: 'Standard Thermoplastic Elastomeric Cables', path: '/products/standard-thermoplastic-cables' },
      { name: 'Superflex Thermoplastic Elastomeric Cables', path: '/products/superflex-thermoplastic-cables' }
    ]
  },
{ name: 'High Voltage Cables', path: 'high-voltage-cables' },
  {
    name: 'Instrumentation Cables',
    path: 'instrumentation-cables',
    subCategories: [
      { name: 'Multicore Shielded Instrumentation Cables', path: '/products/multicore-shielded-cables' },
      { name: 'Multipair Shielded Instrumentation Cables', path: '/products/multipair-shielded-cables' }
    ]
  },
  { name: 'Radio Frequency Cables', path: '/products/rf-cables' }
];

const otherProductCategories: ProductCategory[] = [
  { name: 'House & Electric Panel Wiring Wires', path: '/products/house-wiring' },
  { name: 'Multicore Flexible Cables', path: '/products/multicore-flexible' }
];

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedMobileCategories([]);
  };

  const handleNavigation = (path: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    // Close mobile menu if open
    setIsOpen(false);
    
    // Navigate using React Router
    navigate(path);
  };

  const toggleMobileCategory = (path: string) => {
    setExpandedMobileCategories(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isProductActive = () => {
    return location.pathname.startsWith('/products/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24">
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center"
            >
               <div className="bg-white rounded-full w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] lg:w-[84px] lg:h-[84px] flex items-center justify-center">
                <img 
                  src='https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377246/viral-logo_hbaxyc.png'
                  alt="Viral Electronics Pvt. Ltd. Logo" 
                  className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-white hover:text-red-600 font-medium transition-colors text-sm xl:text-base ${
                isActive('/') ? 'text-red-600' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className={`text-white hover:text-red-600 font-medium transition-colors text-sm xl:text-base ${
                isActive('/about') ? 'text-red-600' : ''
              }`}
            >
              About
            </button>
            
            <div className="relative group">
              <button
                className={`flex items-center text-white group-hover:text-red-600 font-medium transition-colors text-sm xl:text-base ${
                  isProductActive() ? 'text-red-600' : ''
                }`}
                aria-haspopup="true"
              >
                Our Products
                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 ml-1" />
              </button>
              <div
                className="absolute left-0 mt-2 w-56 xl:w-64 bg-black rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                role="menu"
              >
                {productCategories.map((category) => (
                  <div key={category.path} className="group/item relative">
                    <button
                      onClick={() => handleNavigation(category.path.startsWith('/') ? category.path : `/products/${category.path}`)}
                      className="w-full text-left block px-4 py-2 text-white hover:bg-gray-800 hover:text-red-600 transition-colors font-medium text-sm xl:text-base"
                      role="menuitem"
                    >
                      {category.name}
                      {category.subCategories && (
                        <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 ml-2 inline-block" />
                      )}
                    </button>
                    {category.subCategories && (
                      <div className="absolute left-full top-0 w-64 xl:w-72 bg-black rounded-lg shadow-lg py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
                        {category.subCategories.map((sub) => (
                          <button
                            key={sub.path}
                            onClick={() => handleNavigation(sub.path)}
                            className="w-full text-left block px-4 py-2 text-white hover:bg-gray-800 hover:text-red-600 transition-colors text-sm xl:text-base"
                            role="menuitem"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <button
                className={`flex items-center text-white group-hover:text-red-600 font-medium transition-colors text-sm xl:text-base`}
                aria-haspopup="true"
              >
                Other Products
                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 ml-1" />
              </button>
              <div
                className="absolute left-0 mt-2 w-56 xl:w-64 bg-black rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                role="menu"
              >
                {otherProductCategories.map((category) => (
                  <button
                    key={category.path}
                    onClick={() => handleNavigation(category.path)}
                    className="w-full text-left block px-4 py-2 text-white hover:bg-gray-800 hover:text-red-600 transition-colors font-medium text-sm xl:text-base"
                    role="menuitem"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => handleNavigation('/quality-policy')}
              className={`text-white hover:text-red-600 font-medium transition-colors text-sm xl:text-base ${
                isActive('/quality-policy') ? 'text-red-600' : ''
              }`}
            >
              Quality Policy
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`text-white hover:text-red-600 font-medium transition-colors text-sm xl:text-base ${
                isActive('/contact') ? 'text-red-600' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none p-1"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black shadow-lg max-h-screen overflow-y-auto">
          <div className="container mx-auto px-3 sm:px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavigation('/')}
              className="block w-full text-left text-white hover:text-red-600 font-medium transition-colors py-2 text-sm"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="block w-full text-left text-white hover:text-red-600 font-medium transition-colors py-2 text-sm"
            >
              About
            </button>
            
            {/* Mobile Products Menu */}
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileCategory('products')}
                className="flex items-center justify-between w-full text-white hover:text-red-600 font-medium transition-colors py-2 text-sm"
              >
                Our Products
                <ChevronDown className={`w-4 h-4 text-white transform transition-transform ${
                  expandedMobileCategories.includes('products') ? 'rotate-180' : ''
                }`} />
              </button>
              {expandedMobileCategories.includes('products') && (
                <div className="pl-4 space-y-2 border-l border-gray-700">
                  {productCategories.map((category) => (
                    <div key={category.path} className="space-y-2">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleNavigation(category.path.startsWith('/') ? category.path : `/products/${category.path}`)}
                          className="flex-1 text-left text-white hover:text-red-600 transition-colors py-1 text-sm"
                        >
                          {category.name}
                        </button>
                        {category.subCategories && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMobileCategory(category.path);
                            }}
                            className="p-1"
                          >
                            <ChevronDown className={`w-3 h-3 text-white transform transition-transform ${
                              expandedMobileCategories.includes(category.path) ? 'rotate-180' : ''
                            }`} />
                          </button>
                        )}
                      </div>
                      {category.subCategories && expandedMobileCategories.includes(category.path) && (
                        <div className="pl-4 space-y-1 border-l border-gray-700">
                          {category.subCategories.map((sub) => (
                            <button
                              key={sub.path}
                              onClick={() => handleNavigation(sub.path)}
                              className="block w-full text-left text-white hover:text-red-600 transition-colors py-1 text-xs"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Other Products Menu */}
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileCategory('other-products')}
                className="flex items-center justify-between w-full text-white hover:text-red-600 font-medium transition-colors py-2 text-sm"
              >
                Other Products
                <ChevronDown className={`w-4 h-4 text-white transform transition-transform ${
                  expandedMobileCategories.includes('other-products') ? 'rotate-180' : ''
                }`} />
              </button>
              {expandedMobileCategories.includes('other-products') && (
                <div className="pl-4 space-y-1 border-l border-gray-700">
                  {otherProductCategories.map((category) => (
                    <button
                      key={category.path}
                      onClick={() => handleNavigation(category.path)}
                      className="block w-full text-left text-white hover:text-red-600 transition-colors py-1 text-sm"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => handleNavigation('/quality-policy')}
              className="block w-full text-left text-white hover:text-red-600 font-medium transition-colors py-2 text-sm"
            >
              Quality Policy
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block w-full text-left text-white hover:text-red-600 font-medium transition-colors py-2 text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;