import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:optimoter@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/LemmaUX',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jorge-terceros-273155168/',
      color: 'from-blue-600 to-blue-800'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-400">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you want to discuss data engineering, AI systems, or just want to say hello, 
              I'd love to hear from you.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Feel free to reach out through any of the channels below. I typically respond within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-6 glass-effect rounded-xl group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {social.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {social.name === 'Email' ? 'jorge@tercius.me' : `Connect on ${social.name}`}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-gray-700"
        >
          <p className="text-gray-400">
            © 2024 Jorge Terceros. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 