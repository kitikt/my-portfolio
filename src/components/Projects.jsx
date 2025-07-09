import { SiReact, SiCss3, SiVite, SiFramer, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from 'framer-motion'
import { useState } from 'react';
import ProjectDetailMenu from './ProjectDetailMenu';


const techIcons = {
  "React": <SiReact color="#61dafb" />,
  "React Bits": <SiReact color="#61dafb" />,
  "Framer Motion": <SiFramer color="#e64bfa" />,
  "CSS3": <SiCss3 color="#1572b6" />,
  "Vite": <SiVite color="#646cff" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  "MongoDB": <SiMongodb color="#47A248" />,
  "Express": <SiExpress color="#000" />,
  "PayOS": null,
  "React-Native": <SiReact color="#61dafb" />,
};

const Projects = () => {

  const projects = [
    {
      id: 1,
      title:'Resonance',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB',
      image: '/resonance.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'PayOS'],
      github: 'https://github.com/kitikt/sdn-',
      live: '#',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Cook Book',
      description: 'A full-stack application built with React, Node.js, and MongoDB',
      image: '/cook.png',
      technologies: ['React-Native', 'Node.js', 'MongoDB', 'Expo'],
      github: 'https://github.com/kitikt/Recipe-App',
      live: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with animations and responsive design',
      image: '/portfolio.png',
      technologies: ['React', 'React Bits', 'Framer Motion', 'CSS3', 'Vite'],
      github: 'https://github.com/kitikt/my-portfolio',
      video: 'https://www.youtube.com/embed/fc3tFUG-onY',
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

  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = (project) => {
    setSelectedProject(project);
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="section-header"
      >
        <h2 className="galaxy-gradient-text">Featured Projects</h2>
        <p>Here are some of my recent works</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="projects-grid"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="project-card"
            style={{ cursor: 'pointer' }}
            onClick={() => handleOpenMenu(project)}
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
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                  >
                    {techIcons[tech] && <span style={{ fontSize: "1.1em", display: "flex", alignItems: "center" }}>{techIcons[tech]}</span>}
                    {tech}
                  </span>
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
        viewport={{ once: false, amount: 0.3 }}
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
      
      <ProjectDetailMenu
        open={menuOpen}
        onClose={handleCloseMenu}
        project={selectedProject}
      />
    </section>
  )
}

export default Projects 