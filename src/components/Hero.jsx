import { motion } from 'framer-motion';
import { FaPlay, FaStar } from 'react-icons/fa';
import { HiChevronDoubleDown } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 animate-[slowZoom_20s ease-in-out infinite alternate]"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-man-working-out-in-a-gym-8843/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0B0B0B] z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#FF4D00] font-semibold tracking-[0.3em] uppercase text-sm mb-6"
        >
          Welcome to Titan Gym
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[Oswald] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-6"
        >
          TRANSFORM
          <br />
          <span className="text-[#FF4D00]">YOUR BODY</span>
          <br />
          TRANSFORM
          <br />
          <span className="text-[#FF4D00]">YOUR LIFE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-300 text-base sm:text-lg max-w-xl mb-8"
        >
          Join the best fitness community and train with certified coaches.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <a
            href="#pricing"
            className="bg-[#FF4D00] hover:bg-[#cc3d00] text-white px-8 py-4 rounded-md font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#FF4D00]/30 hover:-translate-y-1"
          >
            Join Membership
          </a>
          <button className="flex items-center justify-center gap-3 border-2 border-white/30 hover:border-[#FF4D00] text-white px-8 py-4 rounded-md font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 group">
            <FaPlay className="text-[#FF4D00] group-hover:scale-110 transition-transform" />
            Watch Video
          </button>
        </motion.div>

        {/* Stars + Members */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#FFD54F] text-lg" />
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            <span className="text-white font-bold">5000+</span> Happy Members
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiChevronDoubleDown className="text-[#FF4D00] text-2xl" />
        </motion.div>
      </motion.div>

      {/* Keyframe style tag for slow zoom */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
