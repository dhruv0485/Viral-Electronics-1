import { Award, Users, Factory, FlaskRound as Flask, Truck, ShieldCheck } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
const AboutPage = () => {
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
  return (
    <>
      <Helmet>
        <title>About Viral Electronics – 40 Years of Cable-Making Excellence</title>
        <meta
          name="description"
          content="Learn about Viral Electronics’ four-decade journey, ISO 9001:2015 certification, and global presence in the cable industry."
        />
        <meta
          name="keywords"
          content="Cable Manufacturers in Nashik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Viral Electronics Pvt Ltd, Power Cables, Control Cables, Automotive Cables, Welding Cables, Battery Cables, High Voltage Cables, Instrumentation Cables, Radio Frequency Cables, RF Cables, Coaxial Cables, Triaxial Cables, Arc Welding Cables, MIG TIG CO2 Welding Cables, Torch Cables, Superflex TPE Cables, Thermoplastic Elastomeric Cables, PVC Insulated Battery Cables, Standard Battery Cables, Multicore Shielded Cables, Multipair Shielded Cables, House Wiring Cables, Electrical Panel Wiring, Building Cables, Industrial Cables, Flexible Cables, Armored Cables, Unarmored Cables, Traction Cables, Intercell Connector Cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables, Class 5 Cables, Class 6 Cables, Stranded Cables, Ignition Cables, High Temperature Cables, PTFE Cables, Submersible Pump Cables, Flat Cables, Automotive Wire Harness, Specialty Cables, Cable Wires, Electrical Cables, Power Transmission Cables, Communication Cables, Data Cables, Signal Cables, Shielded Cables, Unshielded Cables, Copper Conductor Cables, Multi-strand Cables, Heavy Duty Cables, Fire Resistant Cables, Oil Resistant Cables, Heat Resistant Cables, Chemical Resistant Cables, UV Resistant Cables, Flame Retardant Cables, Low Smoke Cables, Zero Halogen Cables, Marine Cables, Aerospace Cables, Railway Cables, Mining Cables, Solar Cables, Wind Energy Cables, Telecommunication Cables, Fiber Optic Cables, Network Cables, LAN Cables, Cat5 Cables, Cat6 Cables, CCTV Cables, Security System Cables, Audio Video Cables, Speaker Cables, Microphone Cables, USB Cables, HDMI Cables, VGA Cables, Control Room Cables, Process Industry Cables, Petrochemical Cables, Oil Gas Cables, Refinery Cables, Chemical Plant Cables, Power Plant Cables, Steel Industry Cables, Cement Industry Cables, Textile Industry Cables, Food Industry Cables, Pharmaceutical Cables, Hospital Cables, IT Cables, Computer Cables, Server Room Cables, Data Center Cables, Office Building Cables, Residential Cables, Commercial Cables, Industrial Automation Cables, PLC Cables, SCADA Cables, DCS Cables, Motor Cables, Servo Motor Cables, Encoder Cables, Sensor Cables, Actuator Cables, Robotics Cables, Machine Tool Cables, CNC Cables, Drag Chain Cables, Flexible Robot Cables, Continuous Flex Cables, High Flex Cables, Torsion Cables, Spiral Cables, Retractile Cables, Crane Cables, Hoist Cables, Elevator Cables, Escalator Cables, Conveyor Cables, Material Handling Cables, Overhead Crane Cables, Gantry Crane Cables, Mobile Equipment Cables, Construction Equipment Cables, Mining Equipment Cables, Agricultural Equipment Cables, Marine Equipment Cables, Offshore Cables, Underwater Cables, Shipboard Cables, Naval Cables, Defense Cables, Military Cables, Avionics Cables, Satellite Cables, Space Grade Cables, Nuclear Cables, Radiation Resistant Cables, Medical Equipment Cables, Laboratory Cables, Test Equipment Cables, Measurement Cables, Calibration Cables, Temperature Sensor Cables, Pressure Sensor Cables, Flow Meter Cables, Level Sensor Cables, pH Sensor Cables, Conductivity Sensor Cables, Thermocouple Cables, RTD Cables, Load Cell Cables, Strain Gauge Cables, Accelerometer Cables, Vibration Sensor Cables, Proximity Sensor Cables, Photoelectric Sensor Cables, Ultrasonic Sensor Cables, Vision System Cables, Barcode Scanner Cables, RFID Cables, GPS Cables, GSM Cables, WiFi Cables, Bluetooth Cables, Ethernet Cables, RS232 Cables, RS485 Cables, CAN Bus Cables, DeviceNet Cables, Profibus Cables, Modbus Cables, Foundation Fieldbus Cables, HART Cables, AS-Interface Cables, CC-Link Cables, EtherCAT Cables, Profinet Cables, Powerlink Cables, SerCos Cables, InterBus Cables, ControlNet Cables, Nashik Cables, Maharashtra Cables, Mumbai Cables, Pune Cables, Aurangabad Cables, Kolhapur Cables, Nagpur Cables, Solapur Cables, Ahmednagar Cables, Satara Cables, Sangli Cables, India Cables, Indian Cable Manufacturer, Made in India Cables, Export Quality Cables, International Standard Cables, ISO Certified Cables, CE Certified Cables, UL Listed Cables, CSA Approved Cables, VDE Certified Cables, IEC Standard Cables, IS Standard Cables, BIS Certified Cables, RDSO Approved Cables, Custom Cable Manufacturing, OEM Cables, Cable Assembly, Wire Harness Manufacturing, Cable Testing, Quality Control, Cable Design, Engineering Services, Technical Support, Cable Installation, After Sales Service, Fast Delivery, Competitive Prices, Bulk Orders, Wholesale Cables, Retail Cables, Online Cable Store, Cable Distributor, Cable Supplier, Cable Dealer, Cable Stockist, Electrical Contractor Cables, System Integrator Cables, Panel Builder Cables, Machine Builder Cables, Original Equipment Manufacturer Cables, Replacement Cables, Spare Part Cables, Maintenance Cables, Repair Cables, Emergency Cables"
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative h-[100vh] flex items-center"
          style={{
            backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377199/ab1_c4ncdw.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377203/b6_xxdced.png' })`,
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
                Four Decades of Excellence in Cable Manufacturing
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                ISO 9001:2015 Certified | Global Presence | Trusted Since 1982
              </motion.p>
            </div>
          </div>
        </section>

        {/* Company Profile */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Our Journey
                </h2>
                <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-700 mb-8">
                  Since our establishment in 1982, Viral Electronics has been at the forefront of cable manufacturing excellence. Our commitment to quality and innovation has made us a trusted name in the industry.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <ScrollAnimation direction="up" delay={0.1}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Award className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p>Premium PVC compounds meeting IS, BS, ASTM, and IEC standards.</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p>Serving clients worldwide with customized cable solutions.</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.3}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Flask className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p>Continuous R&D for product improvement and customization.</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Guided by Vision
                </h2>
                <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377223/RajnikantShantilalThakker_narrco.jpg"
                    alt="Mr. Rajnikant S. Thakker"
                    className="w-48 h-64  mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-2">Mr. Rajnikant S. Thakker</h3>
                  <p className="text-gray-600 mb-4">Founder & Managing Director</p>
                  <p className="text-gray-700">
                    Under his visionary leadership, Viral Electronics has grown from a local manufacturer to a global player in the cable industry. His commitment to quality and customer satisfaction continues to drive our success.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation direction="up">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  The People Behind Our Success
                </h2>
                <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-700 mb-12">
                  Our skilled workforce drives innovation and maintains the highest quality standards through regular training and development programs.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Factory, title: 'Production Professionals' },
                { icon: ShieldCheck, title: 'Quality Controllers' },
                { icon: Flask, title: 'R&D Personnel' },
                { icon: Truck, title: 'Warehouse Experts' },
                { icon: Users, title: 'Sales Executives' },
                { icon: Award, title: 'Technical Experts' },
              ].map((item, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.1 * index}>
                  <div
                    className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <item.icon className="w-10 h-10 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-navy-900">
                      {item.title}
                    </h3>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                    State-of-the-Art Manufacturing Facility
                  </h2>
                  <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                  <p className="text-lg text-gray-700">
                    Our 3,410 sq. meters facility is equipped with cutting-edge technology and organized into specialized sections for optimal production flow.
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollAnimation direction="left" delay={0.1}>
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377198/about1_tmff1e.jpg"
                    alt="Manufacturing Facility"
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.1}>
                  <img
                    src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377205/contact_cpvwwl.jpg"
                    alt="Quality Testing Lab"
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </ScrollAnimation>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  { title: 'Manufacturing', value: '2,000 sq.m' },
                  { title: 'Quality Testing', value: '500 sq.m' },
                  { title: 'R&D Center', value: '410 sq.m' },
                  { title: 'Warehousing', value: '500 sq.m' },
                ].map((item, index) => (
                  <ScrollAnimation key={index} direction="up" delay={0.1 * index}>
                    <div
                      className="bg-white p-6 rounded-lg shadow-sm text-center"
                    >
                      <h3 className="text-xl font-bold text-navy-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;