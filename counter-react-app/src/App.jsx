import Nav from "./nav"
import Pricing from "./pricing"
// import Footer from "./footer"
import ProductCard from "./footer"
import { useState } from "react"
const App = () =>{

  // const count = 0
  const [count, setCount] = useState(0)
  const name = "faizan"
  const c2 = 0

  setTimeout(() => {
    setCount(5);
    
  }, 3000);

  return(
    <main>

      {count}
      {count}
      {count}
      {count}
      {count}
      {count}
      {count}

{/* 
      <Nav/>
      <Pricing/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/> */}
    </main>
  )
}

export default App