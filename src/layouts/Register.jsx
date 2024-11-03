import GoogleIcon from "../constant/icons/GoogleIcon"
import registerImage from "../assets/register.png"
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            toast.error("Please fill all the fields");
            return;
        }
        localStorage.setItem('userData', JSON.stringify(formData));
        toast.success("user registered successfully");
        console.log("Data saved to local storage:", formData);
        navigate("/signin")
    };

    return (
        <>
            <section className="w-full">
                <div className="w-full flex">
                    <div className="flex-1 h-dvh">
                        <img src={registerImage} alt="register image" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="max-w-[22.5rem] w-full generalSansVariable">
                            <h2 className="text-[#101828] generalSansVariable text-[1.875rem] font-semibold leading-[2.375rem] text-center">Create an account</h2>
                            <form action="" onSubmit={handleSubmit} className="mt-8 flex flex-col gap-[1.25rem]">
                                <div className="flex flex-col gap-[0.375rem]">
                                    <label htmlFor="name" className="text-[#344054] text-[0.875rem] font-medium leading-[1.25rem]">Name*</label>
                                    <input type="text" name="name" id="name" value={formData.name}
                                        onChange={handleChange} placeholder="Enter your name" className="rounded-lg border border-[#D0D5DD] bg-white inputBoxShadow  text-[#667085] text-base font-normal leading-[1.5rem] px-[0.875rem] py-[0.625rem]" />
                                </div>
                                <div className="flex flex-col gap-[0.375rem]">
                                    <label htmlFor="email" className="text-[#344054] text-[0.875rem] font-medium leading-[1.25rem]">Email*</label>
                                    <input type="email" name="email" id="email" value={formData.email}
                                        onChange={handleChange} placeholder="Enter your email" className="rounded-lg border border-[#D0D5DD] bg-white inputBoxShadow text-[#667085] text-base font-normal leading-[1.5rem] px-[0.875rem] py-[0.625rem]" />
                                </div>
                                <div className="flex flex-col gap-[0.375rem]">
                                    <label htmlFor="password" className="text-[#344054] text-[0.875rem] font-medium leading-[1.25rem]">Password*</label>
                                    <input type="password" name="password" id="password" value={formData.password}
                                        onChange={handleChange} placeholder="Create a password" className="rounded-lg border border-[#D0D5DD] bg-white inputBoxShadow text-[#667085] text-base font-normal leading-[1.5rem] px-[0.875rem] py-[0.625rem]" />
                                    <p className="text-[#475467] text-[0.875rem] font-normal leading-[1.25rem]">Must be at least 8 characters.</p>
                                </div>
                                <button type="submit" className="mt-[1.5rem] rounded-lg border border-[#C4DBDB] bg-[#0BD2B4] inputBoxShadow px-[1.125rem] py-[0.625rem] text-white generalSansVariable font-semibold leading-[1.5rem] text-base">Get started</button>
                            </form>
                            <button className="mt-4 flex text-[#344054] text-base font-semibold leading-[1.5rem] generalSansVariable items-center w-full justify-center gap-3 rounded-lg border border-[#D0D5DD] bg-white inputBoxShadow px-4 py-[0.625rem]">
                                <GoogleIcon />
                                Sign up with Google
                            </button>
                            <p className="text-[#475467] text-sm font-normal leading-5 text-center mt-8">Already have an account? <span className="text-[#4D6969] font-semibold">Log in</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register