import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 18, suffix: '%', label: 'Average Body Fat Loss' },
  { value: 15, suffix: ' lbs', label: 'Average Muscle Gained' },
  { value: 98, suffix: '%', label: 'Success Rate' },
];

function AnimatedCounter({ value, suffix, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold font-[Oswald] text-[#FF4D00]">
      {count}{suffix}
    </span>
  );
}

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="relative py-24 bg-[#0B0B0B] overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Proven Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            REAL LIFE <span className="text-[#FF4D00]">TRANSFORMATIONS</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            See the raw, real results our members achieve through consistent coaching and hard work. Drag the slider to compare Before and After.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Before/After Slider */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative w-full max-w-[600px] h-[400px] rounded-xl overflow-hidden shadow-2xl border border-white/5 cursor-ew-resize select-none"
            >
              {/* After Image (Background) */}
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"
                alt="After fitness shape"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute bottom-4 right-4 bg-[#FF4D00] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded z-20">
                After
              </div>

              {/* Before Image (Overlay Container clipped by sliderPosition) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
                  alt="Before fitness shape"
                  className="absolute inset-0 w-[600px] h-[400px] object-cover max-w-none filter grayscale contrast-125"
                  style={{ width: containerRef.current ? containerRef.current.offsetWidth : 600 }}
                />
                <div className="absolute bottom-4 left-4 bg-black/85 border border-white/10 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded z-20">
                  Before
                </div>
              </div>

              {/* Slider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#FF4D00] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FF4D00] border-2 border-white flex items-center justify-center shadow-lg shadow-black/50">
                  <span className="text-white text-xs font-bold font-mono select-none">&lt;&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Stats */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-bold font-[Oswald] text-white uppercase tracking-wider mb-4">
              NUMBERS THAT <span className="text-[#FF4D00]">DO NOT LIE</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our training formulas are engineered for sustainable physiological improvements. We track measurements, heart rate variations, and body fat metrics to ensure steady progression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#121212] border border-white/5 p-6 rounded-xl flex items-center justify-between hover:border-[#FF4D00]/50 transition-colors duration-300">
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-1">
                      {stat.label}
                    </p>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
