import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Filter, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Machine {
  id: number;
  name: string;
  type: string;
  brand: string;
  availability: string;
  image: string;
}

const machines: Machine[] = [
  { id: 1, name: 'Sealer X-200', type: 'Sealer', brand: 'Alpha', availability: 'In stock', image: '/machine_card_01.jpg' },
  { id: 2, name: 'Filler Y-80', type: 'Filler', brand: 'Beta', availability: '2–3 weeks', image: '/machine_card_02.jpg' },
  { id: 3, name: 'Labeler Z-5', type: 'Labeler', brand: 'Gamma', availability: 'In stock', image: '/machine_card_03.jpg' },
  { id: 4, name: 'Capper C-100', type: 'Capper', brand: 'Delta', availability: 'In stock', image: '/machine_card_04.jpg' },
  { id: 5, name: 'Checkweigher W-50', type: 'Checkweigher', brand: 'Epsilon', availability: '1 week', image: '/machine_card_05.jpg' },
  { id: 6, name: 'Case Packer P-300', type: 'Case Packer', brand: 'Zeta', availability: 'In stock', image: '/machine_card_06.jpg' },
];

export function BrowseMachinesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [filterType, setFilterType] = useState('All');

  const filteredMachines = filterType === 'All' 
    ? machines 
    : machines.filter(m => m.type === filterType);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Filter bar animation
      gsap.fromTo(
        filterRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: filterRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards staggered animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const types = ['All', 'Sealer', 'Filler', 'Labeler', 'Capper', 'Checkweigher', 'Case Packer'];

  return (
    <section
      ref={sectionRef}
      id="machines"
      className="bg-primary z-40 py-[6vh] px-[4vw] min-h-screen"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-8">
        <h2
          className="font-display font-bold text-primary mb-3"
          style={{
            fontSize: 'clamp(28px, 2.8vw, 40px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}
        >
          Browse Machines
        </h2>
        <p className="text-secondary text-base max-w-md">
          Filter by type, brand, and availability.
        </p>
      </div>

      {/* Filter Bar */}
      <div
        ref={filterRef}
        className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-[rgba(242,245,250,0.12)]"
      >
        <div className="flex items-center gap-2 text-secondary">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filter:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                filterType === type
                  ? 'bg-[#3AA3FF] text-[#0B0C0F]'
                  : 'border border-[rgba(242,245,250,0.12)] text-secondary hover:text-primary hover:border-[rgba(242,245,250,0.25)]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2 px-4 py-2 border border-[rgba(242,245,250,0.12)] bg-[rgba(20,23,28,0.6)]">
          <Search className="w-4 h-4 text-secondary" />
          <input
            type="text"
            placeholder="Search machines..."
            className="bg-transparent text-sm text-primary placeholder:text-secondary outline-none w-40"
          />
        </div>
      </div>

      {/* Results Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredMachines.map((machine) => (
          <div
            key={machine.id}
            className="group bg-panel border border-[rgba(242,245,250,0.12)] overflow-hidden transition-all duration-250 hover:-translate-y-1.5 hover:border-[rgba(242,245,250,0.2)]"
          >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-primary">
                  {machine.name}
                </h3>
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${
                    machine.availability === 'In stock'
                      ? 'bg-[#3AA3FF]/20 text-[#3AA3FF]'
                      : 'bg-[rgba(166,175,191,0.15)] text-secondary'
                  }`}
                >
                  {machine.availability}
                </span>
              </div>
              <p className="font-mono text-xs text-secondary mb-4">
                Type: {machine.type} • Brand: {machine.brand}
              </p>
              <div className="flex gap-3">
                <button className="flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors duration-200">
                  View specs
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors duration-200">
                  Check stock
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
