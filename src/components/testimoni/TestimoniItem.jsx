import { Box, Heading, Text } from "@chakra-ui/react"
import { text_description } from "../../responsive"

export const TestimoniItem = ({key, title, name, text}) => {
    return (
        <Box
            key={key}
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