import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"
import {Product} from "./Home"


const Main = () => {
  const [prod, setProd] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  

  useEffect(() => {
    const getProducts = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProd(json));
    };
    getProducts();
  }, []);


  const addProduct = (newProduct: Product) => {
    setProd(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <Navbar setSearch={setSearch} addProduct={addProduct} />
      <Menubar />
      <Home products={prod} search={search} />
      <Footer />
    </div>
  );
};

export default Main;
