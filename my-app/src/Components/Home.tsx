import { Link } from "react-router-dom"

export type Product = {
  id: string;
  image: string;
  price:string;
  title:string;
  category:string;
};

type ProductsProp = {
  products: Product[];
  search:any
};

const Home = (props: ProductsProp) => {
  const productsArray = props.products
    console.log("jancy", props.products);

  return (
    <div className="grid grid-cols-4 p-5">
      {productsArray.filter((data:any)=> data?.title?.includes(props?.search)).map((data: Product) => (
        <Link to="/details" state={{data:data}}>
        <div className="border border-spacing-1 p-2 ml-3 mt-3" key={data.id}>
          <img className="w-60 h-48" src={data.image} alt={`Product ${data.id}`} />
          <h1 className="font-bold text-xl">$ {data?.price}</h1>
          <h1>{data?.title}</h1>
          <h1>{data?.category}</h1>
        </div>
        </Link>
      ))}
    </div> 
  );
};

export default Home
