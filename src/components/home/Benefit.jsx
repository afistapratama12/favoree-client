import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
// import { color_base } from "../Navbar"

import lock from "../../assets/image/redesign/new_lock.svg"
import clock from "../../assets/image/redesign/new_clock.svg"
import dollar from "../../assets/image/redesign/new_dollar.svg"

import { text_description } from "../../responsive"

const WhyData = [{
    title: 'Aman',
    description: 'Favoree.id menjamin 100% keamanan dengan garansi uang kembali',
    image : lock,
    alt: "lock-icon"
},{
    title: 'Praktis',
    description: 'Konversi dengan Favoree.id dapat dilakukan dimanapun dan kapanpun',
    image : clock,
    alt: "clock-icon"
}, {
    title: 'Harga Terjangkau',
    description: 'Favoree.id menawarkan biaya convert yang terjangkau',
    image : dollar,
    alt : "dollar-icon"
}]

export const BenefitItem = ({title, description, image, alt, ...props}) => {
    return (
        <Box
            maxW={{
                base: '100%',
                sm: '40vw',
                md: '33%',
                xl: '33%'
            }}
            mb={10}
            align={'center'}
        >

            <Image
                alt={alt}
                src={image}
            />
            <Box
                align={'center'}
            >
                <Heading
                    my={{
                        base: 4,
                        sm: 4,
                        md: 6, 
                        xl :6
                    }}
                    fontSize={{
                        xl :'2xl',
                        md: '2xl',
                        sm: 'lg',
                        base: 'lg'
                    }}
                >{title}</Heading>
                <Text
                    fontSize={text_description}
                >{description}</Text>
            </Box>
        </Box>
    )
}


export const Benefit = () => {
    return (
        <Box
            id={'benefit'}
            bgColor={'#E8F9FD'}
            pt={14}
            mt={10}
            pb={{
                xl: 10,
                md: 10,
                sm:1,
                base:1
            }}
        >
            <Box
                maxW={{
                    base: '92vw',
                    sm: '92vw',
                    md: '85vw',
                    xl: '6.5xl'
                }} margin={'auto'}
                align={'center'}
            >
                <Heading
                    fontSize={{
                        base: '24px',
                        sm: '24px',
                        md: '25px',
                        xl: '25px'
                    }}
                >Pilihan terbaik untuk konversi saldo mu</Heading>

                <Text
                    mt={3}
                    fontSize={{
                        xl: '18px',
                        md: '18px',
                        sm: '16px',
                        base: '16px',
                    }}
                >
                Jangan khawatir, platform kami menjamin proses konversi saldo sampai ke e-wallet tujuan
                </Text>

                <Flex
                    mt={{
                        base: 10,
                        sm: 10,
                        md: 16,
                        xl: 16
                    }}
                    justifyContent={'center'}
                    wrap={'wrap'}
                >
                    {
                        WhyData.map((item, index) => {
                            return (
                                <BenefitItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    alt={item.alt}
                                />
                            )
                        })
                    }
                </Flex>
            </Box>

        </Box>
    )
}