import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useNavigate } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import Schedule from "./Schedule.jsx"
import {
    House,
    Info,
} from "lucide-react";
import { useSelector } from "react-redux";

const timelineItems = [
    {
        Icon: House,
        date: "12th March, 10AM to 12PM",
        heading: "Inauguration" ,
        description : "Our honourable HOD will inaugurates the Program."
    },
    {
        Icon: Info,
        date: "12th March, 12PM to 1PM",
        heading : "Avishka starts ",
        description:
            " Every team have to be at venue.",
    },
    {
        Icon: Info,
        date: "12th March, 1PM to 2PM",
        heading: "Lunch Break",
        description : "Time to Relax and Refuel."
    },
    {
        Icon: Info,
        date: "12th March, 2PM to 5PM",
        heading : "StreamLine",
        description:
            "Arrange all writeups and presentations in a proper way according to Judges.",
    },
    {
        Icon : Info,
        date : "13th March, 9AM to 10AM",
        heading : "Ready",
        description : "for round-1 evaluation ."
    },
    {
        Icon : Info,
        date : "13th March, 10AM to 11AM",
        heading : "Round-1 Evaluation" ,
        description : "Our Judges will starts evaluation."
    },
    {
        Icon : Info,
        date : "13th March, 11 AM to 11:30 AM",
        heading : "Valuation",
    },
    {
        Icon : Info,
        date : "13th March,11:30 AM"
        ,heading : "Announcement ",
        description : "for round-2 teams"
    },
    {
        Icon : Info,
        date : "13th March,11:30 AM to 12:30 AM",
        heading : "Round-2 Evaluation"
    },
    {
        Icon : Info,
        date : "13th March, 12:30 PM to 2:00 PM",
        heading : "Lunch  Break"
    },
    {
        Icon : Info,
        date : "13th March, 2PM to 3PM",
        heading : "Valuation"
    },
    {
        Icon : Info,
        date : "13th March, 3PM to 5PM",
        heading : "Validation ",
        description : "Winners will be Prized"
    }
];

const Timeline = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
    };
    const navigate = useNavigate();
    return (
        <div
            className="flex flex-col items-center p-4 pb-6 gap-6"
            id="timeline"
        >
            {/* #1F2667 */}
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                Time Line
            </h1>
            <VerticalTimeline>
                {timelineItems.map((item, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={
                                isDarkMode
                                    ? {
                                        background: "rgba(30,30,30,0.5)",
                                        color: "#fff",
                                    }
                                    : {
                                        background: "white",
                                        color: "black",
                                        border: "1px solid #d5d6dc",
                                        borderBottom: "3px solid #4F46E5",
                                        boxShadow:
                                            "0px 0px 10px rgba(106, 106, 106, 0.1)",
                                    }
                            }
                            contentArrowStyle={
                                isDarkMode
                                    ? {
                                        borderRight:
                                            index % 2 === 0
                                                ? "7px solid rgba(30,30,30,0.5)"
                                                : "none",
                                        borderLeft:
                                            index % 2 !== 0
                                                ? "7px solid rgba(30,30,30,0.5)"
                                                : "none",
                                    }
                                    : {
                                        borderRight:
                                            index % 2 === 0
                                                ? "7px solid #ffffff"
                                                : "none",
                                        borderLeft:
                                            index % 2 !== 0
                                                ? "7px solid #ffffff"
                                                : "none",
                                    }
                            }
                            date={item.date}
                            iconStyle={{
                                background: isDarkMode
                                    ? "linear-gradient(to left, #4F46E5, #7C3AED)"
                                    : "linear-gradient(to right, #4F46E5, #7C3AED)",
                                color: "#fff",
                            }}
                            icon={<item.Icon />}
                            onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "0px 4px 15px rgba(0, 0, 0, 0.3)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow = "none")
                            }
                        >
                            <div
                                className="absolute -top-[0.1rem] -left-[0.1rem] h-full w-full"
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            ></div>
                            <div
                                className={`absolute inset-0 transition-opacity duration-300`}
                                style={{
                                    opacity: isHovered ? 1 : 0,
                                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 40%)`,
                                    pointerEvents: isHovered ? "auto" : "none",
                                }}
                            />
                            <h3 className="vertical-timeline-element-title font-bold text-lg dark:text-white text-gray-900">
                                {item.heading}
                            </h3>
                            <p className="dark:text-white text-gray-600">{item.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>

            
        </div>
    );
};

export default Timeline;
