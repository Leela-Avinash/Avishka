import React from "react";
import ParticleCanvas from "./ParticleCanvas";
import CountdownTimer from "./CountdownTimer";
import {
    ArrowRight,
    Trophy,
    GraduationCap,
    Users,
    Building,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import AvishkaMainLogo from "../assets/Avishka_main_logo.png";

const HeroSection = () => {
    return (
        // bg-gradient-to-br from-indigo-600 to-purple-700
        // bg-gradient-to-br from-gray-800 to-blue-900
        <section className="relative h-screen md:h-[calc(100vh-3.8rem)] py-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
            <ParticleCanvas />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                <div className="text-center text-white mb-12 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6">
                        <img
                            src={`${AvishkaMainLogo}`}
                            alt=""
                            className="md:h-20 h-14"
                        />
                        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
                            Avishka 2K25
                        </h1>
                    </div>
                    <div className="h-10 flex items-center">
                        <TypeAnimation
                            sequence={[
                                "Join us on Feb 28 & Mar 1 for Avishka!",
                                2000,
                                "", 
                                500,
                                "Showcasing Tomorrow's Technology Today",
                                2000,
                                "", 
                                500,
                            ]}
                            wrapper="div"
                            speed={50}
                            cursor={false}
                            repeat={Infinity}
                            className="text-xl md:text-2xl mb-8 text-indigo-100 animate-fade-in text-center"
                        />
                    </div>

                    <div className="mb-12">
                        <CountdownTimer />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center gap-2 group">
                            Register Now
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <Trophy className="h-12 w-12 mx-auto mb-2" />
                            <p className="font-semibold text-2xl">₹1,00,000</p>
                            <p className="text-sm text-indigo-200">
                                Prizes Upto
                            </p>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <GraduationCap className="h-12 w-12 mx-auto mb-2" />
                            <p className="font-semibold text-2xl">20+</p>
                            <p className="text-sm text-indigo-200">Projects</p>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <Users className="h-12 w-12 mx-auto mb-2" />
                            <p className="font-semibold text-2xl">100+</p>
                            <p className="text-sm text-indigo-200">
                                Participants
                            </p>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform duration-300">
                            <Building className="h-12 w-12 mx-auto mb-2" />
                            <p className="font-semibold text-2xl">30+</p>
                            <p className="text-sm text-indigo-200">Colleges Nationwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
