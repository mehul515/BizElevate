"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import {Spinner} from "@/components/ui/spinner"; // Update with the correct path to your spinner component

const Dashboard = () => {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirect to login if no user found
    }
  }, [user, loading, router]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex flex-col items-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome to the Dashboard, {user?.email}
        </h1>

        <div className="text-center mb-6">
          <p className="text-gray-600">
            This is your dashboard. Here you can access your account details and more.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
