import { Box, Button, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import { form_url } from "../credential"
import { colorPallet } from "../theme"

// DONE
const Navbar = () => {
    const buttonSize = useBreakpointValue({ base: "sm", sm: "sm", md: "md"})

    const redirectFormURL = (e) => {
        e.preventDefault()

        // open new tab and redirect to form
        window.open(form_url, '_blank')
    }

    return (
        <>
            <Box bg={colorPallet.blue_one}>
            <Box maxW={'7xl'} margin={'auto'} py={6} textAlign={'center'} px={4}>
                <Flex
                    justifyContent={'space-between'}
                >
                    <Heading
                        fontSize={{ base: '22px', md: '3xl' }}
                    >FAVOREE</Heading>

                    <Flex>
                        <Button
                            bg={colorPallet.blue_four}
                            color={'white'}
                            borderRadius={'100px'}
                            _hover={{
                                bg: '#0A42C1'
                            }}
                            _active={{
                                bg: '#4679EE'
                            }}
                            size={buttonSize}
                            onClick={redirectFormURL}
                        >
                            <Text
                                fontSize={{
                                    base: 'sm',
                                    sm: 'sm',
                                    md: 'md',
                                    xl: 'lg'
                                }}>  Yuk Mulai

                            </Text>
                           
                        </Button>
                        <Button
                            ml={{
                                base: 1,
                                sm: 2,
                                md: 5,
                            }}
                            bg={colorPallet.blue_two}
                            borderRadius={'100px'}
                            _hover={{
                                bg: '#8CE7FD'
                            }}
                            _active={{
                                bg: '#D1F6FF'
                            }}
                            size={buttonSize}
                        >
                            <Text
                                fontSize={{
                                    base: 'sm',
                                    sm: 'sm',
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