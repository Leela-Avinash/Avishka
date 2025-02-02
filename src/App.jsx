import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ThemePage from "./pages/ThemePage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Schedule from "./pages/Schedule"
import ReadMore from "./pages/ReadMore.jsx";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 bg-[#f5f6f7]">
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:theme" element={<ThemePage />} />
                <Route path="/Schedule" element = {<Schedule/>}/>
                <Route path="/ReadMore" element={<ReadMore/>}/>
            </Routes>
            <Footer />
            {/* <div className="flex items-center justify-center min-h-[100dvh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-center text-white">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Website Under Maintenance
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        We’ll be back soon! Thank you for your patience.
                    </p>
                    <p className="text-sm md:text-md text-gray-400">
                        Sorry for the inconvenience caused.
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export default App;
