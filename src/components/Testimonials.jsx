import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'David K.',
    transformation: 'Lost 45 lbs & Built Core Strength',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    quote: 'Titan Gym completely revolutionized my relationship with fitness. The coaches did not just hand me a workout sheet; they taught me how to lift, eat, and stay disciplined. The energy in this facility is infectious!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica M.',
    transformation: 'Gained 12 lbs of Lean Muscle',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    quote: 'The strength coaching and plate-loaded gear here are unmatched. As a female athlete, finding a weight room that feels welcoming yet intensely focused can be tough. Titan Gym is my absolute sanctuary.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ryan L.',
    transformation: 'Recovered Knee Mobility & Speed',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote: 'After my ACL tear, I was hesitant to train heavy again. The recovery lounge, infrared saunas, and targeted athletic coaching here helped me rebuild trust in my body. I am squatting pain-free now!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentReview = reviews[index];

  return (
    <section id="testimonials" className="relative py-24 bg-[#121212] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-90 h-90 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            REAL TITAN <span className="text-[#FF4D00]">TRANSFORMATIONS</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto" />
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative min-h-[380px] md:min-h-[300px] flex items-center justify-center bg-[#0B0B0B] border border-white/5 p-8 sm:p-12 md:p-16 rounded-2xl shadow-xl">
          
          {/* Quote Icon Background */}
          <div className="absolute top-6 left-8 text-white/[0.02] text-8xl md:text-9xl pointer-events-none select-none">
            <FaQuoteLeft />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentReview.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full flex flex-col md:flex-row gap-8 items-center relative z-10"
            >
              {/* Member Image & Details */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#FF4D00] shadow-lg mb-4">
                  <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-[Oswald] text-white uppercase tracking-wide">
                  {currentReview.name}
                </h3>
                <p className="text-[#FF4D00] text-xs font-semibold uppercase tracking-wider mb-2">
                  {currentReview.transformation}
                </p>
                <div className="flex gap-1">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFD54F] text-sm" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-300 text-base sm:text-lg md:text-xl italic leading-relaxed font-light">
                  "{currentReview.quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#121212] border border-white/5 hover:bg-[#FF4D00] text-white flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#121212] border border-white/5 hover:bg-[#FF4D00] text-white flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
