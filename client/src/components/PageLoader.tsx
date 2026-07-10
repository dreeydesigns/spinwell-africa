// Cinematic page loader — fruit-themed with progress bar and staggered exit
import { useState, useEffect } from "react";

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    let raf: number;
    let start: number;
    const duration = 2200;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased * 100);

      if (p < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setPhase("exit");
        setTimeout(onComplete, 800);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#231436]"
      style={{
        opacity: phase === "exit" ? 0 : 1,
        transform: phase === "exit" ? "scale(1.1)" : "scale(1)",
        transition: "opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <div className="relative w-28 h-28 mb-8">
        {/* Bike only */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: "loaderPulse 1.5s ease-in-out infinite",
          }}
        >
          <span className="text-5xl">🚲</span>
        </div>
      </div>

      {/* Brand name with character reveal */}
      <div className="flex items-center gap-1 mb-6">
        {"spinwell".split("").map((char, i) => (
          <span
            key={i}
            className="font-display font-bold text-3xl text-white inline-block"
            style={{
              opacity: progress > (i / 8) * 100 ? 1 : 0,
              transform: progress > (i / 8) * 100 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.5)",
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #EC2F5D, #F5871F, #FFC93C, #3FA34D)",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className="text-white/40 text-sm mt-4 font-medium"
        style={{
          opacity: progress > 30 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        Pedal-powered experiences across Africa
      </p>
    </div>
  );
}
