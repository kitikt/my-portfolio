import { motion } from 'framer-motion'

const About = () => {
  const experiences = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer Intern',
      company: 'Personal Projects / Freelance',
      description: 'Building full-stack web applications using React.js and Node.js. Focused on real-world features, API integration, and clean architecture.'
    },
    {
      year: '2023 - 2024',
      title: 'Frontend Developer (Student Projects)',
      company: 'FPT University',
      description: 'Developed responsive UIs using React.js, worked on team projects, practiced component-based design and Git workflow.'
    },
    {
      year: '2022 - 2023',
      title: 'Web Development Learner',
      company: 'FPT University',
      description: 'Learned HTML, CSS, JavaScript and got hands-on with basic web apps. Built mini projects to strengthen foundation and logic.'
    }
  ]

  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="galaxy-gradient-text">About Me</h2>
        <p>Get to know me better</p>
      </motion.div>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-text"
        >
          <h3>Who I Am</h3>
          <p>
          I'm a passionate Full Stack Developer Intern focused on building web applications with Node.js and React.js. I love turning ideas into simple, clean, and user-friendly products.

Outside of coding, I’m always diving into new tech, learning by doing, and sharing my journey with other devs.


          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing knowledge with the 
            developer community.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="about-stats"
          >
            <div className="stat">
              <h4>3+</h4>
              <p>Years Learning to Code</p>
            </div>
            <div className="stat">
              <h4>10+</h4>
              <p>Personal & Team Projects</p>
            </div>
            <div className="stat">
              <h4>∞</h4>
              <p>Curiosity and Growth Ahead</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-experience"
        >
          <h3>Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="timeline-item"
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h4>{exp.title}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 