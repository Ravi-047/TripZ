import { Avatar } from "@nextui-org/react"
import HeroSection2 from "../components/HeroSection2"
import BlueTick from "../constant/icons/BlueTick"
import DriverCalendar from "../constant/icons/DriverCalendar"
import BookingIcon from "../constant/icons/BookingIcon"
import NoSmoking from "../constant/icons/NoSmoking"
import DriverCar from "../constant/icons/DriverCar"
import JointLineStraight from "../constant/icons/JointLineStraight"
import DriverCar2Icon from "../constant/icons/DriverCar2Icon"

const DriverInfo = () => {
    return (
        <section className="w-full relative">
            <HeroSection2 />
            <div className="max-w-[77.5rem] pt-8 pb-[5rem] flex gap-10 w-full m-auto">
                <div className="flex-[0.7] availableRidesBoxShadow rounded-[0.625rem] bg-white p-4">
                    <div className="flex items-center gap-2">
                        <Avatar classNames={{
                            base: "border border-[#00BFFF]",
                        }} src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <div>
                            <h2 className="text-black font-Inter text-base font-medium leading-normal">Leveil Samson</h2>
                            <div className="flex items-center gap-2">
                                <img src="/src/assets/starIcon.svg" alt="star icon" />

                                <p className="text-[#00000099] font-Inter leading-normal font-medium text-[0.625rem]">4.7 / 5 - 33 ratings</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[1.75rem] flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <BlueTick />
                            <p className="text-[#000000B2] font-Inter font-normal leading-normal text-base">Verified Profile </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <DriverCalendar />
                            <p className="text-[#000000B2] font-Inter font-normal leading-normal text-base">Sometimes cancels ride</p>
                        </div>

                        <p className="text-[#000000B2] font-Inter font-normal leading-normal text-base">I am starting early morning at 2:30</p>
                    </div>

                    <div className="mt-[1.5rem] h-[0.0625rem] bg-[#00000080]">
                    </div>

                    <div className="mt-[1.5rem] flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <BookingIcon />
                            <p className="text-[#000000B2] font-Inter font-normal leading-normal text-base">Your booking won’t be confirmed until the driver approves your request </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <NoSmoking />
                            <p className="text-[#000000B2] font-Inter font-normal leading-normal text-base">No smoking, please</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <DriverCar />
                            <p className="text-[#000000B2] font-Inter font-normal leading-normal text-base">MG ZS - Dark grey</p>
                        </div>
                    </div>

                    <div className="text-white mt-[1.65rem] text-center cursor-pointer w-fit font-Inter text-base font-normal leading-normal rounded-[1.25rem] bg-[#55A4FF] nextRideBoxShadow px-[1.75rem] py-[0.625rem]">
                        Ask Samson a question
                    </div>
                </div>

                <div className="flex-[0.3] flex flex-col gap-5">
                    <div className=" availableRidesBoxShadow rounded-[0.625rem] bg-white py-4 px-6">
                        <h2 className="text-black font-Inter text-[1.5rem] font-medium leading-normal">Thu, 30 Sept</h2>

                        <div className="mt-3 flex gap-4">
                            <div className="flex flex-col gap-3">
                                <p className="text-black font-Inter text-base font-bold leading-normal">02:30</p>
                                <p className="text-[#00000080] text-[0.75rem] font-normal leading-normal font-Inter">5h40</p>
                                <p className="text-black font-Inter text-base font-bold leading-normal">08:20</p>
                            </div>
                            <div className="mt-3">
                                <JointLineStraight />
                            </div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="text-black font-Inter text-base font-medium leading-normal">Bengaluru</p>
                                    <p className="font-Inter text-[0.75rem] text-[#00000080] font-normal leading-normal">1st Block, Koramangala</p>
                                </div>

                                <div>
                                    <p className="text-black font-Inter text-base font-medium leading-normal">Peerankankaranai</p>
                                    <p className="font-Inter text-[0.75rem] text-[#00000080] font-normal leading-normal">Vandalur Zoo, Tamil Nadu</p>
                                </div>

                            </div>
                        </div>

                        <div className="mt-[1.5rem] h-[0.0625rem] bg-[#00000080]">
                        </div>

                        <div className="flex mt-[1.5rem] items-center gap-3">
                            <DriverCar2Icon />
                            <Avatar size="sm" classNames={{
                                base: "border border-[#00BFFF]",
                            }} src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            <div>
                                <h2 className="text-black font-Inter text-[0.9rem] font-medium leading-normal">Leveil Samson</h2>
                                <div className="flex items-center gap-2">
                                    <img src="/src/assets/starIcon.svg" alt="star icon" />

                                    <p className="text-[#00000099] font-Inter leading-normal font-medium text-[0.625rem]">4.7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" availableRidesBoxShadow rounded-[0.625rem] bg-white py-4 px-6 flex justify-between items-center gap-3">
                        <p className="text-black font-Inter text-[1.125rem] font-normal leading-normal">1 passenger</p>
                        <p className="text-black font-Inter leading-normal text-[1.25rem] font-bold">₹800.00</p>
                    </div>

                    <button className="text-white border-none outline-none w-full text-center cursor-pointer font-Inter text-base font-normal leading-normal rounded-[1.25rem] bg-[#55A4FF] nextRideBoxShadow px-[1.75rem] py-[0.625rem]">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DriverInfo