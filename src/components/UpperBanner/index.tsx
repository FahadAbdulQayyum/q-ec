"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/components/lib/hooks";
import { RootState } from "../lib/store";
import { useEffect, useState } from "react";
import { initializeUserInfo, UserInfo } from "../lib/features/userInfo/userInfoSlice";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// import getConfig from 'next/config'

// const { publicRuntimeConfig } = getConfig()
// const { DEV, NEXT_PUBLIC_NODE_ENV } = publicRuntimeConfig

const UpperBanner = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [isHydrated, setIsHydrated] = useState(false); // Ensure hydration before accessing localStorage
    const [isFetched, setIsFetched] = useState(false); // Track if data fetching is complete
    const [loaderWidth, setLoaderWidth] = useState(0);
    const userInfo: UserInfo | null = useSelector((state: RootState) => state.userInfo.userInfo);

    const loading = useSelector((state: RootState) => state.loading.loading);

    const envColor =
        process.env.NEXT_PUBLIC_ENV === "DEV" || process.env.NEXT_PUBLIC_ENV === "dev"
            ? "bg-pink-600"
            : process.env.NEXT_PUBLIC_ENV === "uat" || process.env.NEXT_PUBLIC_ENV === "UAT"
                ? "bg-red-600"
                : "bg-purple-600";

    const envColorBorder =
        process.env.NEXT_PUBLIC_ENV === "DEV" || process.env.NEXT_PUBLIC_ENV === "dev"
            ? "border-pink-600"
            : process.env.NEXT_PUBLIC_ENV === "UAT" || process.env.NEXT_PUBLIC_ENV === "uat"
                ? "border-red-600"
                : "border-purple-600";


    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setIsOpen(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);



    useEffect(() => {
        console.log('Current ENV is', process.env.NEXT_PUBLIC_ENV, envColor, envColor.slice(3))
        setIsHydrated(true); // Mark hydration as complete

        const fetchUserInfo = async () => {
            try {
                const storedUserInfo = localStorage.getItem("userInfo");
                console.log("Stored userInfo:", storedUserInfo);

                if (storedUserInfo) {
                    const parsedUserInfo = JSON.parse(storedUserInfo);
                    console.log("Parsed userInfo:", parsedUserInfo);

                    // Dispatch to Redux store
                    dispatch(initializeUserInfo(parsedUserInfo));

                    // Ensure the state reflects the change
                    setIsFetched(true);
                } else {
                    console.log("No user info found in localStorage.");
                    setIsFetched(true); // Mark fetching as complete, even if no data is found
                }
            } catch (err) {
                console.error("Error fetching or parsing userInfo:", err);
                setIsFetched(true); // Mark fetching as complete on error
            }
        };

        fetchUserInfo();
    }, [dispatch]);

    useEffect(() => {
        const handleRedirect = async () => {

            const lastAttemptedRoute = sessionStorage.getItem("lastRoute") || "/"; // Default fallback
            if (isFetched) {
                if (userInfo) {
                    console.log("Redirecting to home...");
                    // await router.push("/");
                    await router.push(lastAttemptedRoute);
                } else {
                    console.log("Redirecting to sign-in...");
                    await router.push("/Sign/In");
                }
            }
        };

        // handleRedirect(); // Call the async function

    }, [isFetched, userInfo, router]);

    if (!isHydrated || !isFetched) {
        // Render nothing or a loading placeholder during hydration or data fetching
        return <div className="bg-primary black-black py-2 px-standardSize"></div>;
    }

    const handleLogout = async () => {
        try {
            // Call the logout API route
            const response = await fetch('/api/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // Redirect to the sign-in page after logout
                router.push('/signin');
            } else {
                alert('Failed to log out. Please try again.');
            }
        } catch (err) {
            console.error('Error during logout:', err);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-primary black-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">

            {loading && (
                <span
                    className="absolute top-0 left-0 h-1 bg-red-600 transition-all duration-300"
                    style={{ width: `${loaderWidth}%` }}
                ></span>
            )}
            {/* <div
                className="bg-white text-black text-xl fixed bottom-0 right-0 border-l-4 border-orange-400"
            >{process.env.NEXT_PUBLIC_ENV}
            </div> */}
            <div className="fixed top-2 -right-6">
                {!isOpen && (
                    <Button onClick={() => setIsOpen(true)} className={`${envColor} text-white hover:${envColor}`}>                        |

                    </Button>
                )}
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: isOpen ? 0 : "100%" }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className={`fixed top-2 right-0 bg-white text-black text-xl border-l-4 ${envColorBorder} p-1 shadow-lg`}
                >
                    {process.env.NEXT_PUBLIC_ENV}
                </motion.div>
            </div>
            {/* Left Portion */}
            <div className="left-portion flex justify-center md:justify-start mb-2 md:mb-0">
                <img src="/assets/salon.png" alt="Bendat logo" className="w-10 h-10" />
            </div>
            {/* Right Portion */}
            <div className="right-portion w-full md:w-auto">
                <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 text-sm">
                    <li className="border-black pr-4 hover:underline cursor-pointer">Find a Store</li>
                    <li className="border-black md:pr-4 ml-4 hover:underline cursor-pointer">Help</li>
                    {userInfo === null ? (
                        <>
                            <li className="ml-4">
                                <Link href="/Sign/up" aria-label="Join Bendat Membership" className="hover:underline">
                                    Join Us
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
                                    Sign In
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="ml-4">
                                <Link href="#" aria-label="Join Bendat Membership" className="hover:underline">
                                    Welcome, {userInfo?.firstname}!
                                </Link>
                            </li>
                            <li className="ml-4" onClick={handleLogout}>
                                <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
                                    <RiLogoutCircleLine size={20} />
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div >
    );
};

export default UpperBanner;
