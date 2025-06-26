import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { useRef, useEffect } from 'react'

const NavBar = () => {
  const navbarRef = useRef(null)
  const lastScrollPosRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const navbar = navbarRef.current
      if (navbar) {
        if (scrollTop > lastScrollPosRef.current) {
          navbar.style.transition = 'all 0.4s ease'
          navbar.style.transform = 'translateY(-100%)'
        } else {
          navbar.style.transition = 'all 0.6s ease'
          navbar.style.transform = 'translateY(0)'
        }
      }
      lastScrollPosRef.current = scrollTop
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="navbar"
      ref={navbarRef}
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
          MY PORTFOLIO
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
        <motion.li whileHover={{ y: -2 }}>
          <ThemeToggle />
        </motion.li>
      </ul>
    </motion.nav>
  )
}

export default NavBar