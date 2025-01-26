"use client"

// import Image from 'next/image';
// import Link from 'next/link';

import Link from "next/link";

// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/components/lib/hooks'
import { RootState } from "../lib/store";
import { useEffect, useState } from "react";
import { initializeUserInfo, UserInfo } from "../lib/features/userInfo/userInfoSlice";
import { RiLogoutCircleLine } from "react-icons/ri";

import { useRouter } from 'next/navigation';

const UpperBanner = () => {

    const dispatch = useAppDispatch();
    // const dispatch = useDispatch();

    const router = useRouter();

    const [isHydrated, setIsHydrated] = useState(false);

    const userInfo: (UserInfo[] | null) = useSelector((state: RootState) => state.userInfo.userInfo);

    // On app start, check if user info exists in localStorage
    useEffect(() => {

        setIsHydrated(true); // Set hydrated to true after the client has rendered

        // const storedUserInfo = localStorage.getItem("userInfo");
        // if (storedUserInfo) {
        //     dispatch(initializeUserInfo(JSON.parse(storedUserInfo)));
        //     console.log('....KKK....')
        //     // router.push('http://localhost:3000/about');
        //     console.log("User info found. Redirecting...");
        //     router.push("/"); // Redirect to home page
        // } else {
        //     console.log("No user info found in localStorage.");
        // }
        if (isHydrated) {
            const storedUserInfo = localStorage.getItem("userInfo");
            console.log("Stored userInfo:", storedUserInfo);
            if (storedUserInfo) {
                try {
                    const parsedUserInfo = JSON.parse(storedUserInfo);
                    console.log("Parsed userInfo:", parsedUserInfo);
                    dispatch(initializeUserInfo(parsedUserInfo));
                    router.push("/");
                } catch (err) {
                    console.error("Failed to parse userInfo:", err);
                }
            } else {
                console.log("No user info found in localStorage.");
            }
        }
    }, [isHydrated, dispatch, router]);

    if (!isHydrated) {
        // Render nothing or a loading placeholder during hydration
        return <div className="bg-primary black-black py-2 px-standardSize"></div>;
    }

    return (
        <div className="bg-primary black-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">
            {/* Left Portion */}
            <div className="left-portion flex justify-center md:justify-start mb-2 md:mb-0">
                {/* Use the Image component if working with Next.js */}
                {/* <img src="/assets/Bendat-logo.svg" alt="Bendat logo" className="w-8 h-8" /> */}
                <img src="/assets/salon.png" alt="Bendat logo" className="w-10 h-10" />
                {/* <span className="text-sm font-medium">Free Shipping for Members!</span> */}

            </div>
            {/* Mid Portion */}
            <div className="mid-portion hidden md:flex space-x-5">
                {/* Add any mid-section items or links if needed */}
            </div>
            {/* Right Portion */}
            <div className="right-portion w-full md:w-auto">
                <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 text-sm">
                    <li className="border-black pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer">
                        Find a Store
                    </li>
                    <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer ml-4">
                        Help
                    </li>
                    {userInfo === null ? <>
                        <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden ml-4">
                            <Link href="/Sign/up" aria-label="Join Bendat Membership" className="hover:underline">
                                Join Us
                            </Link>
                        </li>
                        <li className="relative md:pr-4 ml-4">
                            <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
                                Sign In
                            </Link>
                        </li>
                    </> :
                        <>
                            <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden ml-4">
                                <Link href="#" aria-label="Join Bendat Membership" className="hover:underline">
                                    Welcome, {userInfo && userInfo[0]?.firstname}!
                                </Link>
                            </li>
                            <li className="relative md:pr-4 ml-4">
                                <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
                                    <RiLogoutCircleLine size={20} />
                                </Link>
                            </li>
                        </>

                    }
                </ul>
            </div>
        </div>
    );
};

export default UpperBanner;
