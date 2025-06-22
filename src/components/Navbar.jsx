import { motion } from 'framer-motion'

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-brand">
        <motion.a 
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          YourName
        </motion.a>
      </div>
      <ul className="navbar-menu">
        <motion.li whileHover={{ y: -2 }}>
          <a onClick={() => scrollToSection('about')}>About</a>
        </motion.li>
        <motion.li whileHover={{ y: -2 }}>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
        </motion.li>
        <motion.li whileHover={{ y: -2 }}>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
        </motion.li>
        <motion.li whileHover={{ y: -2 }}>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </motion.li>
      </ul>
    </motion.nav>
  )
}

export default NavBar