import React, {useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate ();

    const guidelines = [
        "Only selected teams are required to pay fees.",
        "The minimum number of members per team is 2, while the maximum is 4 and the fee per head is ₹500 only .",
        "Teams are authorized to take photographs and record videos during the event.",
        "Eligibility is open to individuals currently pursuing a BE/B.Tech, ME/M.Tech, or Diploma from a recognized institution.",
        "Team names must be unique and distinct. ",
        "Participants are required to bring their own hardware components, as these will not be supplied by the organizers.",
        "Teams utilizing hardware must ensure their final submission is made during the presentation.",
        "Participants may form teams comprising students from various branches, as long as all team members belong to the same institution.",
        "A valid ID card is mandatory for all students",
        "Timeliness is mandatory for all students.",
        "Attendance for the full 2-day duration is compulsory for all participants."
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
                <button 
                className="text-white mt-5 p-4 w-44 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full self-center"
                onClick={() => {navigate("/ReadMore");}}
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Guidelines;
