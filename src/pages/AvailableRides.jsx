import AvailableRideComponent from "../components/AvailableRideComponent"
import HeroSection2 from "../components/HeroSection2"
import RadioComponent from "../components/RadioComponent"


const AvailableRides = () => {
    return (
        <section className="w-full relative">
            <HeroSection2 />

            <div className="max-w-[77.5rem] pb-[5rem] flex gap-[4rem] w-full m-auto">

                <div className="flex-[0.3] my-6">
                    <RadioComponent />
                </div>

                <div className="flex-[0.9] mt-6">
                    <h2 className="text-black font-Inter text-[1.5rem] font-medium leading-normal">Thu, 30 Sept</h2>
                    <p className="text-[#00000080] font-Inter font-normal leading-normal text-base">Bengaluru, Karnataka, India - Chennai, Tamil Nadu, India</p>
                    <p className="text-[#00000080] font-Inter font-normal leading-normal text-base">4 rides available</p>

                    <div className="mt-[1.31rem] flex flex-col gap-8 w-full">
                        <AvailableRideComponent />
                        <AvailableRideComponent />
                        <AvailableRideComponent />
                        <AvailableRideComponent />
                        <AvailableRideComponent />
                        <AvailableRideComponent />
                        <AvailableRideComponent />
                        <AvailableRideComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AvailableRides