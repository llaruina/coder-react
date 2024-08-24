import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContex'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/checkout'

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListConteiner />} />
            <Route path='/categoria/:cat' element={<ItemListConteiner />} />
            <Route path='/detalle/:id' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
