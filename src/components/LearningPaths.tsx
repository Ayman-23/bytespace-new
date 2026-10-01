import { Palette, Code2, Monitor, Briefcase, Megaphone, Camera } from 'lucide-react';

const LearningPaths = () => {
  const paths = [
    { label: 'Design', icon: Palette },
    { label: 'Development', icon: Code2 },
    { label: 'IT & Software', icon: Monitor },
    { label: 'Business', icon: Briefcase },
    { label: 'Marketing', icon: Megaphone },
    { label: 'Photography', icon: Camera },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        <div className="text-center mb-14">
          <h2 className="text-[28px] md:text-[38px] font-bold text-[#0B1437] leading-tight tracking-[-0.02em] mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-[#64748B] text-[13px] md:text-[14px] max-w-[680px] mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various
            fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.label}
                className="bg-white border border-[#E2E8F0] rounded-2xl py-7 px-3 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C6F135] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-[#0B1437]" strokeWidth={2.2} />
                </div>
                <p className="text-[13px] font-medium text-[#0B1437] text-center">
                  {path.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LearningPaths;