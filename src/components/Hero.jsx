import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ClickSpark from '@blocks/ClickSpark'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Hi, I'm a Full Stack Developer"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
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
        >
          <h1 className="typing-text">{text}<span className="cursor">|</span></h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="hero-subtitle"
          >
            I create beautiful and functional web applications
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-actions"
        >
          <ClickSpark sparkColor='#6366f1' sparkCount={12}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button primary"
            >
              View My Work
            </motion.button>
          </ClickSpark>
          <ClickSpark sparkColor='#fff' sparkCount={12}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button secondary"
            >
              Download CV
            </motion.button>
          </ClickSpark>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hero-image"
      >
        <div className="floating-card">
          <div className="code-snippet">
            <pre>
              <code>
{`function createPortfolio() {
  return {
    passion: "coding",
    skills: ["React", "Node.js"],
    goal: "build amazing apps"
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 