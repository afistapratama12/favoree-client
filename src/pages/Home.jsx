import { Box } from "@chakra-ui/react"

import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

import { Hero } from "../components/home/Hero"
import { AboutUs } from "../components/home/AboutUs"
import { Benefit } from "../components/home/Benefit"
import { CaraKerja } from "../components/home/CaraKerja"
import { HasProblem } from "../components/home/HasProblem"
import { Testimoni } from "../components/home/Testimoni"
import { FAQ } from "../components/home/FAQ"
import { FloatingWA } from "../components/home/FloatingWA"

export const HomePage = () => {
    return (
        <>

        <Navbar
            isShowButton={true}
        />

        <Box>
            <Hero/>

            <Benefit/>
            
            <AboutUs/>

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