import { ThemeProvider } from "@material-tailwind/react";
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Qualifiactions from './components/Qualifiactions.jsx'
import Technologies from './components/Technologies.jsx'
import Eprojects from "./components/Eprojects.jsx";
import Achievments from "./components/Achievments.jsx"

function App() {
  return (
    <ThemeProvider>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700
      selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className='container mx-auto px-8'>
        <Navbar /> 
        <Hero />
        <About />
        <Qualifiactions />
        <Technologies />
        <Education />
        <Achievments/>
        <Projects />
        <Eprojects/>
        <Contact />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App