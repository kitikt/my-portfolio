import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="footer-content"
      >
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <p>Built with ❤️ using React & Framer Motion</p>
      </motion.div>
    </footer>
  )
}

export default Footer 