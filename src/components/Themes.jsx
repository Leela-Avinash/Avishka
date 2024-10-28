import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

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
            <div className="w-3/4 m-auto">
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
                                    className="w-full lg:w-60 md:w-64 h-[450px] perspective"
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
                                        <div className="bg-[rgba(30,30,30,0.5)] py-4 backdrop-blur-md border-gray-800 absolute w-full h-full text-gray-800 rounded-lg backface-hidden transform rotate-y-180 overflow-hidden flex flex-col items-center gap-5 hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] text-muted-foreground">
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
                                            <div className="h-36 flex items-center rounded-full mt-5">
                                                <img
                                                    src={d.img}
                                                    alt=""
                                                    className="h-36 w-36 rounded-full"
                                                />
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-4 p-4">
                                                <p className="text-2xl font-semibold">
                                                    {d.name}
                                                </p>
                                                <p className="text-center">
                                                    {d.review}
                                                </p>
                                                <button className="bg-indigo-900 text-white text-lg px-6 py-1 rounded-full">
                                                    Read More
                                                </button>
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
        name: `John Morgan`,
        img: `/students/John_Morgan.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `Ellie Anderson`,
        img: `/students/Ellie_Anderson.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `Nia Adebayo`,
        img: `/students/Nia_Adebayo.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `Rigo Louie`,
        img: `/students/Rigo_Louie.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        name: `Mia Williams`,
        img: `/students/Mia_Williams.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
];

export default Themes;
