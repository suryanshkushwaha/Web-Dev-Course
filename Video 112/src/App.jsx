import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Suryansh")
  const [form, setForm] = useState({ email: "", phone: "" })

  const handleClick = () => {
    alert("hey i am clicked")
  }
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
        {/* <input type="text" name="" id="" value={name} onChange={handleChange} /> */}
        <input type="text" name='email' value={form.email} onChange={handleChange} />
        <input type="text" name='phone' value={form.phone} onChange={handleChange} />
      </div>
    </>
  )
}

export default App
