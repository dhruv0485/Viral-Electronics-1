import { ZoomIn} from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const MulticoreFlexible = () => {
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
        <title>Manufacturer of High Voltage Cables- Viral Electronics - Nashik</title>
        <meta name="description" content="Viral Electronics Pvt. Ltd, Nashik  - Manufacturer of  Armored / Unarmored Power & Control Cable, Auto & Battery Cable, Welding and Tig-welding Cables" />
        <meta name="keywords" content="Cable Manufacturers in Nashik, Nasik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Manufacturer of Tig-welding Cable, Welding Cables, Mig Tig Co2 ( Coax ) Welding, Torch Cables, Coax Cables, Co2 Welding Cables, Arc welding Cables, Battery Cables, Superflex Thermoplastic Elastomeric Battery Cables, Traction Cables, Superflex Cables, TPE Cables, Intercell connector cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables,Class 5 Cables, Class 6 Cables, Stranded Cables, Standard Cables, Standard Thermoplastic Elastomeric Battery Cables, PVC Insulated Battery Cable, High Voltage Cables, Ignition Cables, Instrumentation Cables, Muilticore Shielded Instrumentation Cables, Multicore Cables, Instrumentation Cables, Shielded Cabes, MuiltipairvShielded Instrumentation Cable, Muilticore Cables, Muiltipair Cables, Radio Frequency Cables, COAXIAL CABLES, TRIAXIAL CABLES, Submersible Cables, Pump Cables, Flat Cables, House and Electrical Panel wiring Wires, Panel Wiring Cables, House Wiring Cables, Buliding Cables, PTFE Cables, High temperature Cables, Automotive Cables, Wire Harness Cables, Cables and wires." />
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] flex items-center"
        style={{
          backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377211/m2_vfm539.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377201/b2_qosp7f.png'})`,
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
              Multicore Flexible Cables
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              IS 694:1990 Certified | PVC Insulated | 0.5–240 Sq.mm
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
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377230/multicore4_o8iihd.png"
                    alt="Multicore Flexible Cables"
                    className="w-full h-auto cursor-zoom-in"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377230/multicore4_o8iihd.png")}
                  />
                  <button
                    className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377230/multicore4_o8iihd.png")}
                  >
                    <ZoomIn className="w-5 h-5 text-navy-900" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377230/multicore4_o8iihd.png"
                    alt="Cable Detail"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377230/multicore4_o8iihd.png")}
                  />
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377218/multicore5_tth5f2.png"
                    alt="Application Example"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377218/multicore5_tth5f2.png")}
                  />
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377221/multicore6_gzqbj1.png"
                    alt="Application Example"
                    className="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity h-32 object-cover"
                    onClick={() => setSelectedImage("https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377221/multicore6_gzqbj1.png")}
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Description */}
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">PVC Insulated Multicore Flexible Cables</h2>
                <p className="text-gray-700 mb-8">
                We are a leading company engaged in offering a wide range of PVC insulated Multi Core Flexible Cables. These are having a wide range of application in machine tools, appliances, control panels, machinery and industries of every nature.
                </p>
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-navy-900">Conductors</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      The conductors are drawn from bright electrolytic grade copper and annealed conductors are bunched together
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-navy-900">Insulation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      Bunched conductors are insulated with specially formulated, in-house developed PVC compound with high insulation resistance values
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-navy-900">Sheath</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      In case of multi-core cables, the insulated cores are laid up to form the core assembly. The inner cores are coded for ease of identification as per National/International coding practices. The sheathing is provided with specially formulated PVC compound to facilitate not only ease in stripping but also to withstand mechanical abrasion while in use
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
                  <h3 className="text-xl font-semibold text-navy-900">Quality Control</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      Rigid tests and checks at every stage, from raw material through manufacturing stages and finally upto the finished product ensure that the cables meet National / International standards, and consumer approval
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">✅</span>
                      <span>
                      PVC insulated multi-core sheathed cables are manufactured as per IS 694/1990, in sizes from 0.5 sq.mm. to 240 sq. mm in single core and in sizes 0.5 sq.mm. to 4 sq.mm. upto 5 cores. The rest of the sizes also generally conform to IS: 694/1990.
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Technical Specifications</h2>
          </ScrollAnimation>

          {/* Color Coding Table */}
          <ScrollAnimation direction="up" delay={0.3}>
            <div className="mb-6 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-navy-900 mb-6">Color Coding Table</h3>
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-3 text-left">Name</th>
                      <th className="border px-4 py-3 text-left">Core Colors</th>
                      <th className="border px-4 py-3 text-left">Sheath Colors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border px-4 py-3 font-medium">Single Core Unsheathed</td>
                      <td className="border px-4 py-3">Red, Yellow, Blue, Grey, Green</td>
                      <td className="border px-4 py-3">Unsheathed</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border px-4 py-3 font-medium">Single Core Sheathed</td>
                      <td className="border px-4 py-3">Black</td>
                      <td className="border px-4 py-3">Black or White</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border px-4 py-3 font-medium">Twin Twisted</td>
                      <td className="border px-4 py-3">Red & Black</td>
                      <td className="border px-4 py-3">Black or Grey</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border px-4 py-3 font-medium">Twin Flat Sheathed</td>
                      <td className="border px-4 py-3">Red & Black</td>
                      <td className="border px-4 py-3">Black or Grey</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border px-4 py-3 font-medium">2 Core Round Sheathed</td>
                      <td className="border px-4 py-3">Red & Black</td>
                      <td className="border px-4 py-3">Black or Grey</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border px-4 py-3 font-medium">3 Core Round Sheathed</td>
                      <td className="border px-4 py-3">Red, Black, Yellow/Green (earth)</td>
                      <td className="border px-4 py-3">Black or Grey</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border px-4 py-3 font-medium">4 Core Round Sheathed</td>
                      <td className="border px-4 py-3">Red, Yellow, Blue, Yellow/Green (earth)</td>
                      <td className="border px-4 py-3">Black or Grey</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border px-4 py-3 font-medium">5 Core Round Sheathed</td>
                      <td className="border px-4 py-3">Red, Yellow, Blue, Black, Grey</td>
                      <td className="border px-4 py-3">Black or Grey</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>

          {/* Note */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-navy-50 p-6 rounded-lg border border-navy-200">
                <h4 className="font-semibold text-navy-900 mb-2">Note</h4>
                <p className="text-gray-700">
                Where the number of cores exceeds 5, two adjacent cores are blue for reference and yellow for direction in each layer. The remaining cores in each layer are Grey. On specific request, number printing on cores can also be provided. The data and information given herein are purely as a guide. VIRAL takes no responsibility for any damages arising out of incorrect use.
                </p>
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

export default MulticoreFlexible; 