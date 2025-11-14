import { motion } from 'framer-motion';

const listings = [
  {
    title: 'Skyline Penthouse',
    location: 'Downtown, Manhattan',
    price: '$7,950,000',
    img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Modern Loft Residence',
    location: 'SoMa, San Francisco',
    price: '$3,280,000',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Coastal Glass Villa',
    location: 'La Jolla, San Diego',
    price: '$5,420,000',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="listings" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-5xl">Featured Listings</h2>
          <a href="#" className="text-sm uppercase tracking-widest text-white/70 hover:text-white">View all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/70">{item.location}</p>
                    <h3 className="mt-1 font-serif text-2xl">{item.title}</h3>
                  </div>
                  <span className="rounded-full bg-white text-black px-3 py-1 text-xs font-semibold">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
