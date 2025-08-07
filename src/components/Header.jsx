import React, { useState } from "react";
import { Search, MapPin, User, Heart, Plus } from "lucide-react";
import { useUser } from "../hooks/Context";
import { logOut } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const { user, setUser } = useUser();
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("Kerala");
    const navigate = useNavigate();

    const handleLogout = () => {
        const result = logOut();
        alert(result.message);
        setUser(null);
        navigate("/login");
    };

    return (
        <div>
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="text-3xl font-bold text-blue-600">
                                OLX
                            </div>
                        </div>
                        <div className="flex-1 max-w-2xl mx-8">
                            <div className="flex">
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Find Cars, Mobile Phones and more..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MapPin className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                        className="block w-48 pl-10 pr-8 py-2 border border-l-0 border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option>Kerala</option>
                                        <option>Tamil Nadu</option>
                                        <option>Karnataka</option>
                                        <option>Maharashtra</option>
                                    </select>
                                </div>
                                <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Right Menu */}
                        <div className="flex items-center space-x-4">
                

                            {user ? (
                                <div className="flex items-center text-gray-700">
                                    <User className="h-5 w-5 mr-1" />
                                    <span onClick={()=>{
                                        navigate('/profile')
                                    }} className="font-medium">
                                        {user.name}
                                    </span>
                                </div>
                            ) : (
                                <button
                                    onClick={() => navigate("/login")}
                                    className="flex items-center text-gray-700 hover:text-gray-900"
                                >
                                    <User className="h-5 w-5 mr-1" />
                                    Login
                                </button>
                            )}

                            <button  onClick={() => navigate("/sell")} className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 font-semibold">
                                <Plus className="h-5 w-5 mr-1" />
                                SELL
                            </button>

                            {user && (
                                <button
                                    onClick={handleLogout}
                                    className="text-red-600 font-semibold hover:underline"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
