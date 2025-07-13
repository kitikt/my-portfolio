import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { SiReact, SiJavascript } from 'react-icons/si'

const AdvancedParallaxBackground = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transform cho từng layer
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const nebulaY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const particlesY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const laserY = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"])

  // Lấy width màn hình an toàn
  const [screenW, setScreenW] = useState(1920)
  useEffect(() => {
    setScreenW(window.innerWidth)
  }, [])

  return (
    <div className="advanced-parallax-container" ref={containerRef}>
      {/* Stars Layer */}
      <motion.div 
        className="parallax-layer stars-layer"
        style={{ y: starsY }}
      >
        <div className="stars"></div>
      </motion.div>
      {/* Nebula Layer */}
      <motion.div 
        className="parallax-layer nebula-layer"
        style={{ y: nebulaY }}
      >
        <div className="nebula"></div>
      </motion.div>
      {/* Particles Layer */}
      <motion.div 
        className="parallax-layer particles-layer"
        style={{ y: particlesY }}
      >
        <div className="particles"></div>
      </motion.div>
      {/* Grid Layer */}
      <motion.div 
        className="parallax-layer grid-layer"
        style={{ y: gridY }}
      >
        <div className="grid-pattern"></div>
      </motion.div>
      {/* Laser/Glow Layer */}
      <motion.div 
        className="parallax-layer laser-layer"
        style={{ y: laserY }}
      >
        <div className="laser-glow"></div>
        <div className="laser-line laser-1"></div>
        <div className="laser-line laser-2"></div>
      </motion.div>
      {/* Meteor (sao băng) */}
      <div className="meteor meteor-1"></div>
      <div className="meteor meteor-2"></div>
      <div className="meteor meteor-3"></div>
      {/* Planet (hành tinh) */}
      <motion.div 
        className="planet planet-1"
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="planet planet-2"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      {/* Icon bay qua lại */}
      <motion.div
        className="flying-icon react-icon"
        animate={{ x: [0, screenW + 100], y: [100, 300] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <SiReact size={38} color="#bfc9d1" />
      </motion.div>
      <motion.div
        className="flying-icon js-icon"
        animate={{ x: [screenW + 100, -100], y: [400, 600] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <SiJavascript size={32} color="#e0e0e0" />
      </motion.div>
      {/* Floating Elements (optional) */}
      <motion.div 
        className="floating-elements"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
      </motion.div>
    </div>
  )
}

export default AdvancedParallaxBackground 