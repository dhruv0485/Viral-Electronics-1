import { Mail, Phone, MapPin, Clock, Building, User, ExternalLink,Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  // Handle input changes with validation and sanitization
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Basic input sanitization
    let sanitizedValue = value;
    
    if (name === 'phone') {
      // Only allow digits for phone number
      sanitizedValue = value.replace(/\D/g, '');
    } else if (name === 'email') {
      // Remove any whitespace from email
      sanitizedValue = value.trim();
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

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


  const validateForm = () => {
    // Client-side validation to match backend validation
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long.');
    }
    
    if (!formData.phone || !/^\d+$/.test(formData.phone)) {
      errors.push('Phone number must contain only digits.');
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address.');
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long.');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Client-side validation
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join('\n'));
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone,
          email: formData.email.trim().toLowerCase(),
          message: formData.message.trim()
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('Success:', responseData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        // Handle different types of error responses
        if (response.status === 422) {
          // Handle validation errors
          if (Array.isArray(responseData.detail)) {
            // Format validation errors
            const errorMessages = responseData.detail.map(err => 
              `${err.loc ? err.loc.join('.') + ': ' : ''}${err.msg}`
            );
            setError(errorMessages.join('\n'));
          } else if (responseData.detail) {
            setError(responseData.detail);
          } else {
            setError('Please check your input and try again.');
          }
        } else if (response.status >= 500) {
          setError('Our server is currently experiencing issues. Please try again later.');
        } else {
          setError(responseData.message || responseData.detail || 'An unexpected error occurred. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        setError('Unable to connect to the server. Please check your internet connection and try again.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
    <Helmet>
        <title>Contact Viral Electronics - Get in Touch</title>
        <meta
          name="description"
          content="Reach Viral Electronics for enquiries about power, control, automotive or speciality cables manufactured in Nashik, India."
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
          backgroundImage: `url(${isMobile ? 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377211/m1_l0wlzn.png' : 'https://res.cloudinary.com/dex1t9dm2/image/upload/v1753377202/b1_gnmf9y.png'})`,
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
              Get in Touch with Viral Electronics
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Manufacturers of Premium Wires & Cables Since 1982
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Information */}
            <ScrollAnimation direction="left" className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center mb-8">
                  <Building className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-navy-900">
                    Viral Electronics Private Limited
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { name: 'Viral Thakker', title: 'Director' },
                    { name: 'Viren Thakker', title: 'Sales Manager' },
                  ].map((director, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-lg transition-all duration-300 ${
                        hoveredCard === index ? 'bg-white shadow-lg scale-105' : 'bg-transparent'
                      }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-center mb-4">
                        <User className="w-6 h-6 text-red-600 mr-2" />
                        <h3 className="text-lg font-semibold text-navy-900">
                          {director.name} <span className="text-gray-600">({director.title})</span>
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start group">
                          <MapPin className="w-5 h-5 text-red-600 mr-2 mt-1 group-hover:scale-110 transition-transform" />
                          <p className="text-gray-700">
                            D-7, MIDC, Ambad<br />
                            Nashik - 422010<br />
                            Maharashtra, India
                          </p>
                        </div>
                        <div className="flex items-center group">
                          <Phone className="w-5 h-5 text-red-600 mr-2 group-hover:scale-110 transition-transform" />
                          <div>
                            <a href={`tel:+91${index === 0 ? '9823061047' : '8600654786'}`} className="text-gray-700 hover:text-red-600 transition-colors">
                              +(91) - {index === 0 ? '9823061047' : '8600654786'}
                            </a>
                            <br />
                          </div>
                        </div>
                        <div className="flex items-center group">
                          <Mail className="w-5 h-5 text-red-600 mr-2 group-hover:scale-110 transition-transform" />
                          <a
                            href="mailto:contact@viralcables.com"
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            contact@viralcables.com
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Business Hours */}
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-navy-900">Working Hours</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-md">
                    <p className="text-gray-700 font-medium">Monday - Friday</p>
                    <p className="text-red-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-md">
                    <p className="text-gray-700 font-medium">Sunday</p>
                    <p className="text-red-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-md">
                    <p className="text-gray-700 font-medium">Saturday</p>
                    <p className="text-red-600">Closed</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          {/* Contact Form Section */}
      <ScrollAnimation>
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Have a question or want to discuss your requirements? We'd love to hear from you.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        {error.split('\n').map((line, i) => (
                          <span key={i} className="block">{line}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Please describe your query or why you want to contact us. Include details about products you're interested in, technical specifications, or any other requirements."
                />
              </div>

              <div className="text-center">
                <motion.button
  type="submit"
  disabled={isLoading}
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
  whileHover={{ scale: isLoading ? 1 : 1.05 }}
  whileTap={{ scale: isLoading ? 1 : 0.95 }}
>
  {isLoading ? (
    <>
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block"></div>
      Sending...
    </>
  ) : (
    <>
      <Send className="inline mr-2" size={20} />
      Send Message
    </>
  )}
</motion.button>

              </div>
            </motion.form>
          </div>
        </div>
      </ScrollAnimation>

          {/* Map Section */}
          <ScrollAnimation direction="up" delay={0.3} className="mt-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-900">Our Location</h2>
                <a
                  href="https://goo.gl/maps/your-location-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                  <span className="mr-2">Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.053031950899!2d73.73821147500135!3d19.9642718814318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddecafbfffffff%3A0xcad94602c96538d8!2sViral%20Electronics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1749751185079!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactPage;