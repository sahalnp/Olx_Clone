export const sellDetails = async (
    formData,
    selectedCategory,
    selectedSubCategory,
    uploadedImages
) => {
    try {
        const details = {
            ...formData,
            category: selectedCategory,
            subCategory: selectedSubCategory,
            images: uploadedImages,
            firstImage: uploadedImages[0] || null,
            createdAt: new Date().toISOString(),
            id: Date.now().toString(),
        };

        const prev = JSON.parse(localStorage.getItem("products")) || [];
        prev.unshift(details);
        localStorage.setItem("products", JSON.stringify(prev));
        console.log("Product added:", details);
        return "Product successfully added";
    } catch (error) {
        console.error("Error adding product:", error);
        return "Error adding product. Please try again.";
    }
};
