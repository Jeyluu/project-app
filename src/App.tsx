import './App.css'
import NavBar from './components/NavBar/NavBar'
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewProject from './Pages/NewProject'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/create-new-project" element={<NewProject />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
