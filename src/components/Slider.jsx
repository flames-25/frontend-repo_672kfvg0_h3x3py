import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop',
    title: 'Monochrome Minimalism',
    subtitle: 'Architectural purity and quiet luxury',
  },
  {
    src: 'https://images.unsplash.com/photo-1694401460964-5888971043f9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2hyb21lJTIwTWluaW1hbGlzbXxlbnwwfDB8fHwxNzYzMTMzODYwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Industrial Loft',
    subtitle: 'Volume, texture, and dramatic light',
  },
  {
    src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2000&auto=format&fit=crop',
    title: 'Coastal Glass',
    subtitle: 'Seamless indoor-outdoor living',
  },
  {
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000&auto=format&fit=crop',
    title: 'Penthouse Views',
    subtitle: 'Skyline panoramas and curated design',
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/60">Portfolio</p>
            <h2 className="font-serif text-3xl md:text-5xl">Signature Scenes</h2>
          </div>

          <div className="hidden md:flex gap-2">
            {slides.map((_, i) => (
              <span key={i} className={`h-[2px] w-10 ${i === index ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/7] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="max-w-xl">
              <h3 className="font-serif text-2xl md:text-4xl">{slides[index].title}</h3>
              <p className="mt-2 text-white/80">{slides[index].subtitle}</p>
            </div>

            <div className="mt-6 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 w-10 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
