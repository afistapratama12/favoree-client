import { Box, Button } from "@chakra-ui/react"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"


import { Hero } from "../components/homepage/Hero"
import { Why } from "../components/homepage/Why"
import { AboutUs } from "../components/homepage/AboutUs"
import { CaraKerja } from "../components/homepage/CaraKerja"
import { Testimoni } from "../components/homepage/Testimoni"
import { FAQ } from "../components/homepage/FAQ"
import { Link } from "react-router-dom"


const Homepage = () => {

    return (
        <>
            <Navbar
                openButton={true}
            /> 

            <Box maxW={'7xl'} margin={'auto'} px={4}>
                <Hero/>

                {/* Section : why */}
                <Why/>

                {/* section : about us */}
                <AboutUs/>

                {/* section : Cara kerja */}
                <CaraKerja/>

                <Testimoni/>

                <FAQ/>

            </Box>
            <Footer/>
        </>
    )
}

export { Homepage } 