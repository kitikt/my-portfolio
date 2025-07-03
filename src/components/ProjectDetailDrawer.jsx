import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import './ProjectDetailDrawer.css';

const ProjectDetailDrawer = ({ project, open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!project) return null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="project-drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-drawer"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="drawer-close" onClick={onClose}>&times;</button>
            <div className="drawer-content">
              <div className="drawer-media-block">
                <motion.div
                  className="drawer-media-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="drawer-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  {project.video && (
                    <div className="drawer-video">
                      <iframe
                        src={`${project.video}?autoplay=1&mute=1&controls=1`}
                        title="Project Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  )}
                </motion.div>
              </div>
              <motion.div
                className="drawer-info"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0.18 }}
              >
                <h2>{project.title}</h2>
                <p className="drawer-desc">{project.description}</p>
                <div className="drawer-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="drawer-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="drawer-links">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="drawer-link github">GitHub</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="drawer-link live">Live Demo</a>}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailDrawer; 