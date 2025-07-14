import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

const Resume = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Download My Resume</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a detailed overview of my experience, skills, and achievements in data engineering, 
              AI systems, and cloud architecture.
            </p>
            
            <motion.a
              href="/CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download CV (PDF)
            </motion.a>
            
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 