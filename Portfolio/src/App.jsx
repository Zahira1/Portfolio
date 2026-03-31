import { useState } from 'react'
import Footer from './Component/Footer'; 
import About from './Component/About'; // adjust path if needed
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <Footer />
    </>
  )
}

export default App
