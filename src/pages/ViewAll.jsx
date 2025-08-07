import React, { useEffect, useState } from "react";
import { ArrowRight, Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ViewAll = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const unsoldProducts = storedProducts.filter(product => !product.buy);
  setProducts(unsoldProducts.slice(0, 9));
}, []);


  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">All Featured Products</h2>
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Go Back <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>

        {products.length === 0 ? (
          <p className="text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((ad, index) => (
              <div
                key={ad.id || index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group cursor-pointer"
              >
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                     <img
                     src={ad.firstImage} alt={ad.title}
                      className="h-full object-contain"
                    />
                  </div>
              
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {ad.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    ₹{Math.round(ad.price )+".00"}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    India
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewAll;
