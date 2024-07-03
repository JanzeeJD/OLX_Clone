import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home"


const main = () => {

  const [prod,setProd] = useState([])

  const getProducts = () =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProd(json))
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
      <Navbar/>
      <Menubar/>
      <Home products={prod}/>
    </div>
  )
}

export default main
