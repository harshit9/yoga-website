import Hero from '../components/Hero'
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;