import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        // Check if a user is logged in by retrieving data from local storage
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            setLoggedInUser(user);
        }
    }, []);

    const handleLogout = () => {
        // Clear user data from local storage on logout
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
    };
    return (
        <header className="w-full">
            <nav className="w-full h-[3.75rem] bg-[#00000026] flex items-center justify-between px-[3.75rem]">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="flex items-center justify-center gap-[4.94rem] ml-[12rem]">
                    <Link to="/" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">Home</Link>
                    <Link to="/carpool" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">Carpool</Link>
                    <Link to="/bus" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">Bus</Link>
                    <Link to="/about" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">About</Link>
                </div>

                {
                    loggedInUser ? (
                        <Dropdown placement="bottom-start">
                            <DropdownTrigger>
                                <User
                                    as="button"
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                                    }}
                                    className="transition-transform text-white"
                                    name={`${loggedInUser?.name}`}
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="User Actions" variant="flat">
                                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <div className="flex items-center justify-center gap-4">
                            <Link to="/signin" className="border-2 border-white rounded-[0.9375rem] w-[6.875rem] h-[2.75rem] flex items-center justify-center text-white text-[1.125rem] font-normal leading-normal">Login</Link>
                            <Link to="/register" className="border-2 border-white rounded-[0.9375rem] w-[6.875rem] h-[2.75rem] flex items-center justify-center text-white text-[1.125rem] font-normal leading-normal">Sign Up</Link>
                        </div>
                    )
                }



            </nav>
        </header>
    )
}

export default Navbar