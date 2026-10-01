import { Star, Users } from 'lucide-react';

const CourseSection = () => {
  const filters = [
    { label: 'Featured', active: true },
    { label: 'Music', active: false },
    { label: 'Drawing & Painting', active: false },
    { label: 'Marketing', active: false },
    { label: 'Animation', active: false },
    { label: 'Social Media', active: false },
    { label: 'UI/UX Design', active: false },
    { label: 'Creative Marketing', active: false },
    { label: 'Digital Illustration', active: false },
    { label: 'Film & Video', active: false },
    { label: 'Crafts', active: false },
    { label: 'Freelance & Entrepreneurship', active: false },
    { label: 'Graphic Design', active: false },
    { label: 'Photography', active: false },
    { label: 'Productivity', active: false },
    { label: 'Web Development', active: false },
    { label: 'Data Science', active: false },
    { label: 'Cooking', active: false },
  ];

  const courses = [
    {
      title: 'Learn Figma from Basic',
      author: 'by paristool studio',
      rating: 4.5,
      level: 'Beginner',
      lessons: 17,
      duration: '2 hour 16 min',
      students: '50',
      extra: '2K',
      price: '$25',
      priceUnit: '/lifetime',
      img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Build Digital Asset',
      author: 'by paristool studio',
      rating: 4.5,
      level: 'Beginner',
      lessons: 17,
      duration: '2 hour 16 min',
      students: '50',
      extra: '2K',
      price: '$25',
      priceUnit: '/lifetime',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'the Power of Big Data',
      author: 'by paristool studio',
      rating: 4.5,
      level: 'Beginner',
      lessons: 17,
      duration: '2 hour 16 min',
      students: '50',
      extra: '2K',
      price: '$25',
      priceUnit: '/lifetime',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Balancing Productivity an...',
      author: 'by paristool studio',
      rating: 4.5,
      level: 'Beginner',
      lessons: 17,
      duration: '2 hour 16 min',
      students: '50',
      extra: '2K',
      price: '$25',
      priceUnit: '/lifetime',
      img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Mastering Money Manage...',
      author: 'by paristool studio',
      rating: 4.5,
      level: 'Beginner',
      lessons: 17,
      duration: '2 hour 16 min',
      students: '50',
      extra: '2K',
      price: '$25',
      priceUnit: '/lifetime',
      img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'From Idea to Startup Succe...',
      author: 'by paristool studio',
      rating: 4.5,
      level: 'Beginner',
      lessons: 17,
      duration: '2 hour 16 min',
      students: '50',
      extra: '2K',
      price: '$25',
      priceUnit: '/lifetime',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#0B1437] leading-tight tracking-[-0.02em] mb-4">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="text-[#64748B] text-[13px] md:text-[14px] max-w-[620px] mx-auto leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            fields, from technology to the arts, and make a difference.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-[900px] mx-auto">
          {filters.map((f) => (
            <button
              key={f.label}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                f.active
                  ? 'bg-[#C6F135] text-[#0B1437] border border-[#C6F135]'
                  : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#94A3B8]'
              }`}
            >
              {f.label}
            </button>
          ))}
          <button className="px-4 py-1.5 rounded-full text-[12px] font-medium bg-white text-[#1B4DFF] border border-[#E2E8F0] hover:border-[#1B4DFF] transition-all">
            + More
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-[190px] overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-8 pb-2 flex items-center justify-between text-white text-[10px] font-medium">
                  <span>{course.lessons} Lessons</span>
                  <span>{course.duration}</span>
                  <span>{course.students} Comments</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-bold text-[15px] text-[#0B1437] leading-snug">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[12px] font-bold text-[#0B1437] flex-shrink-0">
                    {course.rating}
                    <Star size={11} className="fill-[#FFD43B] text-[#FFD43B]" />
                  </div>
                </div>

                <p className="text-[11px] text-[#94A3B8] mb-4">{course.author}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 20V10M12 20V4M20 20v-8" />
                    </svg>
                    {course.level}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((n) => (
                        <img
                          key={n}
                          src={`https://randomuser.me/api/portraits/${n % 2 === 0 ? 'women' : 'men'}/${30 + n}.jpg`}
                          alt=""
                          className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <span className="bg-[#C6F135] text-[#0B1437] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {course.extra}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center gap-1">
                  <span className="text-[17px] font-black text-[#1B4DFF]">
                    {course.price}
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">
                    {course.priceUnit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseSection;