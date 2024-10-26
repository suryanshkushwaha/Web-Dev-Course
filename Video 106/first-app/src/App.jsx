import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="card 1" description="i am card 1"/>
        <Card title="card 2" description="i am card 2"/>
        <Card title="card 3" description="i am card 3"/>
        <Card title="card 4" description="i am card 4"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
