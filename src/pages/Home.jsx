import Hero from '../components/Hero'
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Testimonials />
      <Faq/>
      <Footer />
    </div>
  );
};

export default Home;