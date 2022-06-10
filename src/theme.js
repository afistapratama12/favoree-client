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

const theme = extendTheme({ 
    fonts: {
        heading: 'Poppins',
        body: 'Inter',
    },
    components: {
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