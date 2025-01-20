"use client"

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import { useSearchParams } from 'next/navigation'; // Change this import
import { useDispatch } from 'react-redux';
import { pushCart } from '@/components/lib/features/cart/cartSlice';

import { ImLocation } from "react-icons/im";

import { useRouter } from 'next/navigation';


type dataType = {
    _id: string;
    name: string;
    variation: string;
    city_available: string;
    price: number;
    currently_offered: boolean;
    pic: {
        asset: {
            _ref: string;
        };
    };
};


const FetchingSanityData = () => {
    const [fetchedData, setFetchedData] = useState<dataType[]>([]);
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();
    const address = searchParams.get('address');
    const dispatch = useDispatch();

    const router = useRouter();

    const handleAddToCart = (productName: dataType) => {
        dispatch(pushCart(productName));
    };

    useEffect(() => {
        const fetchFunction = async () => {
            const data: dataType[] = await client.fetch(`
                *[_type=='service']{
                    _id, 
                    name, 
                    variation, 
                    city_available, 
                    price, 
                    currently_offered, 
                    "pic": pic.asset->url
                }
            `);
            console.log('data....', data)
            if (address !== null) {
                const filteredData = data.filter(service =>
                    service.city_available.split(',').some(city => address.toLowerCase().includes(city.trim().toLowerCase()))
                );
                setFetchedData(filteredData);
            } else {
                setFetchedData(data);
            }
            setLoading(false);
        };
        fetchFunction();
    }, [address]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen relative">
            <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
        </div>;
    }

    const handleRouter = (service: any) => {
        router.push(`/services/${service._id}?data=${service._id}`)
    }

    return (
        <div>
            <div className="flex justify-center items-center bg-gray-400 h-16 pt-4 text-white"><ImLocation className="mr-2" />{address ? JSON.parse(address) : 'null'}</div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {fetchedData.map(service => (
                        <div
                            key={service._id}
                            className="border rounded-lg p-4 shadow-lg"
                            onClick={() => handleRouter(service)}
                        >
                            <Image
                                src={urlFor(service?.pic)?.url()}
                                alt={service.name}
                                width="120"
                                height="120"
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                            <p className="text-gray-700 mb-1">{service.variation}</p>
                            <p className="text-gray-700 mb-1">{service.city_available}</p>
                            <p className="text-gray-900 font-bold mb-1">PKR {service.price}/=</p>
                            <p className={`text-sm ${service.currently_offered ? 'text-green-500' : 'text-red-500'}`}>
                                {service.currently_offered ? 'Offered' : 'Not Offered'}
                            </p>
                            {/* <button
                                onClick={() => handleAddToCart(service)}
                                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">
                                Add to Cart
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen relative">
                <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
            </div>
        }>
            <FetchingSanityData />
        </Suspense >
    );
};

export default ServicesPage;