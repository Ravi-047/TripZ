import GoogleIcon from '../constant/icons/GoogleIcon'

const SignIn = () => {
    return (
        <>
            <section className="w-full">
                <div className="w-full flex">
                    <div className="flex-1 h-dvh">
                        <img src="/src/assets/login.png" alt="register image" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="max-w-[22.5rem] w-full generalSansVariable">
                            <h2 className="text-[#101828] generalSansVariable text-[1.875rem] font-semibold leading-[2.375rem] text-center">Sign In</h2>
                            <form action="" className="mt-8 flex flex-col gap-[1.25rem]">
                                <div className="flex flex-col gap-[0.375rem]">
                                    <label htmlFor="email" className="text-[#344054] text-[0.875rem] font-medium leading-[1.25rem]">Email*</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email" className="rounded-lg border border-[#D0D5DD] bg-white inputBoxShadow text-[#667085] text-base font-normal leading-[1.5rem] px-[0.875rem] py-[0.625rem]" />
                                </div>
                                <div className="flex flex-col gap-[0.375rem]">
                                    <label htmlFor="password" className="text-[#344054] text-[0.875rem] font-medium leading-[1.25rem]">Password*</label>
                                    <input type="password" name="password" id="password" placeholder="Create a password" className="rounded-lg border border-[#D0D5DD] bg-white inputBoxShadow text-[#667085] text-base font-normal leading-[1.5rem] px-[0.875rem] py-[0.625rem]" />
                                </div>
                                <button type="submit" className="mt-[1.5rem] rounded-lg border border-[#C4DBDB] bg-[#0BD2B4] inputBoxShadow px-[1.125rem] py-[0.625rem] text-white generalSansVariable font-semibold leading-[1.5rem] text-base">Log In</button>
                            </form>
                            <button className="mt-4 flex text-[#344054] text-base font-semibold leading-[1.5rem] generalSansVariable items-center w-full justify-center gap-3 rounded-lg border border-[#D0D5DD] bg-white inputBoxShadow px-4 py-[0.625rem]">
                                <GoogleIcon />
                                Sign in with Google
                            </button>
                            <p className="text-[#475467] text-sm font-normal leading-5 text-center mt-8">New Here? <span className="text-[#4D6969] font-semibold">Sign Up</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn