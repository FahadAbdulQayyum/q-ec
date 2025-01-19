"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Sign = () => {

    const router = useRouter();

    useEffect(() => {
        router.push(`/Sign/in`);
    }, [router])

    return null;
}

export default Sign
