import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Stock ETL with Kafka",
      description: "Built a real-time data pipeline processing stock market data using Apache Kafka, Apache Spark, and Python. Handles 10K+ messages per second with sub-second latency.",
      tech: ["Apache Kafka", "Apache Spark", "Python", "Docker", "Redis"],
      github: "https://github.com/jorge-terceros/stock-etl",
      demo: "https://demo.tercius.me/stock-etl",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Data Pipeline with dbt and BigQuery",
      description: "Designed and implemented a modern data warehouse using dbt, BigQuery, and Airflow. Transforms raw data into analytics-ready models with automated testing and documentation.",
      tech: ["dbt", "BigQuery", "Apache Airflow", "SQL", "Terraform"],
      github: "https://github.com/jorge-terceros/dbt-pipeline",
      demo: "https://demo.tercius.me/dbt-pipeline",
      image: "/api/placeholder/400/250"
    },
    {
      title: "AI-Powered Log Monitoring",
      description: "Developed an intelligent log monitoring system using machine learning to detect anomalies and predict system failures. Reduces false positives by 80% compared to traditional methods.",
      tech: ["Python", "TensorFlow", "Elasticsearch", "Kubernetes", "Prometheus"],
      github: "https://github.com/jorge-terceros/ai-monitoring",
      demo: "https://demo.tercius.me/ai-monitoring",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Cloud-Native Data Platform",
      description: "Architected a scalable data platform on GCP using Dataflow, Pub/Sub, and BigQuery. Supports both batch and streaming data processing with auto-scaling capabilities.",
      tech: ["Google Cloud Platform", "Dataflow", "Pub/Sub", "BigQuery", "Terraform"],
      github: "https://github.com/jorge-terceros/cloud-data-platform",
      demo: "https://demo.tercius.me/cloud-platform",
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-6xl text-primary-400 opacity-50">📊</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-400">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 rounded-lg transition-all duration-300 group"
                  >
                    <Github className="w-4 h-4 group-hover:text-primary-400" />
                    Code
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 