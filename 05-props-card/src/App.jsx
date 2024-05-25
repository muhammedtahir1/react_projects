import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const raw = [
    {name: "Tahir", profession: "Warrior", image: "https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", friends: false},
    {name: "Omar", profession: "Artist", image: "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", friends: false},
    {name: "Ronaldo", profession: "Footballer", image: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", friends: false},
    {name: "Khabib", profession: "MMA fighter", image: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", friends: false}
  ];
  
  const [data, setData] = useState(raw)

  const handleFriends = (cardIndex)=>{
    setData((previous)=>{
      return previous.map((item, index)=>{
        if(index === cardIndex){
          return {...item, friends: !item.friends}

        } 
        return item;
      })
    })
  }


  return (

    <div  className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {data.map((item, index)=>(
        <Card values={item} index={index} handleClick={handleFriends} key={index}  />
        
        // Another method
        // <Card image={item.image} name={item.name} prof={item.profession} friends={item.friends} />
      ))}
    </div>
  )
}

export default App