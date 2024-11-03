
import { Select, SelectItem } from "@nextui-org/react";
import LoactionIcon from "../constant/icons/LoactionIcon";
import CalendarIcon from "../constant/icons/CalendarIcon";
import PassengerIcon from "../constant/icons/PassengerIcon";
import SearchIcon from "../constant/icons/SearchIcon";
import heroImage from "../assets/heroImage.png"

const HeroSection = () => {
    return (
        <section className="w-full relative">
            <img src={heroImage} alt="heroImage" className="w-full h-[60rem] object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 gap-[8rem] flex flex-col px-4 items-center justify-center">
                <div className="">
                    <h1 className="text-white text-[5rem] leading-normal font-bold font-Inter text-center">RIDE SMARTER</h1>
                    <p className="text-white text-[3.25rem] leading-normal tracking-[0.99rem] ml-4 text-center font-Inter font-normal">SAVE TOGETHER</p>
                </div>

                <div className="h-[12.5rem] flex flex-col justify-between max-w-[77.5rem] w-full rounded-[0.625rem] bg-[#FFFFFFE5] py-4 px-6 heroBoxShadow">
                    <div className="flex gap-[1.88rem]">
                        <div className="w-[18.125rem] flex flex-col gap-3">
                            <label className="text-black font-Inter leading-normal text-[1.125rem] font-normal">Leaving from</label>
                            <Select
                                className="flex max-w-[18.125rem] font-Inter"
                                placeholder="Enter your location"
                                startContent={<LoactionIcon />}
                                variant="bordered"
                                classNames={{
                                    selectorIcon: 'text-black border bg-[#C0C0C080] w-[1.5rem] rounded-[0.3125rem] h-[1.5rem]',
                                    trigger: 'border-black'
                                }}
                            >
                                <SelectItem key="cat">Chennai,Airport</SelectItem>
                                <SelectItem key="cat">City, airport or Station</SelectItem>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-black font-Inter leading-normal text-[1.125rem] font-normal">Going to</label>
                            <div className="flex items-center gap-[1.88rem]">
                                <Select
                                    className="flex w-[18.125rem] font-Inter"
                                    placeholder="Enter your location"
                                    startContent={<LoactionIcon />}
                                    variant="bordered"
                                    classNames={{
                                        selectorIcon: 'text-black border bg-[#C0C0C080] w-[1.5rem] rounded-[0.3125rem] h-[1.5rem]',
                                        trigger: 'border-black'
                                    }}
                                >
                                    <SelectItem key="cat">Chennai,Airport</SelectItem>
                                    <SelectItem key="cat">City, airport or Station</SelectItem>
                                </Select>

                                <Select
                                    className="flex w-[18.125rem] font-Inter"
                                    placeholder="Today"
                                    startContent={<CalendarIcon />}
                                    variant="bordered"
                                    classNames={{
                                        selectorIcon: 'text-black border bg-[#C0C0C080] w-[1.5rem] rounded-[0.3125rem] h-[1.5rem]',
                                        trigger: 'border-black'
                                    }}
                                >
                                    <SelectItem key="cat">Today</SelectItem>
                                </Select>

                                <Select
                                    className="flex w-[18.125rem] font-Inter"
                                    placeholder="1 Passenger"
                                    startContent={<PassengerIcon />}
                                    variant="bordered"
                                    classNames={{
                                        selectorIcon: 'text-black border bg-[#C0C0C080] w-[1.5rem] rounded-[0.3125rem] h-[1.5rem]',
                                        trigger: 'border-black'
                                    }}
                                >
                                    <SelectItem key="cat">1 Passenger</SelectItem>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <p className="text-black text-[1.125rem] leading-normal font-Inter font-normal">Filter :</p>
                            <div className="flex items-center gap-2">
                                <span className="bg-[#242424] text-white rounded-[0.9375rem] text-base font-Inter leading-normal font-normal text-center px-6 py-1 border border-black">All</span>
                                <span className="text-black rounded-[0.9375rem]  text-base font-Inter leading-normal font-normal text-center border border-black px-6 py-1">Offers</span>
                            </div>
                        </div>

                        <button className="bg-[#55A4FF] flex gap-2 px-[1.125rem] py-2 rounded-[1.25rem] text-white text-base font-Inter font-normal searchBoxShadow">
                            <SearchIcon />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection