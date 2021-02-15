import React from 'react';

import Globalstyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUP';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <Globalstyle />
  </>
);

export default App;
