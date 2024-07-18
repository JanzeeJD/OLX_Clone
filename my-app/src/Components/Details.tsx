import { useLocation } from "react-router-dom"

const Details = () => {
  const location = useLocation();
  const data = location?.state?.data;

  if (!data) {
    return <div>Product data not available</div>;
  }

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-50">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={data.image}
          alt={data.title}
          className="w-full max-w-md h-auto object-cover border rounded-lg shadow-md"
        />
      </div>
      <div className="flex-1 ml-0 md:ml-8 mt-4 md:mt-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{data.title}</h1>
        <h2 className="text-2xl text-green-500 font-semibold mb-4">${data.price}</h2>
        <div className="mb-4">
          <span className="text-gray-600 font-semibold">Category: </span>
          <span className="text-gray-800">{data.category}</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-600 font-semibold">Description: </span>
          <p className="text-gray-800">{data.description}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Seller Details</h3>
          <div className="bg-white p-4 border rounded-lg shadow-sm">
            <p className="text-gray-800">JD Seller</p>
            <p className="text-gray-600">Phone: +91 1234567890</p>
            <p className="text-gray-600">Location: Mumbai, India</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-2 md:mb-0 md:mr-2 hover:bg-blue-600">
            Contact Seller
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400">
            Add to Wishlist
          </button>
          
        </div>
      </div>
      
    </div>
  );
};


export default Details
