import { extendTheme } from '@chakra-ui/react'

import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/400.css"

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
};

const theme = extendTheme({ 
    fonts: {
        heading: 'Poppins',
        body: 'Inter',
    },
    components: {
        Form: {
            variants: {
                floating: {
                    container : {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles
                            }
                        },
                        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
                            ...activeLabelStyles
                        },
                        label: {
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: "absolute",
                            backgroundColor: "white",
                            pointerEvents: "none",
                            mx: 3,
                            px: 1,
                            my: 2,
                            transformOrigin: "left top"
                        }
                    }
                }
            }
        },
        Button: {
            fontFamily: 'Inter',
        },
        heading: {
            fontFamily: 'Poppins',
            fontWeight: {
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            }
        },
        Text: {
            fontFamily: 'Inter',
            fontWeight: {
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            }
        }
    }   

, config})


const colorPallet = {
    blue_zero : '#F2FDFF',
    blue_one: '#E8F9FD',
    blue_one_half: '#D1F6FF',
    blue_two: '#AEF0FF',
    blue_three: '#0AA1DD',
    blue_four: '#2155CD'
}

// color pallet mode

export {theme, config, colorPallet}