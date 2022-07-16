import { Box } from "@chakra-ui/react"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Redirect, Route, useLocation } from "react-router-dom"
import { API } from "../API/api"
import { base_url, ip_api } from "../API/axios"

const ipAddress = localStorage.getItem("ip_address")

export const PrivateAdminRoute = (props) => {
    const location = useLocation()

    const [loading, setLoading] = useState(true)

    const [ipData, setIPData] = useState(null)
    const [data, setData] = useState(null)

    const [error, setError] = useState(null)

    const getIPandCheck = async () => {
        try {
            const resp = await axios.get(ip_api)

            if (resp?.data?.status === "success") {
                setIPData(resp?.data)
                localStorage.setItem("ip_address", resp?.data?.query)

                const resp2 = await axios({
                    method: "POST",
                    url : base_url + API.admin.ip_check,
                    data: {
                        ip_address : resp?.data?.query
                    }
                })

                if (resp2?.status === 200) {
                    setLoading(false)
                    setData(resp2?.data)
                }
            } else {
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error?.message)
        }
    }

    const checkIP = async () => {
        try {
            const resp2 = await axios({
                method: "POST",
                url : base_url + API.admin.ip_check,
                data: {
                    ip_address : ipAddress
                }
            }) 

            if (resp2?.status === 200) {
                setLoading(false)
                setData(resp2?.data)
            } else {
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error?.message)
        }
    }

    useEffect(() => {
        if (ipAddress) {
            checkIP()
        } else {
            getIPandCheck()
        }
    }, [])

    console.log(ipAddress)
    console.log(ipData)
    console.log(data)

    if ( loading ) {
        return <Box>Loading ...</Box>
    }

    if (error) {
        return <Box>error : {error}</Box>
    }

    return !loading && !error && data?.status === "ACCESS" ? 
    localStorage.getItem("admin_access_token") ?  <Route {...props}>{props.children}</Route>
    : location.pathname === "/admin/login" ? <Route {...props}>{props.children}</Route> 
    : <Redirect to="/admin/login" />
    : <Redirect to="/" />
}