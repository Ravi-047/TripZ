import { Link } from "react-router-dom"
import PriceIcon from "../constant/icons/PriceIcon"
import CarIcon from "../constant/icons/CarIcon"
import LightningIcon from "../constant/icons/LightningIcon"

const AboutUs = () => {
    return (
        <section className="w-full py-[5rem]">
            <div className="max-w-[77.5rem] w-full m-auto">
                <h1 className="text-black text-center font-Inter text-[2.625rem] font-semibold leading-normal">How it <span className="text-[#0BD2B4]">Works</span></h1>
                <p className="text-[#4C4848] max-w-[35.1875rem] text-center font-Inter text-sm font-normal leading-normal m-auto">
                    Drivers post their trips, passengers find rides, and together they split costs. Search for available journeys, connect with drivers or passengers, and hit the road.it’s affordable, convenient and eco friendly!
                </p>

                <div className="grid grid-cols-3 mt-[3.12rem]">
                    <div className="flex items-center justify-center flex-col gap-3">
                        <PriceIcon />
                        <h3 className="text-black mt-[1.88rem] text-center font-Inter text-xl font-semibold leading-normal">
                            Your pick of rides at low prices
                        </h3>
                        <p className="max-w-[20.5rem] text-[#4C4848] text-center font-Inter text-sm leading-normal font-normal">
                            No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.
                        </p>

                        <Link to="/" className="text-[#25B4E0] mt-[2.94rem] text-center font-Inter text-[1.125rem] font-medium leading-normal">Read more</Link>
                    </div>

                    <div className="flex items-center justify-center flex-col gap-3">
                        <CarIcon />
                        <h3 className="text-black mt-[1.88rem] text-center font-Inter text-xl font-semibold leading-normal">
                            Trust who you travel with.
                        </h3>
                        <p className="max-w-[20.5rem] text-[#4C4848] text-center font-Inter text-sm leading-normal font-normal">
                            We take the time to get to know each of our members and bus partners.We check reviews, profiles and IDs, so you know who you’re travelling with and can book.
                        </p>

                        <Link to="/" className="text-[#25B4E0] mt-[2.94rem] text-center font-Inter text-[1.125rem] font-medium leading-normal">Read more</Link>
                    </div>

                    <div className="flex items-center justify-center flex-col gap-3">
                        <LightningIcon />
                        <h3 className="text-black mt-[1.88rem] text-center font-Inter text-xl font-semibold leading-normal">
                            Your pick of rides at low prices
                        </h3>
                        <p className="max-w-[20.5rem] text-[#4C4848] text-center font-Inter text-sm leading-normal font-normal">
                            Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.
                        </p>

                        <Link to="/" className="text-[#25B4E0] mt-[2.94rem] text-center font-Inter text-[1.125rem] font-medium leading-normal">Read more</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs