import { Button, Text, useBreakpointValue } from "@chakra-ui/react"


export const CustomButton = (props) => {
    const { bgColor, color, m, value, hoverColor, isExternal, url, onOpen,...childProps } = props

    const buttonSize = useBreakpointValue(['xs', 'md'], 'w-full', 'w-auto')

    return (
        <Button
            bgColor={bgColor}
            borderRadius={'10px'}
            _hover={{
                backgroundColor: hoverColor
            }}
            _active={{
                backgroundColor: bgColor
            }}
            onClick={() => {
                if (isExternal) {
                    window.open(url, '_blank')
                } else {
                    onOpen()
                }
            }}
            size={buttonSize}
            {...childProps}

            minHeight={'32px'}
        >
            <Text
                color={color || 'black'}
                m={m}
                fontWeight={'normal'}
                fontSize={{
                    xl: '16px',
                    md: '16px',
                    sm: '14px',
                    base: '13px',
                }}
            >
                {value}
            </Text>
        </Button>
    )
}