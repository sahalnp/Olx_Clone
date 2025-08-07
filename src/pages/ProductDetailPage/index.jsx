import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedAds, setRelatedAds] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const buy = () => {
        const products = JSON.parse(localStorage.getItem("products")) || [];

        const updatedProducts = products.map((p) => {
            if (String(p.id) === id) {
                return { ...p, buy: true };
            }
            return p;
        });

        localStorage.setItem("products", JSON.stringify(updatedProducts));
        alert("You have succefully brought this product");
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const found = products.find((p) => String(p.id) === id);
        setProduct(found);

        if (found) {
            const related = products
                .filter(
                    (p) => p.category === found.category && String(p.id) !== id
                )
                .slice(0, 3);
            setRelatedAds(related);
            setCurrentImageIndex(0);
        }
    }, [id]);

    if (!product) {
        return <p className="text-center p-10">Product not found.</p>;
    }

    const handlePrev = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <button
                onClick={() => window.history.back()}
                className="mb-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
                ← Go Back
            </button>

            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 text-lg mb-4 font-medium">
                ₹{product.price}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Slider */}
                <div className="image-slider relative">
                    {product.images?.[currentImageIndex] && (
                        <img
                            src={product.images[currentImageIndex]}
                            alt={product.title}
                            className="w-full h-[400px] object-cover rounded-md shadow-md"
                        />
                    )}
                    {product.images?.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="slider-button left-2"
                                aria-label="Previous Image"
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={handleNext}
                                className="slider-button right-2"
                                aria-label="Next Image"
                            >
                                &#8594;
                            </button>
                        </>
                    )}
                </div>

                {/* Product Info */}
                <div className="text-gray-800 space-y-2 text-base">
                    <p>
                        <strong>Category:</strong> {product.category}
                    </p>
                    <p>
                        <strong>Subcategory:</strong> {product.subCategory}
                    </p>
                    <p>
                        <strong>Condition:</strong> {product.condition}
                    </p>
                    <p>
                        <strong>Brand:</strong> {product.brand}
                    </p>
                    <p>
                        <strong>Model:</strong> {product.model}
                    </p>
                    <p>
                        <strong>Description:</strong> {product.description}
                    </p>
                    <p>
                        <strong>Location:</strong> {product.location}
                    </p>
                    <p>
                        <strong>Posted by:</strong> {product.name}
                    </p>
                    <p>
                        <strong>Phone:</strong> {product.phone}
                    </p>
                    <button
                        onClick={buy}
                        className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md font-semibold shadow-md transition"
                    >
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Related Ads */}
            {relatedAds.length > 0 && (
                <div className="mt-14">
                    <h2 className="text-xl font-semibold mb-4">Related Ads</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedAds.map((ad) => (
                            <div
                                key={ad.id}
                                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={ad.images?.[0]}
                                    alt={ad.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 space-y-1">
                                    <h3 className="text-lg font-semibold">
                                        {ad.title}
                                    </h3>
                                    <p className="text-gray-600">₹{ad.price}</p>
                                    <p className="text-sm text-gray-500">
                                        {ad.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailPage;
