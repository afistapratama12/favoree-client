import { Box, Text, Flex, Button, Heading, Image } from "@chakra-ui/react"
import { colorPallet } from "../../theme"

import lock from '../../assets/vector/lock.svg'
import map from '../../assets/vector/map.svg'
import clock from '../../assets/vector/clock.svg'
import dollar from '../../assets/vector/dollar.svg'
import { headingFontSize } from "../../prop_style"

const Why = () => {
    return (
        <>
        <Box id={'why'} textAlign={'center'} mt={20}>
            <Heading
                fontSize={headingFontSize}
            >Mengapa Memilih Kami</Heading>
            <Text
                mt={2}
                color={'gray.600'}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>

            <Flex mt={12} justifyContent={'space-between'}>
                <Flex 
                    alignItems={'center'}
                >
                    <Box
                        boxSize={'70px'}
                        bg={colorPallet.blue_one_half}
                        borderRadius={'100px'}
                        align={'center'}
                    >
                        <Image src={lock} pt={3}/>
                    </Box>
                    <Box px={4}>
                        <Text
                            fontSize={'20px'}
                        >Aman</Text>
                    </Box>
                </Flex>

                <Flex 
                    alignItems={'center'}
                >
                    <Box
                        boxSize={'70px'}
                        bg={colorPallet.blue_one_half}
                        borderRadius={'100px'}
                        align={'center'}
                    >
                        <Image src={map} pt={4}/>
                    </Box>
                    <Box px={4}>
                        <Text
                            fontSize={'20px'}
                        >Dimana Saja</Text>
                    </Box>
                </Flex>


                <Flex 
                    alignItems={'center'}
                >
                    <Box
                        boxSize={'70px'}
                        bg={colorPallet.blue_one_half}
                        borderRadius={'100px'}
                        align={'center'}
                    >
                        <Image src={clock} pt={4}/>
                    </Box>
                    <Box px={4}>
                        <Text
                            fontSize={'20px'}
                        >Kapan Saja</Text>
                    </Box>
                </Flex>


                <Flex 
                    alignItems={'center'}
                >
                    <Box
                        boxSize={'70px'}
                        bg={colorPallet.blue_one_half}
                        borderRadius={'100px'}
                        align={'center'}
                    >
                        <Image src={dollar} pt={4}/>
                    </Box>
                    <Box px={4}>
                        <Text
                            fontSize={'20px'}
                        >Harga Terjangkau</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
        </>
    )
}

export { Why }