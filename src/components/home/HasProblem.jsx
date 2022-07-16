import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { color_base, color_hover } from "../../theme"

import { CustomButton } from "../button/CustomButton"

import submit_problem from "../../assets/image/redesign/submit_problem.svg"
import { text_description } from "../../responsive"
import { laporkan_kendala } from "../../credential"
import useWindowDimensions from "../../useWindowDimension"

export const HasProblem = () => {

    const { width } = useWindowDimensions()

    return (
        <Box
            maxW={{
                base: '90vw',
                sm: '90vw',
                md: '80vw',
                xl: '80vw'
            }}
            margin={'auto'}
            align={'center'}
        >

            <Box
                my={4}
                bg={'#F7EED2'}
                borderRadius={'20px'}
                w={{
                    xl: width >= 1100 ? '1100px' : '80vw' ,
                    md: '80vw'
                }}
                
                h={'100%'}
                
                // h={{
                //     base: '55vh',
                //     sm: '45vh',
                //     md: '45vh',
                //     xl: '45vh'
                // }}
                align={'center'}
            >
                <HStack
                    py={{
                        base:4,
                        sm:6,
                        md:2,
                        xl:2    
                    }}
                    
                    px={{
                        base:4,
                        sm:2,
                        md:8,
                        xl:8 
                    }}

                    // p={{
                    //     base: 2,
                    //     sm: 3,
                    //     md: 6,
                    //     xl: 6
                    // }}
                    justifyContent={{
                        xl: 'space-between',
                        md: 'space-between',
                        sm:'center',
                        base: 'center'
                    }}
                    wrap={{
                        xl: 'nowrap',
                        md: 'nowrap',
                        sm: 'wrap',
                        base: 'wrap'
                    }}
                >
                    <Image
                        alt={'submit_problem'}
                        src={submit_problem}
                        w={{
                            base: '17vh',
                            sm: '20vh',
                            md: '40vh',
                            xl: '40vh'
                        }}
                        mb={6}
                    />
                    <Box
                        maxW={{
                            xl : '60%',
                            md: '60%',
                            sm: '95%',
                            base: '95%' 
                        }}
                        align={'left'}
                    >
                        <Heading
                            fontSize={{
                                xl : 'auto',
                                md : '2xl',
                                sm : '2xl',
                                base : '20px'
                            }}
                        >Mengalami Kendala ?</Heading>
                        
                        <Text my={{
                            base: 4,
                            sm: 4,
                            md: 8,
                            xl: 8
                        }}
                            fontSize={text_description}
                        >Segera laporkan jika kamu mengalami kendala pada saat pengajuan convert. Kami akan segera menghubungi kamu untuk membantu menyelesaikan kendala yang kamu hadapi.</Text>
                    
                        <CustomButton
                            isExternal={true}
                            url={laporkan_kendala}
                            mt={{
                                xl: 6,
                                md:6,
                                sm: 4,
                                base: 4
                            }}
                            bgColor={color_base.greenblue}
                            hoverColor={color_hover.greenblue}
                            color={color_base.white}
                            width={{
                                base: '100%',
                                sm: '100%',
                                md: '85%',
                                xl: '85%'
                            }}
                            fontSize={'lg'}
                            fontWeight={'bold'}
                            value={'Ajukan Laporan'}
                        />
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}