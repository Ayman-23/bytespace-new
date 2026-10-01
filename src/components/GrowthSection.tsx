import { BarChart3 } from 'lucide-react';

const GrowthSection = () => {
  const stats = [
    { value: '12K', label: 'Students' },
    { value: '70+', label: 'Courses' },
    { value: '16', label: 'Creators' },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#EAF5C3] via-[#F4F8E8] to-[#E8EEFA] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C6F135]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B4DFF]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="order-2 lg:order-1">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1437] leading-[1.15] tracking-[-0.02em] mb-6">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="text-[#475569] text-[14px] leading-relaxed mb-10 max-w-[480px]">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <div className="flex items-center gap-12 md:gap-16">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[28px] md:text-[34px] font-black text-[#1B4DFF] leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="text-[13px] text-[#94A3B8] font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[480px] md:h-[520px] flex justify-center">

            <div className="absolute top-[60px] right-0 w-[140px] h-[120px] z-0">
              <svg viewBox="0 0 140 120" fill="none" stroke="#C6F135" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20,100 L40,40 L60,100 L80,40 L100,100 L120,40" />
              </svg>
            </div>

            <div className="absolute top-0 left-0 md:left-4 bg-white rounded-2xl shadow-2xl p-3 w-[240px] z-20">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600"
                alt="Course preview"
                className="w-full h-[120px] object-cover rounded-xl mb-3"
              />
              <h3 className="font-bold text-[13px] text-[#0B1437] mb-0.5">
                Learn Figma fro...
              </h3>
              <p className="text-[10px] text-[#94A3B8] mb-2">
                by paristool.studio
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] text-[#64748B]">
                  <BarChart3 size={11} />
                  Beginner
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[13px] font-black text-[#1B4DFF]">$25</span>
                  <span className="text-[9px] text-[#94A3B8]">/lifetime</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 md:mt-20">
              <img
                src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=700"
                alt="Instructor"
                className="w-[300px] md:w-[340px] h-[380px] md:h-[420px] object-cover rounded-[40px]"
              />
            </div>

            <div className="absolute bottom-[80px] right-0 md:right-2 bg-white rounded-2xl shadow-2xl p-5 w-[200px] z-20">
              <p className="text-[10px] text-[#94A3B8] font-medium mb-1">
                Learning Progress
              </p>
              <p className="text-[36px] font-black text-[#0B1437] leading-none mb-3">
                55%
              </p>
              <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                <div className="h-full w-[55%] bg-[#1B4DFF] rounded-full"></div>
              </div>
            </div>

            <div className="absolute bottom-[60px] right-4 md:right-8 bg-[#B4A5FF] text-white rounded-full shadow-xl px-4 py-1.5 z-30">
              <span className="text-[11px] font-bold">Yasin Protik</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowthSection;