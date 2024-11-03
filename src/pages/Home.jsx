import HeroSection from "../components/HeroSection"
import AboutUs from "../layouts/AboutUs"
import HelpUs from "../layouts/HelpUs"
import NextRide from "../layouts/NextRide"
import OurBuses from "../layouts/OurBuses"

const Home = () => {
    return (
        <>
            <section>
                <HeroSection />
                <AboutUs />
                <HelpUs />
                <NextRide />
                <OurBuses />
            </section>
        </>
    )
}

export default Home