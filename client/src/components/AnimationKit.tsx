// AnimationKit — Advanced scroll-driven animation primitives
import { useState, useEffect, useRef, useCallback, type ReactNode, type CSSProperties } from "react";

/* ─── Word-by-word reveal with blur ─── */
export function WordReveal({ text, className = "", tag: Tag = "h1", delay = 0 }: { text: string; className?: string; tag?: "h1" | "h2" | "h3" | "p" | "span"; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const words = text.split(" ");
  return (
    <Tag ref={ref as any} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span
            className="inline-block"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) rotateX(0)" : "translateY(100%) rotateX(-40deg)",
              filter: visible ? "blur(0px)" : "blur(6px)",
              transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 90}ms`,
              transformOrigin: "bottom center",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* ─── Character-by-character reveal ─── */
export function CharReveal({ text, className = "", delay = 0, stagger = 30 }: { text: string; className?: string; delay?: number; stagger?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.3)",
            filter: visible ? "blur(0px)" : "blur(4px)",
            transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms`,
            minWidth: char === " " ? "0.3em" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

/* ─── Scroll-linked parallax layer ─── */
export function ParallaxLayer({ children, speed = 0.3, className = "", style }: { children: ReactNode; speed?: number; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const center = rect.top + rect.height / 2 - window.innerHeight / 2;
            setY(center * speed * -1);
          }
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ ...style, transform: `translateY(${y}px)`, willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ─── Scroll-triggered reveal with multiple variants ─── */
type RevealVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleUp" | "rotateIn" | "blurIn" | "slideUp";
const VARIANT_STYLES: Record<RevealVariant, { from: CSSProperties; to: CSSProperties }> = {
  fadeUp: { from: { opacity: 0, transform: "translateY(60px)" }, to: { opacity: 1, transform: "translateY(0)" } },
  fadeDown: { from: { opacity: 0, transform: "translateY(-40px)" }, to: { opacity: 1, transform: "translateY(0)" } },
  fadeLeft: { from: { opacity: 0, transform: "translateX(-60px)" }, to: { opacity: 1, transform: "translateX(0)" } },
  fadeRight: { from: { opacity: 0, transform: "translateX(60px)" }, to: { opacity: 1, transform: "translateX(0)" } },
  scaleUp: { from: { opacity: 0, transform: "scale(0.85)" }, to: { opacity: 1, transform: "scale(1)" } },
  rotateIn: { from: { opacity: 0, transform: "rotate(-5deg) translateY(40px)" }, to: { opacity: 1, transform: "rotate(0) translateY(0)" } },
  blurIn: { from: { opacity: 0, filter: "blur(12px)", transform: "scale(0.95)" }, to: { opacity: 1, filter: "blur(0px)", transform: "scale(1)" } },
  slideUp: { from: { opacity: 0, transform: "translateY(100px)", filter: "blur(4px)" }, to: { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" } },
};

export function ScrollReveal({ children, variant = "fadeUp", delay = 0, duration = 800, className = "", style, threshold = 0.1 }: {
  children: ReactNode; variant?: RevealVariant; delay?: number; duration?: number; className?: string; style?: CSSProperties; threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const v = VARIANT_STYLES[variant];
  const current = visible ? v.to : v.from;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...current,
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Animated counter ─── */
export function CountUp({ end, suffix = "", prefix = "", duration = 2000, className = "" }: { end: number; suffix?: string; prefix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.unobserve(el); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    let start: number;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return <span ref={ref} className={className}>{prefix}{value.toLocaleString()}{suffix}</span>;
}

/* ─── Magnetic hover button ─── */
export function MagneticButton({ children, className = "", href, target, rel, onClick, style }: {
  children: ReactNode; className?: string; href?: string; target?: string; rel?: string; onClick?: () => void; style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);

  const commonProps = {
    ref: ref as any,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `inline-flex items-center gap-2 transition-transform duration-200 ${className}`,
    style: { ...style, transform: `translate(${pos.x}px, ${pos.y}px)` },
  };

  if (href) {
    return <a {...commonProps} href={href} target={target} rel={rel}>{children}</a>;
  }
  return <button {...commonProps} onClick={onClick}>{children}</button>;
}

/* ─── Staggered children reveal ─── */
export function StaggerChildren({ children, stagger = 100, className = "", variant = "fadeUp" }: {
  children: ReactNode; stagger?: number; className?: string; variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const v = VARIANT_STYLES[variant];

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => {
            const current = visible ? v.to : v.from;
            return (
              <div key={i} style={{ ...current, transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}ms`, willChange: "transform, opacity" }}>
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}

/* ─── Scroll progress indicator ─── */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1">
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #EC2F5D, #F5871F, #FFC93C, #3FA34D, #2FA8E0)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

/* ─── 3D Tilt Card with perspective ─── */
export function TiltCard3D({ children, className = "", style, intensity = 10 }: { children: ReactNode; className?: string; style?: CSSProperties; intensity?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateY(0) rotateX(0)");
  const [shadow, setShadow] = useState("0 8px 30px rgba(0,0,0,0.08)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.03)`);
    setShadow(`${-x * 25}px ${y * 25}px 50px rgba(0,0,0,0.15)`);
    setGlare({ x: (x + 0.5) * 100, y: (y + 0.5) * 100, opacity: 0.15 });
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(800px) rotateY(0) rotateX(0) scale(1)");
    setShadow("0 8px 30px rgba(0,0,0,0.08)");
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        ...style,
        transform,
        boxShadow: shadow,
        transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
          transition: "opacity 0.15s ease-out",
        }}
      />
    </div>
  );
}

/* ─── Horizontal scroll section ─── */
export function HorizontalScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    if (!container || !scroll) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollWidth = scroll.scrollWidth - container.clientWidth;
      const progress = Math.max(0, Math.min(1, -rect.top / (container.clientHeight - window.innerHeight)));
      scroll.style.transform = `translateX(${-progress * scrollWidth}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div ref={scrollRef} className="flex gap-6 px-8" style={{ willChange: "transform" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
