import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/detalle' element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
