import React, { useState } from "react";
import College from "../assets/JNTU-GV_clg.jpg";
import { Linkedin, Instagram, Github } from "lucide-react";

const ProfileCard = ({ Title, Description }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="relative w-80 h-96 perspective mt-3 overflow-visible" // Allow overflow outside card boundaries
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform`}
            >
                <div className="bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 absolute w-full h-full text-gray-800 rounded-lg flex flex-col items-center text-muted-foreground">
                    {/* <div
                        className={`absolute inset-0 transition-opacity duration-300`}
                        style={{
                            opacity: isHovered ? 1 : 0,
                            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                            pointerEvents: isHovered ? "auto" : "none",
                        }}
                    /> */}
                    <div className="relative inline-block p-[6px] bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mt-5">
                        <img
                            src={`${College}`}
                            alt=""
                            className="h-[130px] w-[130px] rounded-full z-10 border-5 border-white"
                        />
                    </div>
                    {/* <img
                        src={`${College}`}
                        alt=""
                        className="h-[130px] w-[130px] rounded-full z-10 mt-5 border-[5px] p-2 border-gradient-to-r from-purple-400 to-blue-500"
                    /> */}
                    <h1 className="font-bold text-2xl text-center mt-5">
                        Behera Venkat Sai
                    </h1>
                    {/* <h1 className="font-bold text-lg text-center">Event Coordinator</h1> */}
                    <div className="flex flex-col items-center">
                        <p className="text-[17px] px-8 text-center mt-4 mb-4">
                            leelaavinash24@gmail.com
                        </p>
                        <p className="text-[17px] px-8 text-center mb-2">
                            +91 1234567890
                        </p>
                        {/* <p className="text-md px-8 text-center">
                            phone: +91 1234567890
                        </p> */}
                    </div>
                    <div className="flex justify-around w-44 mt-8">
                        <Linkedin size={22} />
                        <Instagram size={22} />
                        <Github size={22} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
