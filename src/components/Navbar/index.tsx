"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { IoBagOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { fetchServices, searchService } from '../lib/features/service/serviceSlice';

import { useAppDispatch } from '@/components/lib/hooks'


const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [query, setQuery] = useState("");

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchServices()); // Fetch services when the component mounts
    }, [dispatch]);

    // const searchHandler = async (value: any) => {
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // // const searchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // // await dispatch(fetchServices())
        // // console.log('value....', value)

        // setQuery(e.target.value);

        // dispatch(searchService(e.target.value))
        // // if (e.target.value === '') {
        // //     await dispatch(fetchServices())
        // // }


        const value = e.target.value;
        setQuery(value); // Update search query state

        if (value.trim() === "") {
            // If search field is empty, reset to all services
            dispatch(fetchServices());
            // dispatch(searchService(value));
            // console.log('...Daeeee....')
        } else {
            // Otherwise, filter the services based on the input
            dispatch(searchService(value));
        }
    }

    return (
        <div className="flex justify-between items-center px-2 text-black bg-white border-b-2 py-2 md:px-standardSize sm:px-4">
            {/* Logo Section */}
            <div className="logo">
                {/* <Image src="/assets/nike-logo-1.svg" alt="Nike Logo" width={80} height={80} /> */}
                <Image src="/assets/bg.png" alt="bendat Logo" width={80} height={80} />
            </div>

            {/* Hamburger Menu Button */}
            <button
                className="lg:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Navigation Menu */}
            <nav
                className={`${menuOpen ? 'block' : 'hidden'
                    } absolute lg:static top-full left-0 lg:flex lg:items-center lg:space-x-10 w-full bg-white lg:bg-transparent shadow-lg lg:shadow-none lg:w-auto z-50`}
            >
                <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 px-4 lg:px-0 py-4 lg:py-0 font-medium cursor-pointer">
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">New & Featured</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Men</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Women</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Kids</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">
                        <Link href="/Products">Sale</Link>
                    </li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">SNKRS</li>
                </ul>
            </nav>

            {/* Icons and Search */}
            <div className="flex items-center space-x-4">
                {/* Search Input */}
                <div className="hidden md:flex justify-center items-center bg-primaryy p-2 space-x-4 rounded-full">
                    <CiSearch className="text-2xl" />
                    <input
                        className="bg-transparent outline-none text-sm w-32 md:w-48"
                        placeholder="Search"
                        onChange={searchHandler}
                    />
                </div>

                {/* Heart Icon */}
                <div className="heart">
                    <CiHeart className="text-2xl" aria-label="Favorites" />
                </div>

                {/* Cart Icon */}
                <div className="cart">
                    <IoBagOutline className="text-2xl" aria-label="Shopping Cart" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
