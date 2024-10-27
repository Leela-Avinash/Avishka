import React from "react";
import Card from "./Card";
import ClgImage from "../assets/JNTU-GV_clg.jpg";

const About = () => {
    return (
        <div className="flex flex-col items-center p-4 pb-6 gap-6" id="about">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Learn More About Us
            </h1>
            <div className="flex justify-around flex-col md:flex-row items-center w-full flex-wrap gap-6 md:gap-4">
                {[
                    {
                        Image: ClgImage,
                        Title: "JNTU-GV",
                        Description:
                            "JNTU College of Engineering, Vizianagaram, initially part of JNTU Hyderabad, became a constituent college of JNTU Kakinada in 2008. Subsequently, it evolved into Jawaharlal Nehru Technological University Gurajada, Vizianagaram, in 2022. The university spans six districts, housing two constituent colleges and 37 affiliated institutions, offering education in various engineering, pharmacy, and management disciplines.",
                    },
                    {
                        Image: ClgImage,
                        Title: "CSE Department",
                        Description:
                            "The Department of CSE is distinctively positioned to educate the technological leaders of tomorrow. The goal is to ensure our engineering graduates to be problem solvers, project leaders, entrepreneurs, and ethical citizens of global society. Through innovative teaching-learning processes, a teamwork approach and leadership building experience, and the students will gain vital communication and critical-thinking skills.",
                    },
                    {
                        Image: ClgImage,
                        Title: "Constelle",
                        Description:
                            "CONSTELLE stands as an energetic student club led by Computer Science and Engineering (CSE) students, with a core mission to inspire innovation and collaboration. Our diverse range of activities, including the engaging 'Drop Everything and Code (DEC), all converge to create an environment that fosters knowledge sharing, and nurtures creativity.'",
                    },
                    {
                        Image: ClgImage,
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
