import React from "react";

const Guidelines = () => {
    const guidelines = [
        "Free registration for all participants.",
        "Each team may have between 1 to 4 participants.",
        "Any One who is studying BE/B.Tech , ME/M.Tech, diploma, MSC, BSC, and BCOM from a recognised institution are eligible to participate.",
        "Team names must be unique.",
        "For selected teams, mentor presence is optional. Mentors, if present, will be charged Rs. 200 per day.",
        "A fee of Rs. 500 per participant will be charged, covering accommodation and food for selected teams during the hackathon.",
        "Teams must bring any necessary hardware components for their projects, as organizers will not provide hardware.",
        "Teams using hardware must make their final submission during the presentation.",
        "Teams may consist of students from different branches.",
        "ID cards are mandatory for both students and their mentors.",
    ];
    return (
        <div
            className="flex flex-col items-center p-4 pb-6 gap-6 lg:mx-24 md:mx-14"
            id="guidelines"
        >
            <h1 className="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 text-[#3564ca] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                ProjectExpo Guidelines
            </h1>
            <div className="w-full p-4 md:p-6 flex flex-col gap-4 text-muted-foreground">
                <h2 className="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 text-[#3564ca] text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight">
                    Participant Guidelines
                </h2>
                <div>
                    {guidelines.map((guideline, index) => (
                        <p
                            key={index}
                            className="lg:text-xl md:text-lg text-md my-4 md:mx-12 mx-6 text-[#1F2667] dark:text-muted-foreground"
                        >
                            {guideline}
                        </p>
                    ))}
                </div>
                <button className="text-white my-5 p-4 w-44 dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 bg-gradient-to-r from-[#0078ff] via-[#00a2ff] to-[#00d0ff] rounded-full self-center">
                    Register
                </button>
            </div>
        </div>
    );
};

export default Guidelines;
