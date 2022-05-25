import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Homepage } from './pages/Homepage';
import { theme } from './theme';
import Helmet from 'react-helmet';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import { TermCondition } from './pages/TermCondition';
// import { Workflow } from './pages/Workflow';
import { PageNotFound } from './pages/PageNotFound';

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
        <Router>
          <Switch>
              {/* <Route exact path={`/term-and-condition`} component={TermCondition}/> */}
              {/* <Route exact path={`/workflow`} component={Workflow}/> */}
              <Route exact path={`/`} component={Homepage}/>
              <Route path={"*"} component={PageNotFound}/>
          </Switch>
        </Router>
    </ChakraProvider>
  );
}

export default App;
