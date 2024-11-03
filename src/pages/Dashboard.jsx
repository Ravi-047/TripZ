import { Link } from "react-router-dom"
import DashboardIcon from "../constant/icons/dashboard/DashboardIcon"
import TotalBooking from "../constant/icons/dashboard/TotalBooking"
import DashboardRightIcon from "../constant/icons/dashboard/DashboardRightIcon"
import CustomerIcon from "../constant/icons/dashboard/CustomerIcon"
import IncomeIcon from "../constant/icons/dashboard/IncomeIcon"
import HelpIcon from "../constant/icons/dashboard/HelpIcon"
import { Avatar, AvatarGroup, Divider } from "@nextui-org/react"
import DashboardDownArrowIcon from "../constant/icons/dashboard/DashboardDownArrowIcon"
import SearchIcon from "../constant/icons/dashboard/SearchIcon"
import TotalCustomerIcon from "../constant/icons/dashboard/TotalCustomerIcon"
import GreenUpIcon from "../constant/icons/dashboard/GreenUpIcon"
import RedDownIcon from "../constant/icons/dashboard/RedDownIcon"
import WeeklyBookingIcon from "../constant/icons/dashboard/WeeklyBookingIcon"
import BookedToday from "../constant/icons/dashboard/BookedToday"
import { Pagination } from "@nextui-org/react";



const tableData = [
    {
        name: "Jane Cooper",
        number: "(225) 555-0118",
        email: "jane@microsoft.com",
        from: "Chennai",
        to: "Bengaluru",
        status: "Active"
    },
    {
        name: "John Doe",
        number: "(210) 555-0173",
        email: "john@apple.com",
        from: "Mumbai",
        to: "Delhi",
        status: "Active"
    },
    {
        name: "Emily Stone",
        number: "(312) 555-0129",
        email: "emily@amazon.com",
        from: "Pune",
        to: "Hyderabad",
        status: "Done"
    },
    {
        name: "Michael Brown",
        number: "(415) 555-0198",
        email: "michael@ibm.com",
        from: "Kolkata",
        to: "Chennai",
        status: "Done"
    },
    {
        name: "Sophia Lee",
        number: "(503) 555-0147",
        email: "sophia@tesla.com",
        from: "Ahmedabad",
        to: "Jaipur",
        status: "Active"
    },
    {
        name: "Daniel Green",
        number: "(628) 555-0165",
        email: "daniel@google.com",
        from: "Lucknow",
        to: "Kanpur",
        status: "Done"
    },
    {
        name: "Olivia Smith",
        number: "(737) 555-0156",
        email: "olivia@oracle.com",
        from: "Bhopal",
        to: "Nagpur",
        status: "Active"
    },
    {
        name: "James Wilson",
        number: "(817) 555-0103",
        email: "james@facebook.com",
        from: "Indore",
        to: "Vadodara",
        status: "Done"
    },
    {
        name: "Emma Johnson",
        number: "(925) 555-0182",
        email: "emma@netflix.com",
        from: "Patna",
        to: "Ranchi",
        status: "Active"
    },
    {
        name: "Lucas Davis",
        number: "(619) 555-0134",
        email: "lucas@linkedin.com",
        from: "Surat",
        to: "Rajkot",
        status: "Done"
    },
    {
        name: "Mia Martinez",
        number: "(757) 555-0111",
        email: "mia@adobe.com",
        from: "Guwahati",
        to: "Shillong",
        status: "Active"
    }
]


