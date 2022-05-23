import { Box, Text, Flex, Button, Heading, Image } from "@chakra-ui/react"
import { colorPallet } from "../../theme"

import lock from '../../assets/vector/lock.svg'
import clock from '../../assets/vector/clock.svg'
import dollar from '../../assets/vector/dollar.svg'
import { headingFontSize } from "../../prop_style"


const WhyData = [{
    title: 'Aman',
    description: 'Favoree menjamin keamanan transaksi dengan menjamin garansi uang kembali 100%',
    image : lock
},{
    title: 'Praktis',
    description: 'Transaksi dengan Favoree dapat dilakukan dimanapun dan kapanpun',
    image : clock
}, {
    title: 'Harga Terjangkau',
    description: 'Favoree menawarkan biaya convert yang terjangkau',
    image : dollar
}]

const WhyItem = (props) => {
    const {title, description, image} = props

    return (
        <Box>
            <Flex 
                alignItems={'center'}
            >
                <Box
                    boxSize={'75px'}
                    bg={colorPallet.blue_one_half}
                    borderRadius={'100px'}
                    align={'center'}
                    minWidth={'75px'}
                >
                    <Image src={image} pt={5}/>
                </Box>
                <Box 
                    pl={{
                        base: 6,
                        sm: 6,
                        md: 4,
                        xl : 4
                    }}

                    pr={4}

                    textAlign={'left'}
                    maxW={{
                        sm: '95%',
                        md: '90%'
                    }}
                >
                    <Text
                        fontSize={{
                            sm: '17px',
                            md: '22px'
                        }}
                        pb={2}
                    >{title}</Text>
                    <Text
                        fontSize={{
                            sm: '12px',
                            md: '18px'
                        }}
                        color={'gray.600'}
                    >{description}</Text>
                </Box>
            </Flex>
        </Box>
    )
}


const Why = () => {
    return (
        <>
        <Box id={'why'} textAlign={'center'} mt={'120px'}>
            <Heading
                fontSize={headingFontSize}
            >Transaksi Aman dan Nyaman</Heading>
            <Flex mt={12} justifyContent={'space-between'} flexWrap={{
                base: 'wrap',
                md: 'nowrap'
            }}

            rowGap={{
                base: "30px"
            }}
            >
                {   
                    WhyData.map((item, index) => (
                        <WhyItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))
                }
            </Flex>
        </Box>
        </>
    )
}

export { Why }