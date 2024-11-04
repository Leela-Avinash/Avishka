import React, { useState } from "react";

const FacultyCard = ({ Title, Image, quote, role }) => {
    console.log(Title);
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
                    <div className="relative inline-block p-[5px] bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full mt-5">
                        <img
                            src={`${Image}`}
                            alt=""
                            className="h-[130px] w-[130px] rounded-full z-10 border-5 border-white"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl text-center mt-5">
                            {Title}
                        </h1>
                        <h1 className="font-bold text-sm text-center text-gray-400">
                            {role}
                        </h1>
                        <p className="px-10 py-5 text-lg text-center">{quote}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyCard;
