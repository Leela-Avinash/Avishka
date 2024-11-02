import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import clg from "../assets/JNTU-GV_clg.jpg";
import SmartEducation from "../assets/SmartEducation.jpg";
import IOT from "../assets/IOT.jpg";
import HealthAgriculture from "../assets/HealthAgriculture.jpg";
import SustainableFuture from "../assets/SustainableFuture .jpg";
import { Link } from "react-router-dom";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-indigo-500 hover:text-indigo-700 cursor-pointer z-10"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 14.707a1 1 0 010-1.414L13.586 10l-3.293-3.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-indigo-500 hover:text-indigo-700 cursor-pointer z-10"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M9.707 5.293a1 1 0 010 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
}

function Themes() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const handleMouseMove = (event, setCardMousePosition) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCardMousePosition({ x, y });
    };
    return (
        <div className="flex flex-col items-center p-4 pb-6 gap-6" id="themes">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Themes
            </h1>
            <div className="w-4/5 m-auto">
                <div className="mt-5">
                    <Slider {...settings}>
                        {data.map((d, i) => {
                            const [isHovered, setIsHovered] = useState(false);
                            const [cardMousePosition, setCardMousePosition] =
                                useState({
                                    x: 0,
                                    y: 0,
                                });
                            return (
                                <div
                                    key={i}
                                    className="w-full lg:w-72 md:w-64 h-[500px] perspective"
                                >
                                    <div
                                        className={`relative w-full h-full transition-transform duration-700 transform`}
                                        onMouseMove={(event) =>
                                            handleMouseMove(
                                                event,
                                                setCardMousePosition
                                            )
                                        }
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <div className="bg-[rgba(30,30,30,0.5)] pd-4 backdrop-blur-md border-gray-800 absolute w-full h-full text-gray-800 rounded-lg backface-hidden transform rotate-y-180 overflow-hidden flex flex-col items-center gap-5 hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] text-muted-foreground">
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
                                            <div
                                                className="h-52 flex items-center w-full"
                                                style={{
                                                    backgroundImage: `url(${d.img})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center",
                                                }}
                                            >
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-4 p-4">
                                                <p className="lg:text-xl text-lg font-semibold text-center">
                                                    {d.name}
                                                </p>
                                                <p className="text-center lg:text-md text-sm">
                                                    {d.review}
                                                </p>
                                                <Link to="/">
                                                    <button className="bg-indigo-900 text-white text-lg px-6 py-1 rounded-full">
                                                        Read More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: `Smart Education and Automation`,
        img: SmartEducation,
        review: `This theme focuses on integrating automation technologies with robust application security. Participants will create solutions that harness automation while ensuring data integrity and user privacy.`,
    },
    {
        name: `IOT and Application Security`,
        img: IOT,
        review: `IoT and Application Security emphasizes safeguarding connected devices and applications, addressing risks in data privacy, secure communication, and threat prevention for a resilient IoT ecosystem.`,
    },
    {
        name: `Health Agriculture and Rural Development`,
        img: HealthAgriculture,
        review: `This theme focuses on innovative solutions to improve healthcare, boost agricultural productivity, and drive sustainable growth in rural communities through technology and practical applications.`,
    },
    {
        name: `Sustainable Future through Integrated Technologies`,
        img: SustainableFuture,
        review: `This theme encourages creating eco-friendly solutions using integrated technologies to promote sustainability, reduce environmental impact, and support a balanced, resource-efficient future.`,
    },
];

export default Themes;
