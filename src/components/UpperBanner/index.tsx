// import Image from 'next/image';
// import Link from 'next/link';

import Link from "next/link";

const UpperBanner = () => {
    return (
        <div className="bg-primary text-black flex flex-col md:flex-row justify-between items-center py-2 px-standardSize bg-primaryy">
            {/* Left Portion */}
            <div className="left-portion flex justify-center md:justify-start mb-2 md:mb-0">
                {/* Use the Image component if working with Next.js */}
                <img src="/assets/nike-logo.svg" alt="Nike logo" className="w-8 h-8" />
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
                    <li className="border-black md:pr-4 relative after:content-[''] md:after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-black md:last:after:hidden ml-4">
                        <Link href="/Sign/up" aria-label="Join Nike Membership" className="hover:underline">
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
        </div>
    );
};

export default UpperBanner;
