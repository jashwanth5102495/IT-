import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TradingSection from './components/TradingSection';
import TechnologiesCarousel from './components/TechnologiesCarousel';
import Footer from './components/Footer';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import Courses from './components/Courses';
import ProjectTracking from './components/ProjectTracking';

import Galaxy from './components/Galaxy';

function AppInner() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
      <div className="min-h-screen bg-black text-white font-sans relative">
        {isHome && <Galaxy />}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <section id="home">
                <Hero />
              </section>
              <section id="services">
                <ServicesSection />
              </section>
              <section id="career">
                <TradingSection />
              </section>
              <section id="contact">
                <TechnologiesCarousel />
              </section>
              <Footer />
            </>
          } />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/career" element={<><Header /><Career /></>} />
          <Route path="/contact" element={<><Header /><Contact /></>} />
          <Route path="/courses" element={<><Header /><Courses /></>} />
          <Route path="/project-tracking" element={<><Header /><ProjectTracking /></>} />

        </Routes>
      </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppInner />
      </Router>
    </ThemeProvider>
  );
}

export default App;