import { Box, Image } from "@chakra-ui/react"


export const FooterSocialItem = ({key, src, alt, link}) => {
    return (
        <Box
            key={key}
            onClick={() => window.open(link, '_blank')}
            cursor={'pointer'}
        >
            <Image 
                w={{
                    base: '50px',
                    sm: '50px',
                    md: '4vw',
                    xl: '4vw'
                }}
            src={src} alt={alt}/>
        </Box>
    )
}