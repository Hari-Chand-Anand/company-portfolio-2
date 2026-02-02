import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);

  // Auto-play entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, x: 40, scale: 1.03 },
          { opacity: 1, x: 0, scale: 1, duration: 1 },
          '-=0.6'
        )
        .fromTo(
          imageFrameRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.5'
        )
        .fromTo(
          panelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          thumbnailsRef.current?.children || [],
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.06 },
          '-=0.4'
        )
        .fromTo(
          microLabelRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
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
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set([headlineRef.current, subheadlineRef.current, imageRef.current, imageFrameRef.current, panelRef.current, microLabelRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
            if (thumbnailsRef.current) {
              gsap.set(thumbnailsRef.current.children, { opacity: 1, x: 0, y: 0 });
            }
          },
        },
      });

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
          0.75
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-primary z-10"
    >
      {/* Vertical Micro Label (left edge) */}
      <span
        ref={microLabelRef}
        className="micro-label vertical-text vertical-text-left absolute left-[1.6vw] top-[18vh]"
      >
        SALES CATALOGUE • Q3 UPDATES
      </span>

      {/* Headline (left, top) */}
      <h1
        ref={headlineRef}
        className="font-display font-bold text-primary absolute left-[6vw] top-[12vh] max-w-[40vw]"
        style={{
          fontSize: 'clamp(44px, 5vw, 76px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
        }}
      >
        Featured Machine
      </h1>

      {/* Subheadline (left, under headline) */}
      <p
        ref={subheadlineRef}
        className="absolute left-[6vw] top-[26vh] max-w-[34vw] text-secondary text-base leading-relaxed"
      >
        High-throughput solution—live stock, specs, and equivalents.
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
            src="/hero_machine_01.jpg"
            alt="Featured Machine"
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
          Model X-4000
        </h3>
        <p className="font-mono text-xs text-secondary mb-4">
          Type: Sealer • Speed: 120/min
        </p>
        <button className="btn-outline-accent text-xs">
          Open machine page
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
              src={`/thumb_machine_0${i}.jpg`}
              alt={`Machine detail ${i}`}
              className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-[1.03]"
            />
          </div>
        ))}
        <span className="absolute -bottom-6 left-0 micro-label">More in Machines</span>
      </div>
    </section>
  );
}
