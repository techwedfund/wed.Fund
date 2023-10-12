import GoToTop from "./GoToTop"
import '../style/Home.css'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Home () {
    return(
        <>
        <Navbar />
        <Outlet />
        <GoToTop />
        <Footer />
        </>
    )
}

export default Home