import { Box } from "@chakra-ui/react"
import { AboutUs } from "../components/redesign/AboutUs"
import { Benefit } from "../components/redesign/Benefit"
import { CaraKerja } from "../components/redesign/CaraKerja"
import { FAQ } from "../components/redesign/FAQ"
import { FloatingWA } from "../components/redesign/FloatingWA"
import { Footer } from "../components/redesign/Footer"
import { HasProblem } from "../components/redesign/HasProblem"
import { Hero } from "../components/redesign/Hero"
import { Navbar } from "../components/redesign/Navbar"
import { Testimoni } from "../components/redesign/Testimoni"


export const RedesignHomePage = () => {
    return (
        <>
        <Navbar
            isShowButton={true}
        />
        <Box>
            <Hero/>

            <AboutUs/>

            <Benefit/>

            <CaraKerja/>

            <HasProblem/>

            <Testimoni/>

            <FAQ/>
            
            <Footer/>

            <FloatingWA/>
        </Box>
        </>
    )
}