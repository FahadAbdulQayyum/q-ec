import Image from "next/image"
import { CiSearch } from "react-icons/ci"
import { IoThumbsUpSharp, IoThumbsDownSharp } from "react-icons/io5";

const ContactUsComponent = () => {

    const data = [
        {
            icon: "/assets/phoneicon.svg",
            contact: "000 800 919 0566",
            desc: "Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07: 30 - 16: 30, Monday - Friday"
        },
        {
            icon: "/assets/messageicon.svg",
            contact: "24 hours a day",
            desc: "7 days a week"
        },
        {
            icon: "/assets/envelopicon.svg",
            contact: "We\'ll reply within",
            desc: "five business days"
        },
        {
            icon: "/assets/nikelocatioricon.svg",
            contact: "STORE LOCATOR",
            desc: "Find Nike retail stores near you"
        },
    ]

    return (
        <div className="flex flex-wrap p-standardSize">
            <section className="w-full sm:w-[75%] border-r flex flex-col items-center space-y-4">
                <h1 className="uppercase font-bold text-lg">Get Help</h1>
                <span className="flex justify-between border rounded p-2 w-full sm:w-[40%] text-sm items-center">
                    <input placeholder="What can we help you with?" className="w-[90%] outline-none py-1" />
                    <span className="w-[10%]">
                        <CiSearch />
                    </span>
                </span>
                <h1 className="font-bold text-2xl items-start w-full">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <span className="pl-2">
                    <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                    <p>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                    <p>Apple Pay</p>
                </span>
                <span>
                    <p><span className="font-bold text-black border-b-2">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, <span className="font-bold text-black border-b-2">join us</span> today.</p>
                    <span className="flex space-x-4 my-4">
                        <button className="bg-black rounded-full p-2 px-4 text-white">Join Us</button>
                        <button className="bg-black rounded-full p-2 px-4 text-white">Shop Nike</button>
                    </span>
                </span>
                <span>
                    <h1 className="font-bold text-lg py-1">FAQs</h1>
                    <p>Does my card need international purchases enabled?</p>
                    <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                    <p className="my-3">Please note, some banks may charge <span className="font-bold border-b border-black">a small transaction fee</span> for international orders.</p>
                </span>
                <span className="w-full">
                    <h1 className="font-bold text-base">Can I pay for my order with multiple methods?</h1>
                    <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                </span>
                <span className="w-full">
                    <h1 className="font-bold text-base">What payment method is accepted for SNKRS orders?</h1>
                    <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                </span>
                <span>
                    <h1 className="font-bold text-base">Why don&apos;t I see Apple Pay as an option?</h1>
                    <p>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
                </span>
                <span className="w-full">
                    <p>Was this answer helpful?</p>
                    <span className="flex text-lg space-x-2">
                        <IoThumbsUpSharp />
                        <IoThumbsDownSharp />
                    </span>
                    <h1 className="uppercase my-4 text-gray-400">Related</h1>
                    <span>
                        <p className="uppercase my-2 ml-4 font-bold underline">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
                        <p className="uppercase my-2 ml-4 font-bold underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                    </span>
                </span>
            </section>
            <aside className="w-full sm:w-[25%] flex flex-col justify-center items-center px-2">
                <h1 className="uppercase font-bold mb-4">Contact Us</h1>
                <div className="flex flex-col space-y-4">
                    {data?.map((v, i) =>
                        <div key={i} className="flex flex-col items-center space-y-2 py-2 text-center">
                            <Image src={v.icon} alt={v.contact} width={50} height={50} />
                            <span className="m-0 py-2">
                                <p className="font-bold">{v.contact}</p>
                                <p className="w-[271px]">{v.desc}</p>
                            </span>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    )
}

export default ContactUsComponent