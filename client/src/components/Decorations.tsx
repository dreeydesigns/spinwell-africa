// Juicy Playground — Decorative elements: blobs, splashes, fruit wheels, sticker badges
import React, { type ReactNode } from "react";

/** Large organic blob shape — use as background accent in cream sections */
export function OrgBlob({ color = "#EC2F5D", opacity = 0.08, className = "" }: { color?: string; opacity?: number; className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ opacity }}>
      <svg viewBox="0 0 600 600" fill={color} className="w-full h-full">
        <path d="M421.9,116.5c56.2,42.3,99.4,107.4,97.7,170.1c-1.7,62.7-48.3,122.9-104.5,162.3c-56.2,39.4-122,58-185.9,49.7c-63.9-8.3-125.9-43.5-161.4-98.1C32.3,345.9,23.3,271.9,42.6,210.3c19.3-61.6,67-110.8,122.5-137.8C220.6,45.5,283.9,5.5,339.5,18.4C395.1,31.3,365.7,74.2,421.9,116.5z" />
      </svg>
    </div>
  );
}

/** Juice splash SVG — section transition decoration */
export function JuiceSplash({ color = "#F5871F", className = "" }: { color?: string; className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg viewBox="0 0 200 200" fill={color} className="w-full h-full" style={{ opacity: 0.15 }}>
        <path d="M100,10 Q130,30 120,60 Q140,50 150,80 Q170,70 160,100 Q180,110 160,130 Q170,150 140,150 Q150,170 120,160 Q110,180 90,160 Q70,170 60,150 Q40,160 40,130 Q20,120 40,100 Q20,80 50,80 Q40,50 70,60 Q60,30 100,10 Z" />
      </svg>
    </div>
  );
}

/** Fruit wheel motif — spinning watermelon/orange slice */
export function FruitWheel({ size = 120, type = "watermelon", className = "" }: { size?: number; type?: "watermelon" | "orange"; className?: string }) {
  const colors = type === "watermelon"
    ? { outer: "#3FA34D", inner: "#EC2F5D", seeds: "#231436" }
    : { outer: "#F5871F", inner: "#FFC93C", segments: "#F5871F" };

  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size, animation: "spin-slow 25s linear infinite" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill={colors.outer} opacity="0.3" />
        <circle cx="50" cy="50" r="42" fill={colors.inner} opacity="0.25" />
        {type === "watermelon" ? (
          <>
            {[20, 35, 50, 65, 80].map((x) =>
              [30, 50, 70].map((y) => (
                <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="2" ry="3" fill={colors.seeds} opacity="0.2" transform={`rotate(${Math.random() * 30 - 15} ${x} ${y})`} />
              ))
            )}
          </>
        ) : (
          <>
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <line key={angle} x1="50" y1="50" x2={50 + 40 * Math.cos((angle * Math.PI) / 180)} y2={50 + 40 * Math.sin((angle * Math.PI) / 180)} stroke={colors.outer} strokeWidth="1" opacity="0.2" />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}

/** Sticker badge — playful label with slight rotation */
export function StickerBadge({ children, color = "#EC2F5D", textColor = "white", rotate = -3, className = "" }: { children: ReactNode; color?: string; textColor?: string; rotate?: number; className?: string }) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full font-display font-bold text-sm shadow-lg ${className}`}
      style={{ backgroundColor: color, color: textColor, transform: `rotate(${rotate}deg)`, boxShadow: `0 4px 15px ${color}40` }}
    >
      {children}
    </span>
  );
}

/** Color band — a full-width colored strip with optional pattern */
export function ColorBand({ color, children, className = "", style }: { color: string; children?: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: color, ...style }}>
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
      {children}
    </div>
  );
}
