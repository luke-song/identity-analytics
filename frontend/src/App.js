import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/sidebar';
import Main from './components/Main/main';
import Analytics from './components/Analytics/analytics';
import Setting from './components/Setting/setting';

/*
 * Create Conatainer with a horizontal flex layout that has the Sidebar and the main section.
 * Main section is going to have flex-grow.
 * Sidebar will have flex-shrink to fixed size and will have fertical flex layout with contents aligned to the start and justife-content to center.
 * Main should also contain vertical flex layout and have horizontal flex with flex-shrink for the title and svg submit button
 */

/*
 * Uses React Router to render the correct component based on the URL.
 * Uses Flex to layout the components.
 * Uses ChakraProvider to set the theme.
 */

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Router>
          <Sidebar />
          <Flex>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </Flex>
        </Router>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
