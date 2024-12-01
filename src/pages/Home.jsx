import Hero from '../components/Hero'
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Introduction from '../components/Introduction';
import Faq from '../components/Faq';
import QuestionsComponent from '../components/QuestionsComponent';

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Courses />
      <Testimonials />
      <Faq/>
      <QuestionsComponent />
    </div>
  );
};

export default Home;