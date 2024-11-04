import React, { useState } from "react";
import { ClipboardList } from "lucide-react";

const WhyUs = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false)

    const handleMouseMove = (event, setCardMousePosition) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCardMousePosition({ x, y });
    };

    const handleMove = (event, setMousePosition) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
    };

    const cards = [
        {
            Icon: <ClipboardList className="text-white" />,
            Description:
                "Comprehensive event celebrating innovation and collaboration.",
        },
        {
            Icon: <ClipboardList className="text-white" />,
            Description:
                "Platform for networking and showcasing innovative ideas.",
        },
        {
            Icon: <ClipboardList className="text-white" />,
            Description:
                "Fostering cross-industry synergy and forward-thinking initiatives.",
        },
    ];

    return (
        <div className="flex justify-center md:items-start lg:items-center flex-col md:flex-row items-center gap-10 my-10 mx-5 ">
            <div
                className="md:sticky md:top-20 w-full md:w-96 h-72 perspective border-[1px] dark:border-0 border-[#d5d6dc] rounded-lg"
                id="left"
            >
                <div
                    className="relative w-full h-full transition-transform duration-700 transform"
                    onMouseMove={(event) => handleMouseMove(event, setMousePosition)}
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                >
                    <div className="dark:bg-[rgba(30,30,30,0.5)] bg-white py-4 backdrop-blur-md border-gray-800 absolute w-full h-full text-gray-800 rounded-lg backface-hidden transform rotate-y-180 overflow-hidden flex flex-col justify-center items-center gap-5 dark:hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] hover:shadow-[0_0_15px_rgba(106,106,106,0.4)] dark:text-muted-foreground">
                        <div
                            className={`absolute inset-0 transition-opacity duration-300`}
                            style={{
                                opacity: hovered ? 1 : 0,
                                background:`radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                                pointerEvents: hovered ? "auto" : "none",
                            }}
                        />
                        <h1 className="font-semibold text-3xl text-center dark:text-white text-[#3564ca]">
                            Why Project Expo
                        </h1>
                        <p className="text-sm px-8 text-center mt-2 text-[#1F2667] dark:text-muted-foreground">
                            Project Expo" is a comprehensive event that
                            celebrates innovation from all angles, fostering
                            collaboration and education. It offers a space for
                            individuals and organizations to connect, learn, and
                            showcase their innovative ideas, ultimately driving
                            cross-industry synergy and forward-thinking
                            initiatives to shape the future.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col lg:flex-row md:flex-wrap justify-center items-center gap-10 w-full md:w-auto"
                id="right"
            >
                {cards.map((card, i) => {
                    const [isHovered, setIsHovered] = useState(false);
                    const [cardMousePosition, setCardMousePosition] = useState({
                        x: 0,
                        y: 0,
                    });

                    return (
                        <div
                            key={i}
                            className="w-full lg:w-60 md:w-64 h-52 perspective border-[1px] dark:border-0 border-[#d5d6dc] rounded-lg"
                        >
                            <div
                                className={`relative w-full h-full transition-transform duration-700 transform`}
                                onMouseMove={(event) =>
                                    handleMouseMove(event, setCardMousePosition)
                                }
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="dark:bg-[rgba(30,30,30,0.5)] bg-white backdrop-blur-md dark:border-gray-800 absolute w-full h-full text-[#1F2667] rounded-lg backface-hidden transform rotate-y-180 overflow-hidden flex flex-col justify-center items-center gap-5 dark:hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] hover:shadow-[0_0_15px_rgba(106,106,106,0.4)] dark:text-muted-foreground">
                                    <div
                                        className={`absolute inset-0 transition-opacity duration-300`}
                                        style={{
                                            opacity: isHovered ? 1 : 0,
                                            background: `radial-gradient(circle at ${cardMousePosition.x}px ${cardMousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                                            pointerEvents: isHovered
                                                ? "auto"
                                                : "none",
                                        }}
                                    />
                                    <div className="p-2 rounded-full bg-gradient-to-r from-[#0078ff] via-[#00a2ff] to-[#00d0ff] text-white">
                                        {card.Icon}
                                    </div>
                                    <p className="text-md px-8 text-center mt-2">
                                        {card.Description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyUs;
