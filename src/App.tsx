
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/homepage';
import Projectdet from './pages/projectdet';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project/:slug" element={<Projectdet />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
