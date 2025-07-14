import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Jorge Terceros</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Data Engineer | AI-Focused | Real-Time Systems
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building scalable data pipelines and AI systems that transform how businesses operate in the digital age.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="/CV.pdf"
              download
              className="px-8 py-3 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group"
            >
              Download CV
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 