import { useState } from "react";

type Photo = { src?: string; caption: string; rotation: number };

const placeholders: Photo[] = [
  { caption: "the very beginning", rotation: -6 },
  { caption: "our little world", rotation: 4 },
  { caption: "festivals & laughter", rotation: -3 },
  { caption: "every season together", rotation: 5 },
  { caption: "growing, always", rotation: -5 },
  { caption: "still you, still me", rotation: 3 },
];

export function PhotoGallery({ photos = placeholders }: { photos?: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="polaroid animate-pop-in text-left"
            style={
              {
                "--rot": `${p.rotation}deg`,
                transform: `rotate(${p.rotation}deg)`,
                animationDelay: `${i * 0.15}s`,
              } as React.CSSProperties
            }
          >
            <div className="aspect-square w-full bg-gradient-to-br from-marigold-soft via-marigold/40 to-crossandra/30 rounded-sm flex items-center justify-center overflow-hidden">
              {p.src ? (
                <img src={p.src} alt={p.caption} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center px-4">
                  <div className="font-stamp text-5xl text-crossandra-deep/70">photo</div>
                  <div className="font-script text-maroon/60 text-sm mt-1">add me here</div>
                </div>
              )}
            </div>
            <p className="font-script text-2xl text-maroon text-center mt-3">
              {p.caption}
            </p>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[80] bg-maroon/80 backdrop-blur-sm flex items-center justify-center p-6 animate-reveal-up"
        >
          <div className="polaroid max-w-lg w-full" style={{ transform: "rotate(0deg)" }}>
            <div className="aspect-square bg-gradient-to-br from-marigold-soft to-crossandra/40 rounded-sm flex items-center justify-center">
              {photos[open].src ? (
                <img src={photos[open].src} alt={photos[open].caption} className="w-full h-full object-cover" />
              ) : (
                <div className="font-stamp text-7xl text-crossandra-deep/60">memory</div>
              )}
            </div>
            <p className="font-script text-3xl text-maroon text-center mt-3">{photos[open].caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
