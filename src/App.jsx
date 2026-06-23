import React from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import Summary from './pages/Summary'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Summary' element={<Summary />} />
      </Routes>
  )
}

export default App
