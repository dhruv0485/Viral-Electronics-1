import {  ZoomIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 
const MulticoreShieldedCables = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  const closeModal = () => setSelectedImage(null);

  return (
    <>
    <Helmet>
        <title>Manufacturer of Multicore Shielded Cables- Viral Electronics - Nashik</title>
        <meta name="description" content="Viral Electronics Pvt. Ltd, Nashik  - Manufacturer of  Armored / Unarmored Power & Control Cable, Auto & Battery Cable, Welding and Tig-welding Cables" />
        <meta name="keywords" content="Cable Manufacturers in Nashik, Nasik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Manufacturer of Tig-welding Cable, Welding Cables, Mig Tig Co2 ( Coax ) Welding, Torch Cables, Coax Cables, Co2 Welding Cables, Arc welding Cables, Battery Cables, Superflex Thermoplastic Elastomeric Battery Cables, Traction Cables, Superflex Cables, TPE Cables, Intercell connector cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables,Class 5 Cables, Class 6 Cables, Stranded Cables, Standard Cables, Standard Thermoplastic Elastomeric Battery Cables, PVC Insulated Battery Cable, High Voltage Cables, Ignition Cables, Instrumentation Cables, Muilticore Shielded Instrumentation Cables, Multicore Cables, Instrumentation Cables, Shielded Cabes, MuiltipairvShielded Instrumentation Cable, Muilticore Cables, Muiltipair Cables, Radio Frequency Cables, COAXIAL CABLES, TRIAXIAL CABLES, Submersible Cables, Pump Cables, Flat Cables, House and Electrical Panel wiring Wires, Panel Wiring Cables, House Wiring Cables, Buliding Cables, PTFE Cables, High temperature Cables, Automotive Cables, Wire Harness Cables, Cables and wires." />
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] flex items-center"
        style={{
          backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/i1_uz8qq5.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377203/b8_u0jwyn.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 -mt-64 sm:mt-0">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Multicore Shielded Instrumentation Cables
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              EMI/RFI Protection | BS 5308 & IEC 189 Compliant | Customizable for Harsh Environments
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377214/multicore1_w3iaig.png"
                    alt="Multicore Shielded Cable Cross-section"
                    className="w-full h-auto cursor-zoom-in"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377214/multicore1_w3iaig.png")}
                  />
                  <button
                    className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377214/multicore1_w3iaig.png")}
                  >
                    <ZoomIn className="w-5 h-5 text-navy-900" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377217/multicore2_ok9xaa.png"
                    alt="Cable in Industrial Setting"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377217/multicore2_ok9xaa.png")}
                  />
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377217/multicore3_jnstxm.png"
                    alt="Shielding Close-up"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377217/multicore3_jnstxm.png")}
                  />
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377214/multicore1_w3iaig.png"
                    alt="Control Panel Application"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377214/multicore1_w3iaig.png")}
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Description */}
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Multicore Shielded Instrumentation Cables</h2>
                <p className="text-gray-700 mb-6">
                We at Viral Electronics manufacture Multi Core Shielded Instrumentation Cables suitable for purpose of Instrumentation. In the projects related to Power Generation & Distribution, Chemical, Fertilizer, Sugar Industries and various other types Industries. The process instrumentation plays an important role in measuring and controlling of various processes in the manufacturing of commodities. Shield is provided to prevent harmful electrostatic interference. There are three basic reasons for providing an electrostatic shield in a cable. The first important reason concerns the need to keep external electrical disturbances from affecting the signal in the cable. The second reason is to prevent the signal in the cable from being detectable at location other than at the cable ends. And the third reason is the elimination of unwanted transfer of signal between circuits in the same cable classified as below.
                </p>
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-navy-900">Range of Instrumentation Cables</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      0.22 Sq.mm. to 2.5 Sq.mm. or higher sizes of Electrolytic Bare/Tinned,SPC, Solid/Stranded Copper
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-navy-900">Insulation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      We can offer insulation on conductors of various types on insulating compounds such as PVC, 70° C / 105° C Halogen free FRLS PVC Compound, Polyethylene, TPE, HOFR and Silicon Rubber on request.
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-navy-900">Shielding</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      Aluminum Mylar taped with ECC with drain wire. Individual element and overall shielding as specified Or Shielding with Bare /Tinned / SPC Braided .
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-navy-900">Armouring</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      G.I. Steel Wire / Strip Armoured.
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-navy-900">Sheathing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      We can offer sheathing of various types on insulating compounds such as PVC, 70° C / 105° C Halogen free FRLS PVC Compound, Polyethylene, TPE, HOFR and Silicon Rubber on request.
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-navy-900">Specification</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      BS-5308 (Part-I or II)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      IEC-189 (Part-I or II)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </motion.div>
      )}
    </div>
    </>
  );
};

export default MulticoreShieldedCables; 