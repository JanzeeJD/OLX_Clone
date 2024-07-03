import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"


const main = () => {

  const [prod,setProd] = useState([])
  const [search,setSearch] = useState("")

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
      <Navbar setSearch={setSearch} />
      <Menubar/>
      <Home products={prod} search={search} />
      <Footer/>
    </div>
  )
}

export default main
