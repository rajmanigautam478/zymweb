import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Premium Plan',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after a delay or preserve state
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Start Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            GET IN TOUCH <span className="text-[#FF4D00]">WITH US</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            Ready to claim your trial pass or register your membership? Send us a message and a coaching coordinator will reach out within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-[#121212] border border-white/5 p-8 rounded-xl space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold font-[Oswald] text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-4">
                Titan Headquarters
              </h3>

              {/* Detail block */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#FF4D00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#FF4D00] text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    101 Strength Boulevard, Muscle District,<br />New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Detail block */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#FF4D00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-[#FF4D00] text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +1 (800) 555-8482 (TITAN-FIT)
                  </p>
                </div>
              </div>

              {/* Detail block */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#FF4D00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[#FF4D00] text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    membership@titangym.com
                  </p>
                </div>
              </div>

              {/* Detail block */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#FF4D00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-[#FF4D00] text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Hours of Operation</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Monday - Friday: 5:00 AM - 11:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Map (styled iframe placeholder for premium look) */}
            <div className="h-64 rounded-xl overflow-hidden border border-white/5 shadow-xl relative group">
              <iframe
                title="Titan Gym Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25281488814!2d-74.11976378415278!3d40.69767006323862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1657500000000!5m2!1sen!2sus"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:brightness-90 transition-all duration-500 border-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#FF4D00]/10 pointer-events-none mix-blend-color" />
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#121212] border border-white/5 p-8 sm:p-10 rounded-xl shadow-xl min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold font-[Oswald] text-white uppercase tracking-wider mb-6">
                    Request a Free Consultation
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0B0B0B] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0B0B0B] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                        placeholder="johndoe@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0B0B0B] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                        Membership Plan Interested
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full bg-[#0B0B0B] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                      >
                        <option value="Basic Plan">Basic Plan ($29/mo)</option>
                        <option value="Premium Plan">Premium Plan ($49/mo)</option>
                        <option value="Elite Plan">Elite Plan ($89/mo)</option>
                        <option value="Free Consultation">Free Day Pass</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                      Your Message / Fitness Goals
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0B0B0B] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors resize-none"
                      placeholder="Tell us about your fitness goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF4D00] hover:bg-[#cc3d00] disabled:bg-[#FF4D00]/50 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4D00]/20 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <FaCheckCircle className="text-[#FF4D00] text-7xl mb-6 animate-[bounce_1s_infinite_alternate]" />
                  <h3 className="text-3xl font-bold font-[Oswald] text-white uppercase tracking-wider mb-4">
                    Registration Received!
                  </h3>
                  <p className="text-gray-300 max-w-md leading-relaxed mb-6">
                    Thank you, <span className="text-[#FF4D00] font-bold">{formData.name}</span>! Your request for the <span className="text-white font-bold">{formData.plan}</span> has been logged. An Elite Coach will contact you at <span className="text-white font-bold">{formData.phone}</span> or <span className="text-white font-bold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', plan: 'Premium Plan', message: '' }); }}
                    className="bg-white/15 hover:bg-[#FF4D00] text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-md transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
