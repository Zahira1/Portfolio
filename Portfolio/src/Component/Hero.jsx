import { useEffect, useRef, useState } from 'react';

const STATS = [
  { label: 'years experience', value: 4, suffix: '+' },
  { label: 'organizations', value: 5, suffix: '' },
  { label: 'publications', value: 3, suffix: '' },
];

const useCountUp = (target, durationMs = 1200) => {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / durationMs, 1);
          setValue(Math.round(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return [value, elementRef];
};

const Stat = ({ label, value, suffix }) => {
  const [count, ref] = useCountUp(value);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <dd className="font-mono text-3xl sm:text-4xl font-bold text-cyan-300">
        {count}
        {suffix}
      </dd>
      <dt className="text-xs sm:text-sm text-gray-400 mt-1">{label}</dt>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="geo-grid relative overflow-hidden bg-[#0b1220] text-gray-100 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1220] via-transparent to-[#0b1220]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 max-w-4xl">
        <p className="font-mono text-cyan-400 text-sm mb-4 cursor-blink animate-fade-in-up">
          <span aria-hidden="true">&gt; </span>geospatial_developer.init()
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in-up [animation-delay:120ms]">
          Shraddha Sharma
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 animate-fade-in-up [animation-delay:240ms]">
          I build <span className="font-mono text-cyan-300">interactive web GIS applications</span> that
          turn complex spatial data into clear, decision-ready tools for policymakers, researchers, and
          the curious public.
        </p>

        <div className="flex flex-wrap gap-4 mb-14 animate-fade-in-up [animation-delay:360ms]">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md bg-cyan-500 text-[#0b1220] font-semibold text-sm transition-all duration-200 hover:bg-cyan-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md border border-cyan-500/40 text-cyan-200 font-semibold text-sm transition-all duration-200 hover:bg-cyan-500/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
          >
            Get in Touch
          </a>
        </div>

        <dl className="grid grid-cols-3 gap-6 max-w-md font-mono">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
