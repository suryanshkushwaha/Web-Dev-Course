import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
  const value = useContext(counterContext)
  return (
    <div><button onClick={() => value.setCount((count) => count + 1)}><Component1 /> I am a button</button></div>
  )
}

export default Button