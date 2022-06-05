import { Box, Button, Flex, Heading, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import { color_base, color_hover, CustomButton } from "../Navbar"

import hero from "../../assets/image/redesign/hero.svg"
import { form_url } from "../../credential"
import { section_heading, text_description, width_sizing } from "../../responsive"

import ScrollTo from "react-scroll-into-view";

export const Hero = () => {
    const buttonSize = useBreakpointValue(['sm', 'md'], 'w-full', 'w-auto')

    return (
        <Box
            maxW={{
                xl: '80vw',
                md: '80vw',
                sm: '90vw',
                base: '90vw'
            }}
            margin={'auto'}
            mb={'13vh'}
            mt={'15vh'}
        >

            <Flex
                w={width_sizing}
                h={{
                    base: '65vh',
                    sm: '65vh',
                    md:'55vh',
                    xl: '55vh'
                }}

                bgColor={color_base.greenblue}
                borderRadius={{
                    xl :'50px',
                    md: '50px',
                    sm: '30px',
                    base: '30px'
                }}
                align={{
                    base: 'center',
                    md: 'flex-start'

                }}
                flexDirection={{
                    base: "column-reverse",
                    sm: "column-reverse",
                    md: "row",
                    xl:'row'
                }}
            >
                <Box
                    h={'40vh'}
                    pr={'8vw'}
                    p={'4vw'}
                >
                    <Heading
                        color={color_base.white}
                        fontSize={section_heading}
                    >Convert saldo e-wallet anda dengan aman</Heading>
                    <Text
                        fontSize={{
                            xl: '1.2rem',
                            md: '1.2rem',
                            sm: '14px',
                            base: '14px'
                        }}
                        my={6}
                        color={'#F9F9F9'}
                    >Lakukan transaksi convert saldo e-wallet dengan praktis dan aman</Text>

                    <HStack
                        mt={{
                            xl:'8vh',
                            md: '8vh',
                            sm: '5vh',
                            base: '5vh'
                        }}
                        justifyContent={{
                            base: 'space-around',
                            sm: 'space-around',
                            md: 'flex-start',
                            xl: 'fex-start'
                        }}
                    >
                        <CustomButton
                            bgColor={color_base.yellow}
                            hoverColor={color_hover.yellow}
                            m={2}
                            value={'Mulai Convert'}
                            w={{
                                xl: '13vw',
                                md: '13vw',
                                sm: '35vw',
                                base: '35vw'
                            }}
                            h={{
                                base: '6vh',
                                sm: '6vh',
                                md:'7vh',
                                xl: '7vh'
                            }}
                            isExternal={true}
                            url={form_url}
                        />
                        <Box
                            pl={{
                                base: 0,
                                sm: 0,
                                md: 3,
                                xl: 3
                            }}
                        >
                            <Button
                                bgColor={'transparent'}
                                border={'2px solid #FCFCFC'}
                                borderRadius={'100px'}
                                _active={{
                                    backgroundColor: 'transparent'
                                }}
                                size={buttonSize}
                                w={{
                                    xl: '13vw',
                                    md: '13vw',
                                    sm: '35vw',
                                    base: '35vw'
                                }}
                                h={{
                                    base: '6vh',
                                    sm: '6vh',
                                    md:'7vh',
                                    xl: '7vh'
                                }}
                            >
                                    <ScrollTo
                                    selector={'#cara-kerja'} scrollOptions={{
                                        duration: 1000,
                                        delay: 100,
                                        smooth: true,
                                        offset: -100,
                                        block: "center",
                                        inline: 'center'
                                    }}
                                    >
                                        <Text
                                            color={color_base.white}
                                            fontWeight={'bold'}
                                            fontSize={text_description}
                                        >
                                            Lihat Cara Kerja
                                        </Text>
                                    </ScrollTo>
                            </Button>
                        </Box>
                    </HStack>
                </Box>


                <Image
                    alt={'hero_image'}
                    src={hero}
                    w={{
                        xl:'60vh',
                        md:'55vh',
                        base:'30vh',
                        sm:'35vh'
                    }}
                />

            </Flex>
        </Box>
    )
}