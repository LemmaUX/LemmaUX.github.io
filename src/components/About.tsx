import { motion } from 'framer-motion'

const About = () => {
  const techStack = [
    'Python', 'SQL', 'Apache Airflow', 'dbt', 'Apache Spark', 'Apache Kafka',
    'Docker', 'Kubernetes', 'Google Cloud Platform', 'AWS', 'Terraform',
    'Git', 'CI/CD', 'Machine Learning', 'Data Warehousing'
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
            <span className="gradient-text">About Me</span>
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
              Data Engineer & AI Enthusiast
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a polymath with a passion for building robust, scalable data infrastructure. 
              With expertise spanning data engineering, DevOps, AI systems, and distributed pipelines, 
              I specialize in transforming complex data challenges into elegant, production-ready solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My work focuses on real-time data processing, machine learning pipelines, and cloud-native 
              architectures that enable businesses to make data-driven decisions at scale. I believe in 
              clean code, automation, and continuous learning.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not architecting data solutions, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the data community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-center text-primary-400">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-primary-600/20 border border-primary-600/30 text-primary-300 rounded-full text-sm font-medium hover:bg-primary-600/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 