import { useState } from 'react'

function App() {

  let [color, setColor] = useState('bg-gray-300')

  function changeColor(bg){
    setColor(color = bg)
    // or change the parameter to - color 
    // setColor(color)
  }

  // Rather than using this above function - we can use 'setColor' directly
  // used in buttons - blue and green 
  

  return (
    
    <section className='h-screen w-screen bg-gray-300' 
      style={{backgroundColor:color}}>
    <div className='h-full flex gap-3 items-center justify-center'>
      <button className='bg-red-600 text-white' onClick={()=>{changeColor('rgb(220 38 38)')}}>
        Red
      </button>
      <button className='bg-green-600 text-white' onClick={()=>{setColor('rgb(22 163 74)')}} >Green</button>
      <button className='bg-blue-600 text-white' onClick={()=>{setColor('rgb(37 99 235)')}} >Blue</button>
    </div>
    </section>
    
  )
}

export default App
