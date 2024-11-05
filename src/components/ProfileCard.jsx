import React, { useState } from "react";
import { Linkedin, Instagram, MessageSquareShare } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileCard = ({ Title, Email, PhoneNo, Image, LinkedIn, instagram }) => {
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
            className="relative w-80 h-96 perspective mt-3 overflow-visible dark:border-0 border-2 border-[#d5d6dc] rounded-lg" // Allow overflow outside card boundaries
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform`}
            >
                <div className="dark:bg-[rgba(30,30,30,0.5)] bg-white backdrop-blur-md border-gray-800 absolute w-full h-full dark:hover:shadow-[0_0_0px_rgba(106,90,205,0.3)] hover:shadow-[0_0_15px_rgba(106,106,106,1)] text-gray-900 rounded-lg flex flex-col items-center dark:text-muted-foreground">
                    <div className="relative inline-block p-[5px] bg-blue-500 rounded-full mt-5">
                        <img
                            src={`${Image}`}
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
                        {Title}
                    </h1>
                    <h1 className="font-bold text-sm text-center text-gray-400 dark:text-muted-foreground">Student Coordinator</h1>
                    <div className="flex flex-col items-center text-gray-600 dark:text-muted-foreground">
                        <p className="text-[17px] px-8 text-center mt-4 mb-4">
                            {Email}
                        </p>
                        <p className="text-[17px] px-8 text-center mb-2">
                            +91 {PhoneNo}
                        </p>
                        {/* <p className="text-md px-8 text-center">
                            phone: +91 1234567890
                        </p> */}
                    </div>
                    <div className="flex justify-around w-44 mt-5 dark:text-muted-foreground text-gray-700">
                        <Link
                            to={LinkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin
                                size={22}
                                className="hover:text-blue-600"
                            />
                        </Link>
                        <Link
                            to={`https://wa.me/91${PhoneNo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageSquareShare
                                size={22}
                                className="hover:text-green-600"
                            />
                        </Link>
                        <Link
                            to={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram
                                size={22}
                                className="hover:text-pink-700"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
