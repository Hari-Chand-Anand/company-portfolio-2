import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  name: string;
  steps: string;
  output: string;
  footprint: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Pouch + Carton Line',
    steps: 'Sealer → Filler → Cartoner',
    output: '90/min',
    footprint: '12m',
    description: 'Complete turnkey solution for pouch packaging with automatic carton integration.',
  },
  {
    id: 2,
    name: 'Bottle + Label Line',
    steps: 'Filler → Capper → Labeler',
    output: '120/min',
    footprint: '10m',
    description: 'High-speed bottling line with integrated capping and labeling systems.',
  },
  {
    id: 3,
    name: 'Sachet + Case Line',
    steps: 'Sachet → Check → Case packer',
    output: '140/min',
    footprint: '14m',
    description: 'Precision sachet production with quality control and case packing.',
  },
];

export function BrowseProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Line draw animation
      gsap.fromTo(
        lineRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 85%',
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
            stagger: 0.1,
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

  return (
    <section
      ref={sectionRef}
      className="bg-primary z-50 py-[6vh] px-[4vw] min-h-screen"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-6">
        <h2
          className="font-display font-bold text-primary mb-3"
          style={{
            fontSize: 'clamp(28px, 2.8vw, 40px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}
        >
          Browse Projects
        </h2>
        <p className="text-secondary text-base max-w-md">
          Compare turnkey lines by output and footprint.
        </p>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-[rgba(242,245,250,0.12)] mb-8 relative overflow-hidden">
        <div ref={lineRef} className="absolute inset-y-0 left-0 bg-[#3AA3FF]" style={{ width: '0%' }} />
      </div>

      {/* Projects Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-panel border border-[rgba(242,245,250,0.12)] p-6 transition-all duration-250 hover:-translate-y-1.5 hover:border-[rgba(242,245,250,0.2)]"
          >
            {/* Title */}
            <h3 className="font-display font-semibold text-lg text-primary mb-2">
              {project.name}
            </h3>
            
            {/* Steps */}
            <p className="font-mono text-xs text-accent mb-4">
              {project.steps}
            </p>
            
            {/* Description */}
            <p className="text-sm text-secondary mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* Specs */}
            <div className="flex gap-6 mb-6 pb-6 border-b border-[rgba(242,245,250,0.12)]">
              <div>
                <span className="micro-label block mb-1">Output</span>
                <span className="font-display font-semibold text-primary">{project.output}</span>
              </div>
              <div>
                <span className="micro-label block mb-1">Footprint</span>
                <span className="font-display font-semibold text-primary">{project.footprint}</span>
              </div>
            </div>
            
            {/* CTA */}
            <button className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors duration-200 group/btn">
              View line
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
