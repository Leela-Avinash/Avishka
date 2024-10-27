import React from 'react'
import Caroussel from './Carousel';
import CarouselCard from "./CarouselCard";
import { v4 as uuidv4 } from "uuid";

const Themes = () => {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <CarouselCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
            ),
        },
    ];
  return (
    <div className="flex flex-col items-center p-4 pb-6 gap-6" id="themes">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Themes
            </h1>
            <Caroussel
                cards={cards}
                height="500px"
                width="50%"
                margin="0 auto"
                offset={2}
                showArrows={false}
            />
    </div>
  )
}

export default Themes