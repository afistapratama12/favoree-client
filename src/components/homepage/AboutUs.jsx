import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

import basecircle from "../../assets/image/basecircle.svg"
import about_me from "../../assets/image/about_me.png"

import { headingFontSize } from "../../prop_style"

const AboutUs = () => {
    return (
        <>
        <Box
            mt={24}
        >
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box
                    align={'center'}
                >
                    <Image src={basecircle} boxSize={{
                        base: '200px',
                        md: '300px',
                        xl: '400px'
                    }}/>
                    <Image src={about_me} mt={'-300px'}/>
                </Box>

                <Box
                    maxW={'60%'}
                    pl={10}
                >
                    <Heading
                        fontSize={headingFontSize}
                    >Tentang Kami</Heading>
                    <Text
                        mt={8}
                        color={'gray.700'}
                    >Platform pertama di Indonesia yang memberikan layanan convert e-wallet secara simple dengan biaya yang lebih murah dan aman. Kami percaya bahwa platform ini dapat menjadi solusi (jelaskan masalah di twitter dan convereter abal2)</Text>
                </Box>
            </Flex>
        </Box>
        </>
    )

}

export { AboutUs}