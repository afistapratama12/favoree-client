import { Button, Flex, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { API } from "../../API/api"
import { base_url } from "../../API/axios"
import Sidebar from "../../components/sidebar"

import DataTable from "react-data-table-component"
import { useEffect } from "react"

export const ColumnCondition = ({transId, loadingId, condLoading, status, isConfirmPaid, handlePaid, handleReject, handleConfirmPaid}) => {    
    
    // TODO: condition disini masih ada yang salah
    return (
        <>
            { 
                status === "pending" && isConfirmPaid === false ? (
                    <Flex>
                        <Button 
                            onClick={handleConfirmPaid}
                            isLoading={transId === loadingId && condLoading === "confirm"}
                            disabled={condLoading ? true : false}
                        >
                                Done Paid
                         </Button>
                    </Flex>
                ) : status !== "pending" ? (
                    <Flex>
                        <Button 
                            mr={2} 
                            onClick={handlePaid}
                            isLoading={transId === loadingId && condLoading === "success"}
                            disabled={condLoading ? true : false}
                        >
                            Done
                        </Button>
                        <Button 
                            onClick={handleReject}
                            isLoading={transId === loadingId && condLoading === "reject"}
                            disabled={condLoading ? true : false}
                        >
                            Reject
                        </Button>
                    </Flex>
                ) : status === "success" ? (
                    <Text>Success</Text>
                ) : (
                    <Text>Rejected</Text>
                )
            }
        </>
    )
}

export const AdminListTransaction = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [totalRows, setTotalRows] = useState(0)
    const [perPage, setPerPage] = useState(25)
    const [currentPage, setCurrentPage] = useState(1)

    const [rowLoading, setRowLoading] = useState(null)
    const [transId, setTransId] = useState(null)

    const fetchTransaction = async (page) => {
        try {
            setLoading(true)

            const resp = await axios({
                method: "GET",
                url : base_url + API.transactions.base + `/${page}/${perPage}`,
                headers: {
                    Authorization: localStorage.getItem("admin_access_token")
                }
            })

                setData(resp?.data?.data)
                setTotalRows(resp?.data?.total_page)
            

            setLoading(false)
        } catch (error) {
            setError(error?.response?.data)
            setLoading(false)
        }
    }

    const handlePageChange = page => {
		fetchTransaction(page);
        setCurrentPage(page)
	};

    const handlePerRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);

            const response = await axios({
                method: "GET",
                url : base_url + API.admin.list_transaction + `/${page}/${newPerPage}`,
                headers: {
                    Authorization: localStorage.getItem("admin_access_token")
                }
            })
    
            setData(response?.data?.data);
            setTotalRows(response?.data?.total)
            setPerPage(newPerPage);
            setLoading(false);

        } catch (error) {
            setError(error?.response?.data)
            setLoading(false)
        }
    }

    const handleSuccess = async (e, transId, load) => {
        setTransId(transId)
        setRowLoading(load)
        
        try {
            const resp = await axios({
                method: "PUT",
                url: base_url + API.transactions.base + `/${transId}`,
                body: {
                    status : "success"
                },
                headers: {
                    Authorization : localStorage.getItem("admin_access_token")
                }
            })

            if (resp?.status === 200) {
                fetchTransaction(currentPage)
    
                setRowLoading(null)
                setTransId(null)
            }
        } catch (error) {
            setError(error?.message)
            setRowLoading(null)
            setTransId(null)
        }
    }

    const handleReject = async (e, transId, load) => {
        e.preventDefault()

        setTransId(transId)
        setRowLoading(load)

        try {
            const resp = await axios({
                method: "PUT",
                url: base_url + API.transactions.base + `/${transId}`,
                body: {
                    status : "failed"
                },
                headers: {
                    Authorization : localStorage.getItem("admin_access_token")
                }
            })

            if (resp?.status === 200) {
                fetchTransaction(currentPage)
    
                setRowLoading(null)
                setTransId(null)
            }
        } catch (error) {
            setError(error?.message)
            setRowLoading(null)
            setTransId(null)
        }
    }

    const handleConfirmPaid = async (e, transId, load) => {
        e.preventDefault()

        setTransId(transId)
        setRowLoading(load)

        try {
            setTransId(transId)
            setRowLoading("confirm")
            
            const resp = await axios({
                method: "POST",
                url: base_url + API.transactions.base + `/${transId}/confirm_paid`,
                headers: {
                    Authorization : localStorage.getItem("admin_access_token")
                }
            })

            if (resp?.status === 200) {
                fetchTransaction(currentPage)
    
                setRowLoading(null)
                setTransId(null)
            }
        } catch (error) {
            setError(error?.response.data)
            console.log(error?.response?.status)
            console.log(error?.response?.data)
            setRowLoading(null)
            setTransId(null)
        }
    }

    const columns = [
        {
            id: "no",
            name: "No",
            selector: row => row.external_id,
            width: "55px"
        },
        {
            id: "sender_number",
            name: "Sender Number",
            selector: row => row.sender_number,
            minWidth: "130px"
        },
        {
            id: "sender_wallet",
            name: "Sender Wallet",
            selector: row => row.sender_wallet,
        },
        {
            id: "receiver_name",
            name: "Receiver Name",
            selector: row => row.receiver_name
        },
        {
            id: "receiver_number",
            name: "Receiver Number",
            selector: row => row.receiver_number,
            minWidth: "130px"
        },
        {
            id: "receiver_wallet",
            name: "Receiver Wallet",
            selector: row => row.receiver_wallet,
        },
        {
            id: "amount",
            name : "Total",
            selector: row => row.amount_transfer,
            right: true
        },
        {
            cell: (row) => <ColumnCondition 
                transId={row.id}
                loadingId={transId}
                condLoading={rowLoading}
                status={row.status} 
                isConfirmPaid={row.is_confirm_paid}
                handlePaid={e => handleSuccess(e, row.id, "success")} 
                handleReject={e => handleReject(e, row.id, "reject")}  
                handleConfirmPaid={e => handleConfirmPaid(e, row.id, "confirm")}
                />,
            ignoreRowClick: true,
            allowOverflow: true,
            Name: "Action",
            id: "action",
            minWidth: '200px'
        }
    ]

    useEffect(() => {
		fetchTransaction(currentPage); // fetch page 1 of users	
	}, []);

    console.log(error)

    return (
        <>
            <Sidebar>
            <DataTable
                    title="List Transaction"
                    columns={columns}
                    data={data}
                    progressPending={loading}
                    pagination
                    paginationServer
                    paginationTotalRows={totalRows}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                />
            </Sidebar>
        </>
    )
}