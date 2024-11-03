import JointLineLeft from "../constant/icons/JointLineLeft"
import JointLineRight from "../constant/icons/JointLineRight"
import { Avatar, Divider } from "@nextui-org/react";

const AvailableRideComponent = () => {
    return (
        <div className="rounded-[0.625rem] bg-white availableRidesBoxShadow overflow-hidden">
            <div className="flex items-start gap-3 p-4">
                <div>
                    <h2 className="text-black text-[1.25rem] font-Inter font-semibold leading-normal">04:00</h2>
                    <p className="text-black text-[0.875rem] font-Inter font-normal leading-normal">Hosur</p>
                </div>
                <div className="flex items-center mt-[6px] gap-2">
                    <JointLineLeft />
                    <p className="text-[#00000080] text-[0.75rem] font-Inter font-normal leading-normal">5h40</p>
                    <JointLineRight />
                </div>
                <div>
                    <h2 className="text-black text-[1.25rem] font-Inter font-semibold leading-normal">09:40</h2>
                    <p className="text-black text-[0.875rem] font-Inter font-normal leading-normal">Chennai</p>
                </div>
            </div>

            <div className="mt-3 h-[0.0625rem] bg-[#00000080]">
            </div>

            <div className="px-4 py-2">
                <div className="flex items-center gap-4">
                    <Avatar classNames={{
                        base: "border border-[#00BFFF]",
                    }} src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

                    <div className="flex items-center gap-4">
                        <div className="flex justify-between text-nowrap gap-6 items-center">
                            <p className="text-black font-Inter leading-normal font-normal text-[0.75rem]">Chennai, TamilNadu</p>

                            <div className="flex items-center gap-1">
                                <img src="/src/assets/starIcon.svg" alt="star icon" />

                                <p className="text-black font-Inter leading-normal font-medium text-[0.625rem]">4.8</p>
                            </div>
                        </div>
                        <Divider orientation="vertical" className="bg-[#0000004D] h-[1.5rem]" />
                        <div className="flex items-center">
                            <p className="text-black font-Inter leading-normal font-normal text-[0.75rem]">Max.2 in the back</p>
                        </div>
                        <Divider orientation="vertical" className="bg-[#0000004D] h-[1.5rem]" />
                        <div className="flex items-center">
                            <p className="text-black font-Inter leading-normal font-normal text-[0.75rem]">Instant Booking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableRideComponent