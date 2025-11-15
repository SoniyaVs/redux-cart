import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import View from './pages/View'
import PNF from './pages/PNF'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products/:id/view' element={<View/>} />
        <Route path='/*' element={<PNF/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
