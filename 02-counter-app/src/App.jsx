import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // let counter = 0;
  const [counter, setCounter] = useState(0)

  const addValue = ()=>{
    // setCounter(counter + 1) 
    // setCounter(counter + 1) 
    // Below line is used to solve Backlash in react 
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = ()=>{
    // setCounter(counter - 1)
    if(counter>0){
      setCounter(counter=> counter -1)
    }
  }



  return (
    <>
      
      <h1>React Counter : {counter} </h1>
      <button onClick={addValue}>
        Add value
      </button> {" "}
      <button onClick={removeValue}>
        Remove value
      </button>
      <p>Value: {counter} </p>

      
    </>
  )
}

export default App
