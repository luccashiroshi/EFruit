import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/HomePage'
import api from './services/api'
import './styles/App.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
