import GoToTop from "./GoToTop"
import '../style/Home.css'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Home () {
    return(
        <div className="backgrounImg">
        <Navbar />
        <Outlet />
        <GoToTop />
        <Footer />
        </div>
    )
}

export default Home