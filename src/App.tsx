import './App.css'
import NavBar from './components/NavBar/NavBar'
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectManager from './Pages/ProjectManager/ProjectManager'
import Project from './Pages/Project'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/create-new-project" element={<Project />} />
            <Route path="/edit-project" element={<ProjectManager />} />
            <Route path="/edit-project" element={<Project />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
