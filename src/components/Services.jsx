import { motion } from 'framer-motion';
import { Building2, KeyRound, ShieldCheck, Home } from 'lucide-react';

const items = [
  { icon: Home, title: 'Buyer Representation', desc: 'Tailored property discovery and expert negotiation for primary and secondary homes.' },
  { icon: KeyRound, title: 'Seller Representation', desc: 'Full-service listing strategy with staging, creative, and premium marketing assets.' },
  { icon: Building2, title: 'New Developments', desc: 'Advisory and placement for luxury developments and investment opportunities.' },
  { icon: ShieldCheck, title: 'Private Client Services', desc: 'Discreet, white-glove support for global UHNW clientele.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-5xl">Refined Services</h2>
          <p className="mt-4 text-white/70 max-w-2xl">A concierge approach to real estate—meticulous guidance from discovery to closing, designed for peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            >
              <it.icon className="text-white/80" />
              <h3 className="mt-4 font-serif text-xl">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
