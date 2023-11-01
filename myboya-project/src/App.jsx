import React from 'react'
import './App.css'
import Inicio from './components/Inicio/Inicio'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Contacto from './components/Contacto/Contacto'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Inicio /> */}
      <Contacto />
      <Footer />

    </div>
  
  )
}

export default App