import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
    return (
        <div className="p-standardSize">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                {/* Bag Section */}
                <div className="lg:w-[70%] px-standardSize">
                    <div className="bg-primaryy p-2">
                        <p>Free Delivery</p>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <p>Applies to orders of ₹ 14 000.00 or more.</p>
                            <p className="font-bold underline">View details</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="my-2 font-bold">Bag</h1>
                        {/* Product List */}
                        {[...Array(2)].map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row border-b py-5 space-y-4 md:space-y-0"
                            >
                                <div className="w-full md:w-[25%]">
                                    <Image
                                        src={"/assets/gearup-1.svg"}
                                        alt={"cart"}
                                        width={150}
                                        height={150}
                                        className="bg-primaryy"
                                    />
                                </div>
                                <div className="w-full md:w-[50%] space-y-2">
                                    <h1 className="font-bold">
                                        Nike Dri-FIT ADV TechKnit Ultra
                                    </h1>
                                    <p className="text-gray-400">
                                        Men&apos;s Short-Sleeve Running Top
                                    </p>
                                    <p className="text-gray-400">
                                        Ashen Slate/Cobalt Bliss
                                    </p>
                                    <div className="flex justify-between text-gray-400 w-[50%]">
                                        <p>Size: L</p>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="flex justify-between mt-5 w-[15%]">
                                        <CiHeart />
                                        <RiDeleteBin6Line />
                                    </div>
                                </div>
                                <div className="w-full md:w-[25%]">
                                    <p>MRP: ₹ 3 895.00</p>
                                </div>
                            </div>
                        ))}
                        {/* Favourites */}
                        <div>
                            <h1 className="font-bold my-3">Favourites</h1>
                            <p className="text-sm">
                                There are no items saved to your favourites.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="lg:w-[30%] mt-6 lg:mt-0">
                    <h1 className="font-bold mb-4">Summary</h1>
                    <div className="flex w-full justify-between space-y-1">
                        <p>Subtotal</p>
                        <p>₹ 20 890.00</p>
                    </div>
                    <div className="flex w-full justify-between space-y-1">
                        <p>Estimated Delivery & Handling</p>
                        <p>Free</p>
                    </div>
                    <div className="border-b w-full h-1 my-4"></div>
                    <div className="flex w-full justify-between">
                        <p>Total</p>
                        <p>₹ 20 890.00</p>
                    </div>
                    <div className="border-b w-full h-1 my-4"></div>
                    <button className="bg-black p-2 px-4 text-white rounded-full w-full">
                        Member Checkout
                    </button>
                </div>
            </div>

            {/* You Might Also Like */}
            <div className="mt-5">
                <h1 className="font-bold my-4">You Might Also Like</h1>
                <div className="flex flex-wrap justify-start gap-6">
                    <CardContent className="flex flex-col items-start text-black">
                        <div className="bg-primaryy h-68 flex items-center justify-center">
                            <Image
                                src={"/assets/product-40.svg"}
                                alt={"best-nik-svg"}
                                width={400}
                                height={300}
                                className="z-10"
                            />
                        </div>
                        <div className="flex flex-col mt-4 w-full">
                            <p>Air Jordan 1 Mid SE Craft</p>
                            <p className="text-gray-400 text-sm">Men&apos;s Shoes</p>
                            <p>MRP: ₹ 12 295.00</p>
                        </div>
                    </CardContent>
                </div>
            </div>
        </div>
    );
};

export default Cart;
