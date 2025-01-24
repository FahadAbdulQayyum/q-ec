// 'use client';

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const UpperBanner = () => {
//     const [loading, setLoading] = useState(false); // Track the loading state
//     const [isClient, setIsClient] = useState(false); // To check if we're in the client environment

//     const [router, setRouter] = useState<any>(null);

//     // This effect ensures we're only setting the router on the client side
//     useEffect(() => {
//         setIsClient(true);
//         setRouter(useRouter()); // Initialize useRouter on client side after render
//     }, []);

//     useEffect(() => {
//         if (router) {
//             // Listen to route change start and end
//             const handleRouteChangeStart = () => setLoading(true);
//             const handleRouteChangeComplete = () => setLoading(false);
//             const handleRouteChangeError = () => setLoading(false);

//             router.events.on('routeChangeStart', handleRouteChangeStart);
//             router.events.on('routeChangeComplete', handleRouteChangeComplete);
//             router.events.on('routeChangeError', handleRouteChangeError);

//             // Clean up the events
//             return () => {
//                 router.events.off('routeChangeStart', handleRouteChangeStart);
//                 router.events.off('routeChangeComplete', handleRouteChangeComplete);
//                 router.events.off('routeChangeError', handleRouteChangeError);
//             };
//         }
//     }, [router]);

//     if (!isClient) {
//         return null; // Return nothing until the client-side is ready
//     }

//     return (
//         <div className="bg-primary text-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">
//             {/* Left Portion */}
//             <div className="left-portion flex justify-center md:justify-start mb-2 md:mb-0">
//                 <img src="/assets/salon.png" alt="Bendat logo" className="w-10 h-10" />
//             </div>

//             {/* Right Portion */}
//             <div className="right-portion w-full md:w-auto">
//                 <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 text-sm">
//                     <li className="border-black pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer">
//                         Find a Store
//                     </li>
//                     <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer ml-4">
//                         Help
//                     </li>
//                     <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden ml-4">
//                         <Link href="/Sign/up" aria-label="Join Bendat Membership" className="hover:underline">
//                             Join Us
//                         </Link>
//                     </li>
//                     <li className="relative md:pr-4 ml-4">
//                         <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
//                             Sign In
//                         </Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* Show Loader when loading */}
//             {loading && (
//                 <div className="loader-overlay fixed top-0 left-0 w-full h-full bg-white opacity-75 flex justify-center items-center z-50">
//                     <div className="loader"></div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UpperBanner;










// // 'use client';

// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/router";

// // const UpperBanner = () => {
// //     const [loading, setLoading] = useState(false); // Track the loading state
// //     const [isClient, setIsClient] = useState(false); // To check if we're in the client environment

// //     useEffect(() => {
// //         // Only run this in the client environment
// //         setIsClient(true);
// //     }, []);

// //     // Router will only be initialized on the client side
// //     const router = isClient ? useRouter() : null;

// //     useEffect(() => {
// //         if (router) {
// //             // Listen to route change start and end
// //             const handleRouteChangeStart = () => setLoading(true);
// //             const handleRouteChangeComplete = () => setLoading(false);
// //             const handleRouteChangeError = () => setLoading(false);

// //             router.events.on('routeChangeStart', handleRouteChangeStart);
// //             router.events.on('routeChangeComplete', handleRouteChangeComplete);
// //             router.events.on('routeChangeError', handleRouteChangeError);

// //             // Clean up the events
// //             return () => {
// //                 router.events.off('routeChangeStart', handleRouteChangeStart);
// //                 router.events.off('routeChangeComplete', handleRouteChangeComplete);
// //                 router.events.off('routeChangeError', handleRouteChangeError);
// //             };
// //         }
// //     }, [router]);

// //     if (!isClient) {
// //         return null; // or return a loading indicator
// //     }

// //     return (
// //         <div className="bg-primary text-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">
// //             {/* Left Portion */}
// //             <div className="left-portion flex justify-center md:justify-start mb-2 md:mb-0">
// //                 <img src="/assets/salon.png" alt="Bendat logo" className="w-10 h-10" />
// //             </div>

// //             {/* Right Portion */}
// //             <div className="right-portion w-full md:w-auto">
// //                 <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 text-sm">
// //                     <li className="border-black pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer">
// //                         Find a Store
// //                     </li>
// //                     <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer ml-4">
// //                         Help
// //                     </li>
// //                     <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden ml-4">
// //                         <Link href="/Sign/up" aria-label="Join Bendat Membership" className="hover:underline">
// //                             Join Us
// //                         </Link>
// //                     </li>
// //                     <li className="relative md:pr-4 ml-4">
// //                         <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
// //                             Sign In
// //                         </Link>
// //                     </li>
// //                 </ul>
// //             </div>

// //             {/* Show Loader when loading */}
// //             {loading && (
// //                 <div className="loader-overlay fixed top-0 left-0 w-full h-full bg-white opacity-75 flex justify-center items-center z-50">
// //                     <div className="loader"></div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default UpperBanner;


















// // // 'use client';

// // // import Link from "next/link";
// // // import { useState, useEffect, useRef } from "react";
// // // import { useRouter } from "next/router";

// // // const UpperBanner = () => {
// // //     const [loading, setLoading] = useState(false); // Track the loading state
// // //     const [isClient, setIsClient] = useState(false); // To check if we're in the client environment
// // //     const router = useRouter();

// // //     useEffect(() => {
// // //         // Check if window is defined to ensure we're on the client side
// // //         setIsClient(true);

// // //         // Listen to route change start and end
// // //         const handleRouteChangeStart = () => setLoading(true);
// // //         const handleRouteChangeComplete = () => setLoading(false);
// // //         const handleRouteChangeError = () => setLoading(false);

// // //         if (isClient) {
// // //             router.events.on('routeChangeStart', handleRouteChangeStart);
// // //             router.events.on('routeChangeComplete', handleRouteChangeComplete);
// // //             router.events.on('routeChangeError', handleRouteChangeError);
// // //         }

// // //         // Clean up the events
// // //         return () => {
// // //             if (isClient) {
// // //                 router.events.off('routeChangeStart', handleRouteChangeStart);
// // //                 router.events.off('routeChangeComplete', handleRouteChangeComplete);
// // //                 router.events.off('routeChangeError', handleRouteChangeError);
// // //             }
// // //         };
// // //     }, [isClient, router.events]);

// // //     if (!isClient) {
// // //         return null; // or return a loading indicator if needed
// // //     }

// // //     return (
// // //         <div className="bg-primary text-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">
// // //             {/* Left Portion */}
// // //             <div className="left-portion flex justify-center md:justify-start mb-2 md:mb-0">
// // //                 <img src="/assets/salon.png" alt="Bendat logo" className="w-10 h-10" />
// // //             </div>

// // //             {/* Right Portion */}
// // //             <div className="right-portion w-full md:w-auto">
// // //                 <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 text-sm">
// // //                     <li className="border-black pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer">
// // //                         Find a Store
// // //                     </li>
// // //                     <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden hover:underline cursor-pointer ml-4">
// // //                         Help
// // //                     </li>
// // //                     <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden ml-4">
// // //                         <Link href="/Sign/up" aria-label="Join Bendat Membership" className="hover:underline">
// // //                             Join Us
// // //                         </Link>
// // //                     </li>
// // //                     <li className="relative md:pr-4 ml-4">
// // //                         <Link href="/Sign/in" aria-label="Sign into your account" className="hover:underline">
// // //                             Sign In
// // //                         </Link>
// // //                     </li>
// // //                 </ul>
// // //             </div>

// // //             {/* Show Loader when loading */}
// // //             {loading && (
// // //                 <div className="loader-overlay fixed top-0 left-0 w-full h-full bg-white opacity-75 flex justify-center items-center z-50">
// // //                     <div className="loader"></div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default UpperBanner;






"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // To listen to route changes

const UpperBanner = () => {
    const [loading, setLoading] = useState(false); // Track the loading state
    const router = useRouter();

    useEffect(() => {
        // Listen to route change start and end
        const handleRouteChangeStart = () => setLoading(true);
        const handleRouteChangeComplete = () => setLoading(false);
        const handleRouteChangeError = () => setLoading(false);

        // Next.js router events
        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeError);

        // Clean up the events
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, [router.events]);

    return (
        <div className="bg-primary text-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">
            {/* Left Portion */}
            <div className="left-portion flex justify-center md:justify-start mb-2 md:mb-0">
                <img src="/assets/salon.png" alt="Bendat logo" className="w-10 h-10" />
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
                </ul>
            </div>

            {/* Show Loader when loading */}
            {loading && (
                <div className="loader-overlay fixed top-0 left-0 w-full h-full bg-white opacity-75 flex justify-center items-center z-50">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    );
};

export default UpperBanner;
