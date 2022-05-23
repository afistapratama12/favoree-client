import { Box, Text, Flex, Button, Heading, Image, useBreakpointValue } from "@chakra-ui/react"
import { colorPallet } from "../../theme"

import basecircle from "../../assets/image/basecircle.svg"
import hero from '../../assets/image/hero_crop.png'
import { form_url } from "../../credential"

const Hero = () => {
    const buttonSize = useBreakpointValue({ base: "sm", sm: "sm", md: "lg"})

    const redirectFormURL = (e) => {
        e.preventDefault()

        // open new tab and redirect to form
        window.open(form_url, '_blank')
    }

    const redirectToIDCaraKerja = (e) => {
        e.preventDefault()

        // redirect to class cara_kerja
        window.location.href = '#cara_kerja'
    }

    return (
       <>
       <Box 
            id='hero'
            class="hero"
            mt={10}
        >
            <Flex justifyContent={'space-between'} alignItems={'center'}
                flexDirection={{
                    base: "column-reverse",
                    sm: "column-reverse",
                    md: "row",
                }}

                rowGap={{
                    base: "70px"
                }}
            >
                <Box
                    maxW={{
                        sm: "95%",
                        md: "50%"
                    }}

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
                        mt={'40px'}
                        id={'why_footer'}
                        class={'why_footer'}
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
                            onClick={redirectFormURL}
                        >
                            <Text
                                fontSize={{
                                    base: 'sm',
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
                            onClick={redirectToIDCaraKerja}
                        >
                            <Text
                                fontSize={{
                                    base: 'sm',
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
                        base: '300px',
                        sm: '300px',
                        md: '300px',
                        xl: '400px'
                    }}/>
                    <Image src={hero} 
                    mt={{
                        xl: '-340px',
                        md: '-230px',
                        sm: '-230px',
                        base: '-220px'
                    }}
                        width={{
                            xl: "500px",
                            md: "400px",
                            sm: "350px",
                            base: "300px"
                        }}

                        mr={{
                            sm: "0px",
                            md: '30px'
                        }}
                    />
                </Box>
            </Flex>
        </Box>
       </> 
    )
}

export { Hero }