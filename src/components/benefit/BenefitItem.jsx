import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { text_description } from "../../responsive"

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
                    maxW={{
                        base: 'auto',
                        sm: 'auto',
                        md: '90%',
                        xl: '90%'
                    }}
                    fontSize={text_description}
                >{description}</Text>
            </Box>
        </Box>
    )
}