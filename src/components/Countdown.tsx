import { useEffect, useState } from "react";

// Anniversary date: May 25 (next occurrence)
function getNext() {
  const now = new Date();
  const year = now.getMonth() > 4 || (now.getMonth() === 4 && now.getDate() > 25)
    ? now.getFullYear() + 1
    : now.getFullYear();
  return new Date(year, 4, 25, 0, 0, 0);
}

export function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = getNext().getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setT({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const items = [
    { v: t.d, l: "days" },
    { v: t.h, l: "hours" },
    { v: t.m, l: "minutes" },
    { v: t.s, l: "seconds" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {items.map((it) => (
        <div
          key={it.l}
          className="bg-card border border-marigold/40 rounded-2xl px-5 md:px-8 py-4 md:py-6 min-w-[90px] md:min-w-[120px] text-center shadow-[var(--shadow-frame)]"
        >
          <div className="font-stamp text-4xl md:text-6xl text-crossandra-deep leading-none">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="font-script text-maroon/70 text-lg md:text-xl mt-1">
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}
