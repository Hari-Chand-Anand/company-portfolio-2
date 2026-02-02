import { Link } from 'react-router-dom';
import { Settings, FolderOpen, MapPin, ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="font-display font-bold text-[#F2F5FA] mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          HCA Internal Portfolio
        </h1>
        <p className="text-[#A6AFBF] text-lg max-w-xl">
          Sales catalogue portal for internal use. Browse machines by brand, view complete production lines, and explore installation locations.
        </p>
      </div>

      {/* Main Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Machines Card */}
        <Link
          to="/machines"
          className="group bg-[#14171C] border border-[rgba(242,245,250,0.12)] p-8 transition-all duration-300 hover:border-[#3AA3FF]/50 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-[#3AA3FF]/10 flex items-center justify-center">
              <Settings className="w-6 h-6 text-[#3AA3FF]" />
            </div>
            <ArrowRight className="w-5 h-5 text-[#A6AFBF] transition-all duration-300 group-hover:text-[#3AA3FF] group-hover:translate-x-1" />
          </div>
          <h2 className="font-display font-semibold text-xl text-[#F2F5FA] mb-2">
            Machines
          </h2>
          <p className="text-[#A6AFBF] text-sm leading-relaxed mb-4">
            Browse by brand & type. Check live stock, prices, specifications, and equivalents.
          </p>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <span className="block font-display font-bold text-2xl text-[#3AA3FF]">6</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF]">Brands</span>
            </div>
            <div className="w-px h-8 bg-[rgba(242,245,250,0.12)]" />
            <div className="text-center">
              <span className="block font-display font-bold text-2xl text-[#3AA3FF]">15+</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF]">Machines</span>
            </div>
          </div>
        </Link>

        {/* Projects Card */}
        <Link
          to="/projects"
          className="group bg-[#14171C] border border-[rgba(242,245,250,0.12)] p-8 transition-all duration-300 hover:border-[#3AA3FF]/50 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-[#3AA3FF]/10 flex items-center justify-center">
              <FolderOpen className="w-6 h-6 text-[#3AA3FF]" />
            </div>
            <ArrowRight className="w-5 h-5 text-[#A6AFBF] transition-all duration-300 group-hover:text-[#3AA3FF] group-hover:translate-x-1" />
          </div>
          <h2 className="font-display font-semibold text-xl text-[#F2F5FA] mb-2">
            Projects
          </h2>
          <p className="text-[#A6AFBF] text-sm leading-relaxed mb-4">
            Pre-built production lines. Step-wise machines with quick access to documentation.
          </p>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <span className="block font-display font-bold text-2xl text-[#3AA3FF]">6</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF]">Projects</span>
            </div>
            <div className="w-px h-8 bg-[rgba(242,245,250,0.12)]" />
            <div className="text-center">
              <span className="block font-display font-bold text-2xl text-[#3AA3FF]">6</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF]">Cities</span>
            </div>
          </div>
        </Link>

        {/* Map Card */}
        <Link
          to="/map"
          className="group bg-[#14171C] border border-[rgba(242,245,250,0.12)] p-8 transition-all duration-300 hover:border-[#3AA3FF]/50 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-[#3AA3FF]/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#3AA3FF]" />
            </div>
            <ArrowRight className="w-5 h-5 text-[#A6AFBF] transition-all duration-300 group-hover:text-[#3AA3FF] group-hover:translate-x-1" />
          </div>
          <h2 className="font-display font-semibold text-xl text-[#F2F5FA] mb-2">
            Installations Map
          </h2>
          <p className="text-[#A6AFBF] text-sm leading-relaxed mb-4">
            City/cluster view of where machines are running. Aggregated data, no customer names.
          </p>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <span className="block font-display font-bold text-2xl text-[#3AA3FF]">19</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF]">Installations</span>
            </div>
            <div className="w-px h-8 bg-[rgba(242,245,250,0.12)]" />
            <div className="text-center">
              <span className="block font-display font-bold text-2xl text-[#3AA3FF]">15</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF]">Cities</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[rgba(242,245,250,0.12)]">
        <p className="font-mono text-xs text-[#A6AFBF] text-center">
          Internal use only • Data shown is for HCA team • HQ controlled • Live stock & price
        </p>
      </div>
    </div>
  );
}
