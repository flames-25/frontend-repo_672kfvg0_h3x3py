import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-white/70">Luxury Real Estate</p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[1.05]">
            Elevated Living in the Heart of the City
          </h1>
          <p className="mt-6 text-white/80 max-w-xl">
            Bespoke residences, curated for discerning buyers. Discover refined spaces with breathtaking views, premium finishes, and seamless service.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#listings" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Explore Listings</a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors">Book a Private Tour</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
