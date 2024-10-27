import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "I am a good todo"
    },
    {
      title: "another",
      desc: "I am a good alsjflsak"
    },
    {
      title: "third",
      desc: "I am a good ajajsjjajjaj"
    }
  ])


  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border border-spacing-1 border-blue-800 border-solid">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    )
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn?<button>I will be shown when other button is clicked</button>:"thenga"} */}
      {showBtn && <button>I will be shown when other button is clicked</button>}
      {todos.map(todo => {
        return <Todo key={todo.title} todo={todo} />
      })}
      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
