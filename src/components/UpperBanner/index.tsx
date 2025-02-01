"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/components/lib/hooks";
import { RootState } from "../lib/store";
import { useEffect, useState } from "react";
import { initializeUserInfo, UserInfo } from "../lib/features/userInfo/userInfoSlice";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const UpperBanner = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [isHydrated, setIsHydrated] = useState(false); // Ensure hydration before accessing localStorage
    const [isFetched, setIsFetched] = useState(false); // Track if data fetching is complete
    const [loaderWidth, setLoaderWidth] = useState(0);
    const userInfo: UserInfo | null = useSelector((state: RootState) => state.userInfo.userInfo);

    const loading = useSelector((state: RootState) => state.loading.loading);

    useEffect(() => {
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

        handleRedirect(); // Call the async function

    }, [isFetched, userInfo, router]);

    if (!isHydrated || !isFetched) {
        // Render nothing or a loading placeholder during hydration or data fetching
        return <div className="bg-primary black-black py-2 px-standardSize"></div>;
    }

    return (
        <div className="bg-primary black-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">

            {loading && (
                <span
                    className="absolute top-0 left-0 h-1 bg-red-600 transition-all duration-300"
                    style={{ width: `${loaderWidth}%` }}
                ></span>
            )}

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
                            <li className="ml-4">
                                <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
                                    <RiLogoutCircleLine size={20} />
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default UpperBanner;
