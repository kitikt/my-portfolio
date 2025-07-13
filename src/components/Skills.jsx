import { motion } from 'framer-motion'
import ScrollVelocity from '../blocks/ScrollVelocity'
import { 
  SiFigma, 
  SiMongodb, 
  SiAntdesign, 
  SiMui, 
  SiChakraui,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiCss3,
  SiGit,
  SiHtml5,
  SiTailwindcss
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { 
      name: 'React', 
      level: 'Advanced', 
      icon: <SiReact />, 
      color: '#61dafb',
      description: 'Modern React with Hooks, Context, and Performance optimization'
    },
    { 
      name: 'JavaScript', 
      level: 'Advanced', 
      icon: <SiJavascript />, 
      color: '#f7df1e',
      description: 'ES6+, Async/Await, DOM manipulation, and modern JS patterns'
    },
    { 
      name: 'Node.js', 
      level: 'Intermediate', 
      icon: <SiNodedotjs />, 
      color: '#339933',
      description: 'Server-side development, Express.js, and RESTful APIs'
    },
    { 
      name: 'TypeScript', 
      level: 'Intermediate', 
      icon: <SiTypescript />, 
      color: '#3776ab',
      description: 'Type safety, interfaces, and advanced TypeScript features'
    },
    { 
      name: 'CSS/SCSS', 
      level: 'Advanced', 
      icon: <SiCss3 />, 
      color: '#1572b6',
      description: 'Responsive design, animations, and modern CSS techniques'
    },
    { 
      name: 'Git', 
      level: 'Intermediate', 
      icon: <SiGit />, 
      color: '#f05032',
      description: 'Version control, branching strategies, and collaboration'
    },
    { 
      name: 'HTML5', 
      level: 'Advanced', 
      icon: <SiHtml5 />, 
      color: '#e34f26',
      description: 'Semantic HTML, accessibility, and modern web standards'
    },
    { 
      name: 'Tailwind CSS', 
      level: 'Intermediate', 
      icon: <SiTailwindcss />, 
      color: '#06b6d4',
      description: 'Utility-first CSS framework and responsive design'
    }
  ]

  const otherSkills = [
    <><SiFigma /> Figma</>,
    <><SiMongodb /> MongoDB</>,
    <><SiAntdesign /> Ant Design</>,
    <><SiMui /> Material UI</>,
    <><SiChakraui /> Chakra UI</>,
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return '#10b981' // green
      case 'Intermediate':
        return '#f59e0b' // amber
      case 'Beginner':
        return '#ef4444' // red
      default:
        return '#6b7280' // gray
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

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
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="skill-card"
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <div className="skill-card-header">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span 
                  className="skill-level-badge"
                  style={{ backgroundColor: getLevelColor(skill.level) }}
                >
                  {skill.level}
                </span>
              </div>
            </div>
            <p className="skill-description">{skill.description}</p>
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