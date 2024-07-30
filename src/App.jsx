import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/categoria/:cat' element={<ItemListConteiner />} />
          <Route path='/detalle/:id' element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
