import { motion } from 'framer-motion'
import ScrollVelocity from '../blocks/ScrollVelocity'
import { SiFigma, SiMongodb, SiAntdesign, SiMui, SiChakraui } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'TypeScript', level: 75, color: '#3776ab' },
    { name: 'CSS/SCSS', level: 85, color: '#1572b6' },
    { name: 'Git', level: 80, color: '#f05032' }
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const otherSkills = [
    <><SiFigma /> Figma</>,
    <><SiMongodb /> MongoDB</>,
    <><SiAntdesign /> Ant Design</>,
    <><SiMui /> Material UI</>,
    <><SiChakraui /> Chakra UI</>,
  ]

  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="section-header"
      >
        <h2 className="galaxy-gradient-text">Skills & Technologies</h2>
        <p>Here are the technologies I work with</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="skills-grid"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="skill-item"
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
              
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                style={{ backgroundColor: skill.color }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="skills-extra"
      >
        <h3>Other Skills</h3>
        <ScrollVelocity
          texts={otherSkills}
          velocity={100}
          className="custom-scroll-text"
        />
      </motion.div>
    </section>
  )
}

export default Skills 