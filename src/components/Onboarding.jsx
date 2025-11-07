import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Connect Your Pen Tablet',
    subtitle: 'Pair your Huion device in seconds and check real-time status.',
    art: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-72 h-44 rounded-2xl bg-white shadow-[inset_6px_6px_18px_rgba(0,0,0,0.05),inset_-6px_-6px_18px_rgba(255,255,255,0.9),0_12px_28px_rgba(0,0,0,0.06)]" />
        <div className="absolute bottom-6 right-8 w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,178,169,0.35), transparent 60%)' }} />
      </div>
    ),
  },
  {
    title: 'Customize Shortcuts',
    subtitle: 'Map buttons and dial to your favorite tools and flows.',
    art: (
      <div className="grid grid-cols-3 gap-3 w-72">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl py-4 text-center bg-white shadow-[inset_4px_4px_12px_rgba(0,0,0,0.05),inset_-4px_-4px_12px_rgba(255,255,255,0.9)] text-gray-600 text-sm">
            K{i + 1}
          </div>
        ))}
        <div className="col-span-3 h-3 rounded-full bg-gray-100 overflow-hidden">
          <div className="h-full" style={{ width: '60%', backgroundColor: '#00B2A9' }} />
        </div>
      </div>
    ),
  },
  {
    title: 'Start Creating',
    subtitle: 'Open your canvas and join a thriving creator community.',
    art: (
      <div className="relative w-72 h-44 rounded-2xl overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #E6FFFB 35%, #CFFAF5 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(0,178,169,0.25), transparent 50%)' }} />
      </div>
    ),
  },
];

export default function Onboarding({ onFinish }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="w-full h-full flex flex-col p-6 bg-white rounded-[32px]">
      <div className="flex-1 flex flex-col items-center justify-center text-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-[320px] h-[200px] flex items-center justify-center">{slides[index].art}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{slides[index].title}</h3>
              <p className="text-gray-600 max-w-xs mx-auto">{slides[index].subtitle}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button onClick={prev} disabled={index === 0} className="p-3 rounded-full bg-white shadow disabled:opacity-40" aria-label="Previous">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === index ? '' : 'opacity-40'}`} style={{ background: '#00B2A9' }} />
          ))}
        </div>
        {index < slides.length - 1 ? (
          <button onClick={next} className="p-3 rounded-full bg-white shadow" aria-label="Next">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        ) : (
          <button onClick={onFinish} className="px-5 py-2.5 rounded-full text-white font-medium" style={{ backgroundColor: '#00B2A9' }}>
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}
