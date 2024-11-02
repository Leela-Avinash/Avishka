import { useState, useEffect } from 'react';
import { House, Info, CalendarRange, Lightbulb, ReceiptText, Trophy, CircleDollarSign, Phone, CircleHelp, Menu, X, Sun, Moon, Download } from 'lucide-react'; // Replace with your icon imports

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
          const offset = 100;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
        setActiveSection(section);
    };    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const downloadPoster = () => {
        const link = document.createElement('a');
        link.href = '/path/to/your-poster.pdf'; // Update with the actual path
        link.download = 'Project_Expo_Poster.pdf';
        link.click();
    };

    // bg-[rgba(20,20,20,0.8)]
    return (
        <header className={`bg-black backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 flex md:px-10 px-4 ${isMenuOpen ? 'justify-center items-center' : 'justify-between items-center'}`}>
            <div className={`text-gray-400 text-[20px] md:text-[22px] lg:[28px] ${isMenuOpen ? 'hidden' : 'flex'} items-center`}>
                <h1>PROJECT EXPO</h1>
            </div>
            <div className={`${isMenuOpen ? 'w-full flex flex-col items-center justify-center' : 'py-4'}`}>
                <div className={`md:hidden ${isMenuOpen ? 'absolute right-4 top-4' : ""}`}>
                    <button onClick={toggleMenu} className={`text-gray-400 ${isMenuOpen ? 'align-middle' : ""}`}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <nav className={`flex-col md:flex-row md:flex items-center md:space-y-0 space-x-0 md:space-x-4 ${isMenuOpen ? 'flex w-fit min-h-screen justify-around mt-4' : 'hidden justify-center space-y-2'}`}>
                    {[
                        {
                            name: "Home",
                            icon: <House size={18} />,
                        },
                        {
                            name: "About",
                            icon: <Info size={18} />,
                        },
                        {
                            name: "Timeline",
                            icon: <CalendarRange size={18} />,
                        },
                        {
                            name: "Themes",
                            icon: <Lightbulb size={18} />,
                        },
                        {
                            name: "Guidelines",
                            icon: <ReceiptText size={18} />,
                        },
                        // {
                        //     name: "Results",
                        //     icon: <Trophy size={18} />,
                        // },
                        // {
                        //     name: "Sponsors",
                        //     icon: <CircleDollarSign size={18} />,
                        // },
                        {
                            name: "Contact",
                            icon: <Phone size={18} />,
                        },
                        // {
                        //     name: "FAQs",
                        //     icon: <CircleHelp size={18} />,
                        // },
                    ].map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {scrollToSection(item.name.toLowerCase()); setIsMenuOpen(false);}}
                            className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
                                activeSection === item.name.toLowerCase()
                                  ? "bg-[rgba(106,90,205,0.2)] text-[rgb(106,90,205)]"
                                  : "hover:bg-[rgba(106,90,205,0.1)] text-gray-400 hover:text-gray-200"
                              }`}
                        >
                            <span className="flex items-center">
                                {item.icon}
                                <span className={`ml-2 ${isMenuOpen ? 'flex' : 'hidden'} xl:inline`}>
                                    {item.name}
                                </span>
                            </span>
                        </button>
                    ))}
                    <button onClick={downloadPoster} className="p-2 text-gray-400 hover:text-gray-200 flex items-center">
                        <Download size={20} className="mr-2" />
                        <span className="inline">Poster</span>
                    </button>
                    {isDarkMode ?
                        <button onClick={toggleTheme} className="p-2 text-gray-400 hover:text-gray-200">
                            <Sun size={20} className='inline mr-2'/>
                            <span className="inline">Light Mode</span>
                        </button>
                    :
                        <button onClick={toggleTheme} className="p-2 text-gray-400 hover:text-gray-200">
                            <Moon size={20} className='inline mr-2'/>
                            <span className="inline">Dark Mode</span>
                        </button>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;