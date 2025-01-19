"use client";

import CustomCategory from '@/components/CustomCategory';
import Image from 'next/image';
import { RiLoader3Fill } from "react-icons/ri";
import { useRouter } from 'next/navigation';

type ProductType = {
    id: number;
    status: string;
    color: string;
    desc: string;
    category: string;
    image: string;
    title: string;
    price: string;
};

const Products = () => {

    const btns = Array(10).fill({ name: 'Best Selling Products' });

    const data = [
        {
            id: 0,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's shoe",
            image: '/assets/product-1.svg',
            title: "Nike Air Force 1 Mid '07",
            price: '8 695.00',
        },
        {
            id: 1,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's shoe",
            image: '/assets/product-2.svg',
            title: 'Nike Court Vision Low Next Nature',
            price: '4 995.00',
        },
        {
            id: 2,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's shoe",
            image: '/assets/product-3.svg',
            title: 'Nike Air Force 1 PLT.AF.ORM',
            price: '8 695.00',
        },
        {
            id: 3,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's shoe",
            image: '/assets/product-4.svg',
            title: 'Nike Air Force 1 React',
            price: '13 295.00',
        },
        {
            id: 4,
            status: 'Promo Exclusion',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Women's shoe",
            image: '/assets/product-5.svg',
            title: 'Air Jordan 1 Elevate Low',
            price: '11 895.00',
        },
        {
            id: 5,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Women's Basketball Jersey",
            image: '/assets/product-6.svg',
            title: 'Air Jordan 1 Elevate Low',
            price: '11 895.00',
        },
        {
            id: 6,
            status: 'Promo Exclusion',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Shoes",
            image: '/assets/product-7.svg',
            title: 'Nike Dunk Low Retro SE',
            price: '9 695.00',
        },
        {
            id: 7,
            status: 'Sustainable Materials',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Graphic Fitness Top",
            image: '/assets/product-8.svg',
            title: 'Nike Dri-FIT UV Hyverse',
            price: '2 495.00',
        },
        {
            id: 8,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Shoes",
            image: '/assets/product-9.svg',
            title: 'Nike Court Vision Low',
            price: '5 695.00',
        },
        {
            id: 9,
            status: 'Just In',
            color: '3 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Fitness Top",
            image: '/assets/product-10.svg',
            title: 'Nike Dri-FIT Ready',
            price: '2 495.00',
        },
        {
            id: 10,
            status: 'Just In',
            color: '3 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
            image: '/assets/product-11.svg',
            title: 'Nike One Leak Protection: Period',
            price: '3 395.00',
        },
        {
            id: 11,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Older Kids' Shoe",
            image: '/assets/product-12.svg',
            title: 'Nike Air Force 1 LV8 3',
            price: '7 495.00',
        },
        {
            id: 12,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Women's Shoes",
            image: '/assets/product-13.svg',
            title: 'Nike Blazer Low Platform',
            price: '8 195.00',
        },
        {
            id: 13,
            status: 'Just In',
            color: '2 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Women's Shoe",
            image: '/assets/product-14.svg',
            title: 'Nike Air Force 1 \'07',
            price: '8 195.00',
        },
        {
            id: 14,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Tight-Fit Sleeveless Top",
            image: '/assets/product-15.svg',
            title: 'Nike Pro Dri-FIT',
            price: '1 495.00',
        },
        {
            id: 15,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Shoes",
            image: '/assets/product-16.svg',
            title: 'Nike Dunk Low Retro',
            price: '8 695.00',
        },
        {
            id: 16,
            status: 'Just In',
            color: '2 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Women's Shoes",
            image: '/assets/product-17.svg',
            title: 'Nike Air Max SC',
            price: '5 995.00',
        },
        {
            id: 17,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-18.svg',
            title: 'Nike Dri-FIT UV Miler',
            price: '1 695.00',
        },
        {
            id: 18,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-19.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 19,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-20.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 20,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-21.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 21,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-22.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 22,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-23.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 23,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-24.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 24,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-25.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 25,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-26.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 26,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-27.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 27,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-28.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 28,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-29.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 29,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-30.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 30,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-31.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 31,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-32.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 32,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-33.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 33,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-34.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 34,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-35.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 35,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-36.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 36,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-37.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 37,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-38.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },
        {
            id: 38,
            status: 'Just In',
            color: '3 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid...',
            category: "Men's Short-Sleeve Running Top",
            image: '/assets/product-39.svg',
            title: 'Nike Air Max SYSTM',
            price: '6 495.00',
        },

    ];

    const router = useRouter();

    const handleImageClick = (product: ProductType) => {
        const queryString = encodeURIComponent(JSON.stringify(product));
        router.push(`/Products/${product.id}?data=${queryString}`);
    };

    return (
        <div className="px-4 md:px-8 py-5">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg md:text-xl">New (500)</h1>
                <div className="flex space-x-4 text-sm md:text-base">
                    <p>Hide Filter</p>
                    <p>Sort By</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 py-5">
                <div className="w-full md:w-1/4">
                    <CustomCategory />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {data.map((product: ProductType) => (
                        <div key={product.id} className="border rounded-lg p-4">
                            <div
                                className="cursor-pointer bg-gray-100 rounded-md"
                                onClick={() => handleImageClick(product)}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={500}
                                    height={500}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-quartiary font-bold">{product.status}</p>
                                <p className="font-bold text-lg">{product.title}</p>
                                <p className="text-sm text-gray-400">{product.category}</p>
                                <p className="text-sm text-gray-400">{product.color}</p>
                                <p className="mt-4 font-bold text-lg">{'MRP : ₹' + product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center py-10">
                <RiLoader3Fill className="text-3xl animate-spin" />
            </div>

            <div className="border-t-2 mt-5 pt-5">
                <h1 className="font-bold text-lg md:text-xl">Related Categories</h1>
                <div className="flex flex-wrap gap-3 mt-4">
                    {btns.map((b, i) => (
                        <button
                            key={i}
                            className="border rounded-full text-sm p-2 px-4 hover:bg-gray-100"
                        >
                            {b.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
