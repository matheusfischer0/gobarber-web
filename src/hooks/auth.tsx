import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/apiClient';

import {
  setSecureLS,
  getSecureLS,
  clearSecureLS,
} from '../utils/secureLocalStorageUtils';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: Object;
}

interface AuthContextData {
  user: Object;
  SignIn(credentials: SignInCredentials): Promise<void>;
  SignOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = getSecureLS('&Gobarber:token');
    const user = getSecureLS('&Gobarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const SignIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    setSecureLS('&Gobarber:token', token);
    setSecureLS('&Gobarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const SignOut = useCallback(() => {
    clearSecureLS('&Gobarber:token');
    clearSecureLS('&Gobarber:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
