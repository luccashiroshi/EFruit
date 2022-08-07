import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import Cart from './pages/Cart'
import Home from './pages/HomePage'
import './styles/App.css'
function App() {

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}

export default App
