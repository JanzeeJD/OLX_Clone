import olx from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png' 
import Login from './Login'
import { useState } from 'react'

type Product = {
  id: string;
  image: string;
  price: string;
  title: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

type SearchProp = {
  setSearch: (value: string) => void;
  addProduct: (newProduct: Product) => void;
};

const Navbar = (props: SearchProp) => {
  const [loginPop, setLoginPop] = useState(false);
  const [sellPop, setSellPop] = useState(false);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      image: imagePreview || "",
      price,
      title: productName,
      category,
      description,
      rating: { rate: 0, count: 0 }
    };

    props.addProduct(newProduct);
    setSellPop(false);
  };

  return (

    <>
    <div className='flex p-4 bg-slate-100 shadow-md'>
      <img src={olx} className='w-11 h-9'/>
      <div className='flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white'>
        <img src={lens} className='w-6 h-5 mt-1 ' />
        <input placeholder='Location' className='ml-3 outline-none'/>
        <img src={arrow} className='w-8 h-7' />
      </div>
      <div className='flex h-12 ml-4 border-2 border-black bg-white'>
        <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder='Find Cars, Mobile phone and more..' className='ml-3 w-96 outline-none' />
        <img src={search} />
      </div>
      <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className='font-semibold'>English</h1>
        <img src={arrow} className='w-8 h-7' />
      </div>
      <div onClick={()=> setLoginPop(!loginPop)} className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
        <h1 className='font-bold text-lg'>Login</h1>
      </div>
      <div
          onClick={() => setSellPop(true)}
          className="w-28 flex h-12 p-2 ml-64 cursor-pointer rounded-full border border-yellow-500"
        >
          <h1 className="font-bold text-lg ml-3">+ SELL</h1>
        </div>
    </div>

    {sellPop && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="mt-2 w-full max-w-xs"
                />
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => setSellPop(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  )
}

export default Navbar

