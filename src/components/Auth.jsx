import { useState } from 'react';
import { motion } from 'framer-motion';
import { Apple, Mail, Lock, User } from 'lucide-react';

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('login');

  return (
    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-0 right-0 mx-auto w-[540px] h-[540px] blur-3xl" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,178,169,0.22), transparent 60%)' }} />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 h-full">
        <div className="hidden md:flex items-center justify-center p-8" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #EFFFFD 100%)' }}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to Huion</h2>
            <p className="text-gray-600">Sign in to sync your devices and settings across platforms.</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-8">
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-sm bg-white/70 backdrop-blur rounded-2xl p-6 shadow-[inset_6px_6px_18px_rgba(0,0,0,0.04),inset_-6px_-6px_18px_rgba(255,255,255,0.8),0_10px_28px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#00B2A9' }}>
                <User className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{mode === 'login' ? 'Login' : 'Create account'}</h3>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onAuth && onAuth(); }}>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="email" required placeholder="Email" className="w-full pl-10 pr-3 py-3 rounded-xl bg-white outline-none shadow-inner border border-gray-100 focus:border-teal-400" />
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="password" required placeholder="Password" className="w-full pl-10 pr-3 py-3 rounded-xl bg-white outline-none shadow-inner border border-gray-100 focus:border-teal-400" />
              </div>

              <button type="submit" className="w-full py-3 rounded-xl text-white font-medium" style={{ backgroundColor: '#00B2A9' }}>
                {mode === 'login' ? 'Login' : 'Sign Up'}
              </button>

              <div className="flex items-center gap-3 mt-2">
                <button type="button" className="flex-1 py-2.5 rounded-xl bg-black text-white font-medium flex items-center justify-center gap-2">
                  <Apple className="w-4 h-4" /> Apple
                </button>
                <button type="button" className="flex-1 py-2.5 rounded-xl bg-white text-gray-800 font-medium border border-gray-200 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4"><path fill="#FFC107" d="M43.611 20.083H42v-.083H24v8h11.303C33.676 31.299 29.267 34 24 34c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.756 4.102 29.65 2 24 2 11.85 2 2 11.85 2 24s9.85 22 22 22c11 0 20-9 20-20 0-1.341-.138-2.651-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.371 16.108 18.832 14 24 14c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.756 4.102 29.65 2 24 2 16.318 2 9.656 6.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 46c5.186 0 9.86-1.977 13.409-5.197l-6.191-5.238C29.119 37.488 26.715 38 24 38c-5.241 0-9.665-3.013-11.641-7.318l-6.456 4.977C8.196 41.656 15.45 46 24 46z"/><path fill="#1976D2" d="M43.611 20.083H42v-.083H24v8h11.303c-1.629 3.216-6.038 5.917-11.303 5.917-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.756 4.102 29.65 2 24 2 11.85 2 2 11.85 2 24s9.85 22 22 22c11 0 20-9 20-20 0-1.341-.138-2.651-.389-3.917z"/></svg>
                  Google
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">
                {mode === 'login' ? (
                  <>
                    New here?{' '}
                    <button type="button" onClick={() => setMode('signup')} className="font-medium" style={{ color: '#00B2A9' }}>Create an account</button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button type="button" onClick={() => setMode('login')} className="font-medium" style={{ color: '#00B2A9' }}>Log in</button>
                  </>
                )}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
