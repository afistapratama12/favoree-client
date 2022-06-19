import { Box } from "@chakra-ui/react"

import { Navbar } from "../components/Navbar"
import { Footer } from "../components/footer"

import { Hero } from "../components/home/Hero"
import { AboutUs } from "../components/home/AboutUs"
import { Benefit } from "../components/benefit"
import { CaraKerja } from "../components/home/CaraKerja"
import { HasProblem } from "../components/home/HasProblem"
import { Testimoni } from "../components/home/Testimoni"
import { FAQ } from "../components/FAQ"
import { FloatingWA } from "../components/home/FloatingWA"
import { useEffect } from "react"
import { Axios } from "../API/axios"
import { API } from "../API/api"
import axios from "axios"

export const HomePage = () => {
    const accessToken = localStorage.getItem("access_token")

    useEffect(() => {
        if (!accessToken) {
            createPersonalData()
        } else {
            validationData()
        }
    }, [])

    const createPersonalData = async () => {
        try {
            const resp = await axios.get("http://ip-api.com/json")

            const resp2 = await Axios.post(API.non_users.create, {
                ip_address: resp?.data.query,
                device_access: navigator.userAgent
            })

            if (resp2?.status === 201) {
                localStorage.setItem("access_token", resp2?.data.token)

                if (resp2?.data.name) {
                    localStorage.setItem("name_subscribe", resp2.data.name)
                }

                if (resp2?.data.email) {
                    localStorage.setItem("email_subscribe", resp2.data.email)
                }
            }
        } catch (error) {
            console.log(error?.message)
        }
    }

    const validationData = async () => {
        try {
            const resp = await Axios.get(API.non_users.validate, {
                headers: {
                    Authorization: accessToken
                }
            })

            if (resp?.status === 200 && resp?.data.validation === "invalid") {
                await createPersonalData()
            } else {
                localStorage.setItem("validation_status", "valid")
            }
        } catch (error) {
            console.log(error?.message)
        }
    }

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