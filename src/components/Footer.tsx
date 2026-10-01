import { Zap } from 'lucide-react';

const Footer = () => {
  const columns = [
    {
      links: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
    },
    {
      links: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
    },
    {
      links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
    },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-16">

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="relative">
                <Zap size={26} className="text-[#C6F135] fill-[#C6F135]" />
              </div>
              <span className="text-[20px] font-bold text-[#0B1437] tracking-tight">
                ByteSpace
              </span>
            </div>

            <p className="text-[13px] text-[#475569] mb-8 leading-relaxed max-w-[420px]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex items-center gap-3 max-w-[420px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border border-[#E2E8F0] rounded-full px-5 py-3 text-[13px] text-[#0B1437] placeholder:text-[#94A3B8] outline-none focus:border-[#1B4DFF] transition"
              />
              <button className="bg-[#C6F135] text-[#0B1437] px-7 py-3 rounded-full text-[13px] font-bold hover:bg-[#B4E02A] transition whitespace-nowrap">
                Search
              </button>
            </div>

            <p className="text-[11px] text-[#94A3B8] mt-5 leading-relaxed max-w-[420px]">
              By subscribing, you agree to our{' '}
              <a href="#" className="underline hover:text-[#0B1437] transition">Privacy Policy</a> and consent to receive
              updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#475569] hover:text-[#1B4DFF] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#94A3B8]">
            @ 2023 ByteSpace, All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-[#94A3B8]">
            <a href="#" className="hover:text-[#0B1437] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#0B1437] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#0B1437] transition">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;