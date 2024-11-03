import Marquee from "react-fast-marquee"

const NextRide = () => {
    return (
        <section className="py-[5rem]">
            <div className="max-w-[77.5rem] w-full flex gap-5 m-auto">
                <div className="flex-1">
                    <h1 className="text-black max-w-[36.625rem] font-Inter text-[2.625rem] font-semibold leading-snug"><span className="text-[#0BD2B4]">Plan Your Next Ride </span>-where do you want to go?</h1>

                    <div className="mt-[3.75rem] flex flex-col gap-[2.5rem] w-[32.5rem]">
                        <div className="py-[1.375rem] px-[2.5rem] flex justify-between items-center gap-5 border rounded-[0.3125rem] bg-white accordionBoxShadow ">
                            <p className="text-black font-Inter text-[1.25rem] font-semibold leading-normal">Chennai - Bengaluru </p>

                            <div className="w-[1.5rem] h-[1.5rem]">
                                <img src="/src/assets/IconArrowRight.png" alt="arrow right" className="w-full object-contain" />
                            </div>
                        </div>

                        <div className="py-[1.375rem] px-[2.5rem] flex justify-between items-center gap-5 border rounded-[0.3125rem] bg-white accordionBoxShadow ">
                            <p className="text-black font-Inter text-[1.25rem] font-semibold leading-normal">Kochi - Bengaluru </p>

                            <div className="w-[1.5rem] h-[1.5rem]">
                                <img src="/src/assets/IconArrowRight.png" alt="arrow right" className="w-full object-contain" />
                            </div>
                        </div>

                        <div className="py-[1.375rem] px-[2.5rem] flex justify-between items-center gap-5 border rounded-[0.3125rem] bg-white accordionBoxShadow ">
                            <p className="text-black font-Inter text-[1.25rem] font-semibold leading-normal">Mumbai - Bengaluru </p>

                            <div className="w-[1.5rem] h-[1.5rem]">
                                <img src="/src/assets/IconArrowRight.png" alt="arrow right" className="w-full object-contain" />
                            </div>
                        </div>

                        <div className="text-white text-center cursor-pointer w-fit font-Inter text-base font-normal leading-normal rounded-[1.25rem] bg-[#55A4FF] nextRideBoxShadow px-[1.75rem] py-[0.625rem] transition-all duration-300 hover:scale-105 active:scale-95">
                            See our most popular rides
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-4 items-center justify-center rounded-[0.625rem] bg-[#EEF6FF] py-[1.25rem] px-[1.875rem]">
                    <div className="rounded-[0.3125rem] bg-white py-4 px-6">
                        <h2 className="text-black font-Inter text-[1.25rem] font-semibold leading-normal">Car Type</h2>

                        <div className="flex mt-4 items-center gap-[2.5rem]">
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative group">
                                    <img src="/src/assets/sedanCar.png" alt="sedan car" />
                                    <div className="absolute rounded-[0.625rem] cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                                </div>
                                <p className="text-black font-Inter text-[1.25rem] font-normal leading-normal">Sedan</p>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="relative group">
                                    <img src="/src/assets/suvCar.png" alt="sedan car" />
                                    <div className="absolute rounded-[0.625rem] cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </div>
                                <p className="text-black font-Inter text-[1.25rem] font-normal leading-normal">Suv</p>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="relative group">
                                    <img src="/src/assets/sportsCar.png" alt="sedan car" />
                                    <div className="absolute rounded-[0.625rem] cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </div>
                                <p className="text-black font-Inter text-[1.25rem] font-normal leading-normal">Sport</p>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="relative group">
                                    <img src="/src/assets/electricCar.png" alt="sedan car" />
                                    <div className="absolute rounded-[0.625rem] cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </div>
                                <p className="text-black font-Inter text-[1.25rem] font-normal leading-normal">Electric</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[0.3125rem] bg-white  py-4 px-6">
                        <h2 className="text-black font-Inter text-[1.25rem] font-semibold leading-normal">Car Type</h2>

                        <div className=" mt-4 w-[32.5rem]">
                            <Marquee className="py-4">
                                <div className="max-w-[10rem] w-full ml-4 rounded-[0.3125rem] bg-white overflow-hidden carsAvailableBoxShadow">
                                    <div className="w-[10rem] h-[6.25rem]">
                                        <img src="/src/assets/toyotaCorolla.png" alt="toyota" className="w-full object-cover" />
                                    </div>

                                    <div className=" px-3 pt-3 pb-4">
                                        <p className="text-black font-Inter text-base font-medium leading-normal">Toyota Corolla </p>
                                        <p className="text-black font-Inter text-[0.875rem font-light leading-normal]">₹800/Day</p>

                                        <div className="mt-[2.25rem] flex justify-between text-nowrap items-center">
                                            <p className="text-black font-Inter leading-normal font-light text-[0.625rem]">Chennai, TamilNadu</p>

                                            <div className="flex items-center gap-1">
                                                <p className="text-black font-Inter leading-normal font-medium text-[0.625rem]">4.8</p>
                                                <img src="/src/assets/starIcon.svg" alt="star icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-[10rem] w-full ml-4  rounded-[0.3125rem] bg-white overflow-hidden carsAvailableBoxShadow">
                                    <div className="w-[10rem] h-[6.25rem]">
                                        <img src="/src/assets/toyotaYaris.png" alt="toyota" className="w-full object-cover" />
                                    </div>

                                    <div className=" px-3 pt-3 pb-4">
                                        <p className="text-black font-Inter text-base font-medium leading-normal">Toyota Yaris GR </p>
                                        <p className="text-black font-Inter text-[0.875rem font-light leading-normal]">₹800/Day</p>

                                        <div className="mt-[2.25rem] flex justify-between text-nowrap items-center">
                                            <p className="text-black font-Inter leading-normal font-light text-[0.625rem]">Chennai, TamilNadu</p>

                                            <div className="flex items-center gap-1">
                                                <p className="text-black font-Inter leading-normal font-medium text-[0.625rem]">4.8</p>
                                                <img src="/src/assets/starIcon.svg" alt="star icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-[10rem] w-full ml-4  rounded-[0.3125rem] bg-white overflow-hidden carsAvailableBoxShadow">
                                    <div className="w-[10rem] h-[6.25rem]">
                                        <img src="/src/assets/toyota.png" alt="toyota" className="w-full object-cover" />
                                    </div>

                                    <div className=" px-3 pt-3 pb-4">
                                        <p className="text-black font-Inter text-base font-medium leading-normal">Toyota White D</p>
                                        <p className="text-black font-Inter text-[0.875rem font-light leading-normal]">₹800/Day</p>

                                        <div className="mt-[2.25rem] flex justify-between text-nowrap items-center">
                                            <p className="text-black font-Inter leading-normal font-light text-[0.625rem]">Chennai, TamilNadu</p>

                                            <div className="flex items-center gap-1">
                                                <p className="text-black font-Inter leading-normal font-medium text-[0.625rem]">4.8</p>
                                                <img src="/src/assets/starIcon.svg" alt="star icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-[10rem] w-full ml-4  rounded-[0.3125rem] bg-white overflow-hidden carsAvailableBoxShadow">
                                    <div className="w-[10rem] h-[6.25rem]">
                                        <img src="/src/assets/toyotaCorolla.png" alt="toyota" className="w-full object-cover" />
                                    </div>

                                    <div className=" px-3 pt-3 pb-4">
                                        <p className="text-black font-Inter text-base font-medium leading-normal">Toyota Corolla </p>
                                        <p className="text-black font-Inter text-[0.875rem font-light leading-normal]">₹800/Day</p>

                                        <div className="mt-[2.25rem] flex justify-between text-nowrap items-center">
                                            <p className="text-black font-Inter leading-normal font-light text-[0.625rem]">Chennai, TamilNadu</p>

                                            <div className="flex items-center gap-1">
                                                <p className="text-black font-Inter leading-normal font-medium text-[0.625rem]">4.8</p>
                                                <img src="/src/assets/starIcon.svg" alt="star icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-[10rem] w-full ml-4  rounded-[0.3125rem] bg-white overflow-hidden carsAvailableBoxShadow">
                                    <div className="w-[10rem] h-[6.25rem]">
                                        <img src="/src/assets/toyotaYaris.png" alt="toyota" className="w-full object-cover" />
                                    </div>

                                    <div className=" px-3 pt-3 pb-4">
                                        <p className="text-black font-Inter text-base font-medium leading-normal">Toyota Yaris GR </p>
                                        <p className="text-black font-Inter text-[0.875rem font-light leading-normal]">₹800/Day</p>

                                        <div className="mt-[2.25rem] flex justify-between text-nowrap items-center">
                                            <p className="text-black font-Inter leading-normal font-light text-[0.625rem]">Chennai, TamilNadu</p>

                                            <div className="flex items-center gap-1">
                                                <p className="text-black font-Inter leading-normal font-medium text-[0.625rem]">4.8</p>
                                                <img src="/src/assets/starIcon.svg" alt="star icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-[10rem] w-full ml-4  rounded-[0.3125rem] bg-white overflow-hidden carsAvailableBoxShadow">
                                    <div className="w-[10rem] h-[6.25rem]">
                                        <img src="/src/assets/toyota.png" alt="toyota" className="w-full object-cover" />
                                    </div>

                                    <div className=" px-3 pt-3 pb-4">
                                        <p className="text-black font-Inter text-base font-medium leading-normal">Toyota White D</p>
                                        <p className="text-black font-Inter text-[0.875rem font-light leading-normal]">₹800/Day</p>

                                        <div className="mt-[2.25rem] flex justify-between text-nowrap items-center">
                                            <p className="text-black font-Inter leading-normal font-light text-[0.625rem]">Chennai, TamilNadu</p>

                                            <div className="flex items-center gap-1">
                                                <p className="text-black font-Inter leading-normal font-medium text-[0.625rem]">4.8</p>
                                                <img src="/src/assets/starIcon.svg" alt="star icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NextRide