import { Box, Button, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { form_url, laporkan_kendala } from "../credential"
import { colorPallet } from "../theme"



// DONE
const Navbar = (props) => {  
    const { openButton } = props

    const history = useHistory()
    
    const buttonSize = useBreakpointValue({ base: "sm", sm: "sm", md: "md"})

    const redirectURL = (e, url) => {
        e.preventDefault()

        // open new tab and redirect to form
        window.open(url, '_blank')
    }

    const goToHome = (e) => {
        // get path now
        const path = window.location.pathname



        if (path !== "/") {
            //e.preventDefault()
            const aboutPageNode = document.getElementById('root')

            aboutPageNode.scrollIntoView({behavior: "smooth"});
            history.push("/")
        }
    }

    return (
        <>
            <Box bg={colorPallet.blue_one}>
            <Box maxW={'7xl'} margin={'auto'} py={6} textAlign={'center'} px={4}>
                <Flex
                    justifyContent={'space-between'}
                >
                    <Heading
                        cursor={'pointer'}
                        onClick={goToHome}
                        fontSize={{ base: '22px', md: '3xl' }}
                    >FAVOREE</Heading>

                    { openButton && <Flex>
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
                            onClick={e => redirectURL(e, form_url)}
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
                            onClick={e => redirectURL(e, laporkan_kendala)}
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
                    </Flex> }
                </Flex>
            </Box>
            </Box>
        </>
    )
}

export { Navbar }