import { Box, Text, Flex, Button, Heading, Image, useBreakpointValue } from "@chakra-ui/react"
import { colorPallet } from "../../theme"

import basecircle from "../../assets/image/basecircle.svg"
import hero from '../../assets/image/hero.png'

const Hero = () => {
    const buttonSize = useBreakpointValue({ base: "sm", sm: "sm", md: "lg"})

    return (
       <>
       <Box id={'hero'} mt={8}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box
                    maxW={'50%'}
                >
                    <Heading
                        fontSize={{
                            xl : '56px',
                            md: '36px',
                            base: '22px'
                        }}

                    >Lakukan convert e-wallet dengan mudah.</Heading>
                    <Text
                        pt={2}
                        color={'gray.600'}
                        fontSize={{
                            xl: '20px',
                            md: '17px',
                            base: '13px'
                        }}
                    >Lakukan convert e-wallet dengan lebih praktis, aman, mudah dan murah.</Text>

                    <Flex
                        mt={6}
                    >
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
                                    base: 'xs',
                                    md: 'md',
                                    xl: 'lg'
                                }}>  Ajukan Convert

                            </Text>
                        </Button>


                        <Button
                            ml={{
                                base: 3,
                                md: 6,
                            }}
                            bg={'white'}
                            borderColor={'black'}
                            color={'black'}
                            borderRadius={'100px'}
                            border={'2px'}
                            _hover={{
                                bg: 'white'
                            }}
                            _active={{
                                bg: 'gray.200'
                            }}
                            size={buttonSize}
                        >
                            <Text
                                fontSize={{
                                    base: 'xs',
                                    md: 'md',
                                    xl: 'lg'
                                }}>  Lihat Cara Kerja

                            </Text>
                        </Button>
                    </Flex>
                </Box>

                <Box
                    align={'center'}
                >
                    <Image src={basecircle} boxSize={{
                        base: '200px',
                        md: '300px',
                        xl: '400px'
                    }}/>
                    <Image src={hero} mt={{
                        xl: '-290px',
                        md: '-230px',
                        sm: '-230px',
                        base: '100px'
                    }}/>
                </Box>
            </Flex>
        </Box>
       </> 
    )
}

export { Hero }