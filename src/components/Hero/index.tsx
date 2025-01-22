import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

// import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "../lib/store";

// import { incrementValue } from "../lib/features/counter/counterSlice";



const Hero: React.FC = () => {

    // const count = useSelector((state: RootState) => state.counter.value)

    // const dispatch: AppDispatch = useDispatch(); // Use typed dispatch

    const router = useRouter();


    return (
        <div className="relative h-screen overflow-hidden mx-standardSize">
            {/* The hero image will cover the full container */}
            <Image
                src="/assets/hero-image.svg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                priority
                className="object-center" // Optionally center the image
                loading="eager" // Ensures faster loading
            />

            {/* Overlay content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    Welcome to Our Store
                </h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                    Explore the latest collection of Bendat shoes
                </p>
                <button
                    className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm md:text-base lg:text-lg"
                    onClick={() => router.push('/Location')}
                >
                    Book Now
                </button>
                {/* <div>
                    <h1>{count}</h1>
                    <button onClick={() => dispatch(incrementValue())}>Increment</button>
                </div> */}
            </div>
        </div >
    );
};

export default Hero;
