import React from 'react'

export const Footer = () => {
  return (
    <div> {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">OLX</div>
              <p className="text-gray-400 mb-4">
                India's largest marketplace for buying and selling
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer">f</div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center cursor-pointer">t</div>
                <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center cursor-pointer">i</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Popular Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Cars</li>
                <li className="hover:text-white cursor-pointer">Properties</li>
                <li className="hover:text-white cursor-pointer">Mobile Phones</li>
                <li className="hover:text-white cursor-pointer">Jobs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Popular Locations</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Kochi</li>
                <li className="hover:text-white cursor-pointer">Thiruvananthapuram</li>
                <li className="hover:text-white cursor-pointer">Kozhikode</li>
                <li className="hover:text-white cursor-pointer">Thrissur</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">About OLX</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">OLX Blog</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OLX India. All rights reserved.</p>
          </div>
        </div>
      </footer></div>
  )
}
