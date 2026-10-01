import { Check } from 'lucide-react';

const CreatorCTA = () => {
  const features = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#EAF5C3] via-[#F4F8E8] to-[#E8EEFA] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C6F135]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="relative h-[480px] md:h-[520px] flex justify-center">

            <div className="absolute top-[130px] left-4 md:left-12 w-[110px] h-[90px] z-0">
              <svg viewBox="0 0 110 90" fill="none" stroke="#C6F135" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15,75 L30,25 L45,75 L60,25 L75,75 L90,25" />
              </svg>
            </div>

            <div className="relative z-10 mt-8 md:mt-4">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=700"
                alt="Instructor"
                className="w-[300px] md:w-[340px] h-[380px] md:h-[420px] object-cover rounded-[40px]"
              />
            </div>

            <div className="absolute top-[40px] left-0 md:left-2 bg-[#1B4DFF] text-white rounded-2xl shadow-2xl p-4 w-[180px] z-20">
              <p className="text-[10px] font-medium text-white/70 mb-0.5">
                Total Revenue
              </p>
              <p className="text-[10px] font-medium text-white/50 mb-2">
                Last 30 Days
              </p>
              <p className="text-[22px] font-black leading-none">$120.29</p>
            </div>

            <div className="absolute top-[180px] left-0 md:left-[-10px] bg-[#1B4DFF] text-white rounded-2xl shadow-2xl p-4 w-[180px] z-20">
              <p className="text-[10px] font-medium text-white/70 mb-2">
                Year to Date
              </p>
              <p className="text-[22px] font-black leading-none mb-2">
                $1,200.38
              </p>
              <span className="inline-block bg-[#C6F135] text-[#0B1437] text-[10px] font-bold px-2 py-0.5 rounded-full">
                +8%
              </span>
            </div>

            <div className="absolute bottom-[20px] right-0 md:right-4 bg-white rounded-2xl shadow-2xl p-4 w-[220px] z-20">
              <p className="text-[13px] font-bold text-[#0B1437] mb-0.5">
                Happy Students
              </p>
              <p className="text-[10px] text-[#94A3B8] mb-3">4.8 Rating</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((n) => (
                    <img
                      key={n}
                      src={`https://randomuser.me/api/portraits/${n % 2 === 0 ? 'women' : 'men'}/${20 + n}.jpg`}
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <span className="bg-[#C6F135] text-[#0B1437] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  2k+
                </span>
              </div>
            </div>

          </div>

          <div>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1437] leading-[1.15] tracking-[-0.02em] mb-6">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="text-[#475569] text-[14px] leading-relaxed mb-8 max-w-[480px]">
              <span className="font-bold text-[#0B1437]">ByteSpace</span> supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            <ul className="space-y-4">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4DFF] flex items-center justify-center flex-shrink-0">
                    <Check size={11} strokeWidth={3.5} className="text-white" />
                  </div>
                  <span className="text-[#0B1437] font-semibold text-[14px]">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreatorCTA;