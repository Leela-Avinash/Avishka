import React from "react";
import ProfileCard from "./ProfileCard";
import Bhavani from "../assets/Bhavani.jpg";
import Rohan from "../assets/Rohan.jpg"
import Venkat from "../assets/Venkat.jpg";

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center p-4 pb-6 gap-6" id="contact">
            <h1 className="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0078ff] dark:via-[#00a2ff] dark:to-[#0099ff] text-[#3564ca] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Our Team
            </h1>
            <div className=" flex w-[90%] justify-around items-center flex-wrap flex-col md:flex-row">
                <ProfileCard Title={"B. Venkat Sai"} Email={"venkatofficialac@gmail.com"} PhoneNo={"7416258176"} Image={Venkat} LinkedIn={"https://www.linkedin.com/in/behara-venkat-sai-651aa1256"} instagram={"https://www.instagram.com/venkatwhitedevil/"}/>
                <ProfileCard Title={"S. Sai Rohan"} Email={"sampatiraao@gmail.com"} PhoneNo={"7095490454"} Image={Rohan} LinkedIn={""} instagram={"https://www.instagram.com/justt.rohan_46/"}/>
                <ProfileCard Title={"M. Bhavani Malleswari"} Email={"bhavanimaradapu333@gmail.com"} PhoneNo={"7207225889"} Image={Bhavani} LinkedIn={"https://linkedin.com/in/maradapu-bhavani-malleswari-075271257"} instagram={""}/>
                <ProfileCard Title={"K. Samatha"} Email={"ksamatha2004@gmail.com"} PhoneNo={"7416079171"} Image={""} LinkedIn={""} instagram={"https://www.instagram.com/samatha._.kelli/"}/>
            </div>
        </div>
    );
};

export default ContactUs;
