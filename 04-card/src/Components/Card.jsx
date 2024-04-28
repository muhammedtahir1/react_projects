import React from 'react'

const Card = () => {


    const data = [
        {image: 'https://images.unsplash.com/photo-1617195920791-e42b4d1e559a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Audi TT', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat voluptas deserunt magnam facilis.", instock: false},
        {image: 'https://www.insidehook.com/wp-content/uploads/2023/12/wolf-of-wall-street-lamborghini-rm-sothebys.jpg?w=1500&resize=1500%2C1000', title: 'Lamborghini countach', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat voluptas deserunt.", instock: true},
        {image: 'https://images.unsplash.com/photo-1610905376670-5e7e0e8a3cfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Formula 1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus id velit minus? Ex, aperiam enim", instock: false}
    ];


  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center gap-10'>
        {data.map((elem, index)=>(
            <div className='w-52 rounded-md bg-zinc-100 overflow-hidden '>
            <div className='w-full h-32 bg-zinc-300'>
                <img className='w-full h-full object-cover'  src={elem.image} alt=""/>
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>{elem.title}</h2>
                <p className='text-xs mt-3'>{elem.description}</p>
                <button className={`px-4 py-1 text-xs ${elem.instock ? "bg-blue-600" : "bg-red-600"} rounded mt-3 text-white`}>{
                    elem.instock ? "In stock" : "Out of stock"
                }</button>
            </div>
        </div>

        ))}
    </div>
  )
}

export default Card