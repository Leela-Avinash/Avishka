import React, {useState, useEffect, useRef } from "react";
import ProfileCard from "./ProfileCard";
import Bhavani from "../assets/Bhavani.jpg";
import Rohan from "../assets/Rohan.jpg";
import Venkat from "../assets/Venkat.jpg";
import FacultyCard from "./FacultyCards";
import hod from "../assets/hod.jpg";
import rddvsr from "../assets/rddvsr.jpg";

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

const ContactUs = () => {
    const [ref, isVisible] = useFadeInOnScroll();

    const facultyData = [
        {
            title: "Dr. P. Aruna Kumari",
            image: Bhavani,
            role: "Head of the Department, CSE",
            quote: '"Education is the key to unlocking the world, a passport to freedom."',
        },
        {
            title: "Prof. R D D V Sivaram",
            image: Bhavani,
            role: "Faculty Coordinator",
            quote: '"In the pursuit of knowledge, never stop questioning."',
        },
    ];

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center p-4 pb-6 gap-6 mb-10 fade-in-bottom ${isVisible ? 'visible' : ''}`}
            id="contact"
        >
            <h1 className="dark:text-white text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 tracking-tight">
                    Team
                </span>
            </h1>
            <div className=" flex md:w-[60%] w-full justify-around items-center flex-wrap flex-col md:flex-row">
                <FacultyCard
                    Title={facultyData[0].title}
                    Image={hod}
                    quote={facultyData[0].quote}
                    role={facultyData[0].role}
                />

                <FacultyCard
                    Title={facultyData[1].title}
                    Image={rddvsr}
                    quote={facultyData[1].quote}
                    role={facultyData[1].role}
                />
            </div>
            <div className=" flex md:w-[90%] w-full justify-around items-center flex-wrap flex-col md:flex-row">
                <ProfileCard
                    Title={"B. Venkat Sai"}
                    Email={"venkatofficialac@gmail.com"}
                    PhoneNo={"7416258176"}
                    Image={Venkat}
                    LinkedIn={
                        "https://www.linkedin.com/in/behara-venkat-sai-651aa1256"
                    }
                    instagram={"https://www.instagram.com/venkatwhitedevil/"}
                />
                <ProfileCard
                    Title={"S. Sai Rohan"}
                    Email={"sampatiraao@gmail.com"}
                    PhoneNo={"7095490454"}
                    Image={Rohan}
                    LinkedIn={""}
                    instagram={"https://www.instagram.com/justt.rohan_46/"}
                />
                <ProfileCard
                    Title={"M. Bhavani Malleswari"}
                    Email={"bhavanimaradapu333@gmail.com"}
                    PhoneNo={"7207225889"}
                    Image={Bhavani}
                    LinkedIn={
                        "https://linkedin.com/in/maradapu-bhavani-malleswari-075271257"
                    }
                    instagram={""}
                />
                <ProfileCard
                    Title={"K. Samatha"}
                    Email={"ksamatha2004@gmail.com"}
                    PhoneNo={"7416079171"}
                    Image={""}
                    LinkedIn={""}
                    instagram={"https://www.instagram.com/samatha._.kelli/"}
                />
            </div>
        </div>
    );
};

export default ContactUs;
