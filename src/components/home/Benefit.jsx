import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { color_base } from "../Navbar"

import lock from "../../assets/image/redesign/lock.svg"
import clock from "../../assets/image/redesign/clock.svg"
import dollar from "../../assets/image/redesign/dollar.svg"
import { section_heading, text_description } from "../../responsive"

const WhyData = [{
    title: 'Aman',
    description: 'Favoree menjamin keamanan transaksi dengan menjamin garansi uang kembali 100%',
    image : lock,
    alt: "lock-icon"
},{
    title: 'Praktis',
    description: 'Transaksi dengan Favoree dapat dilakukan dimanapun dan kapanpun',
    image : clock,
    alt: "clock-icon"
}, {
    title: 'Harga Terjangkau',
    description: 'Favoree menawarkan biaya convert yang terjangkau',
    image : dollar,
    alt : "dollar-icon"
}]

export const BenefitItem = ({title, description, image, alt, ...props}) => {
    return (
        <HStack
            alignItems={'center'}
            maxW={{
                base: '100%',
                sm: '40vw',
                md: '32%',
                xl: '32%'
            }}
            justifyContent={{
                base: 'space-between',
                sm: 'center',
            }}
            mb={10}
        >
            <Box
                bg={color_base.greenblue}
                borderRadius={'100px'}
                boxSize={{
                    xl :'10vh',
                    md: '10vh',
                    sm: '7vh',
                    base: '7vh'
                }}
                align={'center'}
                minW={{
                    xl :'10vh',
                    md: '10vh',
                    sm: '7vh',
                    base: '7vh'
                }} 
            >

                {
                    title === 'Harga Terjangkau' ? (
                        <Image
                        pt={{
                            xl: 5,
                            md: 5,
                            sm: 3,
                            base: 3
                        }}
                        alt={alt}
                        src={image}
                        w={{
                            xl: 'auto',
                            md: 'auto',
                            sm: '2vh',
                            base: '2vh'
                        }}
                    />
                    ) : (
                        <Image
                        pt={{
                            xl: 5,
                            md: 5,
                            sm: 3,
                            base: 3
                        }}
                        alt={alt}
                        src={image}
                        w={{
                            xl: 'auto',
                            md: 'auto',
                            sm: '3vh',
                            base: '3vh'
                        }}
                    />

                    )
                }
            </Box>

            <Box
                pl={{
                    xl: 4,
                    md: 4,
                    sm: 0,
                    base: 0
                }}
                align={'left'}
            >
                <Text
                    fontSize={{
                        xl :'2xl',
                        md: '2xl',
                        sm: 'lg',
                        base: 'lg'
                    }}
                >{title}</Text>
                <Text
                    fontSize={text_description}
                >{description}</Text>
            </Box>
        </HStack>
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
                    fontSize={section_heading}
                >Transaksi Aman dan Nyaman</Heading>

                <Flex
                    my={10}
                    justifyContent={'space-around'}
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