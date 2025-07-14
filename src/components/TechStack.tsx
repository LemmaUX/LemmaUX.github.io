import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-orange-500' },
    { name: 'SQL', icon: '🗄️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Apache Airflow', icon: '🌪️', color: 'from-green-500 to-emerald-500' },
    { name: 'dbt', icon: '🔄', color: 'from-orange-500 to-red-500' },
    { name: 'Apache Spark', icon: '⚡', color: 'from-yellow-400 to-orange-400' },
    { name: 'Apache Kafka', icon: '📨', color: 'from-purple-500 to-pink-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-600 to-cyan-600' },
    { name: 'Kubernetes', icon: '☸️', color: 'from-blue-500 to-indigo-500' },
    { name: 'Google Cloud', icon: '☁️', color: 'from-blue-500 to-green-500' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
    { name: 'Terraform', icon: '🏗️', color: 'from-purple-600 to-pink-600' },
    { name: 'Git', icon: '📝', color: 'from-orange-600 to-red-600' },
    { name: 'CI/CD', icon: '🔄', color: 'from-green-600 to-blue-600' },
    { name: 'Machine Learning', icon: '🤖', color: 'from-purple-500 to-indigo-500' },
    { name: 'Data Warehousing', icon: '🏢', color: 'from-gray-500 to-blue-500' },
    { name: 'Real-time Processing', icon: '⚡', color: 'from-yellow-500 to-green-500' }
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
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies to deliver cutting-edge data solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack 