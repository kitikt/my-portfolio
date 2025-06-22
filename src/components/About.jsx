import { motion } from 'framer-motion'

const About = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of web applications using React and Node.js'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Startup',
      description: 'Built responsive user interfaces and improved user experience'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Developed websites and learned modern web technologies'
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
        <h2>About Me</h2>
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
            I'm a passionate Full Stack Developer with over 3 years of experience 
            creating web applications. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
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
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h4>20+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h4>15+</h4>
              <p>Happy Clients</p>
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