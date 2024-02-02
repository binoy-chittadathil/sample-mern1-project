import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [name,setName]=useState('')
  function sampleButtonHandler(){
    axios.get('http://localhost:3000/sample').then(({data})=>{
      setName(data)
    }).catch(err=>console.log(err))
  }

  return (
    
    <div>
      <h1>hi iam sample mern1</h1>
      <button onClick={sampleButtonHandler}>click me</button>
      <h2>hi {name}</h2>
    </div>
  )
}

export default App
