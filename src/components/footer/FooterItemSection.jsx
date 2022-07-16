import { Box, Text } from "@chakra-ui/react"
import { color_base } from "../../theme"

import ScrollTo from "react-scroll-into-view";

import  { useHistory } from  'react-router-dom'

export const FooterItemSection = ({title, url, is_internal, is_on_page}) => {
    const history = useHistory()


    const redirectToExternalUrl = (e, url) => {
        e.preventDefault()
        window.open(url, "_blank")
    }

    const changePage = (e, path) => {
        e.preventDefault()
        
        history.push(path)
    }

    return (
        <Box
            color={color_base.white}
            my={3}
            fontSize={{
                base: '13px',
                sm: '14px',
                md: '16px',
                xl: '16px'
            }}
        >
            {
                !is_internal ? (
                    <Text
                        onClick={(e) => redirectToExternalUrl(e, url)}

                    _hover={{
                        textDecoration: 'underline'
                            }}
                        cursor={'pointer'}
                    >{title}</Text>
                ) : is_on_page ? (<ScrollTo selector={url} scrollOptions={{
                    duration: 1000,
                    delay: 100,
                    smooth: true,
                    offset: -100,
                    block: "center",
                    inline: 'center'
                }}>
                    <Text
                        _hover={{
                            textDecoration: 'underline'
                        }}
                        cursor={'pointer'}
                    >{title}</Text>
                </ScrollTo>) : (
                    <Text
                     _hover={{
                         textDecoration: 'underline'
                     }}
                     cursor={'pointer'}
                     onClick={(e) => changePage(e, url)}
                 >{title}</Text>
                )
            }
        </Box>
    )
}