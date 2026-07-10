import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

const plans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    monthlyPrice: 29,
    yearlyPrice: 23, // 20% discount approx
    features: [
      { text: 'Standard Gym Floor Access', included: true },
      { text: 'Locker Room & Shower Access', included: true },
      { text: '1 Free Fitness Assessment', included: true },
      { text: 'Group Classes Access (2/mo)', included: true },
      { text: '24/7 Access Hours', included: false },
      { text: 'Sauna & Recovery Lounge', included: false },
      { text: 'Personal Coaching Sessions', included: false },
      { text: 'Customized Meal Plans', included: false },
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      { text: 'Standard Gym Floor Access', included: true },
      { text: 'Locker Room & Shower Access', included: true },
      { text: '1 Free Fitness Assessment', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: '24/7 Access Hours', included: true },
      { text: 'Sauna & Recovery Lounge', included: true },
      { text: '2 Coaching Sessions / Mo', included: true },
      { text: 'Customized Meal Plans', included: false },
    ],
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite Plan',
    monthlyPrice: 89,
    yearlyPrice: 71,
    features: [
      { text: 'Standard Gym Floor Access', included: true },
      { text: 'Locker Room & Shower Access', included: true },
      { text: 'Unlimited Fitness Assessments', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: '24/7 Access Hours', included: true },
      { text: 'Sauna & Recovery Lounge', included: true },
      { text: '4 Coaching Sessions / Mo', included: true },
      { text: 'Customized Meal Plans', included: true },
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or yearly

  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-24 bg-[#121212] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
            Pricing Options
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-4">
            CHOOSE YOUR <span className="text-[#FF4D00]">MEMBERSHIP PLAN</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF4D00] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg">
            Flexible pricing options crafted for your fitness journey. Switch plans or cancel anytime with no contract lock-ins.
          </p>
        </div>

        {/* Billing Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
            Monthly
          </span>
          
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-16 h-8 bg-[#0B0B0B] border border-white/10 rounded-full p-1 relative transition-colors cursor-pointer"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-[#FF4D00] rounded-full"
              style={{ x: billingCycle === 'monthly' ? 0 : 30 }}
            />
          </button>

          <span className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
            Yearly 
            <span className="bg-[#FF4D00]/10 border border-[#FF4D00]/25 text-[#FF4D00] px-2 py-0.5 rounded text-[10px] font-bold">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`rounded-xl border relative flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#1E1E1E] to-[#0B0B0B] border-[#FF4D00] shadow-2xl shadow-[#FF4D00]/10 scale-105 z-10'
                  : 'bg-[#0B0B0B] border-white/5 shadow-xl hover:border-[#FF4D00]/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF4D00] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Top details */}
              <div>
                <h3 className="text-xl font-bold font-[Oswald] text-white uppercase tracking-wider mb-4">
                  {plan.name}
                </h3>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-white text-5xl font-[Oswald] font-bold">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-400 text-sm">
                    / month
                  </span>
                  {billingCycle === 'yearly' && (
                    <span className="text-gray-500 text-xs ml-2 block">
                      (Billed annually)
                    </span>
                  )}
                </div>

                <div className="w-full h-px bg-white/10 mb-8" />

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <FaCheck className="text-[#FF4D00] flex-shrink-0 text-base" />
                      ) : (
                        <FaTimes className="text-gray-600 flex-shrink-0 text-base" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={handleClick}
                className={`w-full py-4 rounded-md font-bold text-sm tracking-wider uppercase text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#FF4D00] hover:bg-[#cc3d00] text-white shadow-xl shadow-[#FF4D00]/20 hover:shadow-[#FF4D00]/30'
                    : 'bg-white/5 hover:bg-[#FF4D00] text-white'
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
