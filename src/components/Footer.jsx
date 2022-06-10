import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react"

import favoree_logo from '../assets/image/redesign/logo_favoree_white.png'
import { contact_number } from "../credential"
import { color_base } from "./Navbar"

import { socialFooterList, sectionTwoList,sectionThreeList } from "../source/footer.ts";
import { FooterSocialItem } from "./footer/FooterSocialItem";
import { FooterItemSection } from "./footer/FooterItemSection";

export const Footer = () => {
    return (
        <Box
            bgColor={'#003E66'}
            py={{
                base: 6,
                sm: 6,
                md: 10,
                xl: 10

            }}
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
                            base: '200px',
                            sm : '250px',
                            md : '250px',
                            xl : '250px'
                        }}
                        alt={'favoree_logo'}
                        src={favoree_logo}
                    />
                </Box>
                <HStack
                    align={'top'}
                    wrap={{
                        base:'wrap',
                        sm: 'wrap',
                        md: 'nowrap',
                        xl:'nowrap'
                    }}
                    mb={10}
                    spacing={0}
                >
                    <Box
                        w={{
                            base: '100%',
                            sm: '100%',
                            md: '20vw',
                            xl : '20vw'
                        }}
                    >
                        <Heading
                                mt={4}
                                fontSize={{
                                    base: '20px',
                                    sm: '20px',
                                    md: '24px'
                                }}
                                color={color_base.white}
                            >Fitur</Heading>
                        {
                            sectionTwoList && sectionTwoList.map((item, index) => {
                                return (
                                    <FooterItemSection
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
                        <Heading
                                mt={4}
                                fontSize={{
                                    base: '20px',
                                    sm: '20px',
                                    md: '24px'
                                }}
                                color={color_base.white}
                            >Layanan Pengguna</Heading>

                        {
                            sectionThreeList && sectionThreeList.map((item, index) => {
                                return (
                                    <FooterItemSection
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
                                    md: '24px'
                                }}
                            >Hubungi Kami</Heading>
                            <Text
                                pt={4}
                                fontSize={['14px', '14px', '16px']}
                            >Contact Number</Text>
                            
                            <FooterItemSection
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
                            mt={{
                                base:8,
                                sm: 8,
                                md: 4,
                                xl: 4
                            }}
                            fontSize={{
                                base: '20px',
                                sm: '20px',
                                md: '24px'
                            }}
                            >Cari tau tentang kami
                        </Heading>

                            <HStack
                                mt={6}
                                justifyContent={{
                                    base: 'space-around',
                                    sm: 'space-around',
                                    md: 'space-between',
                                    xl: 'space-between'
                                }}
                            >
                                {
                                    socialFooterList && socialFooterList.map((item, index) => (
                                        <FooterSocialItem
                                            key={index}
                                            src={item.src}
                                            alt={item.alt}
                                            link={item.link}
                                        />
                                    ))
                                }
                            </HStack>
                    </Box>
                </HStack>


                <Box textAlign={'center'}
                >
                    <Text
                        fontSize={{
                            base: '13px',
                            sm: '13px',
                            md: '16px',
                            xl: '16px'
                        }}
                        color={color_base.white}
                    >Copyright @2022 Favoree.id. All rights reserved</Text>
                </Box>
            </Box>
        </Box>
    )
}