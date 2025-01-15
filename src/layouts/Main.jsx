import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import { Helmet } from 'react-helmet-async'
const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Stay Fresh Booking</title>
      </Helmet>
      <Navbar />
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
