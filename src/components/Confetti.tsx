import { useMemo } from "react";

const COLORS = ["#E85D1A", "#F5B700", "#C9572A", "#FFD56B", "#8B1E0F"];

export function Confetti({ count = 60 }: { count?: number }) {
  const bits = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 4,
        dur: 3 + Math.random() * 4,
        size: 6 + Math.random() * 10,
        color: COLORS[i % COLORS.length],
        rot: Math.random() * 360,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {bits.map((b, i) => (
        <span
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${b.left}%`,
            top: "-5vh",
            width: b.size,
            height: b.size * 0.4,
            background: b.color,
            transform: `rotate(${b.rot}deg)`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        dur: 12 + Math.random() * 10,
        size: 14 + Math.random() * 16,
        hue: i % 2 === 0 ? "#E85D1A" : "#F5B700",
      })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p, i) => (
        <svg
          key={i}
          className="absolute animate-float-up"
          viewBox="0 0 24 24"
          style={{
            left: `${p.left}%`,
            bottom: "-5vh",
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            opacity: 0.55,
          }}
        >
          <path
            d="M12 2 C 16 6, 16 10, 12 14 C 8 10, 8 6, 12 2 Z"
            fill={p.hue}
          />
        </svg>
      ))}
    </div>
  );
}
