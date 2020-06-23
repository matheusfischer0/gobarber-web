import React from 'react';

import AppProvider from './hooks';

// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn></SignIn>
    </AppProvider>

    <GlobalStyle></GlobalStyle>
  </>
);

export default App;
