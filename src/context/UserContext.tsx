"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase"; // Ensure supabase client is correctly initialized

interface UserContextProps {
  user: any;
  session: any;
  loading: boolean;
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user || null);
      setLoading(false); // Set loading to false after session is fetched
    };

    fetchSession();

    // Listen for session changes (e.g., login, logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user || null);
      setLoading(false); // Set loading to false after session changes
    });

    // Cleanup listener when the component is unmounted
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, session, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