const Dashboard = () => {
    return (
        <section className="w-full relative h-dvh overflow-hidden">
            <div className="flex w-full h-full">
                <aside className="w-[19.125rem] bg-white dashboardBoxShadow py-[2.5rem] flex flex-col px-6 h-full">
                    <div className="flex-[1] h-full">
                        <div className="flex gap-2 items-center">
                            <div className="w-[1.23856rem] h-[2.12325rem]">
                                <img src="/src/assets/dashboardIcon.png" alt="dashboardIcon" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-black font-Poppins text-nowrap text-[1.625rem] font-semibold leading-normal tracking-[0.01325rem]">Dashboard <span className="text-[#838383] text-[0.625rem] font-Poppins font-normal leading-normal tracking-[-0.00625rem]">v.01</span></p>
                        </div>

                        <div className="flex flex-col gap-2 mt-[2rem]">
                            <Link to="/" className="flex items-center justify-between gap-2 h-[2.875rem] px-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <DashboardIcon />
                                    <p className="text-[#9197B3] font-Poppins text-[0.875rem] font-normal leading-normal tracking-[-0.00875rem]">Dashboard</p>
                                </div>
                                <div></div>
                            </Link>

                            <Link to="/" className="flex items-center justify-between gap-2 h-[2.875rem] px-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <TotalBooking />
                                    <p className="text-[#9197B3] font-Poppins text-[0.875rem] font-normal leading-normal tracking-[-0.00875rem]">Total Bookings</p>
                                </div>
                                <div>
                                    <DashboardRightIcon />
                                </div>
                            </Link>

                            <Link to="/" className="flex items-center justify-between gap-2 h-[2.875rem] px-2 rounded-lg bg-[#0BD2B4]">
                                <div className="flex items-center gap-2">
                                    <CustomerIcon />
                                    <p className="text-[white] font-Poppins text-[0.875rem] font-normal leading-normal tracking-[-0.00875rem]">Customers</p>
                                </div>
                                <div>
                                    <DashboardRightIcon color="white" />
                                </div>
                            </Link>

                            <Link to="/" className="flex items-center justify-between gap-2 h-[2.875rem] px-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <IncomeIcon />
                                    <p className="text-[#9197B3] font-Poppins text-[0.875rem] font-normal leading-normal tracking-[-0.00875rem]">Income</p>
                                </div>
                                <div>
                                    <DashboardRightIcon />
                                </div>
                            </Link>

                            <Link to="/" className="flex items-center justify-between gap-2 h-[2.875rem] px-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <HelpIcon />
                                    <p className="text-[#9197B3] font-Poppins text-[0.875rem] font-normal leading-normal tracking-[-0.00875rem]">Help</p>
                                </div>
                                <div>
                                    <DashboardRightIcon />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-[2.625rem] h-[2.625rem]">
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </div>

                        <div className="flex items-center justify-between gap-2 w-full">
                            <div>
                                <p className="text-black font-Poppins text-sm font-medium tracking-[0.00875rem] leading-normal">Praveen</p>
                                <p className="text-[#757575] text-xs font-Poppins font-normal leading-normal tracking-[0.0075rem]">Manager</p>
                            </div>

                            <DashboardDownArrowIcon />
                        </div>
                    </div>
                </aside>

                <div className="w-full h-full overflow-x-hidden relative overflow-y-auto py-[2.5rem] px-[3rem] bg-[#FAFBFF]">
                    <div className="flex items-center justify-between gap-2">
                        <h1 className="text-black font-Poppins text-[1.5rem] leading-normal font-medium">Hello Praveen 👋🏼,</h1>

                        <div className="w-[13.5rem] px-2 h-[2.375rem] flex items-center gap-2 rounded-[0.75rem] bg-white inputBoxShadow">
                            <SearchIcon />
                            <input type="text" placeholder="Search" className="border-none outline-none w-full" />
                        </div>
                    </div>

                    <div className="mt-[2.5rem] py-4 px-[3rem] flex gap-2 justify-between items-center inputBoxShadow rounded-xl">
                        <div className="flex gap-3">
                            <div className="dashboardGreenLinearGradient w-[5.25rem] h-[5.25rem] flex items-center justify-center rounded-full">
                                <TotalCustomerIcon />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-[#ACACAC] font-Poppins text-sm font-normal leading-normal tracking-[-0.00875rem]">Total Customers</p>
                                <p className="text-[#333] font-Poppins text-[2rem] font-semibold leading-[2rem] tracking-[-0.02rem]">5,423</p>
                                <div className="flex items-center gap-1">
                                    <GreenUpIcon />
                                    <p className="text-[#292D32] font-Poppins font-normal leading-normal tracking-[-0.0075rem] text-[0.75rem]"><span className="text-[#00AC4F]">16%</span> this month</p>
                                </div>
                            </div>
                        </div>

                        <Divider orientation="vertical" className="bg-[#F0F0F0] h-[5.4375rem] w-[0.0625rem]" />

                        <div className="flex gap-3">
                            <div className="dashboardGreenLinearGradient w-[5.25rem] h-[5.25rem] flex items-center justify-center rounded-full">
                                <WeeklyBookingIcon />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-[#ACACAC] font-Poppins text-sm font-normal leading-normal tracking-[-0.00875rem]">Weekly Bookings</p>
                                <p className="text-[#333] font-Poppins text-[2rem] font-semibold leading-[2rem] tracking-[-0.02rem]">1,893</p>
                                <div className="flex items-center gap-1">
                                    <RedDownIcon />
                                    <p className="text-[#292D32] font-Poppins font-normal leading-normal tracking-[-0.0075rem] text-[0.75rem]"><span className="text-[#D0004B]">1%</span> this month</p>
                                </div>
                            </div>
                        </div>

                        <Divider orientation="vertical" className="bg-[#F0F0F0] h-[5.4375rem] w-[0.0625rem]" />

                        <div className="flex gap-3">
                            <div className="dashboardGreenLinearGradient w-[5.25rem] h-[5.25rem] flex items-center justify-center rounded-full">
                                <BookedToday />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-[#ACACAC] font-Poppins text-sm font-normal leading-normal tracking-[-0.00875rem]">Booked Today</p>
                                <p className="text-[#333] font-Poppins text-[2rem] font-semibold leading-[2rem] tracking-[-0.02rem]">189</p>
                                <AvatarGroup size="sm">
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                                </AvatarGroup>

                            </div>
                        </div>
                    </div>

                    <div className="mt-[2.5rem] py-4 px-[3rem] inputBoxShadow rounded-xl">
                        <div className="flex items-center gap-3 justify-between">
                            <h2 className="text-black font-Poppins font-semibold leading-normal tracking-[-0.01375rem] text-[1.375rem]">All Customers</h2>

                            <div className="flex items-center gap-4">
                                <div className="w-[13.5rem] px-2 h-[2.375rem] flex items-center gap-2 rounded-[0.75rem] bg-[#F9FBFF] shadow ">
                                    <SearchIcon />
                                    <input type="text" placeholder="Search" className="border-none outline-none w-full bg-[#F9FBFF]" />
                                </div>

                                <div className="w-[13.5rem] px-2 h-[2.375rem] flex items-center justify-between gap-2 rounded-[0.75rem] bg-[#F9FBFF] shadow">
                                    <p><span>Short by : </span>Newest</p>
                                    <DashboardDownArrowIcon />
                                </div>
                            </div>
                        </div>

                        <div className="mt-[2rem] w-full dashboardTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="relative">
                                            <div className="absolute h-[2rem] w-[4rem] z-10  border-b-[1.5px] -bottom-[1.25px] -left-[3rem]"></div>
                                            Customer Name</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th className="relative"    >
                                            <div className="absolute h-[2rem] w-[4rem] z-10  border-b-[1.5px] -bottom-[1.25px] -right-[3rem]"></div>
                                            Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tableData?.map((data) => (
                                            <tr key={data?.name}>
                                                <td>{data.name}</td>
                                                <td>{data.number}</td>
                                                <td>{data.email}</td>
                                                <td>{data.from}</td>
                                                <td>{data.to}</td>
                                                <td>
                                                    <div className={`border text-center py-[0.25rem] px-[0.75rem] rounded-[0.25rem] ${data.status === "Active" ? "border border-[#00B087] bg-[#16C09861] text-[#008767]" : "border border-[#DFC504] bg-[#FFF8C5] text-[#DFC504]"}`}>
                                                        {data.status}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center mt-[2rem] pb-[2rem] justify-between gap-4">
                            <p className="text-[#B5B7C0] font-Poppins text-sm font-medium leading-normal tracking-[-0.00875rem]">Showing data 1 to 8 of  2K entries</p>
                            <Pagination showControls total={10} initialPage={1} color="secondary" radius="sm" classNames={{
                                cursor: "!bg-[#5932EA]",
                                wrapper: "flex gap-3"
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
