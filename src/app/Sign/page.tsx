"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Sign = () => {

    const router = useRouter();

    useEffect(() => {
        const goToSign = async () => {
            await router.push(`/Sign/in`);
        }
        goToSign();
    }, [router])

    return null;
}

export default Sign
