import React, { useState } from 'react';
import { Heart, Share2, Flag, MapPin, Calendar, Eye, Phone, MessageCircle, Star, ChevronLeft, ChevronRight, Shield, Truck, RefreshCw } from 'lucide-react';

const ProductDetailPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPhone, setShowPhone] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const product = {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB - Excellent Condition',
    price: '₹85,000',
    originalPrice: '₹1,39,900',
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    location: 'Kochi, Kerala',
    postedDate: '2 hours ago',
    views: '1,234',
    adId: 'OLX123456789',
    condition: 'Excellent',
    brand: 'Apple',
    model: 'iPhone 14 Pro Max',
    storage: '256GB',
    color: 'Deep Purple',
    description: `iPhone 14 Pro Max 256GB in excellent condition. Barely used for 3 months. All accessories included in box.

Features:
• 6.7-inch Super Retina XDR display
• A16 Bionic chip
• Pro camera system with 48MP main camera
• Up to 29 hours video playback
• Face ID for secure authentication

Reason for selling: Upgrading to iPhone 15 Pro Max

No scratches or dents. Battery health is 98%. Original box, charger, and unused earphones included.

Serious buyers only. No exchange offers please.`,
    seller: {
      name: 'Rajesh Kumar',
      memberSince: 'Feb 2019',
      location: 'Kochi, Kerala',
      rating: 4.5,
      totalAds: 12,
      phoneNumber: '+91 98765 43210'
    },
    features: [
      { label: 'Brand', value: 'Apple' },
      { label: 'Model', value: 'iPhone 14 Pro Max' },
      { label: 'Storage', value: '256GB' },
      { label: 'Color', value: 'Deep Purple' },
      { label: 'Condition', value: 'Excellent' },
      { label: 'Battery Health', value: '98%' }
    ]
  };

  const relatedAds = [
    {
      id: 2,
      title: 'iPhone 13 Pro 128GB',
      price: '₹65,000',
      image: '/api/placeholder/200/150',
      location: 'Thiruvananthapuram'
    },
    {
      id: 3,
      title: 'Samsung Galaxy S23 Ultra',
      price: '₹75,000',
      image: '/api/placeholder/200/150',
      location: 'Kozhikode'
    },
    {
      id: 4,
      title: 'iPhone 14 128GB',
      price: '₹70,000',
      image: '/api/placeholder/200/150',
      location: 'Thrissur'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-500">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-blue-600 cursor-pointer">Mobiles</span>
            <span className="mx-2">/</span>
            <span className="hover:text-blue-600 cursor-pointer">Mobile Phones</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">iPhone</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Product Image {currentImageIndex + 1}</span>
                  </div>
                </div>
                
                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                  {currentImageIndex + 1} / {product.images.length}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`p-2 rounded-full shadow-md ${
                      isFavorited ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    <Heart className="h-5 w-5" fill={isFavorited ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-50">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-50">
                    <Flag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 bg-gray-200 rounded border-2 ${
                      currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <span className="text-xs text-gray-400">{index + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-green-600">{product.price}</div>
                {product.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">{product.originalPrice}</div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{feature.label}</span>
                    <span className="font-medium">{feature.value}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <div className="text-gray-700 whitespace-pre-line">{product.description}</div>
              </div>

              {/* Safety Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">Safety Tips</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Meet in a public place</li>
                      <li>• Check the item before you buy</li>
                      <li>• Pay only after collecting the item</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Seller Info and Actions */}
          <div className="space-y-6">
            {/* Price and Location */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{product.price}</div>
              <div className="flex items-center text-gray-600 mb-1">
                <MapPin className="h-4 w-4 mr-1" />
                {product.location}
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                {product.postedDate}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Eye className="h-4 w-4 mr-1" />
                {product.views} views
              </div>
            </div>

            {/* Contact Seller */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Seller</h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="w-full flex items-center justify-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {showPhone ? product.seller.phoneNumber : 'Show Phone Number'}
                </button>
                
                <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat
                </button>
              </div>

              {/* Seller Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-3">Seller Information</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name</span>
                    <span className="font-medium">{product.seller.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member since</span>
                    <span>{product.seller.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total ads</span>
                    <span>{product.seller.totalAds}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{product.seller.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad ID */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-sm text-gray-600">
                Ad ID: <span className="font-medium">{product.adId}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Ads */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Ads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedAds.map((ad) => (
              <div key={ad.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Related Product</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{ad.title}</h3>
                  <p className="text-xl font-bold text-green-600 mb-1">{ad.price}</p>
                  <p className="text-sm text-gray-500">{ad.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;