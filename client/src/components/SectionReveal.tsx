// Scroll-triggered reveal wrapper — fades up and scales in
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode, CSSProperties } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export default function SectionReveal({ children, className = "", delay = 0, style }: SectionRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
