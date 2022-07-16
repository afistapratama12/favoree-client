import { Box, Button, Heading, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { API } from "../../API/api"
import { base_url } from "../../API/axios"
import { Navbar } from "../../components/navbar"
import { path } from "../../routes/route"

export const RequestTransaction = () => {
    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const [loadingConfirm, setLoadingConfirm] = useState(false)
    const [loadingCancel, setLoadingCancel] = useState(false)

    const [transactionID, setTransactionID] = useState(false)

    useEffect(() => {
        const lastTransaction = async () => {
            setLoading(true)

            try {
                const { data } = await axios({
                    method: "GET",
                    url: base_url + API.transactions.last,
                    headers: {
                        Authorization: localStorage.getItem("user_access_token")
                    }
                })
    
                setTransactionID(data?.id)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        lastTransaction()
    }, [])

    const confirmPaid = async () => {
        setLoadingConfirm(true)
        
        try {
            const resp = await axios({
                method: "POST",
                url: base_url + API.transactions.base + `/${transactionID}` + API.transactions.confirm_paid,
                headers: {
                    Authorization : localStorage.getItem("user_access_token")
                }
            })

            if (resp?.status === 200 && resp?.status?.message === "success confirm paid") {
                history.push(path.successTransaction)
                setLoadingConfirm(false)
            }
        } catch (err) {
            console.log(err)
            console.log(err?.response)
        } finally {
            setLoadingConfirm(false)
        }
    }

    const cancelTransfer = async () => {
        setLoadingCancel(true)
        
        try {
            const resp = await axios({
                method: "POST",
                url: base_url + API.transactions.base + `/${transactionID}` + API.transactions.cancel,
                headers: {
                    Authorization : localStorage.getItem("user_access_token")
                }
            })

            if (resp?.status === 200 && resp?.status?.message === "success cancel transaction") {
                history.replace(path.home)
                setLoadingCancel(false)
            }
        } catch (err) {
            console.log(err)
            console.log(err?.response)
        } finally {
            setLoadingCancel(false)
        }
    }

    if (loading) return <Box><Heading>Loading ....</Heading></Box>

    return (
        <>
            <Navbar/>
            
            <Box margin={'auto'} mt={'15vh'}>
                <Text>Request transaction</Text>
                <Text>Mohon lakukan pembayaran / transfer ke .......</Text>

                <Button 
                    onClick={confirmPaid}
                    isLoading={loadingConfirm}
                    disabled={loadingConfirm}
                >Sudah transfer</Button>
                <Button
                    onClick={cancelTransfer}
                    isLoading={loadingCancel}
                    disabled={loadingCancel}
                >Batalkan transfer</Button>
            </Box>
        </>
    )
}