"use client"

import { useSelector } from 'react-redux'
import { RootState } from '../lib/store'
import { TiDelete } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const CartPopup = () => {

    const [loading, setLoading] = useState(false);
    const [goToNextPage, setGoToNextPage] = useState(false);

    const cart = useSelector((state: RootState) => state.cart.obj.productName);

    const router = useRouter();

    // const productCount = cart.reduce((acc: { [key: string]: number }, product: string) => {
    //     acc[product] = (acc[product] || 0) + 1;
    //     return acc;
    // }, {});

    useEffect(() => {
        window.location.pathname === 'TimeBox' ? setGoToNextPage(false) : setGoToNextPage(true);
    }, [window.location])

    const productCount = cart.reduce<{ [key: string]: number }>((acc, product) => {
        const key = product.name; // Use 'name' or any other unique string property
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    // const productCount = cart.reduce<{ [key: string]: number }>((acc, product) => {
    //     acc[product] = (acc[product] || 0) + 1;
    //     return acc;
    // }, {});

    // console.log('cart....', cart)

    // const totalPrice = cart.length * 10; // Assuming each product costs $10
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    if (loading) {
        return <div className="flex justify-center items-center h-screen relative">
            <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
        </div>;
    }

    const goToNext = async () => {
        setLoading(true);
        await router.push(`${goToNextPage ? '/Checkout' : '/TimeBox'}`)
        setLoading(false);
    }

    return <>
        {cart.length &&
            <div className="bg-blue-500 text-white fixed bottom-4 left-4 rounded-lg">
                <div className="text-white p-2">
                    {/*/ <h2 className="text-xl font-semibold mb-4">Cart</h2> */}
                    <ul>
                        {Object.entries(productCount).map(([product, count]) => (
                            <div key={product} className="flex justify-between align-center w-[280px] px-5">
                                <li key={product} className="mb-2">
                                    {product} -  {count}
                                </li>
                                <TiDelete className="text-red-600 text-3xl bg-white rounded-full" />
                            </div>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <strong>Total Price: ${totalPrice}</strong>
                    </div>
                </div>
                <button
                    className="bg-gray-200 px-10 w-full text-black py-2 rounded-b-lg hover:bg-gray-300"
                    // onClick={() => router.push('/Checkout')}
                    // onClick={() => router.push('/TimeBox')}
                    onClick={goToNext}
                >
                    {`${!goToNextPage ? 'Go To Checkout' : 'Go To TimeBox'}`}
                </button>
            </div>
        }
    </>
}

export default CartPopup;

