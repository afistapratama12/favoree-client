import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

import { headingFontSize } from "../../prop_style"
import basecircle from "../../assets/image/basecircle.svg"
import dropdown from "../../assets/vector/dropdown.svg"

import faq from "../../assets/image/faq_md.png"
import { colorPallet } from "../../theme"

const questionItems = [{
    question : "FAQ 1",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},{
    question : "FAQ 2",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},{
    question : "FAQ 3",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},{
    question : "FAQ 4",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}]

export const FAQItem = (props) => {
    const { question, answer } = props

    return (
        <Box
            mt={8}
        >
            <Box
                cursor={'pointer'}
                bg={colorPallet.blue_one}
                minW={{
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw"
                }}
                minH={'60px'}
                borderRadius={'100px'}
            >
                <Flex
                    justifyContent={'space-between'}
                    p={4}
                    px={8}
                >
                    <Text>{question}</Text>

                    <Image src={dropdown} boxSize={'20px'}/>
                </Flex>
            </Box>
        </Box>
    )
}

const FAQ = () => {
    return (
        <>
            <Box
                id="faq"
                class="faq"
                // mt={'140px'}
                // mb={'140px'}
                my={'140px'}
            >
                <Box>
                    <Heading
                        fontSize={headingFontSize}
                    >Frequently Asked Questions</Heading>
                </Box>

                <Flex>
                    <Box>
                        { 
                            questionItems.map((item, idx) => (
                                <FAQItem 
                                    key={idx}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))
                        }

                    </Box>

                    <Box
                        display={{
                            base: "none",
                            sm: "none",
                            md: "block",
                            xl: "block"
                        }}
                        align={'center'}
                        mt={24}
                    >
                        <Image src={basecircle} boxSize={{
                            base: '200px',
                            md: '300px',
                            xl: '400px'
                        }}/>

                        <Image src={faq} mt={'-450px'}/>
                    </Box>
                </Flex>

            </Box>
        </>
    )
}

export { FAQ }