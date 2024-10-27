import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1000) // Use state basically helps that the variable value changes throughout the program!
  let a = 5;

  return (
    <>
      <div>The count is {count}</div>
      {/* <div>The count is {a}</div> */}
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      {/* <button onClick={()=>a = (a+1)}>Update Count</button> now this will not change the value of a above it because it's above! it will only change for below values like a normal program but with use state it chagnes everywhere as we saw */}
    </>
  )
}

export default App
