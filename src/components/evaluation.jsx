import React, { useState, useEffect, useRef } from "react";
import { CircleChevronRight } from "lucide-react";

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

const Points = () => {
    const [ref, isVisible] = useFadeInOnScroll();

    const points = [
        {
            head: "Innovation",
            desc: "Creaticity of solution "
        },
        {
            head: "Impact",
            desc: "Potential of solution to the address the problem statement "
        },
        {
            head: "Usability ",
            desc: "User-friendliness"
        },
        {
            head: "Technical Feasibility",
            desc: "How practically the solution can  be implemented and scaled"
        },
        {
            head: "Presentation ",
            desc: "Clarity and proffessionalism"
        }
    ];
    return (
        <div
            ref={ref}
            className={`flex flex-col items-center p-4 pb-6 gap-6 lg:mx-24 md:mx-14 fade-in-bottom ${isVisible ? 'visible' : ''}`}
            id="points"
        >
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-5">

            </h1>
            <div className="w-full p-4 md:p-6 flex flex-col gap-4 text-muted-foreground">
                <h2 className="text-gray-900 dark:text-muted-foreground text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight">
                    Evaluation & Judging
                </h2>
                <div>
                    {points.map((point, index) => ( //md:mx-12 mx-6
                        <div key={index} className="flex items-start space-x-3 my-4 mx-4">
                            <CircleChevronRight className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                            <p className="lg:text-xl md:text-lg text-md flex-shrink text-gray-600 dark:text-muted-foreground align-middle"><h3 className="text-gray-900 dark:text-muted-foreground flex-shrink-0 text-xl md:text-2xl lg:text-2xl font-semibold tracking-tight lg:inline-block mr-2">{point.head} : </h3>
                                {point.desc}</p>
                        </div>
                    ))}

                </div>
                <h2 className="text-gray-900 dark:text-muted-foreground text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight my-3">
                    Judging Panel
                </h2>
                <div className="space-x-3 my-2 mx-5">
                    <p
                        className="lg:text-xl md:text-lg text-md text-gray-600 dark:text-muted-foreground "
                    >
                        A panel of experts from all themes which are present .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Points;
