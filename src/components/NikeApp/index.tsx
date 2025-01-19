const NikeApp = () => {
    return (
        <div className="bg-primaryy text-black flex flex-col justify-center items-center py-4">
            {/* <h1 className="font-bold text-xl">Hello Nike App</h1> */}
            <h1 className="text-lg font-medium font-sans">Hello Nike App</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2 mt-2">
                <p className="text-center">Download the app to access everything Nike.</p>
                <button className="mt-3 md:mt-0 underline text-center mb-2 md:mb-0" aria-label="Get Nike App">Get the Nike App</button>
            </div>
        </div>
    )
}

export default NikeApp
