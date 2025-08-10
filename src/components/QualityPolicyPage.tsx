import { Award, CheckCircle, FlaskConical, FileCheck, Microscope, ShieldCheck } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
const QualityPolicyPage = () => {
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
        <title>Quality Policy - Viral Electronics</title>
        <meta
          name="description"
          content="Explore Viral Electronics’ stringent quality control processes and commitment to delivering flawless cable products."
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
          backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377199/ab1_c4ncdw.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377203/b6_xxdced.png'})`,
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
              Quality at the Core of Everything We Do
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              ISO 9001:2015 Certified | Rigorous Testing | Uncompromised Standards
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Certificate */}
              <ScrollAnimation direction="left">
                <div className="space-y-8">
                  <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center mb-6">
                      <Award className="w-16 h-16 text-red-600" />
                    </div>
                    <img
                      src="https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377213/ISO_b5fakr.jpg"
                      alt="ISO Certification"
                      className="w-full rounded-lg shadow-md"
                    />
                    <div className="text-center mt-6">
                      <h3 className="text-xl font-bold text-navy-900">ISO 9001:2015 Certified</h3>
                      <p className="text-gray-600 mt-2">Accredited by SWISS CERT Pvt. Ltd.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right Column - Policy Content */}
              <ScrollAnimation direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                    Our Quality Commitment
                  </h2>
                  <div className="w-20 h-1 bg-red-600 mb-8"></div>
                  <div className="space-y-6">
                    {[
                      {
                        icon: CheckCircle,
                        title: 'Flawless Products',
                        description: 'Strict quality control at every production stage ensures consistent product excellence.',
                      },
                      {
                        icon: ShieldCheck,
                        title: 'Premium Materials',
                        description: 'High-grade insulating compounds & copper wires sourced from trusted suppliers.',
                      },
                      {
                        icon: Microscope,
                        title: 'Dedicated QC Team',
                        description: 'Expert inspectors monitor pre- & post-production with advanced testing instruments.',
                      },
                      {
                        icon: FlaskConical,
                        title: 'Comprehensive Testing',
                        description: 'Rigorous checks for batch traceability, flexibility, durability, and resistance.',
                      },
                      {
                        icon: FileCheck,
                        title: 'Test Certificates',
                        description: 'Detailed test certificates and batch traceability provided for all cables.',
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-red-100 p-2 rounded-lg mr-4">
                          <item.icon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-navy-900 mb-1">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation direction="up">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                How We Ensure Quality
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            </div>
          </ScrollAnimation>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Raw Material Inspection',
                  description: 'Thorough testing of incoming materials',
                  image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                },
                {
                  step: 2,
                  title: 'In-Production Checks',
                  description: 'Continuous monitoring during manufacturing',
                  image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                },
                {
                  step: 3,
                  title: 'Regular Testing & Quality Verification',
                  description: 'Comprehensive quality verification',
                  image: 'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                },
                {
                  step: 4,
                  title: 'Certification & Documentation',
                  description: 'Final approval and documentation',
                  image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                },
              ].map((item, index) => (
                <ScrollAnimation key={index} direction="up" delay={0.1 * (index + 1)}>
                  <div className="relative">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-48">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="absolute -top-4 left-6 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
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

export default QualityPolicyPage;