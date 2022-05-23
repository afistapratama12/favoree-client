import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { colorPallet } from "../theme"

import ScrollTo from "react-scroll-into-view";

import twitter from "../assets/vector/twitter.svg"
import facebook from "../assets/vector/fb.svg"
import instagram from "../assets/vector/instagram.svg"

const sectionTwoList = [{
    title: 'Why',
    is_internal : true,
    url : `#why`
}, {
    title: 'About Us',
    is_internal : true,
    url : `#about_us`
}, {
    title: 'Cara Kerja',
    is_internal : true,
    url : `#cara_kerja`
}, {
    title: 'Testimoni',
    is_internal : true,
    url : `#testimoni`
}, {
    title: 'FAQ',
    is_internal : true,
    url : `#faq`
}]


const sectionThreeList = [{
    title : "Laporkan Kendala",
    is_internal : false,
    url : "https://api.whatsapp.com/send?phone=6281234123412&text=Halo%20Admin%20Saya%20Mau%20Laporkan%20Kendala%20Pada%20Aplikasi%20Kami"
}, {
    title : "Hubungi Admin",
    is_internal : false,
    url : "https://api.whatsapp.com/send?phone=6281234123412&text=Halo%20Admin%20Saya%20Mau%20Bertanya%20Kami"
}]

export const FooterSectionItem = (props) => {
    const { title, url, is_internal } = props

    const redirectToExternalUrl = (e, url) => {
        e.preventDefault()
        window.open(url, "_blank")
    }

    return (
        <Box>

            {
                is_internal ? (
                    <ScrollTo selector={url} scrollOptions={{
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
                    </ScrollTo>
                ) : (
                    <Text
                        onClick={(e) => redirectToExternalUrl(e, url)}

                    _hover={{
                        textDecoration: 'underline'
                            }}
                        cursor={'pointer'}
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
                            fontSize={'35px'}
                        >
                            <Heading
                            >FAVOREE</Heading>
                        </Box>
                        <Box
                            width={{
                                xl: "10%",
                                md: "10%",
                                sm: "80%",
                                base: "80%",
                            }}
                            fontSize={'18px'}
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
                                        />
                                    )
                                })
                            }
                        </Box>

                        <Box
                            fontSize={'18px'}
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
                                        />
                                    )
                                })
                            }
                        </Box>

                        <Box
                            fontSize={'18px'}
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
                                fontSize={'28px'}
                            >Reach Us</Heading>
                            <Text
                                pt={4}
                            >Contact Number</Text>
                            
                            <FooterSectionItem
                                title={'082333703158'}
                                is_internal={false}
                                url={'tel:6282333703158'}       
                            />

                            <Text
                                pt={4}
                            >Jam Operasi</Text>
                            <Text>Setiap Hari</Text>
                            <Text>09.00 - 21.00 WIB</Text>

                            <Flex
                                mt={6}
                                justifyContent={'space-between'}
                            >
                                <Box
                                    onClick={(e) => redirectToExternalUrl(e, 'https://www.twitter.com/favoree.id/')}
                                    cursor={'pointer'}
                                >
                                    <Image src={twitter}/>
                                </Box>
                                <Box
                                    onClick={(e) => redirectToExternalUrl(e, 'https://www.instagram.com/favoree.id/')}
                                    cursor={'pointer'}
                                >
                                    <Image src={instagram}/>
                                </Box>
                                <Box
                                    onClick={(e) => redirectToExternalUrl(e, 'https://www.facebook.com/favoree.id')}
                                    cursor={'pointer'}
                                >
                                    <Image src={facebook}/>
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