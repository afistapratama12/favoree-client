import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { colorPallet } from "../theme"

const Footer = () => {
    return (
        <>
            <Box bg={colorPallet.blue_one}>
                <Box maxW={'7xl'} margin={'auto'} py={6} px={4} >
                    <Flex
                        px={2}
                        justifyContent={'space-between'}
                    > 
                        <Box>
                            <Heading>FAVOREE</Heading>
                            <Box>
                                on progress
                            </Box>

                        </Box>
                        <Box>
                            <Text>Why</Text>
                            <Text>About Us</Text>
                            <Text>Cara Kerja</Text>
                            <Text>Testimoni</Text>
                            <Text>FAQ</Text>
                        </Box>

                        <Box>
                            <Text>Laporkan Kendala</Text>
                            <Text>Hubungi Admin</Text>
                        </Box>

                        <Box>
                            <Heading>Reach Us</Heading>
                            <Text>Contact Number</Text>
                            <Text>+6282333703158</Text>

                            <Text>Jam Operasi</Text>
                            <Text>Setiap Hari</Text>
                            <Text>09.00 - 21.00 WIB</Text>

                            <Flex>
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                            </Flex>
                        </Box>

                    </Flex>

                    <Box textAlign={'center'} pt={4}>
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