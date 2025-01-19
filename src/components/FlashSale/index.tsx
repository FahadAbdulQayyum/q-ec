import React from 'react';
// import Counter from '../Counter';
import { CarouselImage } from '../Carousel';

const FlashSale = () => {
    const products = [
        {
            id: 0,
            image: '/assets/best-nike-1.svg',
            title: 'Nike Air Max Pulse',
            category: "Women's Shoes",
            price: '13 995',
        },
        {
            id: 1,
            image: '/assets/best-nike-2.svg',
            title: 'Nike Air Max Pulse',
            category: "Women's Shoes",
            price: '13 995',
        },
        {
            id: 2,
            image: '/assets/best-nike-3.svg',
            title: 'Nike Air Max Pulse',
            category: "Women's Shoes",
            price: '13 995',
        },
        {
            id: 3,
            image: '/assets/best-nike-3.svg',
            title: 'Nike Air Max Pulse',
            category: "Women's Shoes",
            price: '13 995',
        },
        {
            id: 4,
            image: '/assets/best-nike-3.svg',
            title: 'Nike Air Max Pulse',
            category: "Women's Shoes",
            price: '13 995',
        },
    ];

    return (
        <div className="p-4 md:p-standardSize flex flex-col justify-center space-y-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans"> */}
                <h1 className="text-xl font-medium font-sans">
                    Best of Air Max
                </h1>
                {/* <Counter /> */}
            </div>

            {/* Carousel Section */}
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
                <CarouselImage flash={true} data={products} />
            </div>

            {/* Optional Button */}
            {/* <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded hover:bg-tertiary-dark transition-all">
                    View All Products
                </button>
            </span> */}
        </div>
    );
};

export default FlashSale;
