import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { authStorage, ApiRequestError } from '@/lib/api';
import {
  loginRequest,
  meRequest,
  registerRequest,
  requestResetRequest,
  resendVerificationRequest,
  resetPasswordRequest,
  verifyEmailRequest,
  type RegisterPending,
} from '@/lib/queries';
import type { User } from '@dirly/shared';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<RegisterPending>;
  verifyEmail: (email: string, code: string) => Promise<void>;
  resendVerification: (email: string) => Promise<{ demoCode?: string }>;
  requestReset: (email: string) => Promise<{ demoCode?: string }>;
  resetPassword: (email: string, code: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    if (!authStorage.token) {
      setLoading(false);
      return;
    }
    meRequest()
      .then(({ user }) => {
        if (!cancelled) setUser(user);
      })
      .catch(() => {
        authStorage.clear();
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function login(email: string, password: string): Promise<void> {
    const res = await loginRequest(email, password);
    authStorage.token = res.token;
    queryClient.clear();
    setUser(res.user);
  }

  async function register(
    name: string,
    email: string,
    password: string,
  ): Promise<RegisterPending> {
    return registerRequest(name, email, password);
  }

  async function verifyEmail(email: string, code: string): Promise<void> {
    const res = await verifyEmailRequest(email, code);
    authStorage.token = res.token;
    queryClient.clear();
    setUser(res.user);
  }

  async function resendVerification(email: string): Promise<{ demoCode?: string }> {
    return resendVerificationRequest(email);
  }

  async function requestReset(email: string): Promise<{ demoCode?: string }> {
    return requestResetRequest(email);
  }

  async function resetPassword(email: string, code: string, password: string): Promise<void> {
    await resetPasswordRequest(email, code, password);
  }

  function logout(): void {
    authStorage.clear();
    queryClient.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin: user?.role === 'ADMIN',
        login,
        register,
        verifyEmail,
        resendVerification,
        requestReset,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth harus dipakai di dalam AuthProvider');
  return ctx;
}

export { ApiRequestError };