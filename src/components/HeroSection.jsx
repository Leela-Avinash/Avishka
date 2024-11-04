import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import backGround from "../assets/hero-background.jpg"

const HeroSection = () => {
    return (
        // bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20
        <div className="relative min-h-[calc(100vh-3.9rem)] flex flex-col items-center justify-center px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" 
            style={{
                backgroundImage: `url(${backGround})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative text-center space-y-6 max-w-3xl z-10"
            >
                <h1 className="bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 bg-gradient-to-r from-[#0078ff] via-[#00a2ff] to-[#0099ff] text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg">
                    Project Expo
                </h1>

                <TypeAnimation
                    sequence={[
                        "Showcase Innovative Ideas",
                        1000,
                        "Out-Of-The-Box Solutions",
                        1000,
                        "Great Prizes",
                        1000,
                    ]}
                    wrapper="div"
                    speed={50}
                    cursor={false}
                    repeat={Infinity}
                    style={{ display: "inline-block" }}
                    className="text-2xl md:text-3xl dark:text-gray-500 text-gray-200"
                />
            </motion.div>
        </div>
    );
};

export default HeroSection;
