import GoToTop from "./GoToTop"
import '../style/Home.css'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Personal from "./Personal"

function Home () {
    return(
        <div className="backgrounImg">
        <Navbar />
        <Outlet />
        <Personal />
        <GoToTop />
        <Footer />
        </div>
    )
}

export default Home