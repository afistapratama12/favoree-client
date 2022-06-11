import { Box, Heading, HStack } from "@chakra-ui/react"
import { section_heading } from "../../responsive"

import ReactSwipe from 'react-swipe';
import useWindowDimensions from "../../useWindowDimension";

import { listTestimoni } from "../../source/testimoni";

import { TestimoniItem } from "../testimoni/TestimoniItem";
import { TestimoniItemMobile } from "../testimoni/TestimoniItemMobile";


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
                                listTestimoni && listTestimoni.map((item, index) => {
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
                        <ReactSwipe
                            className="carousel"
                            swipeOptions={{continuous: false, speed: 700}}
                            ref={el => {reactSwipeEl = el}}
                        >
                            {
                                listTestimoni && listTestimoni.map((item, index) => {
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
                </Box>
                )
            }
        </Box>

    )
}