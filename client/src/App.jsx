import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Nav from './components/ui/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Home/>  
    </>
  )
}

export default App
