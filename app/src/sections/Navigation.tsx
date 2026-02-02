import { useEffect, useState } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-[#0B0C0F]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-[4vw] py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-semibold tracking-tight text-primary">
            HCA
          </span>
          <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border border-[rgba(242,245,250,0.12)] text-secondary rounded-sm">
            Internal
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('machines')}
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            Machines
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('map')}
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            Map
          </button>
        </div>
      </div>
    </nav>
  );
}
