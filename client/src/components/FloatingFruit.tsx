// Floating fruit particles — decorative elements that bob and float
const FRUITS = ["🍓", "🍊", "🍋", "🥝", "🍌", "🫐", "🍉", "🥭"];

interface FloatingFruitProps {
  count?: number;
  className?: string;
}

export default function FloatingFruit({ count = 6, className = "" }: FloatingFruitProps) {
  const items = Array.from({ length: count }, (_, i) => ({
    fruit: FRUITS[i % FRUITS.length],
    left: `${10 + (i * 80) / count + Math.random() * 10}%`,
    top: `${10 + Math.random() * 70}%`,
    delay: `${i * 0.7}s`,
    duration: `${4 + Math.random() * 3}s`,
    size: 20 + Math.random() * 16,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute select-none"
          style={{
            left: item.left,
            top: item.top,
            fontSize: `${item.size}px`,
            animation: `${i % 2 === 0 ? "float" : "floatReverse"} ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
            opacity: 0.6,
          }}
        >
          {item.fruit}
        </span>
      ))}
    </div>
  );
}
