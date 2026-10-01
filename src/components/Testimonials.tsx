const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'James L.',
      role: 'Lifelong Learner',
      text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Alex B.',
      role: 'Inspired Creator',
      text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
      img: 'https://randomuser.me/api/portraits/men/85.jpg',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F4F8E8] via-[#EAF5C3] to-[#F4F8E8] overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6F135]/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8EEFA] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-14 items-start">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1437] leading-[1.15] tracking-[-0.02em]">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="text-[#475569] text-[13px] md:text-[14px] leading-relaxed md:pt-4">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60"
            >
              <img
                src={rev.img}
                alt={rev.name}
                className="w-14 h-14 rounded-full object-cover mb-5"
              />
              <h4 className="text-[16px] font-bold text-[#0B1437] mb-1">
                {rev.name}
              </h4>
              <p className="text-[13px] text-[#1B4DFF] font-medium mb-4">
                {rev.role}
              </p>
              <p className="text-[13px] text-[#475569] leading-relaxed">
                {rev.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;