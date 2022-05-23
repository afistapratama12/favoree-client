import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { headingFontSize } from "../../prop_style"

import basecircle from "../../assets/image/basecircle.svg"
import testimoni from "../../assets/image/testimoni.png"

import circle_off from "../../assets/vector/circle_off.svg"
import circle_on from "../../assets/vector/circle_on.svg"

import { useState } from "react"
import { colorPallet } from "../../theme"


const testiData = [{
    title : 'Mudah Banget',
    name: 'Rudi Oktaviansyah',
    job: 'Mahasiswa',
    text: 'Saya menggunakan platform ini untuk convert setiap hari, serasa mudah dan aman karena ada tempat laporan kendala dan customer service online 24 jam.'
}, {
    title : 'Mudah Banget 2',
    name: 'Rudi Oktaviansyah 2',
    job: 'Mahasiswa',
    text: 'Saya menggunakan platform ini untuk convert setiap hari, serasa mudah dan aman karena ada tempat laporan kendala dan customer service online 24 jam.'
}, {
    title : 'Mudah Banget 3',
    name: 'Rudi Oktaviansyah 3',
    job: 'Mahasiswa',
    text: 'Saya menggunakan platform ini untuk convert setiap hari, serasa mudah dan aman karena ada tempat laporan kendala dan customer service online 24 jam.'
}]


const Testimoni = () => {
    const [testi, setTesti] = useState(testiData[0])
    const [number, setNumber] = useState(1)


    const changeTesti = (e, num) => {
        e.preventDefault()

        setNumber(num)
        setTesti(testiData[num-1])
    }

    return (
        <>
            <Box
                mt={{
                    base : '60px',
                    sm : `60px`,
                    md: `120px`,
                    xl :`120px`
                }}

                id={'testimoni'}
                class={'testimoni'}
            >
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    flexDirection={{
                        base: 'column',
                        sm: 'column',
                        md: 'row',
                        xl: 'row'
                    }}
                >
                    <Box
                        mb={'50px'}
                        minW={'30%'}
                    >
                        <Heading
                            fontSize={headingFontSize}
                        >Kata Mereka</Heading>
                    </Box>

                    <Flex
                        alignItems={'center'}
                        ml={{
                            base: 2,
                            sm: 'auto',
                            md: 'auto',
                            xl: 'auto'
                        }}
                    >
                        <Box>
                            <Image
                                src={basecircle} boxSize={{
                                    base:'160px',
                                    sm : '180px',
                                    md: '200px',
                                    xl :'200px'
                                }}
                            />
                            <Image 
                                src={testimoni} 
                                mt={{
                                    base: '-140px',
                                    sm : '-180px',
                                    md: '-220px',
                                    xl: '-220px'
                                }}
                                w={'230px'}    
                            />
                        </Box>

                        <Box
                            pl={10}
                            pr={2}
                            maxW={{
                                base: "70%",
                                sm: "70%",
                                md: '60%',
                                xl: '60%'
                            }}
                        >
                            <Box>
                                <Heading
                                    fontSize={{
                                        base: '18px',
                                        sm: '20px',
                                        md: '24px',
                                        xl: '30px'
                                    }}
                                    pb={6}
                                >"{testi.title}"</Heading>
                                <Text
                                    lineHeight={{
                                        base: '25px',
                                        sm: '25px',
                                        md: '30px',
                                        xl: '30px'
                                    }}
                                    fontSize={{
                                        base: '14px',
                                        sm: '16px',
                                        md: '20px',
                                        xl :'20px'
                                    }}
                                    color={'gray.600'}
                                >{testi.text}</Text>

                                <Text
                                    pt={4}
                                    lineHeight={{
                                        base: '25px',
                                        sm: '25px',
                                        md: '30px',
                                        xl: '30px'
                                    }}

                                    fontSize={{
                                        base: '15px',
                                        sm: '18px',
                                        md: '22px',
                                        xl: '22px'
                                    }}
                                    color={colorPallet.blue_four}
                                >{testi.name}</Text>
                                <Text
                                    lineHeight={{
                                        base: '25px',
                                        sm: '25px',
                                        md: '30px',
                                        xl: '30px'
                                    }}
                                    fontSize={{
                                        base: '14px',
                                        sm: '16px',
                                        md: '18px',
                                        xl :'18px'
                                    }}
                                    
                                >{testi.job}</Text>
                            </Box>

                            <Flex
                                columnGap={'10px'} 
                                alignItems={'center'}
                                mt={2}
                            >
                                <Box
                                    cursor={'pointer'}
                                    onClick={(e) => changeTesti(e, 1)}
                                >
                                    <Image src={number === 1 ? circle_on : circle_off}
                                        w={number === 1 ? '16px' : '13px'}
                                    />
                                </Box>
                                <Box
                                    cursor={'pointer'}
                                    onClick={(e) => changeTesti(e, 2)}
                                >
                                    <Image src={number === 2 ? circle_on : circle_off}
                                        w={number === 2 ? '16px' : '13px'}
                                    />
                                </Box>
                                <Box
                                    cursor={'pointer'}
                                    onClick={(e) => changeTesti(e, 3)}
                                >
                                    <Image src={number === 3 ? circle_on : circle_off}
                                        w={number === 3 ? '16px' : '13px'}
                                    />
                                </Box>
                                
                            </Flex>
                        </Box>
                    </Flex>
                    
                </Flex>
            </Box>
        </>
    )
}

export { Testimoni}