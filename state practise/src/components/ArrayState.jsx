import React, { useState } from "react";

const ArrayState = () => {

  const [val, setVal] = useState([0, 1, 2, 3, 4, 5, 6]);

  return (
        <div className="h-screen w-full bg-stone-300 flex flex-col items-center justify-center gap-3">
            {val.map((item, index)=> <h1 key={index} className="bg-slate-400 px-3 py-1 rounded" >{item}</h1> )}

            <button className="px-3 py-1 rounded bg-red-500 text-white" onClick={()=>{setVal(()=>{
                return val.filter((item, index)=> index!= val.length-1 )
            })}}>click</button>
            {/* to remove elements from the last */}
            
            {/* <button className="px-3 py-1 rounded bg-red-500 text-white"  onClick={()=>{
                setVal(()=> val.filter((item, index)=> index!=3 ))
            }}>click</button> */}
            {/* The above one is to remove the element 3 from array */}

            {/* <button className="px-3 py-1 rounded bg-red-500 text-white" onClick={()=>{
                setVal([...val, 7])
            }}>click</button> */}
            {/* to add an element into the array */}



        </div>
    );
};

export default ArrayState;
