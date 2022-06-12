import { Box, Heading, HStack, Image, Input, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"

import add_icon from "../assets/image/blog/add_icon.svg"
//import { min_icon } from "../assets/image/blog/min_icon.svg"

import { color_base } from "../components/Navbar"

import ResizeTextarea from "react-textarea-autosize";

export const Blog = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    return (
        <Box
            maxW={'7xl'}
            margin={'auto'}
        >

            <Box>
                <HStack
                    my={2}
                    align={'center'}
                >
                    <Image
                        alt={'add_icon'}
                        src={add_icon}
                        h={'5vh'}
                    />
                    <Heading
                        color={'gray.600'}
                        fontWeight={'semibold'}
                        fontSize={'23px'}
                    >Add Category</Heading>
                </HStack>
            </Box>
            <Box>
                <Input 
                    fontFamily={'Poppins'}
                    fontWeight={'semibold'}
                    fontSize={'35px'}
                    variant="unstyled"
                    value={title} 
                    onChange={(e) => 
                    setTitle(e.target.value)} 
                    _placeholder={{
                        color: 'gray.500',
                    }}
                    placeholder="Title..."
                /> 

                <Textarea
                    minH="unset"
                    w="100%"
                    minRows={1}
                    as={ResizeTextarea}
                    fontSize={'20px'}
                    variant="unstyled"
                    display={'block'}
                    _placeholder={{
                        color: 'gray.500',
                    }}
                    placeholder="Content..."
                />
            </Box>

            <Box>
                <Box 
                    position={'fixed'}
                    bg={color_base.greenlight}
                    w={'70vw'}
                    h={'10vh'}
                    borderRadius={'15px'}
                    zIndex={'10'}
                    top={'80vh'}
                    left={'15vw'}
                >
                    <HStack p={0}>
                        <Text>Hello</Text>
                        <Text>Hello 2</Text>
                        <Text>Hello 3</Text>
                        <Text>Hello 4</Text>
                        <Text>Hello 5</Text>
                    </HStack>
                    <HStack p={0}>
                        <Text>Hello</Text>
                        <Text>Hello 2</Text>
                        <Text>Hello 3</Text>
                        <Text>Hello 4</Text>
                        <Text>Hello 5</Text>
                    </HStack>
                </Box>

            </Box>
        </Box>
    )
}