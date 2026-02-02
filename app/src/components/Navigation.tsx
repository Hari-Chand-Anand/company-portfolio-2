import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0B0C0F]/95 backdrop-blur-sm border-b border-[rgba(242,245,250,0.12)]">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-lg font-semibold tracking-tight text-[#F2F5FA]">
            HCA
          </span>
          <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border border-[rgba(242,245,250,0.12)] text-[#A6AFBF] rounded-sm">
            Internal
          </span>
        </Link>

        {/* Back Button or Nav Links */}
        {!isHome ? (
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm text-[#A6AFBF] hover:text-[#F2F5FA] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div className="flex items-center gap-8">
            <Link
              to="/machines"
              className="text-sm font-medium text-[#A6AFBF] hover:text-[#F2F5FA] transition-colors duration-200"
            >
              Machines
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium text-[#A6AFBF] hover:text-[#F2F5FA] transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              to="/map"
              className="text-sm font-medium text-[#A6AFBF] hover:text-[#F2F5FA] transition-colors duration-200"
            >
              Map
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
