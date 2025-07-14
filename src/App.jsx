import './App.css'
import { useState, useEffect, useRef } from 'react'
import { track } from '@vercel/analytics';
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
  // --- TRACK TIME ON PAGE ---
  useEffect(() => {
    const start = Date.now();
    const handleUnload = () => {
      const duration = Math.round((Date.now() - start) / 1000);
      track('time_on_page', { duration });
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      handleUnload();
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  // --- TRACK SCROLL COUNT ---
  const scrollCount = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      scrollCount.current += 1;
    };
    window.addEventListener('scroll', onScroll);
    const handleUnload = () => {
      track('scroll_count', { count: scrollCount.current });
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      handleUnload();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

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
