import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDumbbell, FaChevronUp } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Transformation from '../components/Transformation';
import Trainers from '../components/Trainers';
import BmiCalculator from '../components/BmiCalculator';
import Membership from '../components/Membership';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simulation of loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          /* Loading Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 bg-[#0B0B0B] z-50 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              className="text-[#FF4D00] text-6xl mb-4"
            >
              <FaDumbbell />
            </motion.div>
            <motion.h1
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.3em', opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-[Oswald] text-3xl sm:text-4xl font-extrabold text-white tracking-widest uppercase"
            >
              TITAN<span className="text-[#FF4D00]">GYM</span>
            </motion.h1>
            <p className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase mt-2">
              Preparing Your Transformation...
            </p>
          </motion.div>
        ) : (
          /* Home Sections */
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B0B0B] text-white min-h-screen relative overflow-x-hidden font-body"
          >
            {/* Sticky Navigation Bar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Specialties & Programs */}
            <Programs />

            {/* Before/After Transformation Slider */}
            <Transformation />

            {/* Coach Profiles */}
            <Trainers />

            {/* Interactive BMI Tool */}
            <BmiCalculator />

            {/* Price Plans */}
            <Membership />

            {/* Masonry Image Gallery */}
            <Gallery />

            {/* Review Slider */}
            <Testimonials />

            {/* Form & Map Contact Area */}
            <Contact />

            {/* Brand Footer */}
            <Footer />

            {/* Floating Back To Top Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  key="scroll-top"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 z-40 bg-[#FF4D00] hover:bg-[#cc3d00] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-[#FF4D00]/20 hover:shadow-[#FF4D00]/30 transition-all duration-300 border border-white/10 cursor-pointer"
                >
                  <FaChevronUp className="text-lg" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
