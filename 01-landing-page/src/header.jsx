const Header = () => {

  return(
    <>
      <div className="px-20 py-7 font-sans flex justify-between items-center bg-gray-700 text-white">
        <div className="text-2xl font-bold italic">
        <h2>Hotel+</h2>
        </div>

        <nav className="flex gap-10 font-base">
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Dining</a>
          <a href="#">Contact</a>
        </nav>



      </div>
    </>
  )
}

export default Header