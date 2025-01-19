import Image from "next/image";
import Link from "next/link";

interface SignProps {
    signup: boolean;
}

const Sign: React.FC<SignProps> = ({ signup }) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-5 p-standardSize">
            <Image src="/assets/nike-logo-1.svg" alt="logo" width={50} height={50} />
            <h1 className={`font-bold text-xl text-center ${!signup ? 'w-[21%]' : 'w-full'}`}>{signup ? "BECOME A NIKE MEMBER" : "YOUR ACCOUNT FOR EVERYTHING NIKE"}</h1>
            {
                signup && <p className="text-sm text-gray-400 text-center max-w-xs mx-auto">
                    Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
                </p>
            }
            <input className="border p-2 w-full max-w-md" type="email" placeholder="Email address" />
            <input className="border p-2 w-full max-w-md" type="password" placeholder="Password" />
            {
                signup && (
                    <>
                        <input className="border p-2 w-full max-w-md" type="text" placeholder="First Name" />
                        <input className="border p-2 w-full max-w-md" type="text" placeholder="Last Name" />
                        <input className="border p-2 w-full max-w-md text-gray-400" type="text" placeholder="Date of Birth" />

                        <p className="text-sm text-gray-400 text-center w-full max-w-md">
                            Get a Nike Member Reward every year on your Birthday.
                        </p>
                        <select className="border p-2 w-full max-w-md text-gray-400">
                            <option value="in">India</option>
                            <option value="pak">Pakistan</option>
                            <option value="eng">England</option>
                            <option value="usa">USA</option>
                        </select>
                        <div className="flex justify-between w-full max-w-md space-x-4">
                            <label className="flex items-center space-x-2 border w-1/2 py-2 ">
                                <input type="radio" name="gender" value="male" className="hidden" />
                                <span className="text-sm text-gray-400 w-full text-center">Male</span>
                            </label>
                            <label className="flex items-center space-x-2 border w-1/2 py-2 ">
                                <input type="radio" name="gender" value="female" className="hidden" />
                                <span className="text-sm text-gray-400 w-full text-center">Female</span>
                            </label>
                        </div>
                    </>
                )
            }
            {
                !signup && (
                    <div className="flex justify-between w-full max-w-md text-sm text-gray-400">
                        <div>
                            <input type="checkbox" checked id="keepSignedIn" />
                            <label htmlFor="keepSignedIn" className="ml-2">Keep me signed in</label>
                        </div>
                        <span>Forgotten your password?</span>
                    </div>
                )
            }
            {
                signup && (
                    <div className="flex w-full max-w-md text-sm text-gray-400">
                        <input type="checkbox" id="emailUpdates" />
                        <label htmlFor="emailUpdates" className="ml-2">
                            Sign up for emails to get updates from Nike on products, offers, and your Member benefits
                        </label>
                    </div>
                )
            }
            <p className="text-sm text-gray-400 text-center py-2 max-w-md w-[40%]">
                {"By " + (signup ? "creating an account" : `logging in`)}, you agree to Nike&apos;s{" "}
                <span className="border-b">Privacy Policy</span> and <span className="border-b">Terms of Use</span>.
            </p>
            <button className="bg-black w-full max-w-md text-white py-2 rounded uppercase">{signup ? "Join Us" : "Sign in"}</button>
            <div className="flex text-sm text-gray-400">
                <p>{signup ? "Already a Member?" : "Not a Member?"}</p>
                <Link href={signup ? '/Sign/in' : '/Sign/up'} className="ml-2 border-b border-black text-black">{signup ? "Sign In." : "Join Us."}</Link>
            </div>
        </div >
    );
};

export default Sign;
