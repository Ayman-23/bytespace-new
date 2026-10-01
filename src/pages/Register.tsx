import { Link } from 'react-router-dom';
import { Zap, Star, BarChart3 } from 'lucide-react';
import '../styles/grid-patterns.css';

const Register = () => {
  return (
    <div className="min-h-screen w-full bg-[#1B4DFF] relative overflow-hidden">
      
      <div
        className="grid-pattern-overlay absolute inset-0 opacity-[0.15] pointer-events-none z-0"
      />

      
      <div className="absolute bottom-20 -left-6 w-[180px] h-[140px] z-0">
        <svg viewBox="0 0 180 140" fill="#C6F135" className="w-full h-full">
          <path d="M20,60 C20,20 70,0 110,20 C160,45 180,20 190,60 C200,100 160,135 110,140 C60,145 20,120 20,60 Z" />
        </svg>
      </div>

      <div className="absolute bottom-40 left-[110px] w-[70px] h-[70px] z-20">
        <svg viewBox="0 0 70 70">
          <polygon points="35,5 65,60 5,60" fill="#C6F135" />
        </svg>
      </div>

      <div className="absolute top-[200px] left-[100px] w-[90px] h-[90px] z-20">
        <svg viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="35" fill="none" stroke="#C6F135" strokeWidth="16" />
        </svg>
      </div>

      <div className="absolute top-[520px] right-[480px] w-[110px] h-[90px] z-10 opacity-95">
        <svg viewBox="0 0 110 90" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15,75 L35,25 L55,75 L75,25 L95,75" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 py-8 md:py-10">

        <Link to="/" className="flex items-center gap-2 mb-10 md:mb-14">
          <Zap size={28} className="text-[#C6F135] fill-[#C6F135]" />
          <span className="text-[20px] font-bold text-white tracking-tight">
            ByteSpace
          </span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div>
            <h1 className="text-white text-[28px] md:text-[34px] font-bold leading-tight tracking-[-0.01em] mb-5">
              Sign up and come in
            </h1>
            <p className="text-white/85 text-[13px] md:text-[14px] leading-relaxed max-w-[480px] mb-12">
              The registration process is straightforward, uncomplicated,
              and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>

            <div className="relative h-[380px] md:h-[420px] hidden md:block">

              <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-2xl p-3 w-[280px] z-20">
                <div className="relative mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
                    alt="Big Data"
                    className="w-full h-[140px] object-cover rounded-xl"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] text-white/90 font-medium">
                    <span>17 Lessons</span>
                    <span>2 hour 16 min</span>
                    <span>50 Comments</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-[13px] text-[#0B1437]">
                    the Power of Big Data
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#0B1437]">
                    4.5 <Star size={10} className="fill-[#FFD43B] text-[#FFD43B]" />
                  </div>
                </div>
                <p className="text-[10px] text-[#94A3B8] mb-2">by paristool.studio</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] text-[#64748B]">
                    <BarChart3 size={10} /> Beginner
                  </div>
                  <div className="flex -space-x-1.5">
                    {[1, 2, 3].map((n) => (
                      <img
                        key={n}
                        src={`https://randomuser.me/api/portraits/${n % 2 === 0 ? 'women' : 'men'}/${30 + n}.jpg`}
                        alt=""
                        className="w-5 h-5 rounded-full border border-white object-cover"
                      />
                    ))}
                    <span className="bg-[#C6F135] text-[#0B1437] text-[8px] font-bold px-1.5 rounded-full flex items-center border border-white">
                      2K
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-[160px] left-0 bg-white rounded-2xl shadow-2xl p-4 w-[220px] z-10">
                <h3 className="font-bold text-[13px] text-[#0B1437] mb-1">
                  Build Digital Asset
                </h3>
                <p className="text-[10px] text-[#94A3B8] mb-2">by paristool.studio</p>
                <div className="flex items-center gap-1 text-[10px] text-[#64748B] mb-3">
                  <BarChart3 size={10} /> Beginner
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[16px] font-black text-[#1B4DFF]">$25</span>
                  <span className="text-[10px] text-[#94A3B8]">/lifetime</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-2 bg-[#C6F135] rounded-2xl shadow-2xl p-4 w-[220px] z-30">
                <p className="text-[13px] font-bold text-[#0B1437] mb-0.5">
                  Happy Students
                </p>
                <p className="text-[10px] text-[#0B1437]/70 mb-3">4.8 Rating ★</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((n) => (
                      <img
                        key={n}
                        src={`https://randomuser.me/api/portraits/${n % 2 === 0 ? 'women' : 'men'}/${20 + n}.jpg`}
                        alt=""
                        className="w-6 h-6 rounded-full border-2 border-[#C6F135] object-cover"
                      />
                    ))}
                  </div>
                  <span className="bg-[#0B1437] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    2K+
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:max-w-[500px] lg:ml-auto w-full">
            <p className="text-[12px] text-[#94A3B8] mb-3">Create an Account</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0B1437] leading-[1.1] tracking-[-0.02em] mb-9">
              Welcome to
              <br />
              ByteSpace
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-[12px] font-medium text-[#0B1437] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] text-[#0B1437] placeholder:text-[#CBD5E1] outline-none focus:border-[#1B4DFF] transition"
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#0B1437] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] text-[#0B1437] placeholder:text-[#CBD5E1] outline-none focus:border-[#1B4DFF] transition"
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#0B1437] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] text-[#0B1437] placeholder:text-[#CBD5E1] outline-none focus:border-[#1B4DFF] transition"
                />
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="bg-[#C6F135] text-[#0B1437] px-8 py-3 rounded-full text-[13px] font-bold hover:bg-[#B4E02A] transition"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="text-[12px] text-[#94A3B8] text-center mt-10">
              Already have an account?{' '}
              <Link to="/login" className="text-[#1B4DFF] font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;