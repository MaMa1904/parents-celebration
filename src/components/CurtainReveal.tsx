import { useEffect, useState } from "react";

export function CurtainReveal({ onDone }: { onDone?: () => void }) {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOpen(true), 600);
    const t2 = setTimeout(() => { setGone(true); onDone?.(); }, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  if (gone) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div
        className={`absolute inset-y-0 left-0 w-1/2 ${open ? "animate-curtain-left" : ""}`}
        style={{
          background:
            "repeating-linear-gradient(90deg, oklch(0.42 0.18 28) 0, oklch(0.32 0.14 25) 20px, oklch(0.45 0.19 30) 40px)",
          boxShadow: "inset -30px 0 60px rgba(0,0,0,0.5)",
        }}
      >
        <div className="absolute top-0 right-0 h-6 w-full bg-[oklch(0.74_0.13_80)] shadow-lg" />
      </div>
      <div
        className={`absolute inset-y-0 right-0 w-1/2 ${open ? "animate-curtain-right" : ""}`}
        style={{
          background:
            "repeating-linear-gradient(90deg, oklch(0.42 0.18 28) 0, oklch(0.32 0.14 25) 20px, oklch(0.45 0.19 30) 40px)",
          boxShadow: "inset 30px 0 60px rgba(0,0,0,0.5)",
        }}
      >
        <div className="absolute top-0 left-0 h-6 w-full bg-[oklch(0.74_0.13_80)] shadow-lg" />
      </div>
      {!open && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-script text-5xl md:text-7xl text-[oklch(0.95_0.05_80)] animate-pulse">
            ...a special moment awaits
          </p>
        </div>
      )}
    </div>
  );
}
