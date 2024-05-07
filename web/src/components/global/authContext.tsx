import React, { useState, ReactNode } from 'react';
import { AuthContext } from '../../tools';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userRole, setUserRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
