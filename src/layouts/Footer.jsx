import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="py-[5rem] max-w-[77.5rem] w-full  m-auto flex justify-between gap-[7.5rem]">
                <div>
                    <div className="flex items-center gap-3">
                        <img src="/src/assets/logo.png" alt="logo" />
                        <p className="font-Inter text-[2rem] leading-normal text-white font-semibold">Trip Z</p>
                    </div>

                    <p className="text-white font-Inter text-base font-normal leading-normal max-w-[20.1875rem] mt-6">
                        Share the cost, and reduce your carbon footprint. Whether you’re planning a weekend getaway or a daily commute, ride-sharing makes every trip better for you and the planet.
                    </p>
                </div>

                <div>
                    <h2 className="text-white font-Inter text-[1.125rem] font-semibold leading-normal">How to travel</h2>

                    <div className="mt-6 flex flex-col gap-4">
                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">All carpool routes</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">All carpool destinations</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">All bus routes</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">All bus destinations</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-white font-Inter text-[1.125rem] font-semibold leading-normal">Top carpool routes</h2>

                    <div className="mt-6 flex flex-col gap-4">
                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Chennai - Bengaluru</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Mumbai - Chennai</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Erode - Chennai</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Bengaluru - Mumbai</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Chennai - Mumbai</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-white font-Inter text-[1.125rem] font-semibold leading-normal">Top bus routes</h2>

                    <div className="mt-6 flex flex-col gap-4">
                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Chennai - Bengaluru</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Mumbai - Chennai</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Erode - Chennai</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Bengaluru - Mumbai</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Chennai - Mumbai</Link>

                        <Link to="/" className="text-white font-Inter text-base leading-normal font-normal hover:underline transition-all duration-300">Goa - Mumbai</Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#C4C4C4] h-[0.0625rem]"></div>

            <div className="max-w-[77.5rem] w-full flex items-center justify-between m-auto py-6">
                <div className="flex items-center gap-4">
                    <p className="text-white font-Inter text-base font-normal leading-normal">Terms and Conditions </p>
                    <p className="text-white font-Inter text-base font-normal leading-normal">Cookie settings</p>
                </div>
                <div className="text-white font-Inter text-base font-normal leading-normal">
                    Trip Z ,2024
                </div>
            </div>
        </footer>
    )
}

export default Footer