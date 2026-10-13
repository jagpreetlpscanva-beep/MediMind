import React, { useState } from 'react';
import { LayoutDashboard, Upload, Calendar, BarChart3, Settings as SettingsIcon, Search, Globe, ChevronDown, ShieldCheck } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { UploadDocuments } from './components/UploadDocuments';
import { HealthTimeline } from './components/HealthTimeline';
import { ReportsInsights } from './components/ReportsInsights';
import { Settings } from './components/Settings';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans select-none">
      <header className="bg-white border-b border-slate-200 h-16 px-6 flex items-center justify-between sticky top-0 z-50 shadow-xs">
        <div className="flex items-center gap-3 w-64">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base leading-tight">MediMind AI</div>
            <div className="text-[11px] text-slate-400 font-medium">Your Health. Simplified.</div>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input 
              type="text" 
              placeholder="Search reports, tests, medications..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-700 cursor-pointer">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>English</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>

          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              DU
            </div>
            <div className="text-xs font-semibold text-slate-800 flex items-center gap-1 cursor-pointer">
              Demo User <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0">
          <nav className="space-y-1.5">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${activeTab === 'dashboard' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </button>

            <button 
              onClick={() => setActiveTab('upload')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${activeTab === 'upload' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Upload className="w-4 h-4" /> Upload Documents
            </button>

            <button 
              onClick={() => setActiveTab('timeline')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${activeTab === 'timeline' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Calendar className="w-4 h-4" /> Health Timeline
            </button>

            <button 
              onClick={() => setActiveTab('insights')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${activeTab === 'insights' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <BarChart3 className="w-4 h-4" /> Reports & Insights
            </button>

            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${activeTab === 'settings' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <SettingsIcon className="w-4 h-4" /> Settings
            </button>
          </nav>

          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-[11px] text-slate-500 leading-normal">
            <div className="flex items-center gap-1.5 text-slate-700 font-semibold mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Secure AI
            </div>
            MediMind AI is an informational tool and not a diagnostic service. Always consult a healthcare professional for medical advice.
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-[#f8fafc]">
          {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
          {activeTab === 'upload' && <UploadDocuments />}
          {activeTab === 'timeline' && <HealthTimeline />}
          {activeTab === 'insights' && <ReportsInsights />}
          {activeTab === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
}
