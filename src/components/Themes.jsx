import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
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
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                Themes
            </h1>
            <div className="w-4/5 m-auto">
                <div className="">
                    <Slider {...settings}>
                        {data.map((d, i) => {
                            const [isHovered, setIsHovered] = useState(false);
                            const [cardMousePosition, setCardMousePosition] =
                                useState({
                                    x: 0,
                                    y: 0,
                                });
                            return (
                                <Link
                                    to={`/${d.link}`}
                                    key={i}
                                    className="w-full lg:w-72 md:w-64 h-[500px] perspective dark:border-0 border-2 border-[#d5d6dc] rounded-lg"
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
                                        <div className="dark:bg-[rgba(30,30,30,0.5)] bg-white pd-4 backdrop-blur-md border-gray-800 absolute w-full h-full text-gray-800 rounded-lg backface-hidden transform rotate-y-180 overflow-hidden flex flex-col items-center gap-5 dark:hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] hover:shadow-[0_0_15px_rgba(106,106,106,1)] dark:text-muted-foreground">
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
                                            <div className="flex flex-col items-center justify-center gap-4 p-4 border-gray-800">
                                                <p className="lg:text-xl text-lg font-semibold text-center text-gray-900 dark:text-muted-foreground">
                                                    {d.name}
                                                </p>
                                                <p className="text-center lg:text-md text-sm text-gray-600 dark:text-muted-foreground">
                                                    {d.review}
                                                </p>
                                                <Link to={`/${d.link}`}>
                                                    <button className="bg-indigo-900 text-white text-lg px-6 py-1 rounded-full">
                                                        Read More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
        link: "SmartEducationandAutomation",
        name: `Smart Education and Automation`,
        img: SmartEducation,
        review: `This theme emphasizes the integration of automation technologies within the realm of smart education, encouraging participants to develop innovative solutions that not only streamline educational processes but also prioritize robust application security`,
    },
    {
        link: "IOTandApplicationSecurity",
        name: `IOT and Application Security`,
        img: IOT,
        review: `
This theme focuses on IoT and application security, emphasizing the importance of safeguarding interconnected devices and applications. Participants are encouraged to address critical challenges such as data privacy, secure communication`,
    },
    {
        link: "HealthAgricultureandRuralDevelopment",
        name: `Health Agriculture and Rural Development`,
        img: HealthAgriculture,
        review: `This theme focuses on innovative solutions to improve healthcare, boost agricultural productivity, and drive sustainable growth in rural communities through technology and practical applications.`,
    },
    {
        link: "SustainableFutureThroughIntegratedTechnologies",
        name: `Sustainable Future through Integrated Technologies`,
        img: SustainableFuture,
        review: `This theme encourages creating eco-friendly solutions using integrated technologies to promote sustainability, reduce environmental impact, and support a balanced, resource-efficient future.`,
    },
];

export default Themes;
