import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scheduleData = {
  Monday: [
    { time: '07:00 AM - 08:30 AM', name: 'Powerlifting Elite', trainer: 'Marcus Steele', type: 'Strength' },
    { time: '09:00 AM - 10:00 AM', name: 'HIIT Circuit', trainer: 'Sarah Jenkins', type: 'Cardio' },
    { time: '10:30 AM - 11:30 AM', name: 'Vinyasa Yoga', trainer: 'Elena Rostova', type: 'Mind & Body' },
    { time: '04:00 PM - 05:00 PM', name: 'Assault Cycle', trainer: 'David Miller', type: 'Cardio' },
    { time: '05:30 PM - 07:00 PM', name: 'Bodybuilding Masters', trainer: 'Marcus Steele', type: 'Strength' },
    { time: '07:30 PM - 08:30 PM', name: 'Calisthenics Core', trainer: 'Alex Wong', type: 'Strength' },
  ],
  Tuesday: [
    { time: '08:00 AM - 09:30 AM', name: 'Olympic Weightlifting', trainer: 'Marcus Steele', type: 'Strength' },
    { time: '10:00 AM - 11:00 AM', name: 'Metabolic Conditioning', trainer: 'Sarah Jenkins', type: 'Cardio' },
    { time: '04:30 PM - 05:30 PM', name: 'Mobility & Stretch', trainer: 'Elena Rostova', type: 'Mind & Body' },
    { time: '06:00 PM - 07:30 PM', name: 'Hypertrophy Session', trainer: 'David Miller', type: 'Strength' },
    { time: '08:00 PM - 09:00 PM', name: 'Boxing Basics', trainer: 'Alex Wong', type: 'Cardio' },
  ],
  Wednesday: [
    { time: '07:00 AM - 08:30 AM', name: 'Powerlifting Elite', trainer: 'Marcus Steele', type: 'Strength' },
    { time: '09:00 AM - 10:00 AM', name: 'HIIT Circuit', trainer: 'Sarah Jenkins', type: 'Cardio' },
    { time: '10:30 AM - 11:30 AM', name: 'Vinyasa Yoga', trainer: 'Elena Rostova', type: 'Mind & Body' },
    { time: '04:00 PM - 05:00 PM', name: 'Assault Cycle', trainer: 'David Miller', type: 'Cardio' },
    { time: '05:30 PM - 07:00 PM', name: 'Bodybuilding Masters', trainer: 'Marcus Steele', type: 'Strength' },
  ],
  Thursday: [
    { time: '08:00 AM - 09:30 AM', name: 'Olympic Weightlifting', trainer: 'Marcus Steele', type: 'Strength' },
    { time: '10:00 AM - 11:00 AM', name: 'Metabolic Conditioning', trainer: 'Sarah Jenkins', type: 'Cardio' },
    { time: '04:30 PM - 05:30 PM', name: 'Mobility & Stretch', trainer: 'Elena Rostova', type: 'Mind & Body' },
    { time: '06:00 PM - 07:30 PM', name: 'Hypertrophy Session', trainer: 'David Miller', type: 'Strength' },
  ],
  Friday: [
    { time: '07:00 AM - 08:30 AM', name: 'Powerlifting Elite', trainer: 'Marcus Steele', type: 'Strength' },
    { time: '09:00 AM - 10:00 AM', name: 'HIIT Circuit', trainer: 'Sarah Jenkins', type: 'Cardio' },
    { time: '10:30 AM - 11:30 AM', name: 'Power Yoga', trainer: 'Elena Rostova', type: 'Mind & Body' },
    { time: '05:30 PM - 07:00 PM', name: 'Weekend Warmup', trainer: 'David Miller', type: 'Strength' },
  ],
  Saturday: [
    { time: '09:00 AM - 10:30 AM', name: 'Strongman Basics', trainer: 'Marcus Steele', type: 'Strength' },
    { time: '11:00 AM - 12:00 PM', name: 'Cardio Blast', trainer: 'Sarah Jenkins', type: 'Cardio' },
    { time: '01:00 PM - 02:30 PM', name: 'Open Gym Coaching', trainer: 'All Coaches', type: 'Strength' },
  ],
  Sunday: [
    { time: '10:00 AM - 11:30 AM', name: 'Restorative Flow', trainer: 'Elena Rostova', type: 'Mind & Body' },
    { time: '12:00 PM - 02:00 PM', name: 'Open Gym', trainer: 'All Coaches', type: 'Strength' },
  ],
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function ClassesSchedule() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const getTypeStyle = (type) => {
    switch (type) {
      case 'Strength':
        return 'bg-red-500/10 text-red-400 border border-red-500/20';
      case 'Cardio':
        return 'bg-[#FF4D00]/10 text-[#FF4D00] border border-[#FF4D00]/20';
      case 'Mind & Body':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="schedule" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Time Table
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            WEEKLY CLASS <span className="text-[#FF4D00]">SCHEDULE</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            Plan your workouts ahead. Filter classes by day to view specific timings, specialized coaching, and session focus.
          </p>
        </div>

        {/* Day Selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-3 rounded-md text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/20'
                  : 'bg-[#121212] text-gray-400 hover:bg-[#1e1e1e] hover:text-white'
              }`}
            >
              {day.substring(0, 3)}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="bg-[#121212] rounded-xl border border-white/5 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-4">
            
            {/* Table Header for larger screens */}
            <div className="hidden md:grid grid-cols-4 pb-4 border-b border-white/10 text-gray-400 font-semibold uppercase tracking-wider text-xs">
              <div>Time</div>
              <div>Class Activity</div>
              <div>Trainer</div>
              <div className="text-right">Focus Type</div>
            </div>

            {/* List with animations */}
            <motion.div layout className="divide-y divide-white/5">
              <AnimatePresence mode="popLayout">
                {scheduleData[selectedDay].map((cls, idx) => (
                  <motion.div
                    key={`${selectedDay}-${cls.name}-${idx}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-4 py-6 items-center gap-4 hover:bg-white/[0.01] px-2 rounded-lg transition-colors"
                  >
                    {/* Time */}
                    <div className="text-white font-bold tracking-wide text-base">
                      {cls.time}
                    </div>
                    
                    {/* Class Name */}
                    <div className="text-[#FF4D00] font-[Oswald] text-xl font-bold uppercase tracking-wider">
                      {cls.name}
                    </div>

                    {/* Trainer */}
                    <div className="text-gray-300 text-sm flex flex-col">
                      <span className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Trainer</span>
                      {cls.trainer}
                    </div>

                    {/* Focus Type & Action */}
                    <div className="flex justify-between md:justify-end items-center gap-4 mt-2 md:mt-0">
                      <span className={`px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase ${getTypeStyle(cls.type)}`}>
                        {cls.type}
                      </span>
                      <a
                        href="#contact"
                        onClick={handleClick}
                        className="bg-white/10 hover:bg-[#FF4D00] hover:text-white text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded transition-all duration-300"
                      >
                        Book
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
