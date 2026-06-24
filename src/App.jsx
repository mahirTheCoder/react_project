import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import AOS from 'aos';
import Layout from './Componets/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App