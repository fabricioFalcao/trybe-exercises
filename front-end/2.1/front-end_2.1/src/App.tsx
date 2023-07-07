import { useState } from 'react'
import './App.css'
import HelloWorld from './Components/HelloWorld'
import { calculateAge } from './utilities/age'


function App() {
  const name = 'John Connor';
  const birth = '11/02/1989';
  const age = calculateAge(birth);
  

  return (
    <>
      <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
      <p>{`Age ${age}`}</p>
      <HelloWorld />
    </>
  )
}

export default App
