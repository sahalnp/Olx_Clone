import React from 'react'

export const HeroSection = () => {
  return (
    <div> <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            India's Largest Marketplace
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Buy and Sell everything from Cars to Mobile Phones
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Buying
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Start Selling
            </button>
          </div>
        </div>
      </section></div>
  )
}
