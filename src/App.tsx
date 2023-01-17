import './App.css'
import NavBar from './components/NavBar/NavBar'
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectManager from './Pages/ProjectManager/ProjectManager'
import Project from './Pages/Project'
import { useEffect, useMemo } from 'react'
import Footer from './components/Footer/Footer'
import ParticlesComponent from './components/Particles/Particles'
import LinkedIn from './Assets/Icons/linkedin.png'
import Github from './Assets/Icons/github.png'

const footerIcon = [
  {
    alt: 'LinkedIn',
    link: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9my-luu-820419124/',
    icon: LinkedIn,
  },
  {
    alt: 'Github',
    link: 'https://github.com/Jeyluu',
    icon: Github,
  },
]

const copyRight = 'contact'

function App() {
  useEffect(() => {}, [])

  const copyRightStyle = useMemo(() => {
    return copyRight.toUpperCase()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ParticlesComponent />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/create-new-project" element={<Project />} />
            <Route path="/edit-project" element={<ProjectManager />} />
            <Route path="/edit-project/:id" element={<Project />} />
            <Route />
          </Routes>
          <Footer
            filigrane={copyRightStyle}
            copyright={'2023 Jérémy Luu - Développeur Front-End'}
            icons={footerIcon}
          />
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
