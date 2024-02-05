import { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  userRole: string;
  setUserRole: (role: string) => void;
}

const defaultAuthContext: AuthContextProps = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userRole: '',
  setUserRole: () => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
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
