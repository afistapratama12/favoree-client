import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

import about_us from "../../assets/image/redesign/about_us.svg"
import { section_heading, text_description } from "../../responsive"

export const AboutUs = () => {
    return (
        <Box
            id={'about_us'}
            maxW={{
                xl: '6.5xl',
                md: '85vw',
                sm: '90vw',
                base: '90vw'
            }} margin={'auto'} px={4}
        >
            <Flex
                my={{
                    base: '8vh',
                    sm: '8vh',
                    md: '15vh',
                    xl :'15vh'
                }}
                alignItems={'center'}
                flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                    xl: 'row'
                }}
            >
                <Image
                    w={{
                        xl:'auto',
                        md:'auto',
                        sm:'80vw',
                        base:'80vw'
                    }}
                    alt={'about_us_image'}
                    src={about_us}
                />

                <Box
                    mt={10}
                >
                    <Heading
                        align={'center'}
                        fontSize={section_heading}
                        fontWeight={'semibold'}
                    >Tentang kami</Heading>
                    <Box
                        my={'5vh'}
                        lineHeight={'2'}
                    >
                        <Text
                            fontSize={text_description}
                        >
                            Platform pertama di Indonesia yang menawarkan 
                            layanan convert saldo e-wallet dengan praktis dan aman.
                            kamu bisa melakukan convert ewallet apapun dengan aman mulai 
                            dari <Text 
                                as={'span'}
                                fontWeight={'bold'}
                                >Gopay, Shopeepay, OVO dan Dana</Text>. Mulai transaksi dengan 
                            kami dan nikmat pengalaman transaksi yang lebih aman, 
                            praktis dan terjangkau.</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}