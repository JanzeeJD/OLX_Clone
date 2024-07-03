
type productsProp ={
  products:any
}

const Home = (props:productsProp) => {
  return (
    <div className="grid grid-cols-4 p-5">
      {props?.products?.map((data:any)=>{
        return <div className="border border-spacing-1 p-2 ml-3 mt-3">
         <img src={data?.image} className="w-60 h-48" />
         <h1 className="font-bold text-xl">$ {data?.price} </h1>
         <h1> {data?.title} </h1>
         <h1> {data?.category} </h1>
        </div>
      })}
    </div>
  )
}

export default Home
