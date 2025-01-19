import React from "react";

const CategoryList = () => {
    return (
        <div className="flex flex-wrap justify-between p-6 md:p-12 space-y-6 md:space-y-0">
            {/* Category Column */}
            <div className="w-full md:w-1/4 flex flex-col space-y-4">
                <ul>
                    <h1 className="font-bold text-lg mb-4">Icons</h1>
                    <li className="hover:text-gray-600">Air Force 1</li>
                    <li className="hover:text-gray-600">Huarache</li>
                    <li className="hover:text-gray-600">Air Max 90</li>
                    <li className="hover:text-gray-600">Air Max 95</li>
                </ul>
            </div>

            {/* Repeating the same structure for additional columns */}
            <div className="w-full md:w-1/4 flex flex-col space-y-4">
                <ul>
                    <h1 className="font-bold text-lg mb-4">Shoes</h1>
                    <li className="hover:text-gray-600">All Shoes</li>
                    <li className="hover:text-gray-600">Custom Shoes</li>
                    <li className="hover:text-gray-600">Jordan Shoes</li>
                    <li className="hover:text-gray-600">Running Shoes</li>
                </ul>
            </div>

            <div className="w-full md:w-1/4 flex flex-col space-y-4">
                <ul>
                    <h1 className="font-bold text-lg mb-4">Clothing</h1>
                    <li className="hover:text-gray-600">All Clothing</li>
                    <li className="hover:text-gray-600">Modest Wear</li>
                    <li className="hover:text-gray-600">Hoodles & Pullovers</li>
                    <li className="hover:text-gray-600">Shirts & Tops</li>
                </ul>
            </div>

            <div className="w-full md:w-1/4 flex flex-col space-y-4">
                <ul>
                    <h1 className="font-bold text-lg mb-4">Kids&apos;</h1>
                    <li className="hover:text-gray-600">infact & Toddler Shoes</li>
                    <li className="hover:text-gray-600">Kids&apos; Shoes</li>
                    <li className="hover:text-gray-600">Kids&apos; Jordan Shoes</li>
                    <li className="hover:text-gray-600">Kids&apos; Basketball Shoes</li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryList;