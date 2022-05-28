import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { colorPallet } from "../theme"

import ScrollTo from "react-scroll-into-view";

import twitter from "../assets/vector/twitter.svg"
import facebook from "../assets/vector/fb.svg"
import instagram from "../assets/vector/instagram.svg"
import logo_favoree from "../assets/image/logo_favoree.png"

import { contact_number, hubungi_admin, laporkan_kendala } from "../credential";

import  { useHistory } from  'react-router-dom'

const sectionTwoList = [{
    title: 'Why',
    is_internal : true,
    is_on_page : true,
    url : `#why`
}, {
    title: 'About Us',
    is_internal : true,
    is_on_page : true,
    url : `#about_us`
}, {
    title: 'Cara Kerja',
    is_internal : true,
    is_on_page : true,
    url : `#cara_kerja`
}, {
    title: 'Testimoni',
    is_internal : true,
    is_on_page : true,
    url : `#testimoni`
}, {
    title: 'FAQ',
    is_internal : true,
    is_on_page : true,
    url : `#faq`
}]


const sectionThreeList = [{
    title : "Laporkan Kendala",
    is_internal : false,
    is_on_page : false,
    url : laporkan_kendala
}, {
    title : "Hubungi Admin",
    is_internal : false,
    is_on_page : false,
    url : hubungi_admin
}, {
    title : "Syarat dan Ketentuan",
    is_internal: true,
    is_on_page : false,
    url: `/term-and-condition`
}]

export const FooterSectionItem = (props) => {
    const history = useHistory()
    
    const { title, url, is_internal, is_on_page } = props

    const redirectToExternalUrl = (e, url) => {
        e.preventDefault()
        window.open(url, "_blank")
    }

    const changePage = (e, path) => {
        e.preventDefault()
        
        history.push(path)
    }

    return (
        <Box>

            {
                !is_internal ? (
                    <Text
                        onClick={(e) => redirectToExternalUrl(e, url)}

                    _hover={{
                        textDecoration: 'underline'
                            }}
                        cursor={'pointer'}
                    >{title}</Text>
                ) : is_on_page ? (<ScrollTo selector={url} scrollOptions={{
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: -100,
                    block: "center",
                    inline: 'center'
                }}>
                    <Text
                        _hover={{
                            textDecoration: 'underline'
                        }}
                        cursor={'pointer'}
                    >{title}</Text>
                </ScrollTo>) : (
                    <Text
                     _hover={{
                         textDecoration: 'underline'
                     }}
                     cursor={'pointer'}
                     onClick={(e) => changePage(e, url)}
                 >{title}</Text>
                )
            }
        </Box>
    )
}


const Footer = () => {

    const redirectToExternalUrl = (e, url) => {
        e.preventDefault()
        window.open(url, "_blank")
    }

    return (
        <>
            <Box bg={colorPallet.blue_one}>
                <Box maxW={'7xl'} margin={'auto'} py={8} px={4} >
                    <Flex
                        px={2}
                        justifyContent={'space-between'}
                        align={'left'}

                        flexWrap={{
                            base: 'wrap',
                            sm: 'wrap',
                            md: 'nowrap',
                            xl: 'nowrap'
                        }}

                        rowGap={'10px'}

                    > 
                        <Box
                           width={{
                                xl: "15%",
                                md: "15%",
                                sm: "80%",
                               base: "80%",
                           }}
                        >   
                            <Image
                                src={logo_favoree}
                                ml={-1}
                                mb={3}
                                h={'40px'}
                            />

                        </Box>
                        <Box
                            width={{
                                xl: "10%",
                                md: "10%",
                                sm: "80%",
                                base: "80%",
                            }}
                            fontSize={{
                                sm: '14px',
                                md: '18px'
                            }}
                            lineHeight={'35px'}
                        >

                            {
                                sectionTwoList.map((item, index) => {
                                    return (
                                        <FooterSectionItem
                                            key={index}
                                            title={item.title}
                                            url={item.url}
                                            is_internal={item.is_internal}
                                            is_on_page={item.is_on_page}
                                        />
                                    )
                                })
                            }
                        </Box>

                        <Box
                            fontSize={{
                                sm: '14px',
                                md: '18px'
                            }}
                            lineHeight={'35px'}
                        >
                            {
                                sectionThreeList.map((item, index) => {
                                    return (
                                        <FooterSectionItem
                                            key={index}
                                            title={item.title}
                                            url={item.url}
                                            is_internal={item.is_internal}
                                            is_on_page={item.is_on_page}
                                        />
                                    )
                                })
                            }
                        </Box>

                        <Box
                            fontSize={{
                                sm: '16px',
                                md: '18px'
                            }}
                            lineHeight={'35px'}
                            minW={'330px'}

                            width={{
                                base: "400px",
                                sm: "400px",
                                md: "330px",
                                xl: "330px"
                            }}
                        >
                            <Heading
                                fontSize={{
                                    base: '24px',
                                    sm: '24px',
                                    md: '28px'
                                }}
                            >Reach Us</Heading>
                            <Text
                                pt={4}
                            >Contact Number</Text>
                            
                            <FooterSectionItem
                                title={'082333703158'}
                                is_internal={false}
                                url={contact_number}       
                            />

                            <Text
                                pt={4}
                            >Jam Operasi</Text>
                            <Text>Setiap Hari</Text>
                            <Text>09.00 - 22.00 WIB</Text>

                            <Flex
                                mt={6}
                                justifyContent={'space-between'}
                            >
                                <Box
                                    onClick={(e) => redirectToExternalUrl(e, 'https://www.twitter.com/favoree.id/')}
                                    cursor={'pointer'}
                                >
                                    <Image src={twitter} alt={'twitter-icon'}/>
                                </Box>
                                <Box
                                    onClick={(e) => redirectToExternalUrl(e, 'https://www.instagram.com/favoree.id/')}
                                    cursor={'pointer'}
                                >
                                    <Image src={instagram} alt={'instagram-icon'}/>
                                </Box>
                                <Box
                                    onClick={(e) => redirectToExternalUrl(e, 'https://www.facebook.com/favoree.id')}
                                    cursor={'pointer'}
                                >
                                    <Image src={facebook} alt={'facebook-icon'}/>
                                </Box>
                            </Flex>
                        </Box>

                    </Flex>

                    <Box textAlign={'center'} pt={6}>
                        <Text
                            color={'gray.600'}
                        >Copyright @2022 Favoree.id. All rights reserved</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export { Footer }