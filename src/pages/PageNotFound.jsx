import { Box, Button, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"

import  { useHistory} from 'react-router-dom'

import not_found from "../assets/image/not_found.png"
import { colorPallet } from "../theme"

const PageNotFound = () => {
    const history = useHistory()
     
    const buttonSize = useBreakpointValue({ base: "sm", sm: "sm", md: "lg"})

    return (
        <>
            <Box maxW={'7xl'} margin={'auto'} px={8} minH={'100vh'} >
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
                        md: '50%',
                        xl : "50%"
                    }}/>
                    
                    <Box my={3}>
                    <Heading
                        fontSize={'80px'}
                    >404</Heading>
                    
                    <Text
                        my={{
                            base: 4,
                            sm: 4,
                            md: 2,
                            xl: 2
                        }}
                    >OOOS! PAGE NOT BE FOUND</Text>
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