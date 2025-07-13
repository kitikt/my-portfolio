import './App.css'
import { useState, useEffect } from 'react'
import NavBar from '@components/Navbar'
import Hero from '@components/Hero'
import About from '@components/About'
import Skills from '@components/Skills'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import ClickSpark from '@blocks/ClickSpark'
import AdvancedParallaxBackground from '@blocks/AdvancedParallaxBackground'
import LoadingScreen from '@components/LoadingScreen'
import { ThemeProvider } from '@context/ThemeContext'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập loading 3 giây, có thể thay bằng fetch dữ liệu thực tế
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <AdvancedParallaxBackground />
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <NavBar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          {/* <Footer /> */}
        </ClickSpark>
      </div>
    </ThemeProvider>
  )
}

export default App
