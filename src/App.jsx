import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import InteriorDesign from './pages/InteriorDesign'

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<InteriorDesign />} />
      </Routes>
    </Router>
  )
}

export default App
