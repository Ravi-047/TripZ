import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="w-full">
            <nav className="w-full h-[3.75rem] bg-[#00000026] flex items-center justify-between px-[3.75rem]">
                <div>
                    <img src="/src/assets/logo.png" alt="logo" />
                </div>
                <div className="flex items-center justify-center gap-[4.94rem]">
                    <Link to="/" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">Home</Link>
                    <Link to="/carpool" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">Carpool</Link>
                    <Link to="/bus" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">Bus</Link>
                    <Link to="/about" className="text-white font-Inter text-[1.125rem] font-normal leading-normal">About</Link>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link to="/signin" className="border-2 border-white rounded-[0.9375rem] w-[6.875rem] h-[2.75rem] flex items-center justify-center text-white text-[1.125rem] font-normal leading-normal">Login</Link>
                    <Link to="/register" className="border-2 border-white rounded-[0.9375rem] w-[6.875rem] h-[2.75rem] flex items-center justify-center text-white text-[1.125rem] font-normal leading-normal">Sign Up</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar