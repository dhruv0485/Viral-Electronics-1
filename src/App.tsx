import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Add this import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductShowcase from './components/ProductShowcase';
import OtherProducts from './components/OtherProducts';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import QualityPolicyPage from './components/QualityPolicyPage';
import ContactPage from './components/ContactPage';
import ArcWeldingCables from './components/products/ArcWeldingCables';
import MigTigCables from './components/products/MigTigCables';
import StandardTpeCables from './components/products/StandardTpeCables';
import SuperflexTpeCables from './components/products/SuperflexTpeCables';
import HighVoltageCables from './components/products/HighVoltageCables';
import MultipairShieldedCables from './components/products/MultipairShieldedCables';
import MulticoreShieldedCables from './components/products/MulticoreShieldedCables';
import RfCables from './components/products/RfCables';
import HouseWiring from './components/products/HouseWiring';
import MulticoreFlexible from './components/products/MulticoreFlexible';
import ScrollToTop from './components/ScrollToTop';

// Home page component
const HomePage = () => (
  <>
    <Helmet>
      <title>Viral Electronics Leading Cable Manufacturer in Nashik, India</title>
      <meta
        name="description"
        content="Viral Cables is a leading cable manufacturer in Nashik, India, offering a wide range of premium power, control, automotive, welding, and speciality cables since 1982."
      />
      <meta
        name="keywords"
        content="Cable Manufacturers in Nashik, Cable Manufacturers in Maharashtra, Cable Manufacturers in India, Viral Electronics Pvt Ltd, Power Cables, Control Cables, Automotive Cables, Welding Cables, Battery Cables, High Voltage Cables, Instrumentation Cables, Radio Frequency Cables, RF Cables, Coaxial Cables, Triaxial Cables, Arc Welding Cables, MIG TIG CO2 Welding Cables, Torch Cables, Superflex TPE Cables, Thermoplastic Elastomeric Cables, PVC Insulated Battery Cables, Standard Battery Cables, Multicore Shielded Cables, Multipair Shielded Cables, House Wiring Cables, Electrical Panel Wiring, Building Cables, Industrial Cables, Flexible Cables, Armored Cables, Unarmored Cables, Traction Cables, Intercell Connector Cables, Inverter Battery Cables, Elastomeric Cables, Rubber Cables, Single Core Cables, Class 5 Cables, Class 6 Cables, Stranded Cables, Ignition Cables, High Temperature Cables, PTFE Cables, Submersible Pump Cables, Flat Cables, Automotive Wire Harness, Specialty Cables, Cable Wires, Electrical Cables, Power Transmission Cables, Communication Cables, Data Cables, Signal Cables, Shielded Cables, Unshielded Cables, Copper Conductor Cables, Multi-strand Cables, Heavy Duty Cables, Fire Resistant Cables, Oil Resistant Cables, Heat Resistant Cables, Chemical Resistant Cables, UV Resistant Cables, Flame Retardant Cables, Low Smoke Cables, Zero Halogen Cables, Marine Cables, Aerospace Cables, Railway Cables, Mining Cables, Solar Cables, Wind Energy Cables, Telecommunication Cables, Fiber Optic Cables, Network Cables, LAN Cables, Cat5 Cables, Cat6 Cables, CCTV Cables, Security System Cables, Audio Video Cables, Speaker Cables, Microphone Cables, USB Cables, HDMI Cables, VGA Cables, Control Room Cables, Process Industry Cables, Petrochemical Cables, Oil Gas Cables, Refinery Cables, Chemical Plant Cables, Power Plant Cables, Steel Industry Cables, Cement Industry Cables, Textile Industry Cables, Food Industry Cables, Pharmaceutical Cables, Hospital Cables, IT Cables, Computer Cables, Server Room Cables, Data Center Cables, Office Building Cables, Residential Cables, Commercial Cables, Industrial Automation Cables, PLC Cables, SCADA Cables, DCS Cables, Motor Cables, Servo Motor Cables, Encoder Cables, Sensor Cables, Actuator Cables, Robotics Cables, Machine Tool Cables, CNC Cables, Drag Chain Cables, Flexible Robot Cables, Continuous Flex Cables, High Flex Cables, Torsion Cables, Spiral Cables, Retractile Cables, Crane Cables, Hoist Cables, Elevator Cables, Escalator Cables, Conveyor Cables, Material Handling Cables, Overhead Crane Cables, Gantry Crane Cables, Mobile Equipment Cables, Construction Equipment Cables, Mining Equipment Cables, Agricultural Equipment Cables, Marine Equipment Cables, Offshore Cables, Underwater Cables, Shipboard Cables, Naval Cables, Defense Cables, Military Cables, Avionics Cables, Satellite Cables, Space Grade Cables, Nuclear Cables, Radiation Resistant Cables, Medical Equipment Cables, Laboratory Cables, Test Equipment Cables, Measurement Cables, Calibration Cables, Temperature Sensor Cables, Pressure Sensor Cables, Flow Meter Cables, Level Sensor Cables, pH Sensor Cables, Conductivity Sensor Cables, Thermocouple Cables, RTD Cables, Load Cell Cables, Strain Gauge Cables, Accelerometer Cables, Vibration Sensor Cables, Proximity Sensor Cables, Photoelectric Sensor Cables, Ultrasonic Sensor Cables, Vision System Cables, Barcode Scanner Cables, RFID Cables, GPS Cables, GSM Cables, WiFi Cables, Bluetooth Cables, Ethernet Cables, RS232 Cables, RS485 Cables, CAN Bus Cables, DeviceNet Cables, Profibus Cables, Modbus Cables, Foundation Fieldbus Cables, HART Cables, AS-Interface Cables, CC-Link Cables, EtherCAT Cables, Profinet Cables, Powerlink Cables, SerCos Cables, InterBus Cables, ControlNet Cables, Nashik Cables, Maharashtra Cables, Mumbai Cables, Pune Cables, Aurangabad Cables, Kolhapur Cables, Nagpur Cables, Solapur Cables, Ahmednagar Cables, Satara Cables, Sangli Cables, India Cables, Indian Cable Manufacturer, Made in India Cables, Export Quality Cables, International Standard Cables, ISO Certified Cables, CE Certified Cables, UL Listed Cables, CSA Approved Cables, VDE Certified Cables, IEC Standard Cables, IS Standard Cables, BIS Certified Cables, RDSO Approved Cables, Custom Cable Manufacturing, OEM Cables, Cable Assembly, Wire Harness Manufacturing, Cable Testing, Quality Control, Cable Design, Engineering Services, Technical Support, Cable Installation, After Sales Service, Fast Delivery, Competitive Prices, Bulk Orders, Wholesale Cables, Retail Cables, Online Cable Store, Cable Distributor, Cable Supplier, Cable Dealer, Cable Stockist, Electrical Contractor Cables, System Integrator Cables, Panel Builder Cables, Machine Builder Cables, Original Equipment Manufacturer Cables, Replacement Cables, Spare Part Cables, Maintenance Cables, Repair Cables, Emergency Cables"
      />
    </Helmet>
    <Hero />
    <About />
    <ProductShowcase />
    <OtherProducts />
  </>
);

// Main App content component (needs to be inside Router)
const AppContent = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quality-policy" element={<QualityPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Product Pages */}
          <Route path="/products/arc-welding-cables" element={<ArcWeldingCables />} />
          <Route path="/products/mig-tig-cables" element={<MigTigCables />} />
          <Route path="/products/standard-thermoplastic-cables" element={<StandardTpeCables />} />
          <Route path="/products/superflex-thermoplastic-cables" element={<SuperflexTpeCables />} />
          <Route path="/products/high-voltage-cables" element={<HighVoltageCables />} />
          <Route path="/products/multipair-shielded-cables" element={<MultipairShieldedCables />} />
          <Route path="/products/multicore-shielded-cables" element={<MulticoreShieldedCables />} />
          <Route path="/products/rf-cables" element={<RfCables />} />
          <Route path="/products/house-wiring" element={<HouseWiring />} />
          <Route path="/products/multicore-flexible" element={<MulticoreFlexible />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider> {/* Wrap everything with HelmetProvider */}
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;