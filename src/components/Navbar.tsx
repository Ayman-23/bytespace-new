import { Menu, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { label: 'Home', active: true },
    { label: 'Courses', dropdown: true },
    { label: 'Creator', dropdown: true },
  ];

  return (
    <nav className="w-full bg-[#1B4DFF] relative z-50">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15"></div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Zap size={26} className="text-[#C6F135] fill-[#C6F135]" />
          </div>
          <span className="text-[20px] font-bold text-white tracking-tight">
            ByteSpace
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`flex items-center gap-1 px-4 py-2 rounded-md transition ${
                link.active
                  ? 'text-white border border-white/60'
                  : 'text-white hover:text-[#C6F135]'
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={12} />}
            </a>
          ))}
        </div>

              <div className="hidden lg:flex items-center gap-6">
                  <Link to="/login" className="text-white text-[13px] font-medium hover:text-[#C6F135] transition">
                      Sign In
                  </Link>
                  <Link to="/register" className="text-white text-[13px] font-medium hover:text-[#C6F135] transition">
                      Join Us
                  </Link>
                  <button className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition">
                      <Menu size={16} />
                  </button>
              </div>

        <button className="lg:hidden text-white">
          <Menu size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;