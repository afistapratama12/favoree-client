import { Box, Heading, HStack, Image} from "@chakra-ui/react"

import faq from "../../assets/image/redesign/faq.svg"
import { section_heading } from "../../responsive"

import { questionItems } from "../../source/faq.ts"
import { FAQItem } from "../FAQ/faqItem"

export const FAQ = () => {
    return (
        <Box
            id={'faq'}
            maxW={{
                xl: '6.5xl',
                md: '85vw',
                sm: "92vw",
                base: '92vw'
            }}
            margin={'auto'}
        > 
            <Box
                my={{
                    xl: 24,
                    md: 24,
                    sm: 16,
                    base: 16
                }}
            >
                <Heading
                    fontSize={section_heading}
                >Pertanyaan Seputar Favoree.id</Heading>

                <HStack
                    mt={{
                        base: 3,
                        sm: 3,
                        md: 10,
                        xl: 10
                    }}
                    align={'top'}
                >
                    <Box>
                        {
                            questionItems && questionItems.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                )
                            })
                        }
                    </Box>

                    <Box>
                        <Image
                            alt={'faq'}
                            src={faq}
                        />
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}