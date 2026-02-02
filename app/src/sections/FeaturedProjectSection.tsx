import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjectSection() {
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
          { x: '50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          subheadlineRef.current,
          { x: '50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.06
        )
        .fromTo(
          imageRef.current,
          { x: '-60vw', opacity: 0, scale: 1.04 },
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
          { x: '-20vw', opacity: 0 },
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
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          subheadlineRef.current,
          { x: 0, opacity: 1 },
          { x: '-14vw', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          imageRef.current,
          { x: 0, scale: 1, opacity: 1 },
          { x: '10vw', scale: 0.98, opacity: 0, ease: 'power2.in' },
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
      id="projects"
      className="section-pinned bg-primary z-20"
    >
      {/* Vertical Micro Label (right edge) */}
      <span
        ref={microLabelRef}
        className="micro-label vertical-text absolute right-[1.6vw] top-[18vh]"
      >
        PROJECT LIBRARY • TURNKEY
      </span>

      {/* Hero Image (left block) */}
      <div
        ref={imageFrameRef}
        className="absolute"
        style={{
          left: '5.6vw',
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
            src="/hero_project_01.jpg"
            alt="Featured Project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Headline (right, top) */}
      <h2
        ref={headlineRef}
        className="font-display font-bold text-primary absolute right-[6vw] top-[12vh] max-w-[40vw] text-right"
        style={{
          fontSize: 'clamp(44px, 5vw, 76px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
        }}
      >
        Featured Project
      </h2>

      {/* Subheadline (right, under headline) */}
      <p
        ref={subheadlineRef}
        className="absolute right-[6vw] top-[26vh] max-w-[36vw] text-secondary text-base leading-relaxed text-right"
      >
        End-to-end line configuration—step-wise specs, video, and equivalents.
      </p>

      {/* Bottom-right info panel */}
      <div
        ref={panelRef}
        className="absolute bg-panel border border-[rgba(242,245,250,0.12)] p-6"
        style={{
          right: '6vw',
          top: '72vh',
          width: '34vw',
          height: '18vh',
        }}
      >
        <h3 className="font-display font-semibold text-lg text-primary mb-2">
          Line: Pouch + Carton
        </h3>
        <p className="font-mono text-xs text-secondary mb-4">
          Output: 90/min • Footprint: 12m
        </p>
        <button className="btn-outline-accent text-xs">
          Open project page
          <ArrowRight className="ml-2 w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom-left thumbnail strip */}
      <div
        ref={thumbnailsRef}
        className="absolute flex gap-[1vw]"
        style={{
          left: '6vw',
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
              src={`/thumb_project_0${i}.jpg`}
              alt={`Project detail ${i}`}
              className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-[1.03]"
            />
          </div>
        ))}
        <span className="absolute -bottom-6 left-0 micro-label">More in Projects</span>
      </div>
    </section>
  );
}
