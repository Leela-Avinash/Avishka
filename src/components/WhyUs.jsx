import React, { useState } from "react";
import { Trophy, Users, GraduationCap } from "lucide-react";

const WhyUs = () => {
    const cards = [
        {
            Icon: <Trophy className="w-12 h-12 text-indigo-600" />,
            title: "Prestigious Awards",
            description:
                "Compete for substantial prizes and recognition in the tech community.",
        },
        {
            Icon: <Users className="w-12 h-12 text-indigo-600" />,
            title: "Networking",
            description:
                "Connect with industry experts and like-minded innovators.",
        },
        {
            Icon: <GraduationCap className="w-12 h-12 text-indigo-600" />,
            title: "Learning Experience",
            description:
                "Gain valuable feedback and mentorship from industry leaders.",
        },
    ];

    const handleMouseMove = (event, setCardMousePosition) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCardMousePosition({ x, y });
    };

    return (
        <section id="why-avishka" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="dark:text-white text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
                    Why{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 tracking-tight">
                        Avishka?
                    </span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => {
                        const [isHovered, setIsHovered] = useState(false);
                        const [cardMousePosition, setCardMousePosition] =
                            useState({ x: 0, y: 0 });

                        return (
                            <div
                                key={i}
                                className="bg-white dark:bg-[rgba(30,30,30,0.5)] p-6 rounded-xl shadow-md dark:hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                                onMouseMove={(event) =>
                                    handleMouseMove(event, setCardMousePosition)
                                }
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div
                                    className="absolute inset-0 transition-opacity duration-300"
                                    style={{
                                        opacity: isHovered ? 1 : 0,
                                        background: `radial-gradient(circle at ${cardMousePosition.x}px ${cardMousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 40%)`,
                                        pointerEvents: "none",
                                    }}
                                />
                                <div className="flex flex-col items-center">
                                    <div className="p-3 rounded-full mb-4">
                                        {card.Icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
