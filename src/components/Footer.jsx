export default function Footer() {
  return (
    <footer className="bg-black text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Noir Estates. All rights reserved.</p>
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
