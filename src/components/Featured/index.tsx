import React from "react";
import Image from "next/image";

const Featured: React.FC = () => {
    return (
        <div className="p-standardSize">
            {/* <h1 className="font-bold text-xl mb-5">Featured</h1> */}
            <h1 className="text-xl font-medium font-sans mb-4">Featured</h1>
            <div className="relative h-screen">
                <Image
                    src="/assets/featured.svg"
                    alt="Featured product with a pair of shoes"
                    layout="fill" // Makes the image fill its parent container
                    objectFit="cover" // Ensures the image covers the container
                    priority // Ensures the hero image is loaded quickly
                />
            </div>
            <div className="flex flex-col items-center space-y-5 pt-10">
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    STEP INTO WHAT FEELS GOOD
                </h1>
                <p className="text-sm text-center md:text-base">
                    Cause everyone should know the feeling of running in that perfect pair.
                </p>
                <button className="text-sm bg-black rounded-full p-2 px-4 text-white">
                    Find Your Shoe
                </button>
            </div>
        </div>
    );
};

export default Featured;
