import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { colorPallet } from "../../theme"
import { color_base } from "../Navbar"

import dropdown from '../../assets/image/redesign/dropdown.svg'
import dropWhite from '../../assets/image/redesign/drop_white.svg'
import { useState } from "react"


export const FAQItem = ({ question, answer, ...props }) => {
    const [isOpen, setIsOpen] = useState(false)

    const [image, setImage] = useState(dropdown)

    return (
        <Box
            mt={8}
        >
            <Box
                position={'relative'}
                zIndex={'0'}
                cursor={'pointer'}
                bg={isOpen ? color_base.greenblue : colorPallet.blue_one}
                minW={{
                    xl : '820px',
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw"
                }}
                maxW={{
                    xl: '820px',
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw" 
                }}
                minH={'60px'}
                borderRadius={'20px'}
                onClick={() => setIsOpen(!isOpen)}
                _hover={{
                    bg: color_base.greenblue
                }}

                onMouseEnter={() => setImage(dropWhite)}
                onMouseLeave={() => setImage(dropdown)}
            >
                <Flex
                    justifyContent={'space-between'}
                    p={4}
                    px={6}
                    alignItems={'center'}
                    color={isOpen ? color_base.white : 'black'}
                    _hover={{
                        color: color_base.white
                    }}
                >
                    <Text
                        fontSize={{
                            xl: '16px',
                            md: '16px',
                            sm: '14px',
                            base: '13px',
                        }}
                    >{question}</Text>
                    <Image 
                        src={isOpen ? dropWhite : image} 
                        boxSize={'20px'}
                        transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                        alt={'dropdown-button'}
                    />
                </Flex>
            </Box>
            <Box
                display={isOpen ? 'block' : 'none'}
                mt={'-35px'}
                pt={12}
                pb={4}
                px={6}
                bg={colorPallet.blue_one}
                borderRadius={'20px'}
                maxW={{
                    xl: '820px',
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw" 
                }}
                fontSize={{
                    xl: '16px',
                    md: '16px',
                    sm: '14px',
                    base: '13px',
                }}
                lineHeight={'26px'}
            >
                {answer}
            </Box>
        </Box>
    )
}