"use client"

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useSearchParams } from 'next/navigation'; // Change this import

import { useAppDispatch } from '@/components/lib/hooks'

import { ImLocation } from "react-icons/im";

import { useRouter } from 'next/navigation';
import { fetchServices } from '@/components/lib/features/service/serviceSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/components/lib/store';


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

    const dispatch = useAppDispatch();

    const router = useRouter();

    const { services } = useSelector((state: RootState) => state.service);


    useEffect(() => {
        const fetchFunction = async () => {
            if (services.length === 0) {
                await dispatch(fetchServices());
            }
            if (address !== null) {
                const filteredData: dataType[] = services?.filter(service =>
                    service.city_available.split(',').some(city => address.toLowerCase().includes(city.trim().toLowerCase()))
                );
                setFetchedData(filteredData);
            } else {
                setFetchedData(services);
            }
            setLoading(false);
        };
        fetchFunction();
    }, [dispatch, services, address]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen relative">
            <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
        </div>;
    }

    const handleRouter = async (service: any) => {
        setLoading(true);
        await router.push(`/services/${service._id}?data=${service._id}`)
        setLoading(false);
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