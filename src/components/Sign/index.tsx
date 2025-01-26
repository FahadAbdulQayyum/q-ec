import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from 'react';

import { useToast } from "@/hooks/use-toast"

import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"

import { useAppDispatch } from '@/components/lib/hooks'
import { initializeUserInfo } from "../lib/features/userInfo/userInfoSlice";

interface SignProps {
    signup: boolean;
}

const Sign: React.FC<SignProps> = ({ signup }) => {

    const [gender, setGender] = useState<string>('male');
    const [loading, setLoading] = useState<boolean>(false);

    const [isCheckedSignedIn, setIsCheckedSignedIn] = useState(false);
    const [isCheckedEmailUpdate, setIsCheckedEmailUpdate] = useState(false);


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

    const router = useRouter();

    const dispatch = useAppDispatch();

    const sendToForm = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        // Access input field values using .current.value
        const formData = {
            email: emailRef.current?.value || "",
            password: passwordRef.current?.value || "",
            firstName: firstNameRef.current?.value || "",
            lastName: lastNameRef.current?.value || "",
            country: countryRef.current?.value || "",
            dob: dobRef.current?.value || "",
            signUp: signUpRef.current?.checked || false,
            gender
        };

        console.log("Form Data Submitted:", formData);

        if (!formData.email && !formData.password && !formData.firstName && !formData.lastName && !formData.dob && !formData.gender && !formData.country) {
            toast(
                {
                    variant: "destructive",
                    title: "Invalid!",
                    description: "You did not provide all information!",
                })
        }
        if (signup) {
            try {
                const response = await fetch('http://localhost:3000/api/signup', { method: 'POST', headers: { 'Content-Type': 'appliction/json' }, body: JSON.stringify(formData) })
                console.log('...response....', response);

                if (!response.ok) {
                    const error = await response.json();
                    console.error('Error:', error.error || 'Something went wrong');
                    if (error.details) {
                        console.error('Validation Errors:', error.details);
                        toast(
                            {
                                variant: "destructive",
                                title: "Invalid!",
                                description: error.details.map((v: any, index: number) => <small key={index} style={{ display: 'block' }}>{v.message}</small>),
                            })
                        setLoading(false);
                    }
                    return;
                }
                const data = await response.json();
                console.log('...data....', data);
                if (data.details) {
                    console.log('...data.details...');
                    toast(
                        {
                            variant: "destructive",
                            title: "Invalid!",
                            description: data.details.map((v: any, index: number) => <small key={index} style={{ display: 'block' }}>{v.message}</small>),
                        })
                } else if (data.success) {
                    toast(
                        {
                            title: "Success!",
                            description: "Signed Up Successfully!"
                        })

                    // Optional: Clear input fields
                    if (emailRef.current) emailRef.current.value = "";
                    if (passwordRef.current) passwordRef.current.value = "";
                    if (firstNameRef.current) firstNameRef.current.value = "";
                    if (lastNameRef.current) lastNameRef.current.value = "";
                    if (dobRef.current) dobRef.current.value = "";
                    if (genderRef.current) genderRef.current.value = "";
                    if (countryRef.current) countryRef.current.value = "";
                }
                setLoading(false);
                router.push('/Sign/In')
            } catch (err) {
                console.error('Fetch error:', err)
            }
        } else {
            try {
                const formDataForSignIn = { email: formData.email, password: formData.password }
                const response = await fetch('http://localhost:3000/api/signin', { method: 'POST', headers: { 'Content-Type': 'appliction/json' }, body: JSON.stringify(formDataForSignIn) })
                if (!response.ok) {
                    const error = await response.json();
                    console.error('Error:', error.error || 'Something went wrong');
                    if (error.details) {
                        console.error('Validation Errors:', error.details);
                        toast(
                            {
                                variant: "destructive",
                                title: "Invalid!",
                                description: error.details.map((v: any, index: number) => <small key={index} style={{ display: 'block' }}>{v.message}</small>),
                            })
                        setLoading(false);
                    }
                    return;
                }
                const resp = await response.json();
                if (!resp.success) {
                    toast(
                        {
                            variant: "destructive",
                            title: "Invalid!",
                            description: resp.msg
                        })
                    setLoading(false);
                    return
                }
                toast(
                    {
                        title: "Successfully!",
                        description: resp.msg
                    })
                setLoading(false)
                console.log('...resp.data...', resp.data)
                dispatch(initializeUserInfo(resp.data[0]));
                router.push('/')
            } catch (err) {
                console.error('Fetch error:', err)
                setLoading(false)
            }
        }
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
                                    <span className="text-sm text-gray-400 w-full text-center hover:text-white" onClick={() => specifyGender("male")}>Male</span>
                                </label>
                                <label className={`flex items-center space-x-2 border w-1/2 py-2 hover:bg-gray-300 hover:text-white ${gender === 'female' ? 'bg-black hover:bg-black text-white' : ''}`}>
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
                                <input
                                    type="checkbox"
                                    checked={isCheckedSignedIn}
                                    onChange={(e) => setIsCheckedSignedIn(e.target.checked)}
                                    id="keepSignedIn"
                                    ref={keepMeRef} />
                                <label htmlFor="keepSignedIn" className="ml-2">Keep me signed in</label>
                            </div>
                            <span>Forgotten your password?</span>
                        </div>
                    )
                }
                {
                    signup && (
                        <div className="flex w-full max-w-md text-sm text-gray-400">
                            <input
                                type="checkbox"
                                id="emailUpdates"
                                checked={isCheckedEmailUpdate}
                                onChange={(e) => setIsCheckedEmailUpdate(e.target.checked)}
                                ref={signUpRef} />
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
                {loading ?
                    <Button disabled
                        className="bg-black w-full max-w-md text-white py-3 rounded uppercase"
                    >
                        <Loader2
                            className="animate-spin"
                        />
                        Please wait
                    </Button>
                    : <button
                        className="bg-black w-full max-w-md text-white py-2 rounded uppercase"
                    >{signup ? "Join Us" : "Sign in"}</button>}
                <div className="flex text-sm text-gray-400">
                    <p>{signup ? "Already a Member?" : "Not a Member?"}</p>
                    <Link href={signup ? '/Sign/in' : '/Sign/up'} className="ml-2 border-b border-black text-black">{signup ? "Sign In." : "Join Us."}</Link>
                </div>
            </div >
        </form >
    );
};

export default Sign;
