import { Box, Button, HStack, Image, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import { color_base, color_hover} from '../../theme.js'

import favoree_logo from '../../assets/image/logo_favoree.png'
import { hubungi_admin } from "../../credential";
import { ModalTransfer } from "../modal/ModalTransfer";

import { CustomButton } from '../button/CustomButton'
import { ModalLoginRegister } from "../modal/LoginRegister.jsx"
import { API } from "../../API/api.js"
import { base_url } from "../../API/axios.js"
import axios from "axios"
import { path } from "../../routes/route.js"

export const Navbar = ({isShowButton, data, setData, user, setUser}) => {
    const history = useHistory()

    const buttonSize = useBreakpointValue(['xs', 'md'], 'w-full', 'w-auto')

    const { isOpen, onOpen, onClose} = useDisclosure()

    const [loading, setLoading] = useState(false)

    const [openAccess, setOpenAccess] = useState(false)

    const onCloseAccess = () => {
        setOpenAccess(false)
    }

    const onOpenAccess = () => {
        setOpenAccess(true)
    }

    const [stickyClass, setStickyClass] = useState({
        bg: 'transparent',
        zIndex: '10'
    })

    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar)
    },[])


    // if want to open modal, check the last transaction
    const checkLastTransaction = async () => {
        setLoading(true)
        
        try {
            const resp = await axios({
                method: "GET",
                url: base_url + API.transactions.last,
                headers: {
                    Authorization: localStorage.getItem("user_access_token")
                }
            })

            if (resp?.status === 200) {
                if (resp?.data?.internal_code === "ERROR") {
                    history.push(path.processTransaction)
                } else if (resp?.data.internal_code === "CREATABLE") {
                    onOpen()
                    setLoading(false)
                }
            }
        } catch (err) {
            console.log(err?.response?.status)
            console.log(err?.response?.data)
        } finally {
            setLoading(false)
        }
    }


    const stickyNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY
            windowHeight > 15 ? setStickyClass({
                boxShadow: 'lg',
                zIndex: '10',
            }) : setStickyClass({
                bg: 'transparent',
                zIndex: '10'
            })
        }
    }

    const goToHome = () => {
        // get path now
        const path = window.location.pathname

        if (path !== "/") {
            const aboutPageNode = document.getElementById('root')

            aboutPageNode.scrollIntoView({behavior: "smooth"});
            history.push("/")
        }
    }

    return (
        <>
        <ModalTransfer
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
        />

        <ModalLoginRegister
            data={user}
            setData={setUser}
            parentIsOpen={openAccess}
            onOpen={onOpen}
            closeModal={onCloseAccess}
        />

        <Box
            position={'fixed'}
            w={'100vw'}
            top={'0'}
            left={'0'}
            backgroundColor='#F8FBFD'
            {...stickyClass}
        >
            <HStack 
                maxW={{
                    base: '90vw',
                    sm : '90vw',
                    md: '85vw',
                    xl: '1210px'
                }} 
                margin={'auto'}
                justifyContent={'space-between'}
                my={4}
                alignItems={'center'}
            >
                <Image
                    alt={'favoree_logo'}
                    src={favoree_logo}
                    
                    w={{
                        base: '32vw',
                        sm : '32vw',
                        md : '150px',
                        xl : '170px'
                    }}
                    onClick={goToHome}
                    cursor={'pointer'}
                />
                
                {
                    isShowButton && (
                        <HStack>
                            <Box
                            pr={{
                                base: 0,
                                sm: 0,
                                md: 2,
                                xl: 2
                            }}
                            >
                                {
                                    localStorage.getItem("user_access_token") ? 
                                    <CustomButton
                                    bgColor={color_base.greenblue}
                                    hoverColor={color_hover.greenblue}
                                    color={color_base.white}
                                    m={1}
                                    value={'Yuk Mulai'}
                                    isExternal={false}
                                    isLoading={loading}
                                    onOpen={checkLastTransaction}
                                    /> 
                                    : 
                                    <Button
                                    ml={{
                                        base: 0,
                                        sm: 0,
                                        md: 2,
                                        xl: 2
                                    }}
                                    bgColor={color_base.greenblue}
                                    borderRadius={'10px'}
                                    _hover={{
                                        backgroundColor: color_base.greenblue
                                    }}
                                    _active={{
                                        backgroundColor: color_hover.greenlight
                                    }}
                                    onClick={onOpenAccess}
                                    size={buttonSize}

                                    minHeight={'32px'}
                                >
                                    <Text
                                        color={'white'}
                                        m={1}
                                        fontWeight={'normal'}
                                        fontSize={{
                                            xl: '16px',
                                            md: '16px',
                                            sm: '14px',
                                            base: '13px',
                                        }}
                                    >
                                        Login
                                    </Text>
                                </Button> 
                                }
                            </Box> 
                            <CustomButton
                                bgColor={color_base.greenlight}
                                hoverColor={color_hover.greenlight}
                                m={1}
                                value={'Hubungi Kami'}
                                isExternal={true}
                                url={hubungi_admin}
                            />
                        </HStack>
                    )
                }
            </HStack>
        </Box>
        </>
    )
}