import React from "react";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Header } from "../components/Header";
import FeaturedAds from "../components/FeaturedAds";

const OLXHomepage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <HeroSection />
            <FeaturedAds />
            <Footer />
        </div>
    );
};

export default OLXHomepage;
