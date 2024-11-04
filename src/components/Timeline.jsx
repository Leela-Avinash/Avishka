import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
    House,
    Info,
    CalendarRange,
    Lightbulb,
    ReceiptText,
    Trophy,
    CircleDollarSign,
    Phone,
    CircleHelp,
} from "lucide-react";
import { useSelector } from "react-redux";

const timelineItems = [
    {
        Icon: House,
        date: "14th December",
        heading: "Registration And Idea Submission",
        description:
            "Register by this date to secure your spot in the Hackathon. This process is completely online. Don't miss out on this opportunity!",
    },
    {
        Icon: Info,
        date: "15th December",
        heading: "Idea Selection and Intimation",
        description:
            "We will notify you about the selection of your idea by this date. The selected teams must be present in the venue before the commencement of the event. Get ready to bring your creativity to life!",
    },
    {
        Icon: Info,
        date: "20th & 21st December",
        heading: "Project Expo",
        description:
            "Join us for three action-packed days of brainstorming, coding, and collaboration. Let's turn ideas into reality!",
    },
    {
        Icon: Info,
        date: "21st December",
        heading: "Judgement",
        description:
            "The culmination of your hard work! Present your solutions and stand a chance to win exciting prizes. Our judges will evaluate the projects and announce the winners.",
    },
];

const Timeline = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track the index of the hovered item

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="flex flex-col items-center p-4 pb-6 gap-6"
            id="timeline"
        >
            {/* #1F2667 */}
            <h1 className="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#3564ca]">
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
                                          color: "#3e30ff",
                                          border: "1px solid #d5d6dc",
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
                                // from-[#0078ff] via-[#00a2ff] to-[#00d0ff]
                                background: isDarkMode
                                    ? "linear-gradient(to left, #a78bfa, #3b82f6)"
                                    : "linear-gradient(to right, #0078ff, #00d0ff)",
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
                            <h3 className="vertical-timeline-element-title font-bold text-lg dark:text-white text-[#3564ca]">
                                {item.heading}
                            </h3>
                            <p className="text-[#1F2667] dark:text-white">{item.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>

            <button className="text-white my-5 p-4 w-44 dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 bg-gradient-to-r from-[#0078ff] via-[#00a2ff] to-[#00d0ff] rounded-full">
                Final Schedule
            </button>
        </div>
    );
};

export default Timeline;
