import { extendTheme } from '@chakra-ui/react'
import "@fontsource/quicksand/600.css"


const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

const theme = extendTheme({ fonts: {
    heading: 'Quicksand',
    body: 'Quicksand',
}, config})


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