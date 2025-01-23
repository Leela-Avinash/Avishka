import React from "react";
import { CalendarClock, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black backdrop:blur-md text-gray-200 dark:text-muted-foreground py-8 flex flex-col items-center gap-5">
            <div className="lg:w-[80%]">
                <div className="flex flex-wrap justify-evenly gap-8">
                    <div className="w-full lg:w-1/4 md:w-1/2 flex justify-center">
                        {/* <i className="bi bi-geo-alt text-2xl mr-3"></i> */}
                        <MapPin size={20} className="mr-3 mt-2"/>
                        <div>
                            <h4 className="text-lg font-semibold">Venue</h4>
                            <p>
                                JNTU-GV COLLEGE OF ENGINEERING
                                <br />
                                DWARAPUDI, VIZIANAGARAM
                                <br />
                                ANDHRA PRADESH - 535003
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 md:w-1/2 flex justify-center">
                        {/* <i className="bi bi-telephone text-2xl mr-3"></i> */}
                        <Phone size={20} className="mr-3 mt-2"/>
                        <div>
                            <h4 className="text-lg font-semibold">Contact Us</h4>
                            <p>
                                <strong>Email: </strong>
                                avishka@jntugvcev.edu.in
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 md:w-1/2 flex justify-center">
                        {/* <i className="bi bi-clock text-2xl mr-3"></i> */}
                        <CalendarClock size={20} className="mr-3 mt-2"/>
                        <div>
                            <h4 className="text-lg font-semibold">Expo Dates</h4>
                            <p>
                                <strong>March 12-13</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-8 text-center">
                <div className="text-sm">
                    &copy; Copyright{" "}
                    <strong>
                        <span>JNTU-GV</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className="text-sm mt-2">Designed by Avishka Team</div>
            </div>
        </footer>
    );
};

export default Footer;
