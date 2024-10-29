import React from "react";
import ProfileCard from "./ProfileCard";

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center p-4 pb-6 gap-6" id="contact">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Our Team
            </h1>
            <div className=" flex w-[90%] justify-around items-center flex-wrap flex-col md:flex-row">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    );
};

export default ContactUs;
