import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { Link, useLocation } from "react-router-dom";
import {
    House,
    Info,
    CalendarRange,
    Lightbulb,
    Shield,
    ReceiptText,
    Trophy,
    CircleDollarSign,
    Phone,
    Menu,
    X,
    Sun,
    Moon,
    Download,
} from "lucide-react";
import avishkaLogo from "../assets/Avishka_logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const location = useLocation(); // Get the current route

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            const offset = 100;
            const top =
                element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: top, behavior: "smooth" });
        }
        setActiveSection(section);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const downloadPoster = () => {
        const link = document.createElement("a");
        link.href = "../../Avishka_2K24_Poster.jpg"; // Update with the actual path
        link.download = "Avishka_2K24_Poster.jpg";
        link.click();
    };

    const navItems = [
        { name: "Home", icon: <House size={18} /> },
        { name: "About", icon: <Info size={18} /> },
        { name: "Timeline", icon: <CalendarRange size={18} /> },
        { name: "Themes", icon: <Lightbulb size={18} /> },
        { name: "Guidelines", icon: <ReceiptText size={18} /> },
        { name: "Contact", icon: <Phone size={18} /> },
    ];

    const themes = [
        { name: "Home", icon: <House size={18} />, link: "" },
        {
            name: "Smart Education",
            icon: <Lightbulb size={18} />,
            link: "SmartEducationandAutomation",
        },
        {
            name: "Integrated Technologies",
            icon: <Trophy size={18} />,
            link: "SustainableFutureThroughIntegratedTechnologies",
        },
        {
            name: "Rural Development",
            icon: <CircleDollarSign size={18} />,
            link: "HealthAgricultureandRuralDevelopment",
        },
        {
            name: "Cyber Security",
            icon: <Shield size={18} />,
            link: "CyberSecurity",
        },
    ];

    return (
        <header
            className={`bg-black backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 flex md:px-10 px-4 ${
                isMenuOpen
                    ? "justify-center items-center"
                    : "justify-between items-center"
            }`}
        >
            <div
                className={`dark:text-gray-400 text-white text-[20px] md:text-[28px] lg:[40px] ${
                    isMenuOpen ? "hidden" : "flex"
                } items-center gap-2`}
            >
                <img src={`${avishkaLogo}`} alt="" className="h-[28px]" />
                <h1>Avishka</h1>
            </div>
            <div
                className={`${
                    isMenuOpen
                        ? "w-full flex flex-col items-center justify-center"
                        : "py-4"
                }`}
            >
                <div
                    className={`md:hidden ${
                        isMenuOpen ? "absolute right-4 top-4" : ""
                    }`}
                >
                    <button
                        onClick={toggleMenu}
                        className={`dark:text-gray-400 text-white ${
                            isMenuOpen ? "align-middle" : ""
                        }`}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <nav
                    className={`flex-col md:flex-row md:flex gap-2 items-center md:space-y-0 space-x-0 md:space-x-4 ${
                        isMenuOpen
                            ? "flex w-fit min-h-screen justify-around mt-4"
                            : "hidden justify-center space-y-2"
                    }`}
                >
                    {(location.pathname === "/" ? navItems : themes).map(
                        (item) =>
                            location.pathname === "/" ? (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        scrollToSection(
                                            item.name.toLowerCase()
                                        );
                                        setIsMenuOpen(false);
                                    }}
                                    className={`relative flex items-center px-1 py-2 transition-all duration-300 text-gray-200 dark:text-gray-400 
                                        ${
                                            activeSection ===
                                            item.name.toLowerCase()
                                                ? "border-b-2 border-indigo-500 text-indigo-500 bg-[rgba(90,117,205,0.1)]" // Active state with border, text color, and subtle background
                                                : "hover:text-indigo-300" // Hover text color
                                        }
                                        group
                                    `}
                                >
                                    <span
                                        className={`flex items-center text-gray-200 dark:text-gray-400
                                        ${
                                            activeSection ===
                                            item.name.toLowerCase()
                                                ? "text-indigo-600" // Active state with border, text color, and subtle background
                                                : "hover:text-indigo-300" // Hover text color
                                        }
                                    `}
                                    >
                                        {item.icon}
                                        <span
                                            className={`ml-2 ${
                                                isMenuOpen ? "flex" : "hidden"
                                            } xl:inline`}
                                        >
                                            {item.name}
                                        </span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={`/${item.link}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center px-3 py-2 transition-all duration-300 text-gray-200 dark:text-gray-400 hover:bg-[rgba(90,165,205,0.1)] hover:text-gray-100 ${
                                        activeSection ===
                                        item.name.toLowerCase()
                                            ? "bg-[rgba(90,117,205,0.2)] text-[rgb(90,100,205)]"
                                            : "hover:bg-[rgba(90,165,205,0.1)] text-gray-400 hover:text-gray-100"
                                    }`}
                                >
                                    <span className="flex items-center text-gray-200 dark:text-gray-400">
                                        {item.icon}
                                        <span
                                            className={`ml-2 ${
                                                isMenuOpen ? "flex" : "hidden"
                                            } xl:inline`}
                                        >
                                            {item.name}
                                        </span>
                                    </span>
                                </Link>
                            )
                    )}
                    <button
                        onClick={downloadPoster}
                        className="p-2 text-gray-200 dark:text-gray-400 hover:text-gray-100 flex items-center"
                    >
                        <Download size={20} className="mr-2" />
                        <span
                            className={`ml-2 ${
                                isMenuOpen ? "flex" : "hidden"
                            } xl:inline`}
                        >
                            Poster
                        </span>
                    </button>
                    {isDarkMode ? (
                        <button
                            onClick={() => {
                                handleToggleTheme();
                                setIsMenuOpen(false);
                            }}
                            className="p-2 text-gray-200 dark:text-gray-400 hover:text-gray-100"
                        >
                            <Sun size={20} className="inline mr-2" />
                            {isMenuOpen ? (
                                <span
                                    className={`ml-2 ${
                                        isMenuOpen ? "inline" : "hidden"
                                    } xl:inline`}
                                >
                                    Light Mode
                                </span>
                            ) : (
                                <></>
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                handleToggleTheme();
                                setIsMenuOpen(false);
                            }}
                            className="p-2 text-gray-200 dark:text-gray-400 hover:text-gray-100"
                        >
                            <Moon size={20} className="inline mr-2" />
                            {isMenuOpen ? (
                                <span
                                    className={`ml-2 ${
                                        isMenuOpen ? "inline" : "hidden"
                                    } xl:inline`}
                                >
                                    Dark Mode
                                </span>
                            ) : (
                                <></>
                            )}
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
