import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from 'react';

import { useToast } from "@/hooks/use-toast"

interface SignProps {
    signup: boolean;
}

const Sign: React.FC<SignProps> = ({ signup }) => {

    const [gender, setGender] = useState<string>('male');

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const dobRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLSelectElement>(null);
    const genderRef = useRef<HTMLInputElement>(null);
    const signUpRef = useRef<HTMLInputElement>(null);
    const keepMeRef = useRef<HTMLInputElement>(null);

    const { toast } = useToast()

    const sendToForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Access input field values using .current.value
        const formData = {
            email: emailRef.current?.value || "",
            password: passwordRef.current?.value || "",
            firstName: firstNameRef.current?.value || "",
            lastName: lastNameRef.current?.value || "",
            dob: dobRef.current?.value || "",
            gender: genderRef.current?.value || "",
            country: countryRef.current?.value || "",
        };

        console.log("Form Data Submitted:", formData);

        // Optional: Clear input fields
        if (emailRef.current) emailRef.current.value = "";
        if (passwordRef.current) passwordRef.current.value = "";
        if (firstNameRef.current) firstNameRef.current.value = "";
        if (lastNameRef.current) lastNameRef.current.value = "";
        if (dobRef.current) dobRef.current.value = "";
        if (genderRef.current) genderRef.current.value = "";
        if (countryRef.current) countryRef.current.value = "";

        toast(
            {
                variant: "destructive",
                title: "Invalid",
                description: "Password is not matching",
            })
    }

    const specifyGender = (gender: string) => {
        console.log('gender...', gender);
        setGender(gender)
    }

    return (
        <form onSubmit={sendToForm}>
            <div className="flex flex-col justify-center items-center space-y-5 p-standardSize">
                <Image src="/assets/bg.png" alt="logo" width={100} height={100} />
                <h1 className={`font-bold text-xl text-center ${!signup ? 'w-[21%]' : 'w-full'}`}>{signup ? "BECOME A Bendat MEMBER" : "YOUR ACCOUNT FOR EVERYTHING Bendat"}</h1>
                {
                    signup && <p className="text-sm text-gray-400 text-center max-w-xs mx-auto">
                        Create your Bendat Member profile and get first access to the very best of Bendat products, inspiration, and community.
                    </p>
                }
                <input className="border p-2 w-full max-w-md" type="email" ref={emailRef} placeholder="Email address" />
                <input className="border p-2 w-full max-w-md" type="password" ref={passwordRef} placeholder="Password" />
                {
                    signup && (
                        <>
                            <input className="border p-2 w-full max-w-md" type="text" ref={firstNameRef} placeholder="First Name" />
                            <input className="border p-2 w-full max-w-md" type="text" ref={lastNameRef} placeholder="Last Name" />
                            <input className="border p-2 w-full max-w-md text-gray-400" type="text" ref={dobRef} placeholder="Date of Birth" />

                            <p className="text-sm text-gray-400 text-center w-full max-w-md">
                                Get a Bendat Member Reward every year on your Birthday.
                            </p>
                            <select className="border p-2 w-full max-w-md text-gray-400" ref={countryRef}>
                                <option value="in">India</option>
                                <option value="pak">Pakistan</option>
                                <option value="eng">England</option>
                                <option value="usa">USA</option>
                            </select>
                            <div className="flex justify-between w-full max-w-md space-x-4">
                                <label className={`flex items-center space-x-2 border w-1/2 py-2 hover:bg-gray-300 hover:text-white ${gender === 'male' ? 'bg-black hover:bg-black text-white' : ''}`}>
                                    {/* <input type="radio" name="gender" value="male" className="hidden" ref={genderRef} /> */}
                                    <span className="text-sm text-gray-400 w-full text-center hover:text-white" onClick={() => specifyGender("male")}>Male</span>
                                </label>
                                <label className={`flex items-center space-x-2 border w-1/2 py-2 hover:bg-gray-300 hover:text-white ${gender === 'female' ? 'bg-black hover:bg-black text-white' : ''}`}>
                                    {/* <input type="radio" name="gender" value="female" className="hidden" ref={genderRef} /> */}
                                    <span className="text-sm text-gray-400 w-full text-center hover:text-white" onClick={() => specifyGender("female")}>Female</span>
                                </label>
                            </div>
                        </>
                    )
                }
                {
                    !signup && (
                        <div className="flex justify-between w-full max-w-md text-sm text-gray-400">
                            <div>
                                <input type="checkbox" checked id="keepSignedIn" ref={keepMeRef} />
                                <label htmlFor="keepSignedIn" className="ml-2">Keep me signed in</label>
                            </div>
                            <span>Forgotten your password?</span>
                        </div>
                    )
                }
                {
                    signup && (
                        <div className="flex w-full max-w-md text-sm text-gray-400">
                            <input type="checkbox" id="emailUpdates" ref={signUpRef} />
                            <label htmlFor="emailUpdates" className="ml-2">
                                Sign up for emails to get updates from Bendat on products, offers, and your Member benefits
                            </label>
                        </div>
                    )
                }
                <p className="text-sm text-gray-400 text-center py-2 max-w-md w-[40%]">
                    {"By " + (signup ? "creating an account" : `logging in`)}, you agree to Bendat&apos;s{" "}
                    <span className="border-b">Privacy Policy</span> and <span className="border-b">Terms of Use</span>.
                </p>
                <button
                    className="bg-black w-full max-w-md text-white py-2 rounded uppercase"
                // onClick={(e) => sendToForm(e)}
                >{signup ? "Join Us" : "Sign in"}</button>
                <div className="flex text-sm text-gray-400">
                    <p>{signup ? "Already a Member?" : "Not a Member?"}</p>
                    <Link href={signup ? '/Sign/in' : '/Sign/up'} className="ml-2 border-b border-black text-black">{signup ? "Sign In." : "Join Us."}</Link>
                </div>
            </div >
        </form >
    );
};

export default Sign;
