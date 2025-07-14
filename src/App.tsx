import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 animate-gradient opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default App 