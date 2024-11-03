import { Accordion, AccordionItem } from "@nextui-org/react";
import TrustIcon from "../constant/icons/TrustIcon";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import SafetyIcon from "../constant/icons/SafetyIcon";
import TravelIcon from "../constant/icons/TravelIcon";

const HelpUs = () => {
    return (
        <section className="py-[5rem]">
            <div className="max-w-[77.5rem] flex gap-[6.5rem] justify-between w-full m-auto">
                <div className="flex-1">
                    <h1 className="text-black max-w-[24.8125rem] font-Inter text-[2.625rem] font-semibold leading-snug"><span className="text-[#0BD2B4]">Help Us </span> keep you safe from scams and fraud.</h1>

                    <div className="mt-[5rem] flex flex-col gap-[2.5rem]">

                        <Accordion defaultExpandedKeys={["1"]} className="flex flex-col gap-4">
                            <AccordionItem
                                key="1"
                                aria-label="Trust, Safety and Transparency."
                                title="Trust, Safety and Transparency."
                                startContent={<div className="bg-[#FFFBC9] p-1 rounded-full">
                                    <TrustIcon />
                                </div>}
                                indicator={({ isOpen }) => (isOpen ? <div className="rotate-90 rounded-full p-1 bg-[#55A4FF] text-white">
                                    <IoIosArrowUp />
                                </div> : <div className="rounded-full p-1 bg-[#CBCACA] text-white">

                                    <IoIosArrowDown />
                                </div>)}
                                className="border rounded-[0.3125rem] bg-white accordionBoxShadow px-4"
                                classNames={{
                                    heading: "text-black font-Inter text-[1.25rem] font-semibold leading-normal",
                                    content: "pl-12 text-black font-Inter text-[0.875rem] flex flex-col gap-4 font-normal leading-normal"
                                }}
                            >
                                <p>
                                    Your safety is our priority with verified profiles, driver ratings, and passenger reviews, you can trust TripZ community. Share your ride with confidence, knowing that you’re in good hands with fellow travelers.
                                </p>

                                <Link to="/" className="mb-4 text-[#25B4E0] font-Inter text-[1.125rem] font-normal leading-normal">Read more</Link>
                            </AccordionItem>

                            <AccordionItem
                                key="2"
                                aria-label="Stay Safe from Scams."
                                title="Stay Safe from Scams."
                                startContent={<div className="bg-[#FFFBC9] p-1 rounded-full">
                                    <SafetyIcon />
                                </div>}
                                indicator={({ isOpen }) => (isOpen ? <div className="rotate-90 rounded-full p-1 bg-[#55A4FF] text-white">
                                    <IoIosArrowUp />
                                </div> : <div className="rounded-full p-1 bg-[#CBCACA] text-white">

                                    <IoIosArrowDown />
                                </div>)}
                                className="border rounded-[0.3125rem] bg-white accordionBoxShadow px-4"
                                classNames={{
                                    heading: "text-black font-Inter text-[1.25rem] font-semibold leading-normal",
                                    content: "pl-12 text-black font-Inter text-[0.875rem] flex flex-col gap-4 font-normal leading-normal"
                                }}
                            >
                                <p>
                                    Your safety is our priority with verified profiles, driver ratings, and passenger reviews, you can trust TripZ community. Share your ride with confidence, knowing that you’re in good hands with fellow travelers.
                                </p>

                                <Link to="/" className="mb-4 text-[#25B4E0] font-Inter text-[1.125rem] font-normal leading-normal">Read more</Link>
                            </AccordionItem>

                            <AccordionItem
                                key="3"
                                aria-label="Affordable Travel for Everyone."
                                title="Affordable Travel for Everyone."
                                startContent={<div className="bg-[#FFFBC9] p-1 rounded-full">
                                    <TravelIcon />
                                </div>}
                                indicator={({ isOpen }) => (isOpen ? <div className="rotate-90 rounded-full p-1 bg-[#55A4FF] text-white">
                                    <IoIosArrowUp />
                                </div> : <div className="rounded-full p-1 bg-[#CBCACA] text-white">

                                    <IoIosArrowDown />
                                </div>)}
                                className="border rounded-[0.3125rem] bg-white accordionBoxShadow px-4"
                                classNames={{
                                    heading: "text-black font-Inter text-[1.25rem] font-semibold leading-normal",
                                    content: "pl-12 text-black font-Inter text-[0.875rem] flex flex-col gap-4 font-normal leading-normal"
                                }}
                            >
                                <p>
                                    Your safety is our priority with verified profiles, driver ratings, and passenger reviews, you can trust TripZ community. Share your ride with confidence, knowing that you’re in good hands with fellow travelers.
                                </p>

                                <Link to="/" className="mb-4 text-[#25B4E0] font-Inter text-[1.125rem] font-normal leading-normal">Read more</Link>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>

                <div className="flex-1 flex items-end max-w-[33.75rem] px-[2.25rem] rounded-[1.25rem] helpUsBackground">
                    <img src="/src/assets/car.png" alt="car image" />
                </div>
            </div>
        </section>
    )
}

export default HelpUs