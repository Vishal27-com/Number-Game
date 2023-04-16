import React from 'react'
import './App.css'
import AllRoutes from './Components/AllRoutes'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div id='root'>
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App