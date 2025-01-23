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
import Sponsors from "../components/Sponsors";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <About />
            <WhyUs />
            {/* <Timeline /> */}
            <Themes />
            <Guidelines />
            <Sponsors />
            <ContactUs />
        </>
    );
};

export default HomePage;
