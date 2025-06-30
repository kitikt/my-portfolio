import Folder from "../blocks/Folder"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div
        className="section-header"
      >
        <h2 className="galaxy-gradient-text">Get In Touch</h2>
        <p>Let's work together on your next project</p>
      </div>

      <div className="contact-content">
        <div
          className="contact-info"
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
            
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>trangiakit1010@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <p>+84 934501071</p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '120px', marginTop: '40px' }}>
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
            </div>
          </div>

 
        </div>

        <div
          className="contact-form"
        >
          <form
            action="https://formsubmit.co/trangiakit1010@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div
              className="form-group"
            >
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div
              className="form-group"
            >
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div
              className="form-group"
            >
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div
              className="form-group"
            >
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
        </div>
      </div>
    </section>
  )
}

export default Contact 