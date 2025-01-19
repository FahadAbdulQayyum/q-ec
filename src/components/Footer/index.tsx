import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular, TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="flex flex-col p-standardSize bg-black text-white space-y-10">
            {/* Main Links Section */}
            <div className="flex flex-col md:flex-row justify-between flex-wrap space-y-10 md:space-y-0">
                {/* Links Groups */}
                <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20">
                    <ul className="space-y-2 text-sm text-gray-400">
                        <h1 className="font-bold text-white uppercase">Find a Store</h1>
                        <li>BECOME A MEMBER</li>
                        <li>Sign Up for Email</li>
                        <li>Send Us Feedback</li>
                        <li>Student Discounts</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <h1 className="font-bold text-white uppercase">Get Help</h1>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us On Nike.com Inquiries</li>
                        <li>Contact Us On All Other Inquiries</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <h1 className="font-bold text-white uppercase">About Nike</h1>
                        <li>News</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Sustainability</li>
                    </ul>
                </div>
                {/* Social Media Icons */}
                <ul className="flex justify-center space-x-5">
                    <li><AiFillTwitterCircle aria-label="Twitter" className="hover:text-blue-400 text-2xl" /></li>
                    <li><FaFacebook aria-label="Facebook" className="hover:text-blue-600 text-2xl" /></li>
                    <li><TiSocialYoutubeCircular aria-label="YouTube" className="hover:text-red-600 text-2xl" /></li>
                    <li><TiSocialInstagram aria-label="Instagram" className="hover:text-pink-500 text-2xl" /></li>
                </ul>
            </div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center md:space-x-5">
                    <span className="flex items-center space-x-2">
                        <IoLocationOutline />
                        <p>India</p>
                    </span>
                    <span>© 2023 Nike, Inc. All Rights Reserved</span>
                </div>
                <ul className="flex justify-center space-x-5 text-sm">
                    <li>Guides</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Nike Privacy Policy</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
