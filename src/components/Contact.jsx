import Folder from "../blocks/Folder"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="galaxy-gradient-text">Get In Touch</h2>
        <p>Let's work together on your next project</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in hearing about new opportunities and 
            exciting projects. Feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            <motion.div
              style={{ position: 'relative', height: '120px', marginTop: '40px' }}
              initial={{ scale: 0.7, opacity: 0, y: 60 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.9, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div style={{
                position: 'absolute',
                left: '50%',
                bottom: 0,
                transform: 'translateX(-50%)'
              }}>
                <Folder size={2} color="#6c5da8" className="custom-folder" items={[
                  <img key="recipe" src="/RecipeApp.png" alt="Recipe App" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block'}} />, 
                  <img key="resonance" src="/resonance.png" alt="Resonance Music" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block'}} />, 
                  <img key="portfolio" src="/portfolio.png" alt="Portfolio Website" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block'}} />
                ]} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 