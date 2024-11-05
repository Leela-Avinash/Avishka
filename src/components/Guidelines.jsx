import React, {useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

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

const Guidelines = () => {
    const [ref, isVisible] = useFadeInOnScroll();

    const guidelines = [
        "Free registration for all participants.",
        "Each team may have between 1 to 4 participants.",
        "Any One who is studying BE/B.Tech , ME/M.Tech, diploma, MSC, BSC, and BCOM from a recognised institution are eligible to participate.",
        "Team names must be unique.",
        "For selected teams, mentor presence is optional. Mentors, if present, will be charged Rs. 200 per day.",
        "Teams must bring any necessary hardware components for their projects, as organizers will not provide hardware.",
        "Teams using hardware must make their final submission during the presentation.",
        "Teams may consist of students from different branches.",
        "ID cards are mandatory for both students and their mentors.",
    ];
    return (
        <div
            ref={ref}
            className={`flex flex-col items-center p-4 pb-6 gap-6 lg:mx-24 md:mx-14 fade-in-bottom ${isVisible ? 'visible' : ''}`}
            id="guidelines"
        >
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-5">
                Guidelines
            </h1>
            <div className="w-full p-4 md:p-6 flex flex-col gap-4 text-muted-foreground">
                <h2 className="text-gray-900 dark:text-muted-foreground text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight">
                    Participant Guidelines
                </h2>
                <div>
                    {guidelines.map((guideline, index) => ( //md:mx-12 mx-6
                        <div key={index} className="flex items-start space-x-3 my-4 mx-4">
                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                            <p className="lg:text-xl md:text-lg text-md text-gray-600 dark:text-muted-foreground">{guideline}</p>
                        </div>
                    ))}
                </div>
                <button className="text-white mt-5 p-4 w-44 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full self-center">
                    Register
                </button>
            </div>
        </div>
    );
};

export default Guidelines;
