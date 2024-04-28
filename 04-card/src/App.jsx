import React from 'react';
import Card from './Components/Card';

function App(){ 

  const data = ['tahir', 'sam', 'ogNigga'];
  return (
    <div>
      {/* {data.map((elem,index)=>(
        <div key={index} className='px-2 py-2 bg-zinc-300 rounded-md w-fit'>
          {elem}
        </div>

        // Readme.md -> read and implement
      ))} */}

      <Card/>


  

    </div>
  )
}

export default App;