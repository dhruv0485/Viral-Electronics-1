import { ZoomIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const ArcWeldingCables = () => {
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
        <title>Manufacturer of Arc Welding Cables- Viral Electronics - Nashik</title>
        <meta name="description" content="Viral Electronics Pvt. Ltd, Nashik  - Manufacturer of  Armored / Unarmored Power & Control Cable, Auto & Battery Cable, Welding and Tig-welding Cables" />
        <meta name="keywords" content="Cable Manufacturers in Nashik, Nasik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Manufacturer of Tig-welding Cable, Welding Cables, Mig Tig Co2 ( Coax ) Welding, Torch Cables, Coax Cables, Co2 Welding Cables, Arc welding Cables, Battery Cables, Superflex Thermoplastic Elastomeric Battery Cables, Traction Cables, Superflex Cables, TPE Cables, Intercell connector cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables,Class 5 Cables, Class 6 Cables, Stranded Cables, Standard Cables, Standard Thermoplastic Elastomeric Battery Cables, PVC Insulated Battery Cable, High Voltage Cables, Ignition Cables, Instrumentation Cables, Muilticore Shielded Instrumentation Cables, Multicore Cables, Instrumentation Cables, Shielded Cabes, MuiltipairvShielded Instrumentation Cable, Muilticore Cables, Muiltipair Cables, Radio Frequency Cables, COAXIAL CABLES, TRIAXIAL CABLES, Submersible Cables, Pump Cables, Flat Cables, House and Electrical Panel wiring Wires, Panel Wiring Cables, House Wiring Cables, Buliding Cables, PTFE Cables, High temperature Cables, Automotive Cables, Wire Harness Cables, Cables and wires." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative h-[100vh] flex items-center"
          style={{
            backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377246/w1_i2pzrj.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377204/b12_ji1o7t.png'})`,
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
                Premium Arc Welding Cables
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Durable, High-Conductivity Copper | IS 8130:1984 & IS 6380:1984 Compliant
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
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377201/arc1_prnyq4.png"
                      alt="Arc Welding Cable"
                      className="w-full h-auto cursor-zoom-in"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377201/arc1_prnyq4.png")}
                    />
                    <button
                      className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377201/arc1_prnyq4.png")}
                    >
                      <ZoomIn className="w-5 h-5 text-navy-900" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <img
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377199/arc2_o9ooo5.png"
                      alt="Cable Close-up"
                      className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377199/arc2_o9ooo5.png")}
                    />
                    <img
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377203/arc3_s61t0q.png"
                      alt="Cable Manufacturing"
                      className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377203/arc3_s61t0q.png")}
                    />
                    <img
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377201/arc1_prnyq4.png"
                      alt="Quality Testing"
                      className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377201/arc1_prnyq4.png")}
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right Column - Description */}
              <ScrollAnimation direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Arc Welding Cables</h2>
                  <p className="text-gray-700 mb-6">
                    We at Viral Electronics manufacture ARC Welding cables for general service normal duty elastomeric compound and HOFR for use in the welding industry i.e. namely in arc welding equipments. We manufacture cables from 16.00 sq.mm to 240 sq.mm.
                  </p>
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-navy-900">Applications</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>In ARC Welding Industry, Fabrication Industry.</span>
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-navy-900">Specifications</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>The conductors shall be composed of bare or tinned plated annealed high conductivity copper wires comply in with IS 8130:1984.</span>
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-navy-900">Covering</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>The general service normal duty elastomeric compound shall be Type SE 1 confirming to the requirements of IS 6380:1984. The heat resisting, oil resisting and flame retardant (HOFR) normal duty elastomeric compound shall be Type SE 3 confirming to the requirements of IS 6380:1984.</span>
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
              <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Thickness Covering</h2>
            </ScrollAnimation>

            {/* Covering Thickness */}
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left">Nominal Cross-Sectional Area of Conductor</th>
                      <th className="border px-4 py-2 text-left">Nominal Thickness of Covering (TC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { duty: 'mm2', values: ['mm'] },
                      { duty: '16', values: [2] },
                      { duty: '25', values: [2] },
                      { duty: '35', values: [2] },
                      { duty: '50', values: [2.2] },
                      { duty: '70', values: [2.4] },
                      { duty: '95', values: [2.6] },
                      { duty: '120', values: [2.8] },
                      { duty: '150', values: [3] },
                      { duty: '185', values: [3.2] },
                      { duty: '240', values: [3.2] },
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
            </ScrollAnimation>
          </div>
        </section>
        {/* Applications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">Current Rating of General Service Normal Duty Elastomeric Compound Covered Cable with Copper Conductor</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-8 max-w-4xl mx-auto px-4">The following are typical duty cycles for various welding processes and applications</p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollAnimation direction="left" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Automatic Welding</h3>
                  <p className="text-gray-700">
                    Up to 100 percent
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Semi-Automatic Welding</h3>
                  <p className="text-gray-700">
                    30 to 85 percent
                  </p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
              <ScrollAnimation direction="left" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Manual Welding</h3>
                  <p className="text-gray-700">
                    30 to 60 percent
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Very Intermittent</h3>
                  <p className="text-gray-700">
                    Up to 20 percent
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">

            {/* Current Ratings SE 1 */}
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="my-16">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Nominal Cross-Sectional Area of Conductor</th>
                        <th className="border px-4 py-2 text-center">100%</th>
                        <th className="border px-4 py-2 text-center">85%</th>
                        <th className="border px-4 py-2 text-center">60%</th>
                        <th className="border px-4 py-2 text-center">30%</th>
                        <th className="border px-4 py-2 text-center">20%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { duty: 'sq mm2', values: ['Amp', 'Amp', 'Amp', 'Amp', 'Amp'] },
                        { duty: '25', values: [125, 136, 161, 228, 279] },
                        { duty: '35', values: [156, 169, 201, 285, 349] },
                        { duty: '50', values: [197, 214, 254, 360, 440] },
                        { duty: '70', values: [248, 269, 320, 453, 555] },
                        { duty: '95', values: [299, 342, 386, 546, 669] },
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
        {/* Applications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation direction="up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">Current Rating of HOFR Normal Duty Elastomeric Compound Covered Cable with Copper Conductor</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-8 max-w-4xl mx-auto px-4">The following are typical duty cycles for various welding processes and applications</p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollAnimation direction="left" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Automatic Welding</h3>
                  <p className="text-gray-700">
                    Up to 100 percent
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Semi-Automatic Welding</h3>
                  <p className="text-gray-700">
                    30 to 85 percent
                  </p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
              <ScrollAnimation direction="left" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Manual Welding</h3>
                  <p className="text-gray-700">
                    30 to 60 percent
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Very Intermittent</h3>
                  <p className="text-gray-700">
                    Up to 20 percent
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            {/* Current Ratings SE 3 */}
            <ScrollAnimation direction="up" delay={0.3}>
              <div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Nominal Cross-Sectional Area of Conductor</th>
                        <th className="border px-4 py-2 text-center">100%</th>
                        <th className="border px-4 py-2 text-center">85%</th>
                        <th className="border px-4 py-2 text-center">60%</th>
                        <th className="border px-4 py-2 text-center">30%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { duty: 'Sq mm2', values: ['Amp', 'Amp', 'Amp', 'Amp'] },
                        { duty: '16', values: [135, 146, 174, 246] },
                        { duty: '25', values: [177, 192, 228, 343] },
                        { duty: '35', values: [221, 240, 285, 403] },
                        { duty: '50', values: [279, 303, 360, 509] },
                        { duty: '70', values: [352, 382, 454, 643] },
                        { duty: '95', values: [424, 460, 547, 774] },
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
          <div
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
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ArcWeldingCables;