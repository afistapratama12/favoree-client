import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

import basecircle from "../../assets/image/basecircle.svg"
import about_me from "../../assets/image/about_me.png"

import { headingFontSize } from "../../prop_style"

const AboutUs = () => {
    return (
        <>
        <Box
            id="about_us"
            class="about_us"
            mt={{
                base : "100px",
                sm : "100px",
                md: '130px'
            }}
        >
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}

                flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "row",
                }}

                rowGap={{
                    base: "60px"
                }}
            >
                <Box
                    align={'center'}
                >
                    <Image src={basecircle} boxSize={{
                        base:'300px',
                        sm: "300px",
                        md: '300px',
                        xl: '400px'
                    }}
                        alt={'about-us-circle'}
                    />
                    <Image src={about_me} mt={{
                        base: '-200px',
                        md: '-300px'
                    }}
                        alt={'about-us'}
                    />
                </Box>

                <Box
                    maxW={{
                        sm: '100%',
                        md: '50%'
                    }}
                    pl={{
                        base: 0,
                        sm: 0,
                        md: 10
                    }}
                >
                    <Heading
                        fontSize={headingFontSize}
                        pb={2}
                    >Tentang Kami</Heading>
                    <Text
                        fontSize={{
                            base: '17px',
                            sm: '18px',
                            md:'22px'
                        }}
                        mt={{
                            base:4,
                            sm: 4,
                            md: 8
                        }}
                        color={'gray.700'}
                        lineHeight={'30px'}


                    >Platform pertama di Indonesia yang menawarkan layanan convert saldo e-wallet dengan praktis dan aman. kamu bisa melakukan convert ewallet apapun dengan aman mulai dari Gopay, Shopeepay, OVO dan Dana. Mulai transaksi dengan kami dan nikmat pengalaman transaksi yang lebih aman, praktis dan terjangkau.</Text>
                </Box>
            </Flex>
        </Box>
        </>
    )

}

export { AboutUs }