import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './theme';
import Helmet from 'react-helmet';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { TermCondition } from './pages/TermCondition';
import { PageNotFound } from './pages/PageNotFound';

import { path } from './routes/route';
import ScrollToTop from './ScrollToTop';
import { HomePage } from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Helmet bodyAttributes={{style : 'background-color: #F8FBFD; color: #000000;'}}/>
        <Router>
          <ScrollToTop>
          <Switch>
              <Route exact path={path.home} component={HomePage}/>
              <Route exact path={path.termAndCondition} component={TermCondition}/>
              <Route path={path.any} component={PageNotFound}/>
          </Switch>
          </ScrollToTop>
        </Router>
    </ChakraProvider>
  );
}

export default App;
