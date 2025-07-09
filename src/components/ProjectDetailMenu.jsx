import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@context/ThemeContext';
import '../style/ProjectDetailMenu.css';

const TABS = {
  IMAGE: 'Hình ảnh',
  VIDEO: 'Video',
};

const ProjectDetailMenu = ({ open, onClose, project }) => {
  const overlayRef = useRef();
  const [tab, setTab] = useState(TABS.IMAGE);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!open) return;
    setTab(TABS.IMAGE); // reset tab mỗi lần mở
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!open || !project) return null;

  const hasVideo = !!project.video;

  return (
    <div
      className={`pdm-overlay ${open ? 'pdm-open' : ''} ${isDark ? 'pdm-dark' : 'pdm-light'}`}
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="pdm-modal">
        <button className="pdm-close" onClick={onClose}>&times;</button>
        <div className="pdm-header">
          <h2>{project.title}</h2>
        </div>
        <div className="pdm-tab-menu">
          <button
            className={`pdm-tab-btn${tab === TABS.IMAGE ? ' pdm-tab-active' : ''}`}
            onClick={() => setTab(TABS.IMAGE)}
            type="button"
          >
            Hình ảnh
          </button>
          <button
            className={`pdm-tab-btn${tab === TABS.VIDEO ? ' pdm-tab-active' : ''}`}
            onClick={() => hasVideo && setTab(TABS.VIDEO)}
            type="button"
            disabled={!hasVideo}
          >
            Video
          </button>
        </div>
        <div className="pdm-body">
          <div className="pdm-media-wrapper">
            {tab === TABS.IMAGE && (
              <img src={project.image} alt={project.title} className="pdm-image" />
            )}
            {tab === TABS.VIDEO && hasVideo && (
              <div className="pdm-video-wrapper">
                <iframe
                  src={project.video}
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <p className="pdm-desc">{project.description}</p>
          <div className="pdm-links">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailMenu; 