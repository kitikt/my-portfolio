import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import CircularText from '../blocks/CircularText'
import Magnet from '../blocks/Magnet'
import ProfileCard from '../blocks/ProfileCard'
import RotatingText from '../blocks/RotatingText'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Hi, I'm  Tran Gia Kiet "
  
  const handleArrowClick = () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() =>{
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="typing-text">{text}<span className="cursor">|</span></h1>
          <RotatingText
            texts={[
              "a UI/UX Designer",
              "a Frontend Developer",
              "a Pixel-perfect Thinker",
              "a Design System Lover",
              "a Code-driven Designer",
            ]}
            rotationInterval={2000}
            style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1.2, color: '#fff', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
          />
          <CircularText
            text="SCROLL*DOWN*TO*SEE*MORE*"
            onHover="speedUp"
            spinDuration={30}
            className="custom-class"
            onArrowClick={handleArrowClick}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-actions"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Magnet padding={50} disabled={false} magnetStrength={1}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button primary"
              onClick={() => window.open('https://github.com/kitikt', '_blank')}
            >
              View My Work
            </motion.button>
          </Magnet>
          <Magnet padding={50} disabled={false} magnetStrength={1}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button secondary"
            >
              Download CV
            </motion.button>
          </Magnet>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hero-image"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="floating-card">
          <div className="code-snippet">
            <pre>
            <ProfileCard
  name="Tran Gia Kiet"
  title="Software Engineer"
  handle="kiettran"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/avatar.png"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
              {/* <code>
{`function createPortfolio() {
  return {
    passion: "coding",
    skills: ["React", "Node.js"],
    goal: "build amazing apps"
  }
}`}
              </code> */}
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 