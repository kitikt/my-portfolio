import { useEffect, useRef } from 'react'

const ParallaxBackground = () => {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = parallaxRef.current
      
      if (parallax) {
        // Tạo hiệu ứng parallax với tốc độ khác nhau cho các layer
        const speed = 0.5
        const yPos = -(scrolled * speed)
        parallax.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="parallax-container">
      {/* Background layers với tốc độ parallax khác nhau */}
      <div className="parallax-layer parallax-layer-1" ref={parallaxRef}>
        <div className="stars"></div>
      </div>
      
      <div className="parallax-layer parallax-layer-2">
        <div className="nebula"></div>
      </div>
      
      <div className="parallax-layer parallax-layer-3">
        <div className="particles"></div>
      </div>
      
      <div className="parallax-layer parallax-layer-4">
        <div className="grid-pattern"></div>
      </div>
    </div>
  )
}

export default ParallaxBackground 