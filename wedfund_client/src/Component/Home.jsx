import Terms from "./Terms"
import WhyWed from "./WhyWed"
import Document from "./Document"
import Lending from "./Lending"
import Need from "./Need"
import Collateral from "./Collateral"
import Hero from "./Hero"
import HowWorks from "./HowWorks"
import GoToTop from "./GoToTop"
import '../style/Home.css'

function Home () {
    return(
        <>
                <Hero />
                <div className="back-img">
                <Collateral />
                <WhyWed />
                <HowWorks />
                <Terms />
                <Document />
                <Lending />
                <Need />
                </div>
                <GoToTop />
        </>
    )
}

export default Home