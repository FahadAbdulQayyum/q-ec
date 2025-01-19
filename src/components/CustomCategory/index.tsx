import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const CustomCategory = () => {

    const Categorize = [
        { name: "Shoes", subCategory: false },
        { name: "Sports Bras", subCategory: false },
        { name: "Tops & T-Shirts", subCategory: false },
        { name: "Hoodies & Sweatshirts", subCategory: false },
        { name: "Jackets", subCategory: false },
        { name: "Trousers & Tights", subCategory: false },
        { name: "Shorts", subCategory: false },
        { name: "Tracksuits", subCategory: false },
        { name: "Jumpsuits & Rompers", subCategory: false },
        { name: "Skirts & Dresses", subCategory: false },
        { name: "Socks", subCategory: false },
        { name: "Accessories & Equipment", subCategory: false },
    ];

    return (
        <div className="border-r-2">
            {Categorize?.map((v) => (
                <div key={v.name} className="text-secondaryy flex justify-between items-center font-medium w-60 pr-3 my-4">
                    <span>{v.name}</span>
                    <span>{v.subCategory && <RiArrowRightSLine />}</span>
                </div>
            ))}
            <div className="border-t-2 my-5 w-full"></div>

            {/* Gender Filter */}
            <div>
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-40">
                        <span>Gender</span>
                        <span><RiArrowRightSLine /></span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <input type="checkbox" id="men" name="gender" value="men" />
                        <label className="ml-2" htmlFor="men">Men</label><br />
                        <input type="checkbox" id="women" name="gender" value="women" />
                        <label className="ml-2" htmlFor="women">Women</label><br />
                        <input type="checkbox" id="unisex" name="gender" value="unisex" />
                        <label className="ml-2" htmlFor="unisex">Unisex</label><br />
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="border-t-2 my-5 w-full"></div>

            {/* Kids Filter */}
            <div>
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-40">
                        <span>Kids</span>
                        <span><RiArrowRightSLine /></span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <input type="checkbox" id="boys" name="kids" value="boys" />
                        <label className="ml-2" htmlFor="boys">Boys</label><br />
                        <input type="checkbox" id="girls" name="kids" value="girls" />
                        <label className="ml-2" htmlFor="girls">Girls</label><br />
                        <input type="checkbox" id="unisexKids" name="kids" value="unisex" />
                        <label className="ml-2" htmlFor="unisexKids">Unisex</label><br />
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="border-t-2 my-5 w-full"></div>

            {/* Price Filter */}
            <div>
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-40">
                        <span>Shop By Price</span>
                        <span><RiArrowRightSLine /></span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <input type="checkbox" id="under" name="price" value="under" />
                        <label className="ml-2" htmlFor="under">Under 20 000</label><br />
                        <input type="checkbox" id="above" name="price" value="above" />
                        <label className="ml-2" htmlFor="above">Above 20 000</label><br />
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </div>
    );
}

export default CustomCategory;
