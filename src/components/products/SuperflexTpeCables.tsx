import { ZoomIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const SuperflexTpeCables = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showHighTempForm, setShowHighTempForm] = useState(false);
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
        <title>Manufacturer of Superflex TPE Cables- Viral Electronics - Nashik</title>
        <meta name="description" content="Viral Electronics Pvt. Ltd, Nashik  - Manufacturer of  Armored / Unarmored Power & Control Cable, Auto & Battery Cable, Welding and Tig-welding Cables" />
        <meta name="keywords" content="Cable Manufacturers in Nashik, Nasik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Manufacturer of Tig-welding Cable, Welding Cables, Mig Tig Co2 ( Coax ) Welding, Torch Cables, Coax Cables, Co2 Welding Cables, Arc welding Cables, Battery Cables, Superflex Thermoplastic Elastomeric Battery Cables, Traction Cables, Superflex Cables, TPE Cables, Intercell connector cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables,Class 5 Cables, Class 6 Cables, Stranded Cables, Standard Cables, Standard Thermoplastic Elastomeric Battery Cables, PVC Insulated Battery Cable, High Voltage Cables, Ignition Cables, Instrumentation Cables, Muilticore Shielded Instrumentation Cables, Multicore Cables, Instrumentation Cables, Shielded Cabes, MuiltipairvShielded Instrumentation Cable, Muilticore Cables, Muiltipair Cables, Radio Frequency Cables, COAXIAL CABLES, TRIAXIAL CABLES, Submersible Cables, Pump Cables, Flat Cables, House and Electrical Panel wiring Wires, Panel Wiring Cables, House Wiring Cables, Buliding Cables, PTFE Cables, High temperature Cables, Automotive Cables, Wire Harness Cables, Cables and wires." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative h-[100vh] flex items-center"
          style={{
            backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377246/w1_i2pzrj.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377203/b7_fzjbsn.png'})`,
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
                Superflex Thermoplastic Elastomeric (TPE) Battery Cables
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Ultra-Flexible | Oil/Acid Resistant | IS 8130:1984 & IS 6380:1984 Certified
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
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377247/super1_gcr63m.png"
                      alt="Superflex TPE Battery Cable"
                      className="w-full h-auto cursor-zoom-in"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377247/super1_gcr63m.png")}
                    />
                    <button
                      className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377247/super1_gcr63m.png")}
                    >
                      <ZoomIn className="w-5 h-5 text-navy-900" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <img
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377245/super2_ecxzyx.png"
                      alt="Cable Flexibility Demo"
                      className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377245/super2_ecxzyx.png")}
                    />
                    <img
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377246/super3_iz5pxn.png"
                      alt="Cable Manufacturing"
                      className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377246/super3_iz5pxn.png")}
                    />
                    <img
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377247/super1_gcr63m.png"
                      alt="Quality Testing"
                      className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377247/super1_gcr63m.png")}
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right Column - Description */}
              <ScrollAnimation direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Superflex TPE Battery Cables</h2>
                  <p className="text-gray-700 mb-6">
                    We at Viral Electronics manufacture Superflex Battery Cables used for Battery Charging units in battery industries, as connectors for 2 volt traction batteries industries, railways, Traction forklift Charger, Solar Batteries. We manufacture cables from 10.00 sq.mm to 95 sq.mm.
                  </p>
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-navy-900">TPE Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>
                          Flexibility. Oil & Acid Resistance, Shock absorbing, Ergonomic comfort, Soft texture.
                        </span>
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-navy-900">Specifications</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>
                          Conductors  : The conductors shall be composed of plain annealed high conductivity copper wires complying with IS 8130:1984.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>
                          Flexibility  : Class 6 Type as per IS 8130:1984
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>
                          Temperature  : Withstand Max 90 Deg Celsius. and optional on request Max 200 Deg Celcius
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>
                          Covering  : The general service normal duty elastomeric compound shall be Type SE 1 confirming to the requirements of IS 6380:1984. The heat resisting, oil resisting normal duty elastomeric compound shall be Type SE 3 confirming to the requirements of IS 6380: 1984.
                        </span>
                      </li>

                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation direction="up">
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Current Rating of General Service Normal Duty Elastomeric Compound Covered Cable with Copper Conductor</h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="mb-16">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left" colSpan={1}></th>
                        <th className='border px-4 py-2 text-center' colSpan={5}>FLEXIBLE COPPER CONDUCTORS FOR SINGLE-CORE AND CABLES, CLASS 6</th>
                      </tr>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Nominal Cross-Sectional Area of Conductor</th>
                        <th className="border px-4 py-2 text-center">MAXIMUMDIAMETES OF % kW.S IN CONDUCTOR</th>
                        <th className="border px-4 py-2 text-center">MAXIMUM RESISTANCE OF CONDUCTOR @ 20° C 85 % Duty Cycle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { duty: '(1)', values: ['(2)', '(3)'] },
                        { duty: 'Sq mm2', values: ['mm', 'Ohm/km'] },
                        { duty: '10', values: [0.21, 1.91] },
                        { duty: '16', values: [0.21, 1.21] },
                        { duty: '25', values: [0.21, 0.780] },
                        { duty: '35', values: [0.21, 0.554] },
                        { duty: '50', values: [0.31, 0.386] },
                        { duty: '70', values: [0.31, 0.272] },
                        { duty: '95', values: [0.31, 0.206] }
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

        {/* High Temperature Variant Form */}
        {showHighTempForm && (
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
                <h4 className="text-xl font-semibold text-navy-900">Request High Temperature Variant</h4>
                <button
                  onClick={() => setShowHighTempForm(false)}
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
                  className="w-full bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 transition-colors"
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

export default SuperflexTpeCables;