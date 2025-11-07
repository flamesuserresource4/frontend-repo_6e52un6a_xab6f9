import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Image as ImageIcon, ShoppingBag, BookOpen, User, Settings, Power, Plus } from 'lucide-react';

const teal = '#00B2A9';

function TabButton({ icon: Icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition ${active ? 'text-gray-900' : 'text-gray-500'}`}>
      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow ${active ? '' : 'shadow-inner'} bg-white`} style={{ outline: active ? `2px solid ${teal}` : 'none' }}>
        <Icon className="w-5 h-5" color={active ? teal : '#6b7280'} />
      </div>
      <span className="text-[11px] font-medium">{label}</span>
    </button>
  );
}

export default function MainApp() {
  const [tab, setTab] = useState('home');

  return (
    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
      <header className="px-6 pt-6 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Huion</h1>
          <p className="text-xs text-gray-500">Create. Learn. Inspire.</p>
        </div>
        <button className="px-3 py-2 rounded-xl bg-white shadow flex items-center gap-2 text-gray-700">
          <Power className="w-4 h-4" />
          <span className="hidden sm:inline">Devices</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
            {tab === 'home' && <HomeScreen />}
            {tab === 'gallery' && <GalleryScreen />}
            {tab === 'tutorials' && <TutorialsScreen />}
            {tab === 'store' && <StoreScreen />}
            {tab === 'profile' && <ProfileScreen />}
          </motion.div>
        </AnimatePresence>
      </main>

      <nav className="fixed left-0 right-0 bottom-4 mx-auto w-[min(520px,92%)] bg-white/80 backdrop-blur rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-2 flex items-center justify-around border border-white">
        <TabButton icon={Home} label="My Devices" active={tab==='home'} onClick={() => setTab('home')} />
        <TabButton icon={ImageIcon} label="Gallery" active={tab==='gallery'} onClick={() => setTab('gallery')} />
        <TabButton icon={BookOpen} label="Tutorials" active={tab==='tutorials'} onClick={() => setTab('tutorials')} />
        <TabButton icon={ShoppingBag} label="Store" active={tab==='store'} onClick={() => setTab('store')} />
        <TabButton icon={User} label="Profile" active={tab==='profile'} onClick={() => setTab('profile')} />
      </nav>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-5 bg-white shadow-[inset_6px_6px_18px_rgba(0,0,0,0.04),inset_-6px_-6px_18px_rgba(255,255,255,0.9)]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Kamvas 13</h3>
            <p className="text-sm text-gray-500">Status: <span className="font-medium" style={{ color: teal }}>Online</span></p>
          </div>
          <button className="px-3 py-2 rounded-xl text-white" style={{ backgroundColor: teal }}>Manage</button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
          <CardStat label="Battery" value="92%" />
          <CardStat label="Pressure" value="3200+" />
          <CardStat label="Firmware" value="v2.4" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <QuickLink title="Huion Community" subtitle="Share & learn" />
        <QuickLink title="Latest Updates" subtitle="New features" />
      </div>

      <div className="rounded-2xl p-5 bg-white border border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-3">Device Settings</h4>
        <div className="space-y-5">
          <Slider label="Pen Pressure" value={70} color={teal} />
          <div>
            <div className="flex items-center justify-between mb-2"><span className="text-sm text-gray-700">Shortcut Buttons</span><button className="text-sm font-medium" style={{ color: teal }}>Configure</button></div>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({length:6}).map((_,i) => (
                <div key={i} className="py-2 text-center rounded-xl bg-gray-50 text-gray-700 text-sm">K{i+1}</div>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-4 bg-gradient-to-r from-white to-[#E6FFFB] border border-teal-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Firmware update available</p>
                <p className="text-sm text-gray-600">Improve stability and pen accuracy</p>
              </div>
              <button className="px-3 py-2 rounded-xl text-white" style={{ backgroundColor: teal }}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardStat({ label, value }) {
  return (
    <div className="rounded-xl p-3 bg-gray-50">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function Slider({ label, value, color }) {
  return (
    <div>
      <div className="flex items-center justify-between"><span className="text-sm text-gray-700">{label}</span><span className="text-sm text-gray-500">{value}%</span></div>
      <div className="h-3 bg-gray-100 rounded-full mt-2 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function GalleryScreen() {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
            <div className="w-full h-full" style={{ background: `linear-gradient(135deg, #EFFFFD, #CFFAF5 ${20 + i*5}%)` }} />
          </div>
        ))}
      </div>
      <button className="fixed right-6 bottom-28 w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center" style={{ backgroundColor: teal }}>
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}

function TutorialsScreen() {
  return (
    <div className="space-y-3">
      {[1,2,3].map((i) => (
        <div key={i} className="rounded-2xl p-4 bg-white border border-gray-100 flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Getting started #{i}</p>
            <p className="text-sm text-gray-600">Short lessons to boost your workflow</p>
          </div>
          <button className="px-3 py-2 rounded-xl text-white" style={{ backgroundColor: teal }}>Watch</button>
        </div>
      ))}
    </div>
  );
}

function StoreScreen() {
  const products = [
    { name: 'Inspiroy H950P', price: '$69' },
    { name: 'Kamvas 13', price: '$219' },
    { name: 'Kamvas Pro 16', price: '$399' },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {products.map((p, i) => (
        <div key={i} className="rounded-2xl p-5 bg-white border border-gray-100 flex items-center gap-4">
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-white to-[#E6FFFB] border" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{p.name}</p>
            <p className="text-sm text-gray-500">Professional tablet for creators</p>
            <div className="flex items-center justify-between mt-3">
              <span className="font-semibold" style={{ color: teal }}>{p.price}</span>
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-xl text-white" style={{ backgroundColor: teal }}>Buy Now</button>
                <button className="px-3 py-2 rounded-xl bg-white border border-gray-200">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl p-5 bg-white border border-gray-100 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-[#E6FFFB] border" />
        <div>
          <p className="font-semibold text-gray-900">Avery Park</p>
          <p className="text-sm text-gray-500">Kamvas 13 • Inspiroy H950P</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        {['Badges', 'Achievements', 'Creator Community'].map((t, i) => (
          <div key={i} className="rounded-2xl p-4 bg-white border border-gray-100 flex items-center justify-between">
            <p className="font-medium text-gray-900">{t}</p>
            <button className="px-3 py-2 rounded-xl text-white" style={{ backgroundColor: teal }}>{t === 'Creator Community' ? 'Join' : 'View'}</button>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-5 bg-white border border-gray-100">
        <p className="font-medium text-gray-900 mb-2">App Settings</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Advanced preferences</span>
          <button className="px-3 py-2 rounded-xl bg-white border border-gray-200 flex items-center gap-2"><Settings className="w-4 h-4" /> Open</button>
        </div>
      </div>
    </div>
  );
}
