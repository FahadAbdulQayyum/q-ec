import Image from "next/image";
import { BsInboxFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const CheckoutComponent = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row p-6 space-x-12">
                {/* Left Section: Form Fields */}
                <div className="w-full lg:w-[70%] ml-0 lg:ml-[30%] space-y-4">
                    <h1 className="font-bold text-xl">How would you like to get your order?</h1>
                    <p>
                        Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address.
                        Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose
                        of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping
                        address, please click the link for more information. Learn More
                    </p>
                    <button className="flex border-2 border-black rounded w-full py-3 font-bold text-start px-5">
                        <BsInboxFill />
                        <p className="ml-2">Deliver it</p>
                    </button>

                    {/* Address Fields */}
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">Enter your name and address:</h1>
                        <input className="border p-2 w-full" type="text" placeholder="First Name" />
                        <input className="border p-2 w-full" type="text" placeholder="Last Name" />
                        <input className="border p-2 w-full" type="text" placeholder="Address Line 1" />
                        <input className="border p-2 w-full" type="text" placeholder="Address Line 2" />
                        <input className="border p-2 w-full" type="text" placeholder="Address Line 3" />
                        <div className="flex space-x-2 w-full">
                            <input className="border p-2 w-1/2" type="text" placeholder="Postal Code" />
                            <input className="border p-2 w-1/2" type="text" placeholder="Locality" />
                        </div>
                        <div className="flex space-x-2 w-full">
                            <input className="border p-2 w-1/2" type="text" placeholder="State/Territory" />
                            <input className="border p-2 w-1/2" type="text" placeholder="India" />
                        </div>

                        <div className="flex space-x-2">
                            <input type="radio" /> <label>Save this address to my profile</label>
                            <input type="radio" /> <label>Make this my preferred address</label>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">What&apos;s your contact information?</h1>
                        <input className="border p-2 w-full" type="text" placeholder="Phone Number" />
                        <small>A confirmation email will be sent after checkout.</small>
                        <input className="border p-2 w-full" type="email" placeholder="Email Address" />
                        <small>A confirmation email will be sent after checkout.</small>
                    </div>

                    {/* PAN Information */}
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">What&apos;s your PAN?</h1>
                        <input className="border p-2 w-full" type="text" placeholder="PAN" />
                        <small>Enter your PAN to enable payment with UPI, Net Banking or local card methods</small>
                        <div className="flex space-x-2">
                            <input type="radio" /> <label>Save PAN details to Nike Profile</label>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex space-x-2">
                        <input type="radio" /> <label>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</label>
                    </div>

                    {/* Continue Button */}
                    <button className="rounded-full p-2 w-full bg-gray-200 text-medium text-gray-600 mt-4">Continue</button>

                    <div className="border-b w-full h-1 my-4"></div>

                    {/* Misc Sections */}
                    <div className="space-y-4 mt-8 pb-20">
                        <h1 className="font-bold text-xl">Delivery</h1>

                        <div className="border-b w-full h-1 my-4"></div>

                        <h1 className="font-bold text-xl text-gray-400">Shipping</h1>

                        <div className="border-b w-full h-1 my-4"></div>

                        <h1 className="font-bold text-xl text-gray-400">Billing</h1>

                        <div className="border-b w-full h-1 my-4"></div>

                        <h1 className="font-bold text-xl text-gray-400">Payment</h1>
                    </div>
                </div>

                {/* Right Section: Order Summary */}
                <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
                    <h1 className="font-bold mb-4">Order Summary</h1>
                    <div className="flex w-full justify-between">
                        <p>Subtotal</p>
                        <p>₹ 20,890.00</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p>Delivery & Shipping</p>
                        <p>Free</p>
                    </div>
                    <div className="border-b w-full h-1 my-4"></div>
                    <div className="flex w-full justify-between">
                        <p>Total</p>
                        <p>₹ 20,890.00</p>
                    </div>
                    <div className="border-b w-full h-1 my-4"></div>

                    <p className="text-sm">(The total reflects the price of your order, including all duties and taxes)</p>

                    {/* Delivery Information */}
                    <div>
                        <h1 className="font-bold py-2">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
                        <div className="flex">
                            <Image src="/assets/gearup-1.svg" alt="nike" width={120} height={120} className="bg-transparent" />
                            <div className="ml-2">
                                <p className="text-sm">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                                <p className="text-gray-400 text-sm">Qty: 1</p>
                                <p className="text-gray-400 text-sm">Size: L</p>
                                <p className="text-gray-400 text-sm">₹ 3,895.00</p>
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <Image src="/assets/best-nike-3.svg" alt="nike" width={120} height={120} className="bg-transparent" />
                            <div className="ml-2">
                                <p className="text-sm">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                                <p className="text-gray-400 text-sm">Qty: 1</p>
                                <p className="text-gray-400 text-sm">Size: L</p>
                                <p className="text-gray-400 text-sm">₹ 3,895.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col md:flex-row justify-between bg-black text-white px-standardSize py-4"
            >
                <div className="flex flex-col justify-center md:flex-row items-center md:space-x-5 py-2 md:py-0">
                    <span className="flex items-center space-x-2">
                        <IoLocationOutline />
                        <p>India</p>
                    </span>
                    <span className="text-gray-400 text-sm">© 2023 NIKE, Inc. All Rights Reserved</span>
                </div>
                <ul className="flex flex-col md:flex-row justify-center md:space-x-5 space-y-2 md:space-y-0 text-sm items-center text-gray-400">
                    <li>Terms of Use</li>
                    <li>Terms of Sale</li>
                    <li>Privacy Policy</li>
                </ul>
                <div></div>
                <div>
                    <ul className="flex flex-col md:flex-row justify-center md:space-x-1 space-y-2 md:space-y-0 text-sm items-center text-gray-400 py-2 md:py-0">
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                        <li>
                            <Image src={"/assets/visa.svg"} alt="visa card" width={40} height={40} />
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default CheckoutComponent;