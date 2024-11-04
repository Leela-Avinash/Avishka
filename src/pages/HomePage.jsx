import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Timeline from "../components/Timeline";
import Themes from "../components/Themes";
import Guidelines from "../components/Guidelines";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <About />
            <WhyUs />
            <Timeline />
            <Themes />
            <Guidelines />
            <ContactUs />
        </>
    );
};

export default HomePage;
