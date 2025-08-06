import { AuthContext } from './authContext';
import { useState } from 'react';

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const whoami = {
    uname: "",
    isLogged
  };

  return (
    <AuthContext.Provider
      value={{
        whoami,
        setIsLogged
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
