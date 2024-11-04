import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ThemePage from "./pages/ThemePage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 bg-[#f5f6f7]">
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:theme" element={<ThemePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
