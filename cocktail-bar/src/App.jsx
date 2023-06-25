import React from "react"
import Component from "./Router/Index"
import Navbar from "./Componenti/Navbar"
import Sidebar from "./Componenti/Sidebar"
import Footer from "./Componenti/Footer"
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from "./Componenti/context"


function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Sidebar />
        <Component />
        <Footer />
      </Router>
    </AppProvider>
  )
}

export default App
