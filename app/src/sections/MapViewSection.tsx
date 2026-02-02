import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Region {
  name: string;
  count: number;
}

const regions: Region[] = [
  { name: 'North', count: 6 },
  { name: 'South', count: 5 },
  { name: 'East', count: 6 },
  { name: 'West', count: 4 },
];

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / (duration * 1000), 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(easeProgress * target));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function MapViewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Map block animation
      gsap.fromTo(
        mapRef.current,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      const contentChildren = contentRef.current?.children;
      if (contentChildren) {
        gsap.fromTo(
          contentChildren,
          { x: '6vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Footer animation
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-primary z-[60] py-[6vh] px-[4vw] min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4vw] items-start">
        {/* Map Block */}
        <div
          ref={mapRef}
          className="relative"
        >
          <div className="image-frame aspect-[4/3] overflow-hidden">
            <img
              src="/hero_map_01.jpg"
              alt="Installations Map"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Map overlay info */}
          <div className="absolute bottom-4 left-4 right-4 bg-[rgba(11,12,15,0.9)] backdrop-blur-sm border border-[rgba(242,245,250,0.12)] p-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                21 Active Installations
              </span>
            </div>
            <div className="h-1 w-full bg-[rgba(242,245,250,0.12)] overflow-hidden">
              <div className="h-full w-3/4 bg-accent" />
            </div>
          </div>
        </div>

        {/* Content Block */}
        <div ref={contentRef} className="lg:pt-8">
          <h2
            className="font-display font-bold text-primary mb-4"
            style={{
              fontSize: 'clamp(28px, 2.8vw, 40px)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Map View
          </h2>
          
          <p className="text-secondary text-base leading-relaxed mb-8 max-w-md">
            Aggregated installation clusters by city. No customer-identifiable data.
          </p>

          {/* Regions List */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-panel border border-[rgba(242,245,250,0.12)] p-4 transition-all duration-200 hover:border-[rgba(242,245,250,0.2)]"
              >
                <span className="micro-label block mb-2">{region.name}</span>
                <span className="font-display font-bold text-2xl text-primary">
                  <CountUp target={region.count} />
                </span>
              </div>
            ))}
          </div>

          {/* Contact Note */}
          <div className="border-t border-[rgba(242,245,250,0.12)] pt-6 mb-6">
            <p className="text-secondary text-sm mb-4">
              Questions? Reach HQ Sales Ops.
            </p>
            <button className="btn-outline-accent text-sm">
              Request access
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="mt-16 pt-6 border-t border-[rgba(242,245,250,0.12)]"
      >
        <p className="font-mono text-xs text-secondary text-center">
          © HCA Internal Systems. Data is for authorized users only.
        </p>
      </div>
    </section>
  );
}
