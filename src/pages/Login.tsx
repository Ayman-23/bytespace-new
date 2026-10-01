import { Link } from 'react-router-dom';
import { Zap, Star, BarChart3 } from 'lucide-react';
import '../styles/grid-patterns.css';

const Login = () => {
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

      <div className="absolute bottom-16 left-[80px] w-[80px] h-[80px] z-20">
        <svg viewBox="0 0 80 80">
          <polygon points="40,5 75,70 5,70" fill="#FFD43B" />
        </svg>
      </div>

      <div className="absolute top-[210px] left-[100px] w-[90px] h-[90px] z-20">
        <svg viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="35" fill="none" stroke="#C6F135" strokeWidth="16" />
        </svg>
      </div>

      <div className="absolute top-[500px] right-[480px] w-[110px] h-[90px] z-10 opacity-95">
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
              Sign in with ease
            </h1>
            <p className="text-white/85 text-[13px] md:text-[14px] leading-relaxed max-w-[440px] mb-12">
              Experience a seamless and efficient sign-in process that
              grants you instant access to a world of knowledge.
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

          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:max-w-[500px] lg:ml-auto w-full">

            <p className="text-[12px] text-[#94A3B8] mb-3">Sign In</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0B1437] leading-[1.1] tracking-[-0.02em] mb-9">
              Welcome Back
            </h2>

            <form className="space-y-5">
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
                  className="bg-[#C6F135] text-[#0B1437] px-9 py-3 rounded-full text-[13px] font-bold hover:bg-[#B4E02A] transition"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#E2E8F0]"></div>
              <span className="text-[11px] text-[#94A3B8] font-medium tracking-wider">OR</span>
              <div className="flex-1 h-px bg-[#E2E8F0]"></div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <button className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#0B1437] transition">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:border-[#0B1437] transition">
                <span className="text-[20px] font-black text-[#0B1437]">f</span>
              </button>
            </div>

            <p className="text-[12px] text-[#94A3B8] text-center">
              New user?{' '}
              <Link to="/register" className="text-[#1B4DFF] font-medium hover:underline">
                Create an account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;