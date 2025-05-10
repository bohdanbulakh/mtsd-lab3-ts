'use client';
import { createContext, FC, PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';

import AuthAPI from '@/lib/api/auth/AuthApi';
import { AuthenticationContextType } from '@/types/authContext';

export const AuthenticationContext = createContext<AuthenticationContextType>({
  user: null,
  isLoading: true,
  refetchUser: () => {},
});

const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: AuthAPI.me,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <AuthenticationContext.Provider
      value={{
        user: data || null,
        isLoading: isLoading,
        refetchUser: refetch,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
