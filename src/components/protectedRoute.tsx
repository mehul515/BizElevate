// components/ProtectedRoute.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext'; // Assuming user context is here

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Redirect to login page if no user is logged in
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null; // Optionally, you can show a loading spinner while redirecting
  }

  return <>{children}</>; // Render children (protected page) if user exists
};

export default ProtectedRoute;
