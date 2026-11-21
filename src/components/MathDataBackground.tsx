'use client';

import React from 'react';

export default function MathDataBackground() {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#060B14]"
    >
      {/* 1. Deep Ambient Cyan & Blue Radial Glows */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[110px] pointer-events-none" />

      {/* 2. Industrial Perspective & Coordinate Grid */}
      <svg className="absolute inset-0 w-full h-full stroke-cyan-500/[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="industrial-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" strokeWidth="1" />
            <path d="M 46 48 L 50 48 M 48 46 L 48 50" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#industrial-grid)" />
      </svg>

      {/* 3. Glowing Digital Network & Constellation Mesh (Exact Alternative 4 Layout) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="netCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="netBlueGlow" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="nodePulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Network Connections */}
        <line x1="980" y1="460" x2="1140" y2="380" stroke="url(#netCyanGlow)" strokeWidth="1.5" />
        <line x1="980" y1="460" x2="1180" y2="540" stroke="url(#netBlueGlow)" strokeWidth="1.75" />
        <line x1="980" y1="460" x2="880" y2="580" stroke="url(#netCyanGlow)" strokeWidth="1.5" />
        <line x1="980" y1="460" x2="840" y2="390" stroke="url(#netBlueGlow)" strokeWidth="1.25" />
        <line x1="1140" y1="380" x2="1280" y2="340" stroke="url(#netCyanGlow)" strokeWidth="1.2" />
        <line x1="1140" y1="380" x2="1180" y2="540" stroke="url(#netBlueGlow)" strokeWidth="1.2" />
        <line x1="1180" y1="540" x2="1320" y2="580" stroke="url(#netCyanGlow)" strokeWidth="1.2" />
        <line x1="1180" y1="540" x2="1110" y2="680" stroke="url(#netBlueGlow)" strokeWidth="1.5" />
        <line x1="880" y1="580" x2="1110" y2="680" stroke="url(#netCyanGlow)" strokeWidth="1.5" />
        <line x1="880" y1="580" x2="760" y2="640" stroke="url(#netBlueGlow)" strokeWidth="1.2" />
        <line x1="840" y1="390" x2="720" y2="440" stroke="url(#netCyanGlow)" strokeWidth="1" />
        <line x1="840" y1="390" x2="880" y2="580" stroke="url(#netBlueGlow)" strokeWidth="1.2" />

        {/* Nodes with Halos */}
        <circle cx="980" cy="460" r="18" fill="url(#nodePulse)" />
        <circle cx="980" cy="460" r="5" fill="#38BDF8" />
        <circle cx="1180" cy="540" r="14" fill="url(#nodePulse)" />
        <circle cx="1180" cy="540" r="4.5" fill="#00E5FF" />
        <circle cx="1140" cy="380" r="4" fill="#38BDF8" />
        <circle cx="880" cy="580" r="4" fill="#38BDF8" />
        <circle cx="840" cy="390" r="3.5" fill="#818CF8" />
        <circle cx="1280" cy="340" r="3" fill="#38BDF8" />
        <circle cx="1320" cy="580" r="3" fill="#38BDF8" />
        <circle cx="1110" cy="680" r="3.5" fill="#06B6D4" />
        <circle cx="760" cy="640" r="3" fill="#818CF8" />
      </svg>

      {/* 4. Bottom-Left Dot Matrix (Shown in Alt 4 Screenshot) */}
      <div className="absolute bottom-20 left-10 hidden sm:grid grid-cols-4 gap-3 opacity-30 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        ))}
      </div>

      {/* 5. Telemetry & Math Glyphs in Faint Cyan */}
      <div className="absolute inset-0 w-full h-full text-cyan-400/[0.14] font-mono leading-none pointer-events-none select-none">
        <div className="absolute top-8 right-8 text-[11px] space-y-1 text-right tracking-wider">
          <div>SYS_NODE // SCM_MESH_ONLINE</div>
          <div>COORDINATES: 48.7667° N, 11.4333° E</div>
          <div>STATUS: RUNNING [99.98%]</div>
        </div>

        <div className="absolute top-28 left-8 text-lg font-serif">∑ f(xᵢ) · Δx</div>
        <div className="absolute top-[48%] left-8 text-xs font-mono tracking-widest">β̂ = (XᵀX)⁻¹Xᵀy</div>
        <div className="absolute bottom-10 left-36 text-xs font-mono">P(A|B) = [P(B|A)·P(A)] / P(B)</div>
        <div className="absolute bottom-16 right-12 text-xs font-mono text-right">
          <div>σ_LT = √(L·σ_D² + D̄²·σ_L²)</div>
          <div className="text-[10px] mt-1 text-cyan-400/20">R² = 0.984 | RMSE: 0.012</div>
        </div>
      </div>
    </div>
  );
}
