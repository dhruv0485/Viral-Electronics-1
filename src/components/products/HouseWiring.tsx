import {ZoomIn} from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 
const HouseWiring = () => {
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
        <title>Manufacturer of House Wiring Cables- Viral Electronics - Nashik</title>
        <meta name="description" content="Viral Electronics Pvt. Ltd, Nashik  - Manufacturer of  Armored / Unarmored Power & Control Cable, Auto & Battery Cable, Welding and Tig-welding Cables" />
        <meta name="keywords" content="Cable Manufacturers in Nashik, Nasik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Manufacturer of Tig-welding Cable, Welding Cables, Mig Tig Co2 ( Coax ) Welding, Torch Cables, Coax Cables, Co2 Welding Cables, Arc welding Cables, Battery Cables, Superflex Thermoplastic Elastomeric Battery Cables, Traction Cables, Superflex Cables, TPE Cables, Intercell connector cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables,Class 5 Cables, Class 6 Cables, Stranded Cables, Standard Cables, Standard Thermoplastic Elastomeric Battery Cables, PVC Insulated Battery Cable, High Voltage Cables, Ignition Cables, Instrumentation Cables, Muilticore Shielded Instrumentation Cables, Multicore Cables, Instrumentation Cables, Shielded Cabes, MuiltipairvShielded Instrumentation Cable, Muilticore Cables, Muiltipair Cables, Radio Frequency Cables, COAXIAL CABLES, TRIAXIAL CABLES, Submersible Cables, Pump Cables, Flat Cables, House and Electrical Panel wiring Wires, Panel Wiring Cables, House Wiring Cables, Buliding Cables, PTFE Cables, High temperature Cables, Automotive Cables, Wire Harness Cables, Cables and wires." />
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] flex items-center"
        style={{
          backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377205/h1_bkedok.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377206/b9_duunvy.png'})`,
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
              House & Electric Panel Wiring Wires
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              IS 694:1990 Certified | 1100V Rating | PVC Insulated
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
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377215/house2_fqxp9j.png"
                    alt="PVC Insulated Wiring"
                    className="w-full h-auto cursor-zoom-in"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377215/house2_fqxp9j.png")}
                  />
                  <button
                    className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377215/house2_fqxp9j.png")}
                  >
                    <ZoomIn className="w-5 h-5 text-navy-900" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Description */}
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">PVC Insulated Wiring Cables</h2>
                <p className="text-gray-700 mb-6">
                We at Viral Electronics manufacture House & Electric Panel Wiring Wires. Wiring Cables, PVC insulated Sheathed / Unsheathed with plain annealed electrolytic copper conductor conforming to IS: 694:1990 for working voltages upto and including 1100V.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Technical Specifications</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mb-16">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left" colSpan={2}></th>
                      <th className='border px-4 py-2 text-center' colSpan={1}>Unsheathed Cables</th>
                      <th className='border px-4 py-2 text-center'></th>
                      <th className='border px-4 py-2 text-center' colSpan={1}>Sheathed Cables</th>
                    </tr>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left">Area Sq mm.</th>
                      <th className="border px-4 py-2 text-center">No. & Dia. Of Wires (Nom.) mm</th>
                      <th className="border px-4 py-2 text-center">Insulation n Thickness (Nom.) mm</th>
                      <th className="border px-4 py-2 text-left">Approx. Overall Diameter r mm</th>
                      <th className="border px-4 py-2 text-left">Insulation n Thickness (Nom.) mm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { duty: '1', values: ['1/1.13',0.7,2.6,0.6] },
                      { duty: '1.5', values: ['1/1.38', 0.7,2.9,0.6] },
                      { duty: '2.5', values: ['1/1.78', 0.8,3.5,0.7] },
                      { duty: '4', values: ['1/2.25', 0.8,4,0.8] },
                      { duty: '4', values: ['7/0.85', 0.8,4.3,0.8] }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border px-4 py-2 font-medium">{row.duty}</td>
                        {row.values.map((value, i) => (
                          <td key={i} className="border px-4 py-2 text-center">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>
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

export default HouseWiring;