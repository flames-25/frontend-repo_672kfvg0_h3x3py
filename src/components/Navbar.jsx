import { Menu, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 text-white rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-xl tracking-wide"
            >
              Noir Estates
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {[
                ["Listings", "#listings"],
                ["Services", "#services"],
                ["Testimonials", "#testimonials"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors"
              >
                <Phone size={16} /> Book a Call
              </a>
              <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
