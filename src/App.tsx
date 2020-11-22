import React from 'react';
import Tips from './pages/Tips/index';
import Symptoms from './pages/Symptoms/index';
import Notifications from './pages/Notifications/index';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <Notifications />
    <GlobalStyles />
  </>
);
export default App;
