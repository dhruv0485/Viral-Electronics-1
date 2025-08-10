import { CheckCircle, Award, Globe, Settings } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              About Viral Electronics
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Established in 1982, we manufacture high-quality wires & cables for industrial and domestic use, 
              adhering to IS, BS, ASTM, and IEC standards.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                ISO 9001:2015 Certified
              </h3>
              <p className="text-gray-600">
                Ensuring consistent quality and reliability in all our products
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Globe className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                Global Exports
              </h3>
              <p className="text-gray-600">
                Trusted by customers across continents for our superior quality
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.4}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Settings className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                Custom Manufacturing
              </h3>
              <p className="text-gray-600">
                Tailor-made solutions to meet specific industry requirements
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.5}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                Low MOQ
              </h3>
              <p className="text-gray-600">
                Flexible minimum order quantities to accommodate your business needs
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;