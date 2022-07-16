import { Box, Flex, Heading, Text } from "@chakra-ui/react"

import { BenefitData } from "../../source/benefit"

import { BenefitItem } from "./BenefitItem"

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
                        BenefitData && BenefitData.map((item, index) => {
                            return (
                                    <BenefitItem
                                        idx={index}
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