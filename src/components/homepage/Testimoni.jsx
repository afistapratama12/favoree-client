import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { headingFontSize } from "../../prop_style"

import basecircle from "../../assets/image/basecircle.svg"

const Testimoni = () => {
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
                        maxW={'30%'}
                    >
                        <Heading
                            fontSize={headingFontSize}
                        >Testimonial dari Pengguna Kami</Heading>
                    </Box>

                    <Box>
                        <Image
                            src={basecircle} boxSize={'200px'}
                        />
                        <Image/>
                    </Box>

                    <Box
                        px={6}
                    >
                        <Box
                            maxW={'80%'}
                        >
                            <Heading
                                fontSize={'30px'}
                            >"Mudah Banget"</Heading>
                            <Text>Saya menggunakan platform ini untuk convert setiap hari, serasa mudah dan aman karena ada tempat laporan kendala dan customer service online 24 jam.</Text>

                            <Text>Rudi Oktaviansyah</Text>
                            <Text>Mahasiswa</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export { Testimoni}