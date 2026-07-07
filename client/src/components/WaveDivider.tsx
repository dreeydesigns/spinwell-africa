// Juicy Playground — Organic wavy SVG dividers between sections
// Each divider fills the wave area with the DESTINATION section's colour

interface WaveDividerProps {
  color?: string;
  position?: "top" | "bottom";
  className?: string;
}

export function WaveDivider({ color = "#FFF9F0", position = "bottom", className = "" }: WaveDividerProps) {
  if (position === "top") {
    return (
      <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px] block"
        >
          <path
            d="M0,120 L0,60 Q180,0 360,60 T720,60 T1080,60 T1440,60 L1440,120 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px] lg:h-[100px] block"
      >
        <path
          d="M0,0 L0,60 Q180,120 360,60 T720,60 T1080,60 T1440,60 L1440,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function BlobDivider({ color = "#FFF9F0", className = "" }: { color?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[90px] lg:h-[120px] block"
      >
        <path
          d="M0,0 C240,100 480,20 720,80 C960,140 1200,40 1440,80 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
