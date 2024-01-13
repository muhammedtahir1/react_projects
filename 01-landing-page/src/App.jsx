import Header from './header'
import Footer from './footer'
import Pricing from './pricing'
import Contact from './contact'

const App = ()=>{


  return(
    <main className="">
      
      <Header/>

      <div className='px-20 py-10 bg-slate-200 h-[87vh] border-gray-700 border-b flex items-center'>
        <section className='flex items-center gap-20'>
          <div className=''>
            <h1 className="text-8xl font-bold text-gray-700">
              Grand Emily 
            </h1>
            <h1 className='text-right text-8xl font-bold mb-10 text-gray-700'>Hotel</h1>
            <h2 className='text-xl italic mb-2'>
              Your Oasis of Luxury Comfort.
            </h2>
            <button className='bg-gray-700 text-white px-3 py-2 rounded-xl italic'>
              Let's Go!
            </button>
          </div>
          <img alt="Home Image" src='../public/home.jpg' className='w-3/6 rounded-3xl'/>
        </section>

      </div>


      <Pricing/>

      <Contact/>

      <Footer/>

    </main>
  )
}

export default App