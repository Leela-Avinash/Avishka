import React, {useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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

const Criteria = () => {
    const [ref, isVisible] = useFadeInOnScroll();

    const criteria = [
        "A comprehensive PowerPoint presentation featuring an in-depth flowchart for clear and structured visualization.",
        "A comprehensive write-up will encompass key aspects such as innovation, alignment with the problem statement, technical feasibility, and the potential impact of the proposed solution."
    ];
    return (
        <div
            ref={ref}
            className={`flex flex-col items-center p-4 pb-6 gap-6 lg:mx-24 md:mx-14 fade-in-bottom ${isVisible ? 'visible' : ''}`}
            id="criteria"
        >
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-2">
               CRITERIA
            </h1>
            <div className="w-full p-4 md:p-6 flex flex-col gap-4 text-muted-foreground">
                <div>
                    {criteria.map((guideline, index) => ( //md:mx-12 mx-6
                        <div key={index} className="flex items-start space-x-3 my-4 mx-4">
                            <ArrowRight className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                            <p className="lg:text-xl md:text-lg text-md text-gray-600 dark:text-muted-foreground">{guideline}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Criteria;
