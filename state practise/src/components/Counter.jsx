import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleChange = (val) => {
    if (count < 0) {
      setCount(count);
    } else {
      setCount(count + val);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col gap-10 items-center justify-center bg-slate-300">
      <h1 className="text-4xl font-semibold">{count}</h1>
      <div className="flex gap-10 mt-5">
        <button
          className="px-4 py-1 rounded text-sm text-white bg-blue-400"
          onClick={() => {
            handleChange(+1);
          }}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 rounded text-sm text-white bg-red-400"
          onClick={() => {
            handleChange(-1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
