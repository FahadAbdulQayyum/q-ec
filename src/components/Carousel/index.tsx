"use client";

import { useState, useEffect } from "react";
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

type dataType = {
    image?: string;
    title?: string;
    price?: number | string;
    originalPrice?: number | string;
    starCounts?: number | string;
    point?: number | string;
    discount?: string;
    discountSale?: boolean;
    category?: string;
    icon?: string | undefined;
    heroTitle?: string | undefined;
    button?: string | undefined;
    btnIcon?: string | undefined;
    heroIcon?: string | undefined;
    iconHover?: string | undefined;
};

interface CarouselImageProps {
    flash: boolean;
    essential?: boolean;
    category?: boolean;
    data: dataType[];
}

export function CarouselImage({ flash, essential, data }: CarouselImageProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [, setCurrent] = useState(0);
    const [, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const router = useRouter();

    const sendData = (product: any) => {
        console.log('products...', product)
        const queryString = encodeURIComponent(JSON.stringify(product));
        router.push(`/Products/${product.id}?data=${queryString}`);
    }

    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                {!flash ? (
                    data.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="flex justify-center items-center bg-black">
                                <Card className="w-full">
                                    <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-black text-white w-full space-y-6 md:space-y-0">
                                        <div className="flex flex-col w-full md:w-[33%] space-y-4">
                                            <div className="flex items-center">
                                                <Image
                                                    src={item.icon || "/assets/best-nike-1.svg"}
                                                    alt={item.title || "alt"}
                                                    width={50}
                                                    height={50}
                                                />
                                                <p className="text-sm ml-5">{item.title}</p>
                                            </div>
                                            <p className="text-5xl font-bold">{item.heroTitle}</p>
                                            <div className="flex items-center space-x-2">
                                                <p className="border-b-[2px]">{item.button}</p>
                                                {item.btnIcon}
                                            </div>
                                        </div>
                                        <div>
                                            <Image
                                                src={item.heroIcon || "/assets/best-nike-2.svg"}
                                                alt={item.title || "alt"}
                                                width={400}
                                                height={400}
                                                className="max-w-full md:max-w-md lg:max-w-lg"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                ) : !essential ? (
                    data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-none"
                        >
                            <div className="flex justify-center items-center">
                                <CardContent className="flex flex-col items-center justify-center text-black space-y-4" onClick={() => sendData(item)}>
                                    <div className="bg-primaryy h-68 flex items-center justify-center relative group w-full md:max-w-sm">
                                        <Image
                                            src={item.image || "/assets/best-nike-2.svg"}
                                            alt={item.title || "alt"}
                                            width={400}
                                            height={300}
                                            className="z-10 max-w-full h-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2 mt-4 w-full">
                                        <div className="flex justify-between text-sm">
                                            <p>{item.title}</p>
                                            <p>{"₹" + item.price}</p>
                                        </div>
                                        <span className="text-gray-400">{item.category}</span>
                                    </div>
                                </CardContent>
                            </div>
                        </CarouselItem>
                    ))
                ) : (
                    data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-none"
                        >
                            <div className="flex justify-center items-center group">
                                <CardContent className="flex items-center justify-center text-black bg-transparent">
                                    <div
                                        // className="relative h-80 w-full max-w-xs md:max-w-md"
                                        className="relative h-80 w-72"
                                    >
                                        <Image
                                            src={item.icon || "/assets/essential-1.svg"}
                                            alt={item.title || "alt"}
                                            layout="fill"
                                            objectFit="cover"
                                            className="z-0 group-hover:opacity-80 transition duration-300"
                                        />
                                        <span className="absolute bottom-5 left-5 bg-white text-sm font-medium p-2 px-4 rounded-full">
                                            {item.category}
                                        </span>
                                    </div>
                                </CardContent>
                            </div>
                        </CarouselItem>
                    ))
                )
                }
            </CarouselContent >
            <CarouselPrevious />
            <CarouselNext />
        </Carousel >
    );
}