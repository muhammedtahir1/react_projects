import React from "react";
 
const Card = ({values, handleClick, index})=>{

    const {name, image, profession, friends} = values;

    return(
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-32 bg-sky-200">
                <img className="w-full h-full object-cover"  src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h2 className="font-semibold text-xl">{name}</h2>
                <p className="text-xs">{profession}</p>
                <button onClick={()=>handleClick(index)}  className={`px-3 py-1 rounded-md ${friends ? 'bg-green-500' : 'bg-blue-500'} text-xs font-semibold text-white mt-3`} >{friends === true ? "Friends" : "Add friend"}</button>
                
            </div>
        </div>
    )
}

export default Card


