import './App.css'
import NavBar from '@components/Navbar'
import Hero from '@components/Hero'
import About from '@components/About'
import Skills from '@components/Skills'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import ClickSpark from '@blocks/ClickSpark'
import { ThemeProvider } from '@context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
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
          <Footer />
        </ClickSpark>
      </div>
    </ThemeProvider>
  )
}

export default App
