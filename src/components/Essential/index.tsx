import React from 'react';
import { CarouselImage } from '../Carousel';

const Essential = () => {
    return (
        <div className="p-4 md:p-8 lg:p-standardSize flex flex-col justify-center space-y-6">
            {/* Section Header */}
            <span className="flex justify-between items-center">
                <h1 className="text-xl font-medium font-sans">
                    The Essentials
                </h1>
            </span>

            {/* Carousel Section */}
            <span
            // className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400"
            >
                <CarouselImage
                    flash={true}
                    essential={true}
                    data={[
                        {
                            icon: "/assets/essential-1.svg",
                            title: "Nike Air Max Pulse",
                            category: "Men's",
                            price: "13 995",
                        },
                        {
                            icon: "/assets/essential-2.svg",
                            title: "Nike Air Max Pulse",
                            category: "Women's",
                            price: "13 995",
                        },
                        {
                            icon: "/assets/essential-3.svg",
                            title: "Nike Air Max Pulse",
                            category: "Kids'",
                            price: "13 995",
                        },
                    ]}
                />
            </span>

            {/* Optional Button */}
            {/* <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded hover:bg-tertiary-dark transition-all">
                    View All Products
                </button>
            </span> */}
        </div>
    );
};

export default Essential;
