import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react"

import favoree_logo from '../assets/image/redesign/logo_favoree_white.png'
import { contact_number, hubungi_admin, laporkan_kendala } from "../credential"
import { color_base } from "./Navbar"

import ScrollTo from "react-scroll-into-view";
import  { useHistory } from  'react-router-dom'

import twitter from  "../assets/image/redesign/tw.svg"
import instagram from  "../assets/image/redesign/ig.svg"
import facebook from  "../assets/image/redesign/fb.svg"

const sectionTwoList = [{
    title: 'Benefit',
    is_internal : true,
    is_on_page : true,
    url : `#benefit`
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
        <Box
            color={color_base.white}
            my={3}
            fontSize={{
                base: '13px',
                sm: '14px',
                md: '16px',
                xl: '16px'
            }}
        >
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

export const Footer = (props) => {
    return (
        <Box
            bgColor={'#003E66'}
            py={10}
        >
            <Box
                maxW={{
                    base: '90vw',
                    sm : '90vw',
                    md: '85vw',
                    xl: '1210px'
                }}
                margin={'auto'}
            >
                <HStack
                    align={'top'}
                    wrap={{
                        base:'wrap',
                        sm: 'wrap',
                        md: 'nowrap',
                        xl:'nowrap'
                    }}
                    mb={10}
                >
                    <Box
                        w={{
                            base: '90%',
                            sm: '90%',
                            md: '20vw',
                            xl : '20vw'
                        }}
                        mb={6}
                    >
                        <Image
                            w={{
                                base: '22vw',
                                sm : '22vw',
                                md : '150px',
                                xl : '180px'
                            }}
                            alt={'favoree_logo'}
                            src={favoree_logo}
                        />
                    </Box>
                    <Box
                        w={{
                            base: '100%',
                            sm: '100%',
                            md: '20vw',
                            xl : '20vw'
                        }}
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
                        w={{
                            base: '100%',
                            sm: '100%',
                            md: '30vw',
                            xl : '30vw'
                        }}
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
                        w={{
                            base: '100%',
                            sm: '100%',
                            md: '30vw',
                            xl : '30vw'
                        }}
                        color={color_base.white}
                    >
                        <Heading
                                mt={4}
                                fontSize={{
                                    base: '20px',
                                    sm: '20px',
                                    md: '28px'
                                }}
                            >Reach Us</Heading>
                            <Text
                                pt={4}
                                fontSize={['14px', '14px', '16px']}
                            >Contact Number</Text>
                            
                            <FooterSectionItem
                                title={'0857-3665-3576'}
                                is_internal={false}
                                url={contact_number}       
                            />

                            <Text
                                pt={4}
                                fontSize={['14px', '14px', '16px']}
                            >Jam Operasi</Text>
                            <Text
                                pt={2}
                                fontSize={{
                                    base: '13px',
                                    sm: '14px',
                                    md: '16px',
                                    xl: '16px'
                                }}
                            >Setiap Hari</Text>
                            <Text
                                pt={2}
                                fontSize={{
                                    base: '13px',
                                    sm: '14px',
                                    md: '16px',
                                    xl: '16px'
                                }}
                            >09.00 - 22.00 WIB</Text>

                            <HStack
                                mt={6}
                                justifyContent={'space-between'}
                            >
                                <Box
                                    onClick={(e) => window.open('https://www.instagram.com/favoree_id/', '_blank')}
                                    cursor={'pointer'}
                                >
                                    <Image src={twitter} alt={'twitter-icon'}/>
                                </Box>
                                <Box
                                    onClick={(e) => window.open('https://www.instagram.com/favoree.id/', '_blank')}
                                    cursor={'pointer'}
                                >
                                    <Image src={instagram} alt={'instagram-icon'}/>
                                </Box>
                                <Box
                                    onClick={(e) => window.open('https://www.facebook.com/favoree.id/', '_blank')}
                                    cursor={'pointer'}
                                >
                                    <Image src={facebook} alt={'facebook-icon'}/>
                                </Box>
                            </HStack>
                    </Box>
                </HStack>


                <Box textAlign={'center'}>
                    <Text
                        color={color_base.white}
                    >Copyright @2022 Favoree.id. All rights reserved</Text>
                </Box>
            </Box>
        </Box>
    )
}