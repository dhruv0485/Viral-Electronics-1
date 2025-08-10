import { ZoomIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const HighVoltageCables = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCustomForm, setShowCustomForm] = useState(false);
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
        <title>Manufacturer of High Voltage Cables- Viral Electronics - Nashik</title>
        <meta name="description" content="Viral Electronics Pvt. Ltd, Nashik  - Manufacturer of  Armored / Unarmored Power & Control Cable, Auto & Battery Cable, Welding and Tig-welding Cables" />
        <meta name="keywords" content="Cable Manufacturers in Nashik, Nasik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Manufacturer of Tig-welding Cable, Welding Cables, Mig Tig Co2 ( Coax ) Welding, Torch Cables, Coax Cables, Co2 Welding Cables, Arc welding Cables, Battery Cables, Superflex Thermoplastic Elastomeric Battery Cables, Traction Cables, Superflex Cables, TPE Cables, Intercell connector cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables,Class 5 Cables, Class 6 Cables, Stranded Cables, Standard Cables, Standard Thermoplastic Elastomeric Battery Cables, PVC Insulated Battery Cable, High Voltage Cables, Ignition Cables, Instrumentation Cables, Muilticore Shielded Instrumentation Cables, Multicore Cables, Instrumentation Cables, Shielded Cabes, MuiltipairvShielded Instrumentation Cable, Muilticore Cables, Muiltipair Cables, Radio Frequency Cables, COAXIAL CABLES, TRIAXIAL CABLES, Submersible Cables, Pump Cables, Flat Cables, House and Electrical Panel wiring Wires, Panel Wiring Cables, House Wiring Cables, Buliding Cables, PTFE Cables, High temperature Cables, Automotive Cables, Wire Harness Cables, Cables and wires." />
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] flex items-center"
        style={{
          backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377197/48_kb7lqo.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377204/b13_pphpug.png'})`,
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
              High Voltage Cables for Extreme Conditions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Ignition & Test Solutions | Heat Resistant (250°C) | Customizable up to 100 kV
            </motion.p>
          </div>
        </div>
      </section>

      {/* High Voltage Ignition Cables */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/hv1_yn9okn.png"
                    alt="High Voltage Ignition Cable"
                    className="w-full h-auto cursor-zoom-in"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/hv1_yn9okn.png")}
                  />
                  <button
                    className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/hv1_yn9okn.png")}
                  >
                    <ZoomIn className="w-5 h-5 text-navy-900" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/hv2_wloy0v.png"
                    alt="Cable Close-up"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/hv2_wloy0v.png")}
                  />
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377210/hv3_u0xmzf.png"
                    alt="Cable Manufacturing"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377210/hv3_u0xmzf.png")}
                  />
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/hv1_yn9okn.png"
                    alt="Quality Testing"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377209/hv1_yn9okn.png")}
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Description */}
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">High Voltage Ignition Cables</h2>
                <p className="text-gray-700 mb-6">
                We at Viral Electronics manufacture High Voltage Ignition Cables use in Food Industry, Automobiles, Air Craft for the purpose of connection of Ignition Transformer and Spark Plug/Electrode on burner.
                </p>
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-navy-900">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>
                      Resistance to heat  : 200° C
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>
                      Resistance to heat peak  : 250° C
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>
                      Oxidation resistance  : Excellent
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>
                      Water absorption resistance  : Excellent. Applications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* General High Voltage Cables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <ScrollAnimation direction="left">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">High Voltage Test Cables</h2>
                <p className="text-gray-700 mb-6">
                We at Viral Electronics manufacture High Voltage Cable or HV Cable to use as Test Leads for the AUTOMATIC CAPACITANCE TEST AND TAN DELTA TEST SETS.
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4 pb-2 border-b border-gray-100">Key Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-3 text-lg">•</span>
                        <span className="text-gray-700">
                          High voltage cables for industrial applications
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-3 text-lg">•</span>
                        <span className="text-gray-700">
                          Customized cables as per need from 2 kV to 100 kV capacity
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4 pb-2 border-b border-gray-100">Specifications</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-3 text-lg">•</span>
                        <span className="text-gray-700">
                          <span className="font-medium text-gray-800">Type:</span> High Voltage
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-3 text-lg">•</span>
                        <span className="text-gray-700">
                          <span className="font-medium text-gray-800">Conductor Material:</span> Copper
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </ScrollAnimation>

            {/* Right Column - Images */}
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/hv4.png"
                    alt="High Voltage Test Cable"
                    className="w-full h-auto cursor-zoom-in"
                    onClick={() => setSelectedImage("/images/hv4.png")}
                  />
                  <button
                    className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    onClick={() => setSelectedImage("/images/hv4.png")}
                  >
                    <ZoomIn className="w-5 h-5 text-navy-900" />
                  </button>
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

      {/* Custom kV Form */}
      {showCustomForm && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold text-navy-900">Request Custom kV Rating</h4>
              <button
                onClick={() => setShowCustomForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Required kV Rating
                </label>
                <input
                  type="number"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter kV rating (2-100)"
                  min="2"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Application Details
                </label>
                <textarea
                  className="w-full border rounded-md px-3 py-2"
                  rows={4}
                  placeholder="Please describe your application requirements"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
    </>
  );
};

export default HighVoltageCables;