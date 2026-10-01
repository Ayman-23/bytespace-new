import { Search, Users } from 'lucide-react';
import '../styles/grid-patterns.css';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B4DFF] pt-16 pb-0 min-h-[860px]">
      

      <div
        className="grid-pattern-overlay grid-pattern-overlay--hero absolute inset-0 opacity-[0.18] pointer-events-none z-0"
      />

      <div className="absolute top-[280px] -left-20 w-[280px] h-[200px] z-0">
        <svg viewBox="0 0 280 200" fill="#C6F135" className="w-full h-full">
          <path d="M40,80 C40,30 90,10 140,30 C200,55 250,30 260,80 C270,130 220,170 160,175 C100,180 40,150 40,80 Z" />
        </svg>
      </div>

      <div className="absolute top-[420px] left-6 w-[80px] h-[80px] z-0 opacity-95">
        <svg viewBox="0 0 80 80" fill="#FFD43B">
          <path d="M10,40 Q20,10 40,30 Q55,45 70,25 Q60,55 40,50 Q20,45 10,40 Z" />
        </svg>
      </div>

      <div className="absolute top-[520px] left-[180px] w-[100px] h-[70px] z-0 opacity-90">
        <svg viewBox="0 0 100 70" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round">
          <path d="M10,50 Q25,20 40,40 T70,30 T90,50" />
        </svg>
      </div>

      <div className="absolute bottom-[60px] left-[80px] w-[120px] h-[120px] z-0">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="55" fill="none" stroke="white" strokeWidth="14" />
        </svg>
      </div>

      <div className="absolute top-[180px] -right-16 w-[300px] h-[280px] z-0">
        <svg viewBox="0 0 300 280" fill="#C6F135" className="w-full h-full">
          <path d="M80,20 C160,-20 260,40 290,120 C310,190 250,270 160,270 C70,270 20,180 40,100 C50,50 60,30 80,20 Z" />
        </svg>
      </div>

      <div className="absolute top-[380px] right-[220px] w-[90px] h-[90px] z-0">
        <svg viewBox="0 0 90 90">
          <polygon points="45,5 85,80 5,80" fill="white" />
        </svg>
      </div>

      <div className="absolute bottom-[180px] right-[100px] w-[140px] h-[70px] z-0 opacity-95">
        <svg viewBox="0 0 140 70" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,55 L30,25 L50,55 L70,25 L90,55 L110,25 L130,55" />
        </svg>
      </div>

      <div className="absolute top-[400px] right-[60px] w-[50px] h-[50px] z-20">
        <svg viewBox="0 0 50 50">
          <polygon points="10,5 45,25 10,45" fill="#B4A5FF" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">

        <h1 className="text-white text-center text-[40px] md:text-[64px] lg:text-[72px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[900px] mx-auto pt-10 md:pt-16">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="text-white/85 text-center text-[14px] md:text-[15px] max-w-[520px] mx-auto mt-6 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <div className="relative z-30 max-w-[480px] mx-auto mt-9">
          <div className="bg-white rounded-full flex items-center p-1.5 shadow-2xl">
            <div className="pl-4 pr-2 text-[#94A3B8]">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="flex-1 py-3 text-[14px] text-[#0B1437] placeholder:text-[#94A3B8] bg-transparent outline-none"
            />
            <button className="bg-[#FFD43B] text-[#0B1437] px-6 py-3 rounded-full font-bold text-[13px] hover:bg-[#FFC300] transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20 h-[420px] md:h-[520px] flex justify-end md:justify-center">

          <div className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 w-[500px] md:w-[620px] h-[500px] md:h-[620px] bg-[#C6F135] rounded-full z-0" />

          <div className="relative z-10 mt-0 md:mt-2">
            <img
              src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=700"
              alt="Instructor"
              className="w-[380px] md:w-[460px] h-[420px] md:h-[520px] object-cover rounded-t-[200px]"
            />
          </div>

          <div className="absolute top-[90px] md:top-[120px] left-[8%] md:left-[16%] bg-white rounded-2xl shadow-2xl p-4 w-[210px] z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1B4DFF]/10 flex items-center justify-center text-[#1B4DFF] text-[10px] font-bold">
                UX
              </div>
              <p className="text-[13px] font-bold text-[#0B1437]">UX Design</p>
            </div>
            <p className="text-[10px] text-[#94A3B8] mb-2">1,200+ Students</p>
            <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-[#1B4DFF] rounded-full"></div>
            </div>
          </div>

          <div className="absolute top-[80px] md:top-[100px] right-[8%] md:right-[18%] bg-white rounded-2xl shadow-2xl p-5 w-[180px] z-20">
            <p className="text-[10px] text-[#94A3B8] font-medium mb-1">
              Learning Progress
            </p>
            <p className="text-4xl font-black text-[#0B1437] leading-none mb-3">
              55%
            </p>
            <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div className="h-full w-[55%] bg-[#1B4DFF] rounded-full"></div>
            </div>
          </div>

          <div className="absolute bottom-[60px] md:bottom-[80px] left-[6%] md:left-[14%] bg-white rounded-2xl shadow-2xl p-3 w-[220px] z-20">
            <p className="text-[12px] font-bold text-[#0B1437] mb-0.5">
              Happy Students
            </p>
            <p className="text-[10px] text-[#94A3B8] mb-3">40,000+</p>
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
                2k
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;