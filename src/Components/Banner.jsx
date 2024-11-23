import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function Banner() {
    return (
        <div
            className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(/bannerBackground.jpg)`,
                backgroundSize: 'cover', // Ensures the image covers the container without being cut off
                backgroundPosition: 'center', // Keeps the center of the image visible
            }}
        >
            <div className="text-center text-white px-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Elevate Your Everyday Style
                </h1>
                <p className="text-sm md:text-lg lg:text-xl mb-6">
                    Discover the Latest Trends in Sustainable Fashion
                </p>
                <div className='flex items-center justify-center'>
                    <button className="bg-[#8F71E1] text-white px-5 py-3 rounded-badge">
                        Shop Now
                    </button>
                    <button className="bg-[#8F71E1] text-white p-3 rounded-full">
                        <MdArrowOutward />
                    </button>
                </div>
            </div>
        </div>
    )
}
