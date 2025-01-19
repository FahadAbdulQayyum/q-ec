import React from 'react'

const FirstLook = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 px-4 py-standardSize">
            <div>
                <p className="text-sm font-bold">First Look</p>
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">Nike Air Max Pulse</h1>
            </div>
            <div className="space-y-2 py-5 font-medium">
                <p className="text-sm text-center">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                </p>
                <p className="text-sm text-center">
                    — designed to push you past your limits and help you go to the max.
                </p>
            </div>
            <div className="space-x-4">
                <button className="bg-black text-white text-sm p-2 px-4 rounded-full hover:bg-gray-700">
                    Notify Me
                </button>
                <button className="bg-black text-white text-sm p-2 px-4 rounded-full hover:bg-gray-700">
                    Shop Air Max
                </button>
            </div>
        </div>
    )
}

export default FirstLook
