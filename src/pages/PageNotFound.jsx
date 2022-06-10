import { Box, Button, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"

import  { useHistory} from 'react-router-dom'

import not_found from "../assets/image/redesign/404.svg"
import { color_base, color_hover } from "../components/Navbar"

const PageNotFound = () => {
    const history = useHistory()
     
    const buttonSize = useBreakpointValue({ base: "sm", sm: "sm", md: "lg"})

    return (
        <>
            <Box maxW={'80vw'} margin={'auto'} px={8} minH={'100vh'} >
                <Box 
                    display={'relative'}
                    alignItems={'center'}
                    align={'center'} 
                    pt={{
                        base: '35%',
                        sm: '25%',
                        md: '10%',
                        xl : '5%',
                    }} 
                    h={'100vh'}
                >
                    <Image src={not_found} maxW={{
                        base: '90%',
                        sm: "85%",
                        md: '40%',
                        xl : "25%"
                    }}/>
                    
                    <Box my={3}>
                    <Heading
                        fontSize={'40px'}
                    >404</Heading>
                    
                    <Text
                        my={{
                            base: 4,
                            sm: 4,
                            md: 2,
                            xl: 2
                        }}
                    >OOPS! PAGE NOT BE FOUND</Text>
                    <Text
                        my={{
                            base: 4,
                            sm: 4,
                            md: 2,
                            xl: 2
                        }}
                    >Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</Text>
                        <Button
                            h={10}
                            bg={color_base.greenblue}
                            color={'white'}
                            borderRadius={'100px'}
                            _hover={{
                                bg: color_hover.greenblue
                            }}
                            _active={{
                                bg: color_base.greenblue
                            }}
                            size={buttonSize}
                            onClick={e => history.push('/')}
                        >
                            <Text
                                fontSize={{
                                    base: 'md',
                                    sm: 'md',
                                    md: 'lg',
                                    xl: 'lg'
                                }}><a href={'/'}>Back to homepage</a>
                            </Text>
                        </Button>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export { PageNotFound }