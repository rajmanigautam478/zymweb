import { motion } from 'framer-motion';
import { FaAward, FaDumbbell, FaUserCheck, FaAppleAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaUserCheck,
    title: 'Certified Trainers',
    description: 'Work with elite, nationally certified fitness coaches who specialize in tailoring programs to your individual physiology.',
  },
  {
    icon: FaDumbbell,
    title: 'Modern Equipment',
    description: 'Access top-of-the-line plate-loaded strength machines, Olympic platform zones, and comprehensive cardio equipment.',
  },
  {
    icon: FaAward,
    title: 'Personal Training',
    description: 'Get custom 1-on-1 sessions focused on kinetic alignment, safety, progressive overload, and accelerated results.',
  },
  {
    icon: FaAppleAlt,
    title: 'Nutrition Plans',
    description: 'Achieve your goals faster with macronutrient coaching and metabolic meal planning designed by nutritional coaches.',
  },
];

const stats = [
  { value: '120+', label: 'Machines' },
  { value: '35+', label: 'Trainers' },
  { value: '5000+', label: 'Members' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Gym Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#FF4D00]/30 rounded-lg -z-10 hidden sm:block" />
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"
              alt="Elite Gym Floor"
              className="w-full h-[520px] object-cover rounded-lg shadow-2xl shadow-black/80 filter brightness-90 hover:brightness-100 transition-all duration-500"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-6">
              WHY <span className="text-[#FF4D00]">CHOOSE US</span>
            </h2>
            
            {/* Features Listing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FF4D00]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#FF4D00] text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1 uppercase tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Counters Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <motion.h3 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-3xl sm:text-4xl font-bold font-[Oswald] text-[#FF4D00] tracking-wider mb-1"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
