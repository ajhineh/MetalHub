"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  ShoppingBag, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Route, 
  Info, 
  AlertTriangle,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function PerfectIndustrialLandingPage({ params }: PageProps) {
  const [hoveredPanel, setHoveredPanel] = useState<'left' | 'right' | null>(null);

  // Active Orders Bar Chart values
  const activeOrdersBars = [15, 28, 42, 20, 55, 38, 70, 62, 50, 78, 65, 58, 85, 45, 60, 75, 40, 90, 52, 80];
  
  // Lead Times Bar Chart values
  const leadTimesBars = [22, 22, 22, 60, 32, 48, 60, 70, 48, 68];

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full text-white font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Crisp, Un-faded Cement Factory Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/bg-cement-factory.webp')",
        }}
      />

      {/* 2. Connected Star Constellation Network */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-60">
          <defs>
            <linearGradient id="cyan-glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Left Margin Star Network */}
          <line x1="3%" y1="18%" x2="12%" y2="30%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="12%" y1="30%" x2="6%" y2="48%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" />
          <line x1="6%" y1="48%" x2="14%" y2="68%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" />
          <line x1="14%" y1="68%" x2="4%" y2="85%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" strokeDasharray="4 4" />
          <line x1="12%" y1="30%" x2="22%" y2="22%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" />

          <circle cx="3%" cy="18%" r="4" className="fill-cyan-400 animate-pulse" />
          <circle cx="12%" cy="30%" r="5" className="fill-cyan-300" />
          <circle cx="6%" cy="48%" r="6" className="fill-blue-400" />
          <circle cx="14%" cy="68%" r="5" className="fill-cyan-300 animate-pulse" />
          <circle cx="4%" cy="85%" r="4" className="fill-cyan-400" />
          <circle cx="22%" cy="22%" r="4" className="fill-cyan-200" />

          {/* Right Side Star Network */}
          <line x1="78%" y1="15%" x2="88%" y2="28%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" />
          <line x1="88%" y1="28%" x2="95%" y2="45%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" strokeDasharray="4 4" />
          <line x1="88%" y1="28%" x2="82%" y2="58%" stroke="url(#cyan-glow-line)" strokeWidth="1.2" />

          <circle cx="78%" cy="15%" r="4" className="fill-cyan-300" />
          <circle cx="88%" cy="28%" r="6" className="fill-cyan-400 animate-pulse" />
          <circle cx="95%" cy="45%" r="5" className="fill-blue-400" />
          <circle cx="82%" cy="58%" r="4" className="fill-cyan-300" />
        </svg>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col justify-between min-h-[calc(100vh-120px)]">
        
        {/* Hero Section */}
        <div className="max-w-2xl space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Industrial Intelligence &<br />
            Engineering Systems
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-200 max-w-xl font-normal leading-relaxed"
          >
            Connecting verified European steel suppliers to elevate product quality, engineering standards, and enterprise management.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2"
          >
            <button className="px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all transform hover:scale-105 active:scale-95">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* 3. Portfolio Panels built strictly using the "steel-card" template layout nested under container and auto-fit grid */}
        <div className="container" style={{ padding: '3rem 0 0 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          
          {/* Card 1: ACTIVE SUPPLY CHAINS */}
          <motion.div 
            onMouseEnter={() => setHoveredPanel('left')}
            onMouseLeave={() => setHoveredPanel(null)}
            className="steel-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              background: 'rgba(10, 16, 29, 0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--color-steel-border)',
              borderRadius: '12px',
              padding: '2rem'
            }}
          >
            {/* Header Section from Template */}
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-steel-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="badge badge-steel" style={{ marginBottom: '0.5rem' }}>Europe</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', lineHeight: '1.2' }}>ACTIVE SUPPLY CHAINS</h3>
              </div>
              <MoreHorizontal className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
            </div>

            {/* Split layout inside the steel-card */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', flex: 1 }}>
              
              {/* Left Column - Stats Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between' }}>
                
                {/* Item 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Real-time Network</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>342 Suppliers</div>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Active Orders</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>1,150 tons</div>
                  </div>
                </div>

                {/* Item 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lead Times</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Avg. 14 Days</div>
                  </div>
                </div>

                {/* Item 4 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Quality Compliance</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-amber)' }}>99.8% Certified</div>
                  </div>
                </div>

              </div>

              {/* Right Column - Charts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'space-between' }}>
                
                {/* Active Orders Chart Card */}
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '110px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>Active Orders</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400 cursor-pointer" />
                  </div>
                  <div className="flex items-end justify-between gap-0.5 h-14 pt-1">
                    {activeOrdersBars.map((val, idx) => (
                      <motion.div 
                        key={idx}
                        className="w-1 rounded-t bg-cyan-400"
                        style={{ height: `${val}%` }}
                        animate={hoveredPanel === 'left' ? { 
                          height: [`${val}%`, `${Math.min(100, val + (idx % 2 === 0 ? 25 : -20))}%`, `${val}%`] 
                        } : { height: `${val}%` }}
                        transition={{ 
                          repeat: hoveredPanel === 'left' ? Infinity : 0, 
                          duration: 1.2, 
                          delay: idx * 0.03, 
                          ease: "easeInOut" 
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Lead Times Chart Card */}
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '110px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>Lead Times</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400 cursor-pointer" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col justify-between text-[8px] text-slate-500 h-12 pr-1 font-mono leading-none">
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                    </div>
                    <div className="flex-1 flex items-end justify-around h-12 border-l border-b border-white/10 pl-1.5">
                      {leadTimesBars.map((val, idx) => (
                        <motion.div 
                          key={idx}
                          className="w-1.5 rounded-t bg-cyan-400"
                          style={{ height: `${val}%` }}
                          animate={hoveredPanel === 'left' ? { 
                            height: [`${val}%`, `${Math.min(95, val + (idx % 3 === 0 ? 30 : -15))}%`, `${val}%`] 
                          } : { height: `${val}%` }}
                          transition={{ 
                            repeat: hoveredPanel === 'left' ? Infinity : 0, 
                            duration: 1.4, 
                            delay: idx * 0.06, 
                            ease: "easeInOut" 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Card 2: GUIDANCE ENGINE */}
          <motion.div 
            onMouseEnter={() => setHoveredPanel('right')}
            onMouseLeave={() => setHoveredPanel(null)}
            className="steel-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              background: 'rgba(10, 16, 29, 0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--color-steel-border)',
              borderRadius: '12px',
              padding: '2rem'
            }}
          >
            {/* Header Section from Template */}
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-steel-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="badge badge-steel" style={{ marginBottom: '0.5rem' }}>Engine</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', lineHeight: '1.2' }}>GUIDANCE ENGINE</h3>
              </div>
              <MoreHorizontal className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
            </div>

            {/* Split layout inside the steel-card */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', flex: 1 }}>
              
              {/* Left Column - Stats Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between' }}>
                
                {/* Item 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Demand Forecasting</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>94% Accuracy</div>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Route className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Route Optimization</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>18% Savings</div>
                  </div>
                </div>

                {/* Item 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Regulatory Support</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>EU EN 10025</div>
                  </div>
                </div>

                {/* Item 4 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Risk Assessment</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-amber)' }}>Low Dispute Rate</div>
                  </div>
                </div>

              </div>

              {/* Right Column - Charts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'space-between' }}>
                
                {/* Regulation Chart Card */}
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '110px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>Regulation</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400 cursor-pointer" />
                  </div>
                  <div className="relative h-12 w-full pt-1">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 120 40">
                      <line x1="0" y1="35" x2="120" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <line x1="0" y1="20" x2="120" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <motion.path 
                        d="M0,30 C20,35 35,22 55,25 C75,28 85,8 100,12 C110,15 115,8 120,5" 
                        fill="none" 
                        stroke="#06b6d4" 
                        strokeWidth="2.5"
                        animate={hoveredPanel === 'right' ? { 
                          d: [
                            "M0,30 C20,35 35,22 55,25 C75,28 85,8 100,12 C110,15 115,8 120,5",
                            "M0,22 C20,15 35,30 55,10 C75,18 85,25 100,8 C110,10 115,22 120,15",
                            "M0,30 C20,35 35,22 55,25 C75,28 85,8 100,12 C110,15 115,8 120,5"
                          ] 
                        } : {}}
                        transition={{ repeat: hoveredPanel === 'right' ? Infinity : 0, duration: 2.5, ease: "easeInOut" }}
                      />
                      <circle cx="85" cy="8" r="3" fill="#ffffff" />
                    </svg>
                  </div>
                </div>

                {/* Risk Assessment Gauge Card */}
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '110px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>Risk Assessment</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400 cursor-pointer" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="relative w-16 h-10 flex items-end justify-center">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                        <path 
                          d="M10,45 A40,40 0 0,1 90,45" 
                          fill="none" 
                          stroke="rgba(255,255,255,0.12)" 
                          strokeWidth="7" 
                          strokeLinecap="round" 
                        />
                        <motion.path 
                          d="M10,45 A40,40 0 0,1 90,45" 
                          fill="none" 
                          stroke="url(#arc-gradient)" 
                          strokeWidth="7" 
                          strokeLinecap="round"
                          strokeDasharray="125"
                          strokeDashoffset="12"
                          animate={hoveredPanel === 'right' ? { strokeDashoffset: [125, 12] } : { strokeDashoffset: 12 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute bottom-0.5 font-bold text-xs text-white">94%</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-cyan-400">18%</div>
                      <div className="text-[9px] text-slate-400 font-medium leading-none">Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

        {/* 4. Verified EU Suppliers Partner Footer */}
        <div className="pt-12 flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase">
            VERIFIED EU SUPPLIERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-85 transition-all">
            <span className="font-bold text-sm tracking-tight text-slate-200">ArcelorMittal</span>
            <span className="font-semibold text-xs text-slate-200">thyssenkrupp</span>
            <span className="font-semibold text-xs text-slate-200">Salzgitter AG</span>
            <span className="font-bold text-sm tracking-widest text-slate-200">SSAB</span>
            <span className="font-semibold text-xs text-slate-200">voestalpine</span>
          </div>
        </div>

      </main>
    </div>
  );
}
