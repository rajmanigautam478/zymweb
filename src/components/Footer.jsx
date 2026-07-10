import { useState } from 'react';
import { FaDumbbell, FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaCheck } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-2 group max-w-max">
              <FaDumbbell className="text-[#FF4D00] text-3xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-[Oswald] text-2xl font-bold tracking-wider text-white">
                TITAN<span className="text-[#FF4D00]">GYM</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              Titan Gym is engineered for maximum physiological transformation. We combine elite-level coaches, state-of-the-art weights, and restorative modalities to unleash your strength.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] hover:bg-[#FF4D00] hover:text-white flex items-center justify-center transition-colors duration-300 text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] hover:bg-[#FF4D00] hover:text-white flex items-center justify-center transition-colors duration-300 text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] hover:bg-[#FF4D00] hover:text-white flex items-center justify-center transition-colors duration-300 text-gray-400">
                <FaYoutube />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] hover:bg-[#FF4D00] hover:text-white flex items-center justify-center transition-colors duration-300 text-gray-400">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-[Oswald] font-bold text-lg uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-[#FF4D00] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-[#FF4D00] transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#schedule" onClick={(e) => handleScrollTo(e, '#schedule')} className="hover:text-[#FF4D00] transition-colors">
                  Class Schedule
                </a>
              </li>
              <li>
                <a href="#trainers" onClick={(e) => handleScrollTo(e, '#trainers')} className="hover:text-[#FF4D00] transition-colors">
                  Our Trainers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-[Oswald] font-bold text-lg uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pricing" onClick={(e) => handleScrollTo(e, '#pricing')} className="hover:text-[#FF4D00] transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleScrollTo(e, '#gallery')} className="hover:text-[#FF4D00] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleScrollTo(e, '#testimonials')} className="hover:text-[#FF4D00] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-[#FF4D00] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-[Oswald] font-bold text-lg uppercase tracking-wider">
              Newsletter Subscription
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Get the latest training advice, nutrition sheets, and priority early-bird access to gym promotions.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#121212] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="bg-[#FF4D00] hover:bg-[#cc3d00] disabled:bg-emerald-500 text-white font-bold uppercase text-xs tracking-wider px-4 rounded transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <FaCheck /> Done
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 my-8" />

        {/* Copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <p>&copy; {new Date().getFullYear()} Titan Gym. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FF4D00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF4D00] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FF4D00] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
