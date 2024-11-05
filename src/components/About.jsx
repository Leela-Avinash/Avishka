import React, {useState, useEffect, useRef } from "react";
import Card from "./Card";
import JNTUGV_logo from "../assets/JNTU-GV_logo.png";
import Constelle from "../assets/constelli.png";
import CSE_LIGHT from "../assets/CSE_LIGHT.png";
import CSE_DARK from "../assets/CSE_DARK.png";
import InnovationIncubation from "../assets/InnovationIncubation.png"
import { useSelector } from "react-redux";

const useFadeInOnScroll = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return [ref, isVisible];
};

const About = () => {
    const [ref, isVisible] = useFadeInOnScroll();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <div  ref={ref} className={`flex flex-col items-center p-4 pb-6 gap-6 mt-16 fade-in-bottom ${isVisible ? 'visible' : ''}`} id="about">
            <h1 className="dark:text-white text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                Learn More <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 tracking-tight">About Us</span>
            </h1>
            <div className="flex justify-center flex-col md:flex-row items-center w-full flex-wrap gap-6 md:gap-10  ">
                {[
                    {
                        Image: JNTUGV_logo,
                        Title: "JNTU-GV",
                        Description:
                            "JNTU College of Engineering, Vizianagaram, initially part of JNTU Hyderabad, became a constituent college of JNTU Kakinada in 2008. Subsequently, it evolved into Jawaharlal Nehru Technological University Gurajada, Vizianagaram, in 2022. The university spans six districts, housing two constituent colleges and 37 affiliated institutions, offering education in various engineering, pharmacy, and management disciplines.",
                    },
                    {
                        Image: isDarkMode ? CSE_LIGHT : CSE_DARK,
                        Title: "CSE Department",
                        Description:
                            "The Department of CSE is distinctively positioned to educate the technological leaders of tomorrow. The goal is to ensure our engineering graduates to be problem solvers, project leaders, entrepreneurs, and ethical citizens of global society. Through innovative teaching-learning processes, a teamwork approach and leadership building experience, and the students will gain vital communication and critical-thinking skills.",
                    },
                    {
                        Image: Constelle,
                        Title: "Constelle",
                        Description:
                            "CONSTELLE stands as an energetic student club led by Computer Science and Engineering (CSE) students, with a core mission to inspire innovation and collaboration. Our diverse range of activities, including the engaging 'Drop Everything and Code (DEC), all converge to create an environment that fosters knowledge sharing, and nurtures creativity.'",
                    },
                    {
                        Image:InnovationIncubation,
                        Title: "JNTUGV Innovation and Incubation Center",
                        Description:
                            "The JNTUGV Innovation and Incubation Center serves as a nurturing haven for young innovators, liberating them from logistical constraints. Here, visionary minds receive invaluable support, including mentorship, dedicated workspace, and financial backing, allowing them to channel their creativity and ideas freely, unburdened by logistical challenges.",
                    },
                ].map((item, index) => (
                    <Card
                        key={index}
                        Image={item.Image}
                        Title={item.Title}
                        Description={item.Description}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
