import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PartnerLogos from '../components/PartnerLogos';
import LearningPaths from '../components/LearningPaths';
import CourseSection from '../components/CourseSection';
import CreatorCTA from '../components/CreatorCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import GrowthSection from '../components/GrowthSection';
import UnlockCTA from '../components/UnlockCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PartnerLogos />
      <CourseSection />
      <LearningPaths />
      <GrowthSection />
      <CreatorCTA />
      <UnlockCTA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;