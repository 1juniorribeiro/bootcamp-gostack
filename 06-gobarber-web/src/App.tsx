import React from 'react';

import Globalstyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUP';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <Globalstyle />
  </>
);

export default App;
