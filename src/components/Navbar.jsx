import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDumbbell } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2 group">
            <FaDumbbell className="text-[#FF4D00] text-3xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-[Oswald] text-2xl font-bold tracking-wider text-white">
              TITAN<span className="text-[#FF4D00]">GYM</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#FF4D00] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4D00] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Join Button */}
          <div className="hidden lg:block">
            <a
              href="#pricing"
              onClick={(e) => handleClick(e, '#pricing')}
              className="bg-[#FF4D00] hover:bg-[#cc3d00] text-white px-6 py-2.5 rounded-md font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4D00]/30 hover:-translate-y-0.5"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0B0B]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block text-lg text-gray-300 hover:text-[#FF4D00] transition-colors font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#pricing"
                onClick={(e) => handleClick(e, '#pricing')}
                className="block bg-[#FF4D00] text-white text-center px-6 py-3 rounded-md font-semibold mt-4"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
