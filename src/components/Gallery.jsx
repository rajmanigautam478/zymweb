import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiPlus } from 'react-icons/hi';

const galleryItems = [
  {
    id: 1,
    category: 'Gym Floor',
    title: 'Plate-Loaded Racks',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    aspect: 'aspect-square',
  },
  {
    id: 2,
    category: 'Gym Floor',
    title: 'Heavy Strength Zone',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    category: 'Cardio Area',
    title: 'Assault Bike Station',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    aspect: 'aspect-video',
  },
  {
    id: 4,
    category: 'Cardio Area',
    title: 'Endurance Treadmills',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 5,
    category: 'Yoga Studio',
    title: 'Mind & Body Studio',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    aspect: 'aspect-[3/2]',
  },
  {
    id: 6,
    category: 'Recovery Room',
    title: 'Infrared Finnish Sauna',
    image: 'https://images.unsplash.com/photo-1540496905336-54f214167e72?w=800&q=80',
    aspect: 'aspect-square',
  },
];

const categories = ['All', 'Gym Floor', 'Cardio Area', 'Yoga Studio', 'Recovery Room'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Inside Titan Gym
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            PREVIEW THE <span className="text-[#FF4D00]">TRAINING GROUND</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            Glimpse our world-class facilities, recovery lounges, and training zones designed to keep you performing at peak efficiency.
          </p>
        </div>

        {/* Categories Menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-[#FF4D00] text-white border-[#FF4D00] shadow-md shadow-[#FF4D00]/25'
                  : 'bg-transparent text-gray-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImage(item.image)}
                className={`break-inside-avoid relative mb-6 w-full ${item.aspect} rounded-xl overflow-hidden group cursor-pointer border border-white/5`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4" />

                {/* Details */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#FF4D00] text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <HiPlus className="text-xl" />
                  </div>
                  <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-[Oswald] text-lg font-bold uppercase tracking-wider">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white text-3xl bg-white/10 hover:bg-[#FF4D00] p-2 rounded-full transition-colors duration-300 cursor-pointer"
            >
              <HiX />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="Gym view fullscreen"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
