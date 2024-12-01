import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import About from './pages/About';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <WhatsAppIcon />
      <Footer />
    </BrowserRouter>
  );
};

export default App;