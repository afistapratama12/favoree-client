import { Box, Button, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import { colorPallet } from "../theme"

// DONE
const Navbar = () => {
    const buttonSize = useBreakpointValue({ base: "sm", sm: "sm", md: "md"})

    return (
        <>
            <Box bg={colorPallet.blue_one}>
            <Box maxW={'7xl'} margin={'auto'} py={6} textAlign={'center'} px={4}>
                <Flex
                    justifyContent={'space-between'}
                >
                    <Heading
                        fontSize={{ base: '24px', md: '3xl' }}
                    >FAVOREE</Heading>

                    <Flex>
                        <Button
                            bg={colorPallet.blue_four}
                            color={'white'}
                            borderRadius={'100px'}
                            _hover={{
                                bg: colorPallet.blue_four
                            }}
                            _active={{
                                bg: '#4679EE'
                            }}
                            size={buttonSize}
                        >
                            <Text
                                fontSize={{
                                    base: 'sm',
                                    md: 'md',
                                    xl: 'lg'
                                }}>  Yuk Mulai

                            </Text>
                           
                        </Button>
                        <Button
                            ml={{
                                base: 3,
                                md: 6,
                            }}
                            bg={colorPallet.blue_two}
                            borderRadius={'100px'}
                            _hover={{
                                bg: colorPallet.blue_two
                            }}
                            _active={{
                                bg: '#D1F6FF'
                            }}
                            size={buttonSize}
                        >
                            <Text
                                fontSize={{
                                    base: 'sm',
                                    md: 'md',
                                    xl: 'lg'
                                }}
                            >
                                Laporkan Kendala
                            </Text>
                        </Button>
                    </Flex>
                </Flex>
            </Box>
            </Box>
        </>
    )
}

export { Navbar }