import '../styles/grid-patterns.css';

const UnlockCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B4DFF] py-20 md:py-28">
      
      <div
        className="grid-pattern-overlay absolute inset-0 opacity-[0.15] pointer-events-none z-0"
      />


      <div className="absolute -top-10 -left-16 w-[220px] h-[160px] z-0">
        <svg viewBox="0 0 220 160" fill="#C6F135" className="w-full h-full">
          <path d="M30,60 C30,20 80,0 120,20 C170,45 200,20 210,65 C220,110 180,145 130,150 C80,155 30,120 30,60 Z" />
        </svg>
      </div>

      <div className="absolute top-[60px] left-[200px] w-[70px] h-[60px] z-0 opacity-95">
        <svg viewBox="0 0 70 60" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,45 L25,15 L40,45 L55,15" />
        </svg>
      </div>

      <div className="absolute top-[40px] right-[80px] w-[130px] h-[130px] z-0">
        <svg viewBox="0 0 130 130">
          <polygon points="65,10 120,110 10,110" fill="white" />
        </svg>
      </div>

      <div className="absolute top-[20px] right-[240px] w-[60px] h-[60px] z-0">
        <svg viewBox="0 0 60 60">
          <polygon points="30,5 55,50 5,50" fill="#C6F135" />
        </svg>
      </div>

      <div className="absolute bottom-[20px] -left-8 w-[140px] h-[120px] z-0">
        <svg viewBox="0 0 140 120" fill="white" className="w-full h-full opacity-95">
          <path d="M20,50 C20,20 60,5 90,20 C130,40 140,80 110,100 C80,120 30,100 20,50 Z" />
        </svg>
      </div>

      <div className="absolute -bottom-12 left-[60px] w-[160px] h-[160px] z-0">
        <svg viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="70" fill="none" stroke="#C6F135" strokeWidth="22" />
        </svg>
      </div>

      <div className="absolute bottom-[20px] right-[30px] w-[140px] h-[100px] z-0">
        <svg viewBox="0 0 140 100" fill="none" stroke="#C6F135" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15,80 L35,30 L55,80 L75,30 L95,80 L115,30" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-[1.12] tracking-[-0.02em] mb-6">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="text-white/85 text-[13px] md:text-[14px] max-w-[640px] mx-auto leading-relaxed mb-9">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor and showcase your
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <button className="bg-[#C6F135] text-[#0B1437] px-7 py-3 rounded-full font-bold text-[13px] hover:bg-[#B4E02A] transition shadow-lg">
          Join as Creator
        </button>
      </div>

    </section>
  );
};

export default UnlockCTA;