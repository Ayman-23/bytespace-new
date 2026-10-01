import { Layers } from 'lucide-react';

const PartnerLogos = () => {
  const logos = [1, 2, 3, 4, 5];
  return (
    <div className="w-full py-14 bg-white">
      <div className="section-container flex flex-wrap justify-between items-center gap-8">
        {logos.map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-[#0B1437] opacity-50"
          >
            <Layers size={26} strokeWidth={2.5} />
            <span className="font-bold text-xl tracking-tight">Logoipsum</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;