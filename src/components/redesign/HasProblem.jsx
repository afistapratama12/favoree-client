import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { color_base, color_hover, CustomButton } from "./Navbar"


import submit_problem from "../../assets/image/redesign/submit_problem.svg"
import { text_description } from "../../responsive"
import { laporkan_kendala } from "../../credential"

export const HasProblem = () => {
    return (
        <Box
            maxW='80vw'
            margin={'auto'}
        >

            <Box
                my={4}
                bg={'#F7EED2'}
                borderRadius={'20px'}
                w={'80vw'}
                h={{
                    base: '55vh',
                    sm: '45vh',
                    md: '45vh',
                    xl: '45vh'
                }}
                align={'center'}
            >
                <HStack
                    p={{
                        base: 2,
                        sm: 3,
                        md: 6,
                        xl: 6
                    }}
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