import { useLocation } from 'react-router-dom'
import './App.css'
import HomeAddBanner from './components/HomeAddBanner'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import MainRoutes from './routes/MainRoutes'

function App() {

  const loaction = useLocation();
  console.log("location", loaction);
  const path = loaction?.pathname;

  const hideNavbar = ["/dashboard"]
  const hideFooter = ["/register", "/signin", "/dashboard"]
  const hideAddBanner = ["/register", "/signin", "/dashboard", "/available-rides", "/driver-info"]

  const shouldShowFooter = !hideFooter.includes(path)
  const shouldShowAddBanner = !hideAddBanner.includes(path)
  const shouldShowNavbar = !hideNavbar.includes(path)


  return (
    <div className='relative'>
      {
        shouldShowNavbar && (
          <div className='absolute w-full z-[999]'>
            {shouldShowAddBanner && <HomeAddBanner />}
            <Navbar />
          </div>
        )
      }

      <MainRoutes />
      {
        shouldShowFooter && (
          <Footer />
        )
      }
    </div>
  )
}

export default App
