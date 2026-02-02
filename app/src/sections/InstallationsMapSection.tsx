import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function InstallationsMapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE phase (0% - 30%)
      scrollTl
        .fromTo(
          headlineRef.current,
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          subheadlineRef.current,
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.06
        )
        .fromTo(
          imageRef.current,
          { x: '60vw', opacity: 0, scale: 1.04 },
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0
        )
        .fromTo(
          imageFrameRef.current,
          { opacity: 0 },
          { opacity: 1, ease: 'none' },
          0.1
        )
        .fromTo(
          panelRef.current,
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.1
        )
        .fromTo(
          thumbnailsRef.current?.children || [],
          { x: '20vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none', stagger: 0.02 },
          0.12
        )
        .fromTo(
          microLabelRef.current,
          { y: '10vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.18
        );

      // SETTLE phase (30% - 70%) - elements hold position

      // EXIT phase (70% - 100%)
      scrollTl
        .fromTo(
          headlineRef.current,
          { y: 0, opacity: 1 },
          { y: '-18vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          subheadlineRef.current,
          { y: 0, opacity: 1 },
          { y: '-12vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          imageRef.current,
          { x: 0, scale: 1, opacity: 1 },
          { x: '-10vw', scale: 0.98, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          imageFrameRef.current,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.75
        )
        .fromTo(
          panelRef.current,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          thumbnailsRef.current?.children || [],
          { y: 0, opacity: 1 },
          { y: '8vh', opacity: 0, ease: 'power2.in', stagger: 0.02 },
          0.74
        )
        .fromTo(
          microLabelRef.current,
          { y: 0, opacity: 1 },
          { y: '-8vh', opacity: 0, ease: 'power2.in' },
          0.76
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="map"
      className="section-pinned bg-primary z-30"
    >
      {/* Vertical Micro Label (left edge) */}
      <span
        ref={microLabelRef}
        className="micro-label vertical-text vertical-text-left absolute left-[1.6vw] top-[18vh]"
      >
        FIELD REFERENCE • AGGREGATED
      </span>

      {/* Headline (left, top) */}
      <h2
        ref={headlineRef}
        className="font-display font-bold text-primary absolute left-[6vw] top-[12vh] max-w-[40vw]"
        style={{
          fontSize: 'clamp(44px, 5vw, 76px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
        }}
      >
        Installations Map
      </h2>

      {/* Subheadline (left, under headline) */}
      <p
        ref={subheadlineRef}
        className="absolute left-[6vw] top-[26vh] max-w-[34vw] text-secondary text-base leading-relaxed"
      >
        City/cluster view of where machines are running. Aggregated. No customer names.
      </p>

      {/* Hero Image (right block) */}
      <div
        ref={imageFrameRef}
        className="absolute"
        style={{
          left: '51.6vw',
          top: '9.6vh',
          width: '42.8vw',
          height: '56.8vh',
        }}
      >
        <div
          ref={imageRef}
          className="image-frame w-full h-full overflow-hidden"
        >
          <img
            src="/hero_map_01.jpg"
            alt="Installations Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom-left info panel */}
      <div
        ref={panelRef}
        className="absolute bg-panel border border-[rgba(242,245,250,0.12)] p-6"
        style={{
          left: '6vw',
          top: '72vh',
          width: '34vw',
          height: '18vh',
        }}
      >
        <h3 className="font-display font-semibold text-lg text-primary mb-2">
          21 Installations
        </h3>
        <p className="font-mono text-xs text-secondary mb-4">
          Regions: 6 • Last updated: 2 days ago
        </p>
        <button className="btn-outline-accent text-xs">
          Open map view
          <ArrowRight className="ml-2 w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom-right thumbnail strip */}
      <div
        ref={thumbnailsRef}
        className="absolute flex gap-[1vw]"
        style={{
          left: '52vw',
          top: '72vh',
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group cursor-pointer overflow-hidden border border-[rgba(242,245,250,0.12)] transition-all duration-250 hover:-translate-y-1"
            style={{ width: '12vw', height: '10vh' }}
          >
            <img
              src={`/thumb_region_0${i}.jpg`}
              alt={`Region ${i}`}
              className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-[1.03]"
            />
          </div>
        ))}
        <span className="absolute -bottom-6 left-0 micro-label">Explore by region</span>
      </div>
    </section>
  );
}
