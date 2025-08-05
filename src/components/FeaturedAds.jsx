import React from "react";
import { ArrowRight, Camera, Heart, MapPin } from "lucide-react";

export const FeaturedAds = () => {
    const featuredAds = [
        {
            id: 1,
            image: '/api/placeholder/300/200',
            title: 'iPhone 14 Pro Max 256GB',
            price: '₹85,000',
            location: 'Kochi, Kerala',
            time: '2 hours ago',
            featured: true
        },
        {
            id: 2,
            image: '/api/placeholder/300/200',
            title: '2BHK Apartment for Rent',
            price: '₹18,000/month',
            location: 'Thiruvananthapuram, Kerala',
            time: '4 hours ago',
            featured: false
        },
        {
            id: 3,
            image: '/api/placeholder/300/200',
            title: 'Honda City 2019 Model',
            price: '₹12,50,000',
            location: 'Kozhikode, Kerala',
            time: '6 hours ago',
            featured: true
        },
        {
            id: 4,
            image: '/api/placeholder/300/200',
            title: 'MacBook Air M2',
            price: '₹95,000',
            location: 'Thrissur, Kerala',
            time: '8 hours ago',
            featured: false
        },
        {
            id: 5,
            image: '/api/placeholder/300/200',
            title: 'Royal Enfield Classic 350',
            price: '₹1,45,000',
            location: 'Kannur, Kerala',
            time: '1 day ago',
            featured: true
        },
        {
            id: 6,
            image: '/api/placeholder/300/200',
            title: 'Dining Table Set',
            price: '₹25,000',
            location: 'Palakkad, Kerala',
            time: '1 day ago',
            featured: false
        }
    ];

    return (
        <div>
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Fresh Recommendations
                        </h2>
                        <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                            View All <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredAds.map((ad) => (
                            <div
                                key={ad.id}
                                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group cursor-pointer"
                            >
                                <div className="relative">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        <Camera className="h-12 w-12 text-gray-400" />
                                    </div>
                                    {ad.featured && (
                                        <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                                            FEATURED
                                        </div>
                                    )}
                                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                                        <Heart className="h-4 w-4 text-gray-600" />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {ad.title}
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-900 mb-2">
                                        {ad.price}
                                    </p>
                                    <div className="flex items-center text-sm text-gray-500 mb-1">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {ad.location}
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {ad.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedAds;