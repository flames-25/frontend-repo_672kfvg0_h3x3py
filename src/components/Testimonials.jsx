import { motion } from 'framer-motion';

const quotes = [
  {
    body: 'Seamless from start to finish. We secured our penthouse at asking with terms that exceeded expectations.',
    author: 'A. Morgan',
  },
  {
    body: 'Marketing was impeccable—cinematic listing film, editorial photos, and a flawless private showing experience.',
    author: 'L. Chen',
  },
  {
    body: 'Truly concierge-level service. Every detail was anticipated and handled with elegance.',
    author: 'R. Patel',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-5xl">Client Words</h2>
          <p className="mt-4 text-white/70 max-w-2xl">Testimonials from discerning clients who value discretion, design, and precision.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            >
              <p className="text-white/90">“{q.body}”</p>
              <footer className="mt-4 text-sm text-white/60">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
