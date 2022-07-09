import { Box, HStack, Image, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import { color_base, color_hover} from '../../theme/js'

import favoree_logo from '../assets/image/logo_favoree.png'
import { hubungi_admin } from "../credential";
import { ModalTransfer } from "./ModalTransfer";

import { CustomButton } from '../button/CustomButton'

export const Navbar = ({isShowButton, data, setData}) => {
    const history = useHistory()

    const { isOpen, onOpen, onClose} = useDisclosure()

    const [stickyClass, setStickyClass] = useState({
        bg: 'transparent',
        zIndex: '10'
    })

    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar)
    },[])

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

    const goToHome = (e) => {
        // get path now
        const path = window.location.pathname

        if (path !== "/") {
            //e.preventDefault()
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
                            <CustomButton
                                    bgColor={color_base.greenblue}
                                    hoverColor={color_hover.greenblue}
                                    color={color_base.white}
                                    m={1}
                                    value={'Yuk Mulai'}
                                    isExternal={false}
                                    onOpen={onOpen}
                            />
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