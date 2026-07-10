import { motion } from 'framer-motion';
import { FaDumbbell, FaTrophy, FaSync, FaSpa, FaRunning, FaWeight } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const programs = [
  {
    id: 1,
    icon: FaDumbbell,
    title: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80',
    description: 'Build raw power, increase bone density, and lift heavier with guided barbell routines.',
  },
  {
    id: 2,
    icon: FaTrophy,
    title: 'Body Building',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    description: 'Hypertrophy programs designed to maximize muscle symmetry, size, and body definition.',
  },
  {
    id: 3,
    icon: FaSync,
    title: 'CrossFit',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
    description: 'High-intensity functional conditioning combining Olympic lifting, gymnastics, and endurance.',
  },
  {
    id: 4,
    icon: FaSpa,
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    description: 'Decompress, improve flexibility, restore range of motion, and balance mental wellness.',
  },
  {
    id: 5,
    icon: FaRunning,
    title: 'Cardio',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    description: 'Boost respiratory stamina, burn calories, and strengthen your cardiovascular system.',
  },
  {
    id: 6,
    icon: FaWeight,
    title: 'Weight Loss',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80',
    description: 'Sustain fat reduction with high-metabolic interval drills and custom macro programs.',
  },
];

export default function Programs() {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="relative py-24 bg-[#121212] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#FF4D00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Our Classes
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            CHOOSE YOUR <span className="text-[#FF4D00]">PROGRAM</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            Whether you want to build massive strength, increase flexibility, or lean down, we have an elite program built around your goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B0B0B] rounded-xl overflow-hidden border border-white/5 hover:border-[#FF4D00] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[#FF4D00]/10"
              >
                {/* Image Section with Zoom */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B0B0B]/85 backdrop-blur-md p-3 rounded-lg border border-white/10 text-[#FF4D00]">
                    <Icon className="text-xl" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-[Oswald] text-white uppercase tracking-wider mb-2 group-hover:text-[#FF4D00] transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    onClick={handleClick}
                    className="inline-flex items-center gap-2 text-[#FF4D00] text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-300"
                  >
                    Learn More 
                    <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
