import { Mail, Phone, MapPin, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 bg-white rounded-full w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] lg:w-[84px] lg:h-[84px] justify-center">
              <img src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377246/viral-logo_hbaxyc.png" alt="Viral Electronics Logo" className="h-12" />
            </div>
            <p className="text-gray-300 mb-4">
              Premium wires & cables manufacturer since 1982. ISO 9001:2015 certified with global exports and custom solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#other-products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Other Products
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                D-7, Panchwati, MIDC Ambad, Nashik, Maharashtra 422010
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 8600654786</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">contact@viralcables.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Certifications
            </h3>
            <div className="flex items-center bg-white/10 p-4 rounded-lg">
              <Award className="w-10 h-10 text-red-500 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold">ISO 9001:2015</p>
                <p className="text-sm text-gray-300">Quality Management System</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Viral Electronics Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;