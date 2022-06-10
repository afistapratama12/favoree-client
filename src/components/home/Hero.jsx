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

const listLogoWallet = [{
    src: gopay,
    width: {
        base: '30vw',
        sm: '30vw',
        md: '25vh',
        xl: '25vh'
    }
}, {
    src: dana,
    width: {
        base: '30vw',
        sm: '30vw',
        md: '25vh',
        xl: '25vh'
    }
},{
    src: ovo,
    width: {
        base: '30vw',
        sm: '30vw',
        md: '20vh',
        xl: '20vh'
    }
},{
    src: spay,
    width: {
        base: '30vw',
        sm: '30vw',
        md: '20vh',
        xl: '19vh'
    }
}]

export const ImageLogo = ({ key, src, width }) => {
    return (
        <Box key={key}>
        <Image
            src={src}
            width={width}
        />
        </Box>
    )

}


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
                        base: 'column',
                        sm: 'column',
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
                            pt={4}
                            fontWeight={'semibold'}
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
                                width={{
                                    base: '90vw',
                                    sm: '90vw',
                                    md: 'auto',
                                    xl: 'auto'
                                }}
                                bg={'transparent'}
                                _hover={{
                                    bg: 'gray.100',
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
                            pt={10}
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
            my={'10vh'}
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
                    {
                        listLogoWallet.map((item, index) => {
                            return (
                                <ImageLogo
                                    key={index}
                                    src={item.src}
                                    width={item.width}
                                />
                            )
                        })
                    }
                </HStack>
            </Box>
        </Box>
        </>
    )
}