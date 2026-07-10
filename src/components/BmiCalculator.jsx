import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BmiCalculator() {
  const [unit, setUnit] = useState('metric'); // metric (kg/cm) or imperial (lbs/in)
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [advice, setAdvice] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      alert('Please enter valid inputs!');
      return;
    }

    let calculatedBmi = 0;
    if (unit === 'metric') {
      // height is in cm, weight in kg
      const heightInMeters = h / 100;
      calculatedBmi = w / (heightInMeters * heightInMeters);
    } else {
      // height is in inches, weight in lbs
      calculatedBmi = (w / (h * h)) * 703;
    }

    const roundedBmi = parseFloat(calculatedBmi.toFixed(1));
    setBmi(roundedBmi);

    // Set Status and Advice
    if (roundedBmi < 18.5) {
      setStatus('Underweight');
      setAdvice('We recommend a calorie-surplus diet combined with heavy compound lifts in our Strength training programs to build muscle mass safely.');
    } else if (roundedBmi >= 18.5 && roundedBmi < 24.9) {
      setStatus('Normal Weight');
      setAdvice('Excellent! You are in a healthy range. Maintain your fitness with a combination of strength training, endurance cardio, and flexibility classes.');
    } else if (roundedBmi >= 25 && roundedBmi < 29.9) {
      setStatus('Overweight');
      setAdvice('Consider implementing our HIIT conditioning, strength training, and a moderate caloric deficit to improve body composition.');
    } else {
      setStatus('Obese');
      setAdvice('We advise speaking to our personal coaches. They can design a structured, low-impact exercise regime and nutritional guidance to safely reduce body fat.');
    }
  };

  const clearForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('');
    setAdvice('');
  };

  const getBmiBarColor = () => {
    if (!bmi) return 'bg-gray-700';
    if (bmi < 18.5) return 'bg-blue-500';
    if (bmi >= 18.5 && bmi < 24.9) return 'bg-emerald-500';
    if (bmi >= 25 && bmi < 29.9) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <section className="relative py-24 bg-[#0B0B0B] overflow-hidden border-t border-b border-white/5">
      {/* Glow Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF4D00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FF4D00] font-semibold tracking-widest uppercase text-sm mb-3 block">
              Calculate Your Body Mass Index
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-[Oswald] tracking-tight uppercase text-white mb-6">
              BMI CALCULATOR <span className="text-[#FF4D00]">TOOL</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Body Mass Index (BMI) is a simple measurement that uses your height and weight to determine if you are in a healthy range. Check your status instantly below:
            </p>

            {/* Metric/Imperial Toggle */}
            <div className="flex bg-[#121212] p-1 rounded-md max-w-xs mb-8 border border-white/5">
              <button
                type="button"
                onClick={() => { setUnit('metric'); clearForm(); }}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                  unit === 'metric' ? 'bg-[#FF4D00] text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Metric (kg/cm)
              </button>
              <button
                type="button"
                onClick={() => { setUnit('imperial'); clearForm(); }}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                  unit === 'imperial' ? 'bg-[#FF4D00] text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Imperial (lbs/in)
              </button>
            </div>

            {/* Form */}
            <form onSubmit={calculateBmi} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                  Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                </label>
                <input
                  type="number"
                  step="any"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unit === 'metric' ? 'e.g. 75' : 'e.g. 165'}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                  Height ({unit === 'metric' ? 'cm' : 'inches'})
                </label>
                <input
                  type="number"
                  step="any"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={unit === 'metric' ? 'e.g. 178' : 'e.g. 70'}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                />
              </div>

              <div className="sm:col-span-2 flex gap-4 mt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#FF4D00] hover:bg-[#cc3d00] text-white font-bold uppercase tracking-widest text-sm py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4D00]/20"
                >
                  Calculate Now
                </button>
                {bmi && (
                  <button
                    type="button"
                    onClick={clearForm}
                    className="px-6 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-md transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Results Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#121212] border border-white/5 p-8 rounded-xl relative"
          >
            {bmi ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-4">Your Results</h3>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-white text-6xl font-[Oswald] font-bold tracking-tight">
                      {bmi}
                    </span>
                    <span className={`px-3 py-1 text-xs font-bold uppercase rounded ${getBmiBarColor()} text-black`}>
                      {status}
                    </span>
                  </div>

                  {/* Range indicators */}
                  <div className="w-full bg-black/40 h-2.5 rounded-full overflow-hidden mb-6 flex">
                    <div className="w-[18.5%] h-full bg-blue-500" title="Underweight (< 18.5)" />
                    <div className="w-[6.4%] h-full bg-emerald-500" title="Normal (18.5 - 24.9)" />
                    <div className="w-[5%] h-full bg-amber-500" title="Overweight (25 - 29.9)" />
                    <div className="flex-1 h-full bg-red-500" title="Obese (>= 30)" />
                  </div>

                  {/* Recommendation Text */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {advice}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">BMI Reference chart</h4>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
                    <div className="p-2 bg-blue-500/10 text-blue-400 rounded">Underweight<br/>&lt; 18.5</div>
                    <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded">Normal<br/>18.5 - 24.9</div>
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded">Overweight<br/>25.0 - 29.9</div>
                    <div className="p-2 bg-red-500/10 text-red-400 rounded">Obese<br/>&gt;= 30.0</div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-80 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border-2 border-dashed border-[#FF4D00]/40 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <span className="text-[#FF4D00] text-xl font-bold font-[Oswald]">BMI</span>
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">No Calculation Yet</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Fill in your height and weight on the left side to see your index score and personalized physical wellness advice.
                </p>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
