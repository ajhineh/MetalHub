import React from 'react';

export default function MetalHubDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-slate-950/80 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            M
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            MetalHub
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="text-white hover:text-cyan-400 transition-colors">Marketplace</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">My RFQs</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Network</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Guidance AI</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</button>
          <button className="px-5 py-2 text-sm font-medium bg-white text-slate-950 rounded-full hover:bg-cyan-50 transition-colors shadow-lg hover:shadow-cyan-500/20">
            New RFQ
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <header className="mb-16 text-center md:text-left md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Industrial procurement, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">engineered by AI.</span>
            </h1>
            <p className="text-lg text-slate-400">
              Welcome to the digital nervous system for heavy industry. Connect with verified suppliers across the Europe-Iran supply chain with absolute transparency.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-slate-300">Decision Engine: <strong className="text-white">Active</strong></span>
            </div>
            <div className="mt-2 text-xs text-slate-500">Processing 1,240 RFQs via Neo4j Knowledge Graph</div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Active RFQs List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Active Requests</h2>
              <button className="text-sm text-cyan-400 hover:text-cyan-300">View All →</button>
            </div>
            
            <div className="grid gap-4">
              {/* RFQ Card 1 */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3 inline-block border border-blue-500/20">STEEL STRUCTURE</span>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Legacy Steel Structure RFQ #001</h3>
                      <p className="text-sm text-slate-400">Buyer: <span className="text-slate-300">buyer@metalhub.com</span></p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700">DRAFT</span>
                  </div>
                  
                  <div className="flex gap-6 mt-6">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Target Price</div>
                      <div className="font-semibold text-slate-200">€ 145,000</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Compliance</div>
                      <div className="flex items-center gap-1 font-medium text-emerald-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                        CBAM / GDPR
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock RFQ Card 2 */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 opacity-70">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-3 inline-block border border-purple-500/20">MACHINING</span>
                    <h3 className="text-xl font-bold text-slate-300 mb-1">High-Precision CNC Components</h3>
                    <p className="text-sm text-slate-500">Buyer: Industrial Motors Co.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">PUBLISHED</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Guidance Sidebar */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Guidance Engine</h2>
            
            <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-900 border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="font-semibold text-white">Actionable Insights</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-sm font-medium text-amber-400 mb-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                    Risk Detected
                  </div>
                  <p className="text-xs text-slate-400">Legacy Steel Structure RFQ #001 lacks material grade specification. This historically increases dispute rates by 14%.</p>
                  <button className="mt-3 text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors w-full">Add Specification</button>
                </div>
                
                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-sm font-medium text-cyan-400 mb-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Supplier Match
                  </div>
                  <p className="text-xs text-slate-400">Based on the Neo4j Knowledge Graph, 3 highly-rated suppliers in Europe are ready to quote on your draft.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
