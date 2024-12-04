import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import About from './pages/About';
import Error404 from './pages/Error404';
import Footer from './components/Footer';
import ContactUsPage from './pages/ContactUsPage';
import CallbackForm from './pages/CallbackForm';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfUse from './pages/TermsOfUse';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUsPage" element={<ContactUsPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/callback" element={<CallbackForm />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <WhatsAppIcon />
      <Footer />
    </BrowserRouter>
  );
};

export default App;