import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  window.onkeydown = (e) => {
    if(e.key === 'Escape') {
      setIsModalOpen(false);
    }
  }
  return (
    <BrowserRouter>
      <div className='min-h-screen h-full bg-gray-900'>
        <AnimatePresence>
          {isModalOpen && <ContactModal onClose={()=>setIsModalOpen(false)} />}
        </AnimatePresence>
        <Navbar onContact={()=>setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

        {/* <Blog/> */}
        </Routes>
        <Footer onContact={()=>setIsModalOpen(true)} />
          <Toaster />
      </div>
    </BrowserRouter>
  )
} 

export default App
