import React, { useState, useEffect, useRef } from "react";

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

const Sponsors = () => {
    const [ref, isVisible] = useFadeInOnScroll();

    return (
        <div ref={ref} className={`flex flex-col items-center p-4 pb-6 gap-6" id="themes fade-in-bottom ${isVisible ? 'visible' : ''}`}>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                Sponsors
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-700 tracking-tight">
                    Platinum
                </span>{" "}
                Sponsors
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ae8625] to-[#D4Ac47] tracking-tight">
                    Gold
                </span>{" "}
                Sponsors
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A8A9AD] to-[#C0C0C3] tracking-tight">
                    Silver
                </span>{" "}
                Sponsors
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CE8946] to-[#CD7F32] tracking-tight">
                    Bronze
                </span>{" "}
                Sponsors
            </h1>
        </div>
    );
};

export default Sponsors;
