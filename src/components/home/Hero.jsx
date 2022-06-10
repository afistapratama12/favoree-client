import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { color_base, color_hover } from "../Navbar"

import hero from "../../assets/image/redesign/hero.svg"
// import { section_heading, text_description, width_sizing } from "../../responsive"

import useWindowDimensions from "../../useWindowDimension";

import ScrollTo from "react-scroll-into-view";

import bg from "../../assets/image/redesign/bg1.svg"
import dana from "../../assets/image/redesign/dana.png"
import gopay from "../../assets/image/redesign/gopay.png"
import ovo from "../../assets/image/redesign/ovo.png"
import spay from "../../assets/image/redesign/spay.png"
import { form_url } from "../../credential";

export const Hero = () => {
    const { width } = useWindowDimensions()
    return (
        <>
        <Box
            bgImage={width > 768 && bg}
            bg={width < 768 && '#E8F9FD'}
            bgPosition="right"
            bgRepeat="no-repeat"
            minH={'100vh'}
            right={'0'}
        >
            <Box
                maxW={width < 1200 ? '80vw': '1200px'}
                margin={'auto'}
                pb={'5vh'}
            >
                <HStack
                    spacing={{
                        base: '0',
                        sm: '0',
                        md: '10vw',
                        xl: '10vw'
                    }}
                    pt={{
                        base: '12vh',
                        sm: '12vh',
                        md: '20vh',
                        xl: '20vh'
                    }}
                    flexDirection={{
                        base: 'column-reverse',
                        sm: 'column-reverse',
                        md: 'row',
                        xl: 'row'
                    }}
                >
                    <Box
                        w={{
                            base: '90vw',
                            sm: '90vw',
                            md: '50%',
                            xl: '50%'
                        }}
                    >
                        <Heading
                            // none for SEO
                            display={'none'}
                            fontSize={'45px'}
                        >
                            Convert saldo ewallet
                        </Heading>
                        <Heading
                            pt={10}
                            fontSize={{
                                base: '25px',
                                sm: '30px',
                                md: '45px',
                                xl:'45px'
                            }}
                        >
                            Transfer antar saldo e-wallet di Favoree.id, dijamin aman
                        </Heading>
                        <Text
                            pt={6}
                            lineHeight={'1.7'}
                            fontSize={{
                                xl: '18px',
                                md: '18px',
                                sm: '16px',
                                base: '16px',
                            }}
                            fontWeight={'normal'}
                        >
                        Favoree.id adalah platform yang membantu melakukan konversi saldo antar e-wallet dengan mudah. Kamu cukup melakukan pengajuan konversi pada platform kami, dan kami menjamin saldo kamu sampai ke ewallet tujuan dengan cepat dan biaya yang sangat murah. Sehingga kamu tidak perlu takut ditipu atau kepotong biaya yang gede
                        </Text>

                        <HStack
                            pt={8}
                            spacing={{
                                base: 0,
                                sm: 0,
                                md: 4,
                                xl: 4
                            }}

                            gap={'2vh'}
                            flexDirection={{
                                base: 'column',
                                sm: 'column',
                                md: 'row',
                                xl: 'row'
                            }}
                        >
                            <Button
                                borderRadius={'10px'}
                                bg={color_base.greenblue}
                                color={color_base.white}
                                size={'lg'}
                                _hover={{
                                    bg: color_hover.greenblue,
                                }}
                                width={{
                                    base: '90vw',
                                    sm: '90vw',
                                    md: 'auto',
                                    xl: 'auto'
                                }}
                                onClick={() => {
                                    window.open(form_url, '_blank')
                                }}
                            >
                                <Text
                                    fontWeight={'medium'}
                                    fontSize={'16px'}
                                >
                                Yuk Mulai
                                </Text>
                            </Button>
                            <Button
                                borderRadius={'10px'}
                                size={'lg'}
                                border={`1px solid black`}
                                _hover={{
                                    bg: 'gray.100'
                                }}
                                width={{
                                    base: '90vw',
                                    sm: '90vw',
                                    md: 'auto',
                                    xl: 'auto'
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
                                        fontWeight={'medium'}
                                        fontSize={'16px'}
                                    >
                                        Lihat Cara Kerja
                                    </Text>
                                </ScrollTo>
                            </Button>
                        </HStack>
                    </Box>

                    <Box>
                        <Image
                            src={hero}
                        />
                    </Box>
                </HStack>
            </Box>
        </Box>

        <Box
            maxW={width < 1200 ? '90vw': '1200px'}
            margin={'auto'} 
            align={'center'}
            my={'6vh'}
        >
            <Heading
                fontSize={['18px', '20px','25px', '25px']}
            >
                Kami mendukung konversi dari e-wallet terkenal di Indonesia
            </Heading>

            <Box
                mt={'5vh'}
            >
                <HStack
                    w={'70vw'}
                    justifyContent={{
                        base: 'space-between',
                        sm: 'space-between',
                        md: 'space-around',
                        xl: 'space-around', 
                    }}

                    rowGap={'3vh'}

                    spacing={{
                        base: '7px',
                        sm: '7px',
                        md: '50px',
                        xl: '50px'
                    }}
                    wrap={{
                        base: 'wrap',
                        sm: 'wrap',
                        md: 'nowrap',
                        xl: 'nowrap',
                    }}
                >
                    <Image
                        src={gopay}
                        w={{
                            base: '30vw',
                            sm: '30vw',
                            md: '20vh',
                            xl: '20vh'
                        }}
                    />
                    <Image
                        src={dana}
                        w={{
                            base: '30vw',
                            sm: '30vw',
                            md: '20vh',
                            xl: '20vh'
                        }}
                    />
                    <Image
                        src={ovo}
                        w={{
                            base: '30vw',
                            sm: '30vw',
                            md: '20vh',
                            xl: '20vh'
                        }}
                    />
                    <Image
                        src={spay}
                        w={{
                            base: '30vw',
                            sm: '30vw',
                            md: '20vh',
                            xl: '19vh'
                        }}
                    />
                </HStack>
            </Box>
        </Box>
        </>

        // <Box
        //     maxW={{
        //         xl: '80vw',
        //         md: '80vw',
        //         sm: '90vw',
        //         base: '90vw'
        //     }}
        //     margin={'auto'}
        //     mb={'13vh'}
        //     mt={'15vh'}
        // >

        //     <Flex
        //         w={width_sizing}
        //         h={{
        //             base: '65vh',
        //             sm: '65vh',
        //             md:'55vh',
        //             xl: '55vh'
        //         }}

        //         bgColor={color_base.greenblue}
        //         borderRadius={{
        //             xl :'50px',
        //             md: '50px',
        //             sm: '30px',
        //             base: '30px'
        //         }}
        //         align={{
        //             base: 'center',
        //             md: 'flex-start'

        //         }}
        //         flexDirection={{
        //             base: "column-reverse",
        //             sm: "column-reverse",
        //             md: "row",
        //             xl:'row'
        //         }}
        //     >
        //         <Box
        //             h={'40vh'}
        //             pr={'8vw'}
        //             p={'4vw'}
        //         >
        //             <Heading
        //                 color={color_base.white}
        //                 fontSize={section_heading}
        //             >Transfer antar saldo e-wallet di Favoree.id, dijamin aman</Heading>
        //             <Text
        //                 fontSize={{
        //                     xl: '1.2rem',
        //                     md: '1.2rem',
        //                     sm: '14px',
        //                     base: '14px'
        //                 }}
        //                 my={6}
        //                 color={'#F9F9F9'}
        //             >Favoree.id adalah platform yang membantu melakukan konversi saldo antar e-wallet dengan mudah. Kamu cukup melakukan pengajuan konversi pada platform kami, dan kami menjamin saldo kamu sampai ke ewallet tujuan dengan cepat dan biaya yang sangat murah. Sehingga kamu tidak perlu takut ditipu atau kepotong biaya yang gede.</Text>
        //             <HStack
        //                 mt={{
        //                     xl:'8vh',
        //                     md: '8vh',
        //                     sm: '5vh',
        //                     base: '5vh'
        //                 }}
        //                 justifyContent={{
        //                     base: 'space-around',
        //                     sm: 'space-around',
        //                     md: 'flex-start',
        //                     xl: 'fex-start'
        //                 }}
        //             >
        //                 <CustomButton
        //                     bgColor={color_base.yellow}
        //                     hoverColor={color_hover.yellow}
        //                     m={2}
        //                     value={'Mulai Convert'}
        //                     w={{
        //                         xl: '13vw',
        //                         md: '13vw',
        //                         sm: '35vw',
        //                         base: '35vw'
        //                     }}
        //                     h={{
        //                         base: '6vh',
        //                         sm: '6vh',
        //                         md:'7vh',
        //                         xl: '7vh'
        //                     }}
        //                     isExternal={true}
        //                     url={form_url}
        //                 />
        //                 <Box
        //                     pl={{
        //                         base: 0,
        //                         sm: 0,
        //                         md: 3,
        //                         xl: 3
        //                     }}
        //                 >
        //                     <Button
        //                         bgColor={'transparent'}
        //                         border={'2px solid #FCFCFC'}
        //                         borderRadius={'100px'}
        //                         _active={{
        //                             backgroundColor: 'transparent'
        //                         }}
        //                         size={buttonSize}
        //                         w={{
        //                             xl: '13vw',
        //                             md: '13vw',
        //                             sm: '35vw',
        //                             base: '35vw'
        //                         }}
        //                         h={{
        //                             base: '6vh',
        //                             sm: '6vh',
        //                             md:'7vh',
        //                             xl: '7vh'
        //                         }}
        //                     >
        //                             <ScrollTo
        //                             selector={'#cara-kerja'} scrollOptions={{
        //                                 duration: 1000,
        //                                 delay: 100,
        //                                 smooth: true,
        //                                 offset: -100,
        //                                 block: "center",
        //                                 inline: 'center'
        //                             }}
        //                             >
        //                                 <Text
        //                                     color={color_base.white}
        //                                     fontWeight={'bold'}
        //                                     fontSize={text_description}
        //                                 >
        //                                     Lihat Cara Kerja
        //                                 </Text>
        //                             </ScrollTo>
        //                     </Button>
        //                 </Box>
        //             </HStack>
        //         </Box>


        //         <Image
        //             alt={'hero_image'}
        //             src={hero}
        //             w={{
        //                 xl:'60vh',
        //                 md:'55vh',
        //                 base:'30vh',
        //                 sm:'35vh'
        //             }}
        //         />

        //     </Flex>
        // </Box>
    )
}