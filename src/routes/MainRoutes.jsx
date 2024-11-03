import { Route, Routes } from 'react-router-dom'
import Register from '../layouts/Register'
import SignIn from '../layouts/SignIn'
import Home from '../pages/Home'
import AvailableRides from '../pages/AvailableRides'
import DriverInfo from '../pages/DriverInfo'
import Dashboard from '../pages/Dashboard'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/dashboard'>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='/available-rides' element={<AvailableRides />} />
            <Route path='/driver-info' element={<DriverInfo />} />
            <Route path='/register' element={<Register />} />
            <Route path='/signin' element={<SignIn />} />
        </Routes>
    )
}

export default MainRoutes