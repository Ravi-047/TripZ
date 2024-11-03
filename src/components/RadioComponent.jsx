import { RadioGroup, Radio } from "@nextui-org/react";

const RadioComponent = () => {
    return (
        <div className="flex flex-col gap-8">
            <div >
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-black font-Inter text-[1.5rem] font-medium leading-normal">Sort By</h2>
                    <p className="font-Inter text-base text-[#00BFFF] font-medium leading-normal">Clear all</p>
                </div>

                <RadioGroup
                    className="mt-4"
                    defaultValue="Earlier departure"
                >
                    <Radio
                        classNames={{
                            control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                            wrapper: "!border-2 !border-[#00BFFF]"
                        }}
                        value="Earlier departure"
                    >Earlier departure</Radio>
                    <Radio
                        classNames={{
                            control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                            wrapper: "!border-2 !border-[#00BFFF]"
                        }}
                        value="Lowest Price"
                    >Lowest Price</Radio>
                    <Radio
                        classNames={{
                            control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                            wrapper: "!border-2 !border-[#00BFFF]"
                        }}
                        value="Close to departure point"
                    >Close to departure point</Radio>
                    <Radio
                        classNames={{
                            control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                            wrapper: "!border-2 !border-[#00BFFF]"
                        }}
                        value="Close to arrival point"
                    >Close to arrival point</Radio>

                    <Radio
                        classNames={{
                            control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                            wrapper: "!border-2 !border-[#00BFFF]"
                        }}
                        value="Shortest ride"
                    >Shortest ride</Radio>
                </RadioGroup>
            </div>

            <div className="h-[0.625rem] w-full bg-[#00000026] rounded-lg"></div>

            <div>
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-black font-Inter text-[1.5rem] font-medium leading-normal">Departure time</h2>
                </div>
                <RadioGroup
                    className="mt-4"
                    defaultValue="Earlier departure"
                >
                    <div className="flex items-center justify-between">
                        <Radio
                            classNames={{
                                control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                                wrapper: "!border-2 !border-[#00BFFF]"
                            }}
                            value="Before 06:00"
                        >Before 06:00</Radio>
                        <p>2</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <Radio
                            classNames={{
                                control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                                wrapper: "!border-2 !border-[#00BFFF]"
                            }}
                            value="06:00 - 12:00"
                        >06:00 - 12:00</Radio>
                        <p>5</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <Radio
                            classNames={{
                                control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                                wrapper: "!border-2 !border-[#00BFFF]"
                            }}
                            value="12:01 - 18:00"
                        >12:01 - 18:00</Radio>
                        <p>1</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <Radio
                            classNames={{
                                control: "!border !border-[#00BFFF] bg-[#00BFFF] data-[selected=true]:bg-[red] rounded-[0.3125rem] h-[0.7rem] w-[0.7rem]",
                                wrapper: "!border-2 !border-[#00BFFF]"
                            }}
                            value="18:00 - 23:59"
                        >18:00 - 23:59</Radio>
                        <p>2</p>
                    </div>

                </RadioGroup>
            </div>
        </div>
    )
}

export default RadioComponent