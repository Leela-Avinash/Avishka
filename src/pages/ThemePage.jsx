import React from "react";
import { useParams } from "react-router-dom";
import SmartEducation from "../assets/SmartEducation.jpg";
import SustainableFuture from "../assets/SustainableFuture .jpg";
import HealthAgriculture from "../assets/HealthAgriculture.jpg";
import IOT from "../assets/IOT.jpg";
import { div } from "framer-motion/client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
// Sample array of themes
const themes = [
    {
        link: "SmartEducationandAutomation",
        name: "Smart Education and Automation",
        image: SmartEducation,
        about: "This theme focuses on innovative educational technologies and automation tools to enhance learning experiences.",
        goal: "To explore and implement solutions that facilitate smarter educational practices and automation in teaching.",
    },
    {
        link: "SustainableFutureThroughIntegratedTechnologies",
        name: "Sustainable Future through Integrated Technologies",
        image: SustainableFuture,
        about: 'The theme "Sustainable Future through Integrated Technologies" is a dynamic exploration of the convergence of TRANSPORTATION & LOGISTICS, ROBOTICS AND DRONES, RENEWABLE ENERGY & POLLUTION CONTROL. Participants will immerse themselves in the challenge of creating interconnected systems that prioritize sustainability. By focusing on transportation, energy, and pollution control, participants will strive to create innovative solutions that balance efficiency with eco-consciousness, paving the way for a greener future.',
        goal: "Participants are expected to present solutions that seamlessly integrate technology with sustainability principles. Judges will evaluate the extent to which the solutions address challenges related to transportation efficiency, energy innovation, and pollution reduction. Successful submissions will showcase a deep understanding of the interplay between technology and environmental responsibility. The solutions should offer practical, scalable ways to contribute to a more sustainable world.",
    },
    {
        link: "HealthAgricultureandRuralDevelopment",
        name: "Health Agriculture and Rural Development",
        image: HealthAgriculture,
        about: "This theme addresses innovations in healthcare technologies and practices.",
        goal: "To improve healthcare delivery and patient outcomes through innovative solutions.",
    },
    {
        link: "IOTandApplicationSecurity",
        name: "IOT and Application Security",
        image: IOT,
        about: "This theme emphasizes the importance of cybersecurity and protecting personal data in the digital age.",
        goal: "To create robust security solutions that ensure data privacy and integrity.",
    },
];

const ThemePage = () => {
    const { theme } = useParams();

    // Find the theme that matches the theme parameter
    const selectedTheme = themes.find((t) => t.link === theme);

    return (
        <div className="container mx-auto p-6 md:w-[85%]">
            {selectedTheme ? (
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-10 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0078ff] dark:via-[#00a2ff] dark:to-[#0099ff] text-[#3564ca]">
                        {selectedTheme.name}
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
                        <img
                            src={`${selectedTheme.image}`}
                            alt={selectedTheme.name}
                            className="w-full md:w-1/3 rounded-lg shadow-lg"
                        />
                        <div className="text-left md:w-2/3">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#3564ca] mb-2">
                                About
                            </h2>
                            <p className="text-[#1F2667] dark:text-muted-foreground mb-4 lg:text-lg text-md">
                                {selectedTheme.about}
                            </p>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold dark:to-blue-500 text-[#3564ca] mb-2">
                                Goal
                            </h2>
                            <p className="text-[#1F2667] dark:text-muted-foreground mb-4 lg:text-lg text-md">
                                {selectedTheme.goal}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">Theme not found.</p>
            )}
        </div>
    );
};

export default ThemePage;
