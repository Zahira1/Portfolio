import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Work from './Component/Work';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
