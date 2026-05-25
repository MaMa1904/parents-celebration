import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CurtainReveal } from "@/components/CurtainReveal";
import { Confetti, FloatingPetals } from "@/components/Confetti";
import { PhotoGallery } from "@/components/PhotoGallery";
import garland from "@/assets/garland.png";
import wedding2003 from "@/assets/wedding-2003.jpg";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";
import memory6 from "@/assets/memory-6.jpg";

const memoryPhotos = [
  { src: memory1, caption: "the very beginning", rotation: -6 },
  { src: memory2, caption: "our little world", rotation: 4 },
  { src: memory5, caption: "still you, still me", rotation: -3 },
  { src: memory3, caption: "temple trips together", rotation: 5 },
  { src: memory4, caption: "three of us, always", rotation: -5 },
  { src: memory6, caption: "wherever, together", rotation: 3 },
];
import flowerFrame from "@/assets/flower-frame.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "23 Years of Maa & Paa — A Love That Bloomed" },
      {
        name: "description",
        content:
          "A celebration of Maa & Paa's 23rd wedding anniversary on May 25 — twenty-three years of love, laughter, and home.",
      },
    ],
  }),
  component: Index,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, vis };
}

function Index() {
  const [revealed, setRevealed] = useState(false);
  const [boom, setBoom] = useState(false);

  const story = useReveal<HTMLDivElement>();
  const gallery = useReveal<HTMLDivElement>();
  const wish = useReveal<HTMLDivElement>();

  return (
    <main className="relative min-h-screen overflow-hidden paper-texture">
      <CurtainReveal onDone={() => setRevealed(true)} />
      {revealed && <FloatingPetals />}
      {boom && <Confetti count={120} />}

      {/* TOP GARLAND */}
      <img
        src={garland}
        alt=""
        width={1536}
        height={512}
        className="absolute top-0 left-0 w-full pointer-events-none select-none animate-sway origin-top z-10"
      />

      {/* HERO */}
      <section className="relative pt-40 md:pt-52 pb-24 px-6 text-center max-w-5xl mx-auto">
        {revealed && (
          <>
            <p className="font-script text-3xl md:text-4xl text-crossandra animate-reveal-up">
              with all my love, this day belongs to
            </p>
            <h1
              className="font-display font-black text-7xl md:text-9xl leading-[0.95] mt-4 animate-reveal-up shimmer-text"
              style={{ animationDelay: "0.2s" }}
            >
              Maa <span className="font-script italic font-normal text-crossandra-deep">&</span> Paa
            </h1>
            <div
              className="mt-8 inline-flex items-center gap-4 animate-reveal-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="h-px w-12 bg-maroon/40" />
              <p className="font-stamp tracking-[0.4em] text-maroon text-lg md:text-xl">
                23 · YEARS · OF · US
              </p>
              <span className="h-px w-12 bg-maroon/40" />
            </div>
            <p
              className="font-romance italic text-2xl md:text-3xl text-maroon/80 mt-6 max-w-2xl mx-auto animate-reveal-up"
              style={{ animationDelay: "0.6s" }}
            >
              "Twenty-three monsoons, twenty-three summers, and a love that
              keeps blooming like the crossandra at our doorstep."
            </p>
            <p
              className="font-script text-2xl text-crossandra mt-6 animate-reveal-up"
              style={{ animationDelay: "0.8s" }}
            >
              — 25th of May —
            </p>

            <button
              onClick={() => {
                setBoom(true);
                setTimeout(() => setBoom(false), 6000);
              }}
              className="mt-10 group relative inline-flex items-center gap-3 bg-crossandra hover:bg-crossandra-deep transition-colors text-cream px-8 py-4 rounded-full font-stamp tracking-[0.25em] text-lg shadow-[var(--shadow-petal)] animate-pulse-glow animate-reveal-up"
              style={{ animationDelay: "1s" }}
            >
              <span>🎉 SHOWER THEM WITH LOVE</span>
            </button>
          </>
        )}
      </section>

      {/* MARQUEE BAND */}
      <section className="relative bg-crossandra-deep py-6 overflow-hidden border-y-4 border-marigold">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 px-4 shrink-0">
              {[
                "happy 23rd anniversary",
                "maa + paa = forever",
                "the love story that raised us",
                "23 years · still glowing",
                "you are our favourite pair",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span className="font-display italic text-cream text-3xl md:text-5xl">
                    {t}
                  </span>
                  <span className="text-marigold text-4xl">✿</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-24 px-6 max-w-4xl mx-auto" ref={story.ref}>
        <div className={story.vis ? "animate-reveal-up" : "opacity-0"}>
          <p className="font-stamp tracking-[0.4em] text-crossandra text-center text-sm">
            · OUR FAVOURITE STORY ·
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-center text-maroon mt-4">
            Two hearts,
            <br />
            <span className="font-script text-crossandra-deep text-6xl md:text-8xl italic">
              one home
            </span>
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-[460px] mx-auto">
              {/* photo inside the frame */}
              <div className="absolute inset-[14%] overflow-hidden rounded-full shadow-[var(--shadow-frame)]">
                <img
                  src={wedding2003}
                  alt="Maa & Paa on their wedding day, 2003"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* decorative flower frame overlay */}
              <img
                src={flowerFrame}
                alt=""
                width={1024}
                height={1024}
                loading="lazy"
                className="relative w-full h-full pointer-events-none select-none drop-shadow-[0_8px_20px_rgba(120,40,20,0.25)]"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-marigold text-maroon font-stamp tracking-widest text-sm px-5 py-3 rounded-full shadow-md">
                EST. 2003
              </div>
            </div>
            <div className="space-y-5 font-romance text-xl md:text-2xl text-ink/85 leading-relaxed">
              <p>
                It began on a May morning — promises whispered, garlands
                exchanged, and a future neither of you could yet imagine.
              </p>
              <p>
                Twenty-three years later, that same love walks through this
                house every single day. It cooks our meals, packs our bags,
                fixes our broken things, and tucks us in.
              </p>
              <p className="font-script text-3xl text-crossandra-deep">
                You didn't just build a marriage. You built us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES STRIP */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-marigold-soft/40 to-transparent">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "23", l: "years strong" },
            { n: "8395", l: "shared sunrises" },
            { n: "∞", l: "cups of coffee" },
            { n: "1", l: "forever love" },
          ].map((m, i) => (
            <div
              key={i}
              className="animate-reveal-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-stamp text-6xl md:text-7xl shimmer-text leading-none">
                {m.n}
              </div>
              <div className="font-script text-2xl text-maroon mt-2">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-24 px-6 max-w-6xl mx-auto" ref={gallery.ref}>
        <div className={gallery.vis ? "" : "opacity-0"}>
          <div className="text-center mb-14">
            <p className="font-stamp tracking-[0.4em] text-crossandra text-sm">· MOMENTS, FRAMED ·</p>
            <h2 className="font-display text-5xl md:text-7xl text-maroon mt-3">
              <span className="font-script italic text-crossandra-deep">a few</span> memories
            </h2>
            <p className="font-romance italic text-xl text-ink/70 mt-4 max-w-xl mx-auto">
              Twenty-three years, captured in little frames. Tap any one.
            </p>
          </div>
          {gallery.vis && <PhotoGallery photos={memoryPhotos} />}
        </div>
      </section>

      {/* WISH */}
      <section
        className="relative py-28 px-6 text-center max-w-3xl mx-auto"
        ref={wish.ref}
      >
        <div className={wish.vis ? "animate-reveal-up" : "opacity-0"}>
          <p className="font-stamp tracking-[0.4em] text-crossandra text-sm">
            · FROM US, TO YOU ·
          </p>
          <blockquote className="font-display italic text-3xl md:text-5xl text-maroon leading-snug mt-6">
            "Thank you for the love you gave me without ever counting it,
            <br />
            <span className="font-script not-italic text-crossandra-deep text-4xl md:text-6xl">
              and for being my first idea of home."
            </span>
          </blockquote>
          <div className="mt-12 inline-block">
            <div className="font-script text-3xl text-ink">
              with all my love,
            </div>
            <div className="font-display text-4xl md:text-5xl text-crossandra-deep mt-2">
              your child ♡
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER GARLAND */}
      <div className="relative h-24 mt-10">
        <img
          src={garland}
          alt=""
          width={1536}
          height={512}
          loading="lazy"
          className="absolute bottom-0 left-0 w-full rotate-180 pointer-events-none animate-sway origin-bottom"
        />
      </div>
      <footer className="text-center pb-8 pt-4 font-script text-maroon/70 text-xl">
        25 · May · {new Date().getFullYear()} — happy 23rd anniversary
      </footer>
    </main>
  );
}
