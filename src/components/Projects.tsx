import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "End-to-End Premium Billing Platform",
      description: "Full-stack Premium Billing Platform with React, Flask, PostgreSQL, and Redis",
      image: "https://img.freepik.com/free-vector/paying-bills-concept-illustration_114360-19357.jpg?ga=GA1.1.1879143047.1744793451&semt=ais_items_boosted&w=740",
      technologies: ["React", "Python", "PostgreSQL", "Flask", "Redis"],
      live: "https://www.linkedin.com/posts/veesam-satya-teja_flask-postgresql-redis-activity-7336614393457033216-Cgj8?utm_source=share&utm_medium=member_desktop&rcm=ACoAACz6HtgB4vN_9oNGEgq-N1czbkXtUcgo4K8"
    },
    {
      title: "Automated Refund Mechanism",
      description: "Automated Refund Mechanism with Flask and Razorpay API's",
      image: "https://img.freepik.com/free-vector/indian-rupee-currency-exchange_23-2147996938.jpg?ga=GA1.1.1879143047.1744793451&semt=ais_items_boosted&w=740",
      technologies: ["Python", "Flask", "Razorpay API's"],
    },
    {
      title: "Location based pricing system",
      description: "A dynamic pricing system that displays prices based on location",
      image: "https://img.freepik.com/free-photo/mobile-with-google-maps_1134-132.jpg?uid=R131778904&ga=GA1.1.1879143047.1744793451&semt=ais_items_boosted&w=740",
      technologies: ["Python", "Flask", "Redis", "Geofense API"],
    },
    {
      title: "Warehouse Management System",
      description: "Database architecture implementation for a warehouse management system",
      image: "https://img.freepik.com/free-photo/storage-vegetation_1098-13572.jpg?uid=R131778904&ga=GA1.1.1879143047.1744793451&semt=ais_items_boosted&w=740",
      technologies: ["Flask", "PostgreSQL"],
    },
    {
      title: "Payments Reconciliation System",
      description: "Payments reconciliation system checking the payments from Razorpay and Yesbank API's for into the system and out of the system",
      image: "https://img.freepik.com/free-photo/wire-transfer-young-man-using-his-smartphone-laptop-banking-transaction-some-payments_662251-2046.jpg?uid=R131778904&ga=GA1.1.1879143047.1744793451&semt=ais_items_boosted&w=740",
      technologies: ["Flask", "Razorpay API's", "Yesbank API's"],
    },
    {
      title: "A fully Backend functionality for Commodity Prices on Application",
      description: "A real time commodity prices on application with Flask",
      image: "https://img.freepik.com/free-photo/woman-buying-fruits-online-using-her-smartphone_23-2149240374.jpg?uid=R131778904&ga=GA1.1.1879143047.1744793451&semt=ais_items_boosted&w=740",
      technologies: ["Flask", "Celery", "Redis"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-400/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {/* <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a> */}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
