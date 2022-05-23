import React from 'react';
import {
  Box,
  ChakraProvider,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Homepage } from './pages/Homepage';
import { theme } from './theme';
import Helmet from 'react-helmet';


// <Grid minH="100vh" p={3}> 

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Helmet>
          <style>{'body { background-color: #F8FBFD; color: #000000;}'}</style>
          <script>
             { `document.body.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });` }
          </script>
        </Helmet>
        <Homepage/>
    </ChakraProvider>
  );
}

export default App;
