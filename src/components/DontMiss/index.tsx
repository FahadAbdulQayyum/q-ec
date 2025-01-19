import React from "react";
import Image from "next/image";

const DontMiss: React.FC = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12"> {/* Adjust padding for responsiveness */}
            {/* <h1 className="font-bold text-xl mb-5">Don&apos;t Miss</h1> */}
            <h1 className="text-xl font-medium font-sans mb-4">Don&apos;t Miss</h1>
            <div className="relative h-screen">
                <Image
                    src="/assets/dontmiss.svg"
                    alt="Hero Image"
                    layout="fill" // Makes the image fill its parent container
                    objectFit="cover" // Ensures the image covers the container
                    priority // Ensures the hero image is loaded quickly
                />
            </div>
            <div className="flex flex-col items-center space-y-3 pt-6">
                <h2 className="text-4xl md:text-5xl font-bold">FLIGHT ESSENTIALS</h2> {/* Changed to h2 */}
                <p className="text-sm text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                <button className="text-sm bg-black rounded-full p-2 px-4 text-white hover:bg-gray-800 transition-all">
                    Shop
                </button>
            </div>
        </div>
    );
};

export default DontMiss;
