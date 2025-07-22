import { useState } from 'react'
import Footer from './Component/Footer'; 
import About from './Component/About'; // adjust path if needed
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
      <Footer />
    </>
  )
}

export default App
