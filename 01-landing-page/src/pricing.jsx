const Pricing = ()=>{

  return(
    <>
      <section className="px-20 py-20 bg-slate-300 h-screen ">
        <h1 className="text-7xl font-bold text-gray-700 text-center mb-20">
          Pricing!
        </h1>

        <div className="flex gap-10 items-center justify-center">
          <article className="bg-gray-700 text-white border border-slate-500 text-center h-72 w-72 rounded-3xl py-8">
            <h2 className="text-5xl font-bold mb-5">Basic</h2> 
            <h1 className="text-4xl font-bold mb-3">$99</h1>
            <p className="text-lg mb-4">Deluxe Room </p>
            <button className='bg-slate-300 text-black px-3 py-2 rounded-xl italic'>
              Buy now!
            </button>
          </article>


          <article className="bg-slate-300 text-black border border-slate-500 text-center h-72 w-72 rounded-3xl py-8">
            <h2 className="text-5xl font-bold mb-5">Standard</h2> 
            <h1 className="text-4xl font-bold mb-3">$299</h1>
            <p className="text-lg mb-4">Executive Suite</p>
            <button className='bg-gray-700 text-white px-3 py-2 rounded-xl italic'>
              Buy now!
            </button>
          </article>

          <article className="bg-gray-700 text-white border border-slate-500 text-center h-72 w-72 rounded-3xl py-8">
            <h2 className="text-5xl font-bold mb-5">Premium</h2> 
            <h1 className="text-4xl font-bold mb-3">$499</h1>
            <p className="text-lg mb-4">Roof Top Lounge</p>
            <button className='bg-slate-300 text-black px-3 py-2 rounded-xl italic'>
              Buy now!
            </button>
          </article>

        </div>

      </section>
    </>
  )
}

export default Pricing