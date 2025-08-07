import React, { useState } from "react";
import {
    Upload,
    X,
    MapPin,
    Camera,
    Plus,
    AlertCircle,
    Check,
} from "lucide-react";
import { sellDetails } from "../utils/sellerDetails";
import { useNavigate } from "react-router-dom";

const SellPage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [uploadedImages, setUploadedImages] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        condition: "",
        brand: "",
        model: "",
        location: "",
        phone: "",
        name: "",
        buy:false,
    });

    const addtoStorage = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await sellDetails(
                formData,
                selectedCategory,
                selectedSubCategory,
                uploadedImages
            );
            alert(res);
            navigate("/");
        } catch (error) {
            alert("Error adding product. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const categories = {
        Mobiles: ["Mobile Phones", "Accessories", "Tablets"],
        Cars: ["Cars", "Motorcycles", "Spare Parts", "Commercial Vehicles"],
        Properties: [
            "Houses & Apartments for Sale",
            "Houses & Apartments for Rent",
            "Lands & Plots",
            "Shops & Offices",
        ],
        Electronics: [
            "Computers & Laptops",
            "TVs, Video - Audio",
            "Cameras & Lenses",
            "Games & Entertainment",
        ],
        Fashion: ["Men", "Women", "Kids"],
        Furniture: [
            "Sofa & Dining",
            "Beds & Wardrobes",
            "Home Decor & Garden",
            "Other Household Items",
        ],
        Jobs: [
            "Data Entry & Back Office",
            "Sales & Marketing",
            "BPO & Telecaller",
            "Driver",
            "Other Jobs",
        ],
        Services: [
            "Education & Classes",
            "Tours & Travel",
            "Electronics Repair",
            "Other Services",
        ],
    };

    const convertToBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (uploadedImages.length + files.length > 10) {
            alert("Maximum 10 images allowed");
            return;
        }

        try {
            const base64Images = await Promise.all(
                files.map((file) => convertToBase64(file))
            );
            setUploadedImages([...uploadedImages, ...base64Images]);
        } catch (error) {
            alert("Error uploading images. Please try again.");
            console.error(error);
        }
    };

    const conditions = ["New", "Excellent", "Good", "Fair", "Poor"];

    const removeImage = (index) => {
        setUploadedImages(uploadedImages.filter((_, i) => i !== index));
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                        POST YOUR AD
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Sell your item quickly and easily
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <form onSubmit={addtoStorage} className="space-y-8">
                    {/* Category Selection */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Choose a category
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {Object.keys(categories).map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setSelectedSubCategory("");
                                    }}
                                    className={`p-4 border rounded-lg text-left hover:border-blue-500 transition-colors ${
                                        selectedCategory === category
                                            ? "border-blue-500 bg-blue-50"
                                            : "border-gray-200"
                                    }`}
                                >
                                    <div className="font-medium">
                                        {category}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {selectedCategory && (
                            <div>
                                <h3 className="font-medium mb-3">
                                    Select subcategory for {selectedCategory}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {categories[selectedCategory].map(
                                        (subCategory) => (
                                            <button
                                                key={subCategory}
                                                type="button"
                                                onClick={() =>
                                                    setSelectedSubCategory(
                                                        subCategory
                                                    )
                                                }
                                                className={`p-3 border rounded-md text-left hover:border-blue-500 transition-colors ${
                                                    selectedSubCategory ===
                                                    subCategory
                                                        ? "border-blue-500 bg-blue-50"
                                                        : "border-gray-200"
                                                }`}
                                            >
                                                {subCategory}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Upload Images */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Upload photos
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Add up to 10 photos. Good photos help your item sell
                            faster!
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {/* Upload Button */}
                            {uploadedImages.length < 10 && (
                                <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-600">
                                        Add Photo
                                    </p>
                                </label>
                            )}

                            {/* Uploaded Images */}
                            {uploadedImages.map((base64Image, index) => (
                                <div key={index} className="relative">
                                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={base64Image}
                                            alt={`Upload ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        {uploadedImages.length > 0 && (
                            <p className="text-sm text-gray-500 mt-2">
                                {uploadedImages.length}/10 photos uploaded
                            </p>
                        )}
                    </div>

                    {/* Ad Details */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Ad details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ad title *
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Mention the key features"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Include condition, features and reason for selling"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Brand
                                    </label>
                                    <input
                                        type="text"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleInputChange}
                                        placeholder="Brand name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Model
                                    </label>
                                    <input
                                        type="text"
                                        name="model"
                                        value={formData.model}
                                        onChange={handleInputChange}
                                        placeholder="Model name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Condition *
                                </label>
                                <select
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="">Select condition</option>
                                    {conditions.map((condition) => (
                                        <option
                                            key={condition}
                                            value={condition}
                                        >
                                            {condition}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Set a Price */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Set a price
                        </h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Price *
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-2 text-gray-500">
                                    ₹
                                </span>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                                Research similar items to set a competitive
                                price
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Confirm your location
                        </h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Location *
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="Enter your location"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Review your details */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Review your details
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Safety Tips */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <div>
                                <h3 className="font-medium text-yellow-800 mb-2">
                                    Safety Tips
                                </h3>
                                <ul className="text-sm text-yellow-700 space-y-1">
                                    <li>
                                        • Don't share personal information in
                                        your ad
                                    </li>
                                    <li>• Meet buyers in a public place</li>
                                    <li>
                                        • Be cautious of buyers offering more
                                        than your asking price
                                    </li>
                                    <li>
                                        • Check buyer's profile before meeting
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-8 py-3 rounded-lg font-semibold flex items-center transition-colors ${
                                isSubmitting
                                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                    : "bg-yellow-400 text-black hover:bg-yellow-500"
                            }`}
                        >
                            <Check className="h-5 w-5 mr-2" />
                            {isSubmitting ? "Posting..." : "Post Ad"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellPage;
