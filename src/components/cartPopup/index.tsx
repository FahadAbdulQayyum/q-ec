"use client"

import { useSelector } from 'react-redux'
import { RootState } from '../lib/store'

const CartPopup = () => {

    const cart = useSelector((state: RootState) => state.cart.obj.productName);

    // const productCount = cart.reduce((acc: { [key: string]: number }, product: string) => {
    //     acc[product] = (acc[product] || 0) + 1;
    //     return acc;
    // }, {});

    const productCount = cart.reduce<{ [key: string]: number }>((acc, product) => {
        const key = product.name; // Use 'name' or any other unique string property
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    // const productCount = cart.reduce<{ [key: string]: number }>((acc, product) => {
    //     acc[product] = (acc[product] || 0) + 1;
    //     return acc;
    // }, {});

    console.log('cart....', cart)

    // const totalPrice = cart.length * 10; // Assuming each product costs $10
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);


    return <div className="bg-orange-600 text-white fixed bottom-4 left-4">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        <ul>
            {Object.entries(productCount).map(([product, count]) => (
                <li key={product} className="mb-2">
                    {product} - Quantity: {count}
                </li>
            ))}
        </ul>
        <div className="mt-4">
            <strong>Total Price: ${totalPrice}</strong>
        </div>

    </div>

}

export default CartPopup;



// import React from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../lib/store'

// const CartPopup = () => {
//     const cart = useSelector((state: RootState) => state.cart.obj.productName);

//     const productCount = cart.reduce((acc: { [key: string]: number }, product: string) => {
//         acc[product] = (acc[product] || 0) + 1;
//         return acc;
//     }, {});

//     const totalPrice = cart.length * 10; // Assuming each product costs $10

//     return (
//         <div className="p-4 bg-white shadow-lg rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Cart</h2>
//             <ul>
//                 {Object.entries(productCount).map(([product, count]) => (
//                     <li key={product} className="mb-2">
//                         {product} - Quantity: {count}
//                     </li>
//                 ))}
//             </ul>
//             <div className="mt-4">
//                 <strong>Total Price: ${totalPrice}</strong>
//             </div>
//         </div>
//     )
// }

// export default CartPopup
