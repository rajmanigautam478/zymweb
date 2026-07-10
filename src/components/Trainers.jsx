import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const trainers = [
  {
    id: 1,
    name: 'Marcus Steele',
    role: 'Head Coach / Powerlifting Specialist',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    bio: 'Marcus has 12+ years of competitive powerlifting experience and has coached 50+ national-level athletes.',
    socials: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'HIIT Coach / Nutrition Specialist',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80',
    bio: 'Sarah combines high-octane metabolic circuit training with scientifically grounded custom meal programs.',
    socials: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Yoga Director / Mobility Coach',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    bio: 'Elena spent 6 years in Mysore, India studying Vinyasa. She focuses on recovery and injury prevention.',
    socials: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    id: 4,
    name: 'Alex Wong',
    role: 'Calisthenics / Functional Coach',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    bio: 'Alex is a bodyweight specialist. He teaches gymnastic rings, handstands, and raw explosive power.',
    socials: { instagram: '#', twitter: '#', facebook: '#' }
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 bg-[#121212] overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Expert Staff
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            MEET THE <span className="text-[#FF4D00]">TITAN COACHES</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            Train with certified industry leaders committed to perfecting your form, expanding your stamina, and keeping you motivated.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B0B0B] rounded-xl overflow-hidden border border-white/5 group hover:border-[#FF4D00]/50 transition-all duration-300 shadow-xl"
            >
              {/* Image & Overlay */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent opacity-60" />
                
                {/* Social Media Float */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 translate-y-16 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <a
                    href={trainer.socials.instagram}
                    className="w-10 h-10 bg-[#FF4D00] hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={trainer.socials.twitter}
                    className="w-10 h-10 bg-[#FF4D00] hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={trainer.socials.facebook}
                    className="w-10 h-10 bg-[#FF4D00] hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-[Oswald] text-white uppercase tracking-wider mb-1">
                  {trainer.name}
                </h3>
                <p className="text-[#FF4D00] text-xs font-semibold uppercase tracking-wider mb-4">
                  {trainer.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
