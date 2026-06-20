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
<<<<<<< HEAD
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
=======
      <About/>
      <section className="hero">
        <h1>Welcome to MyApp 👋</h1>
        <p>We build beautiful, fast, and reliable web experiences.</p>
        <button>Get Started</button>
      </section>

      <section className="features">
        <h2>What We Offer</h2>
        <div className="cards">
          <div className="card">⚡ Fast Performance</div>
          <div className="card">🔒 Secure by Default</div>
          <div className="card">🎨 Beautiful UI</div>
        </div>
      </section>
>>>>>>> c4d0905b78fb3cf97e6340d1c9938fd46f6b1c4d
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
