import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import Auth from './components/Auth';
import MainApp from './components/MainApp';

export default function App() {
  const [stage, setStage] = useState('splash');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[conic-gradient(at_top_left,_#ffffff,_#EFFFFD_40%,_#CFFAF5_100%)] text-gray-900">
      <div className="w-[min(420px,95vw)] h-[880px] border border-white/60 rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden">
        {stage === 'splash' && <SplashScreen onFinish={() => setStage('onboarding')} />}
        {stage === 'onboarding' && <Onboarding onFinish={() => setStage('auth')} />}
        {stage === 'auth' && <Auth onAuth={() => setStage('main')} />}
        {stage === 'main' && <MainApp />}
      </div>
    </div>
  );
}
