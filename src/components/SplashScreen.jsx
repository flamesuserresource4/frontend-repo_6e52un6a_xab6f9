import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), 1800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white relative overflow-hidden rounded-[32px]">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-10 w-[420px] h-[420px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at center, rgba(0,178,169,0.25), transparent 60%)' }} />
        <div className="absolute -bottom-24 -right-16 w-[520px] h-[520px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at center, rgba(0,178,169,0.18), transparent 60%)' }} />
      </div>

      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-3xl"
            initial={{ filter: 'blur(16px)', opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.2, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            style={{ background: 'conic-gradient(from 0deg, rgba(0,178,169,0.35), transparent 40%, rgba(0,178,169,0.35))' }}
          />
          <div className="relative bg-white rounded-3xl px-10 py-8 shadow-[inset_8px_8px_24px_rgba(0,0,0,0.04),inset_-8px_-8px_24px_rgba(255,255,255,0.9),0_14px_40px_rgba(0,0,0,0.07)]">
            <LogoHuion size={110} />
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 font-medium tracking-wide"
        >
          Empower Your Creativity
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-28 h-1.5 rounded-full overflow-hidden bg-gray-100"
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: '#00B2A9' }}
            initial={{ x: '-100%' }}
            animate={{ x: ['-100%', '0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function LogoHuion({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Huion logo">
      <path d="M32 6l9 10 13 6-10 9 2 14-14-6-14 6 2-14-10-9 13-6 9-10z" fill="#00B2A9" opacity="0.95"/>
      <rect x="14" y="44" width="36" height="6" rx="3" fill="#00B2A9" opacity="0.9" />
    </svg>
  );
}
