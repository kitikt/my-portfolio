import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Task+App',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with animations and responsive design',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Portfolio',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Vite'],
      github: '#',
      live: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="galaxy-gradient-text">Featured Projects</h2>
        <p>Here are some of my recent works</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="projects-grid"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="project-card"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="project-links"
                >
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="project-link github"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="project-link live"
                  >
                    Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="tech-tag"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="projects-cta"
      >
        <motion.a
          href="https://github.com/kitikt"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="cta-button primary github-link"
          title="Click to view my GitHub profile"
        >
          <span>View All </span>
       
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Projects 