"use client"

import { useParams } from 'next/navigation';

import SignComponent from '@/components/Sign'

const Sign = () => {
    const params = useParams();
    const { in_up
    } = params||{}; // Access the product ID from the route

     if (!in_up) {
    return <div>Error: Invalid Route</div>; // Handle invalid cases
  }

    return (
        <SignComponent signup={in_up === 'up'} />
    )
}

export default Sign
