import ThemeToggle from './ThemeToggle'
import { useRef, useEffect, useState } from 'react'

const NavBar = () => {
  const navbarRef = useRef(null)
  const lastScrollPosRef = useRef(0)
  const [menuOpen, setMenuOpen] = useState(false)

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  // Đóng menu khi click overlay ngoài menu
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('navbar-overlay')) {
      setMenuOpen(false)
    }
  }

  return (
    <nav 
      className="navbar"
      ref={navbarRef}
    >
      <div className="navbar-brand">
        <a 
          href="/"
        >
          MY PORTFOLIO
        </a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a onClick={() => scrollToSection('about')}>About</a>
        </li>
        <li>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
        </li>
        <li>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
        </li>
        <li>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
      {/* Hamburger icon for responsive */}
      <button className={`navbar-hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Responsive menu overlay */}
      {menuOpen && (
        <div className="navbar-overlay" onClick={handleOverlayClick}>
          <div className="navbar-overlay-menu-wrapper">
            <ul className="navbar-overlay-menu">
              <li><button className="drawer-menu-btn" onClick={() => scrollToSection('about')}>About</button></li>
              <li><button className="drawer-menu-btn" onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button className="drawer-menu-btn" onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button className="drawer-menu-btn" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar