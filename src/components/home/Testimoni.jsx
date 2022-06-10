import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { section_heading, text_description } from "../../responsive"

import ReactSwipe from 'react-swipe';
import useWindowDimensions from "../../useWindowDimension";

const testiData = [{
    title : 'Sangat Ingin Merekomendasikan Platform ini',
    name: 'Ismail Habibi',
    text: `Jasa Convert dari Favoree.id sangat membantu masalah saya yang ingin pindah saldo e-wallet dengan cepat. Saya sangat ingin merekomendasikan platform ini.`
},{
    title : 'Sangat Puas',
    name: 'Rakryan',
    text: 'Fiturnya sudah bagus, respon admin untuk transaksi juga cepat, mungkin kedepannya bisa dibuat otomatis saja di website jadi lebih praktis'
}, {
    title : 'Sangat Puas',
    name: 'Lilis Suryani',
    text: 'Pelayanan cepat, respon nya juga cepat, Terima kasih banyak Favoree.id. Saya sangat puas dengan pelayanan yang diberikan.'
}, {
    title : 'Puas',
    name: 'Martha',
    text: 'Favoree.id membantu banget, kalau mau transaksi ga perlu nanya ada saldo ini itu, tinggal transfer terus isi google form aja, jadinya praktis banget.'
}]


export const TestimoniItemMobile = ({title, name , text}) => {
    return (
        <Box
            bgColor={'#E8F9FD'}
            //w={'46%'}
            boxShadow={'md'}

            w={'85vw'}

            align={'center'}
            
            h={{
                base: '37vh',
                sm: '35vh',
                md:'33vh',
                xl: '33vh'
            }}
            p={1}
            mx={4}
            borderRadius={'3xl'}
        >

            <Box
                maxW={'85%'}
                mt={'4vh'}
            >
                <Heading
                    fontSize={{
                        xl: '24px',
                        md: '22px',
                        sm: '20px',
                        base: '16px'
                    }}
                >{name}</Heading>
                <Text
                    fontSize={{
                        xl: '20px',
                        md: '18px',
                        sm: '16px',
                        base: '14px'
                    }}
                    mt={2}
                >{title}</Text>
                <Text
                    fontSize={text_description}
                    mt={4}
                >{text}</Text>
            </Box>

            
        </Box>
    )
}


export const TestimoniItem = ({ title, name, text}) => {
    return (
        <Box
            bgColor={'#E8F9FD'}
            w={'48%'}
            
            h={{
                xl: '30vh',
                md: '30vh',
                sm: '40vh',
                base: '40vh'
            }}
            my={10}
            mx={2}
            borderRadius={'3xl'}
        >

            <Box
                maxW={'85%'}
                mt={'4vh'}
            >
                <Heading
                    fontSize={{
                        xl: '24px',
                        md: '22px',
                        sm: '20px',
                        base: '16px'
                    }}
                >{name}</Heading>
                <Text
                    fontSize={{
                        xl: '20px',
                        md: '18px',
                        sm: '16px',
                        base: '14px'
                    }}
                    mt={2}
                >{title}</Text>
                <Text
                    fontSize={text_description}
                    mt={4}
                >{text}</Text>
            </Box>

            
        </Box>
    )
}


export const Testimoni = () => {
    let reactSwipeEl;

    const { width } = useWindowDimensions()

    return (
        <Box
            id={'testimoni'}
            maxW={{
                base: '95vw',
                sm: '95vw',
                md: '85vw',
                xl: '6.5xl'
            }}
            margin={'auto'}
        >

            <Box
                mt={{
                    xl:20,
                    md: 20,
                    sm: 20,
                    base: 16
                }}
                mb={{
                    base: 10,
                    sm: 12,
                    md: 16,
                    xl: 16
                }}

                align={'center'}
            >
                <Heading
                    fontSize={section_heading}
                    fontWeight={'semibold'}
                >Kata Mereka</Heading>
                {
                    width > 768 && (
                        <HStack
                            wrap={'wrap'}
                            justifyContent={'space-between'}
                        >
                            {
                                testiData.map((item, index) => {
                                    return (    
                                        <TestimoniItem
                                            title={item.title}
                                            name={item.name}
                                            text={item.text}
                                        />
                                    )
                                })
                            }
                        </HStack>
                    )
                }
            </Box>

            {
                width < 768 && (
                    <Box>
                    {/* <HorizontalScroll
                        pageLock={false}
                        reverseScroll={true}
                        style={{ width: `90vw`, height: `40vh`}}
                    > */}

                        <ReactSwipe
                            className="carousel"
                            swipeOptions={{continuous: false, speed: 500}}
                            ref={el => {reactSwipeEl = el}}
                        >
                            {
                                testiData.map((item, index) => {
                                    return (
                                        <Box key={index}
                                        >
                                            <TestimoniItemMobile
                                                title={item.title}
                                                name={item.name}
                                                text={item.text}
                                            />
                                        </Box>
                                    )
                                })
                            }
                        </ReactSwipe>

                    {/* </HorizontalScroll> */}
                </Box>

                )
            }
        </Box>

    )
}