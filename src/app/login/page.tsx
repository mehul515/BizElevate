"use client";
import { useState, FormEvent, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { toast, Toaster } from 'sonner'; // Import Sonner for toast notifications
import { Spinner } from '@/components/ui/spinner'; // Import Spinner component
import { useUser } from '@/context/UserContext'; // Import the user context hook

const LoginPage = () => {
    const router = useRouter();
    const { user, loading: contextLoading } = useUser(); // Get user context
    console.log(contextLoading);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false); // Add loading state

    // If the user is already logged in, redirect them to the dashboard
    useEffect(() => {
        if (user) {
            router.push('/dashboard'); // Redirect to dashboard if user is logged in
        }
    }, [user, router]);

    // Handle email login
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        setError(''); // Clear any previous errors

        // Show a loading toast
        toast.loading('Logging you in...', { id: 'login-loading' });

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            console.log(data);
            if (error) throw error;

            const user = data?.user; // Access the user from data
            console.log("User logged in:", user);

            // Success message
            toast.success('Logged in successfully!');

            // Redirect to dashboard after successful login
            router.push('/dashboard');
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message); // Set error message
                toast.error(`Login failed: ${error.message}`); // Show error toast
            }
        } finally {
            setLoading(false); // Stop loading
            toast.dismiss('login-loading'); // Dismiss loading toast
        }
    };

    // Handle Google OAuth login
    const handleGoogleLogin = async () => {
        setLoading(true); // Set loading state to true
        toast.loading('Logging in with Google...', { id: 'google-loading' });

        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });

            if (error) {
                throw error;
            }

            // Success message
            toast.success('Logged in with Google successfully!', {duration:1000});
            router.push('/dashboard'); // Redirect to dashboard after Google login
        } catch (error) {
            console.log(error)
            toast.error('Google login failed. Please try again.');
        } finally {
            setLoading(false);
            toast.dismiss('google-loading');
        }
    };

    return (
        <div className="relative flex h-screen bg-[#060620] text-white justify-center items-center">
            <Toaster position='top-center'/>
            {/* Spinner in the center of the page */}
            {loading && (
                <div className="absolute flex items-center justify-center inset-0 bg-black bg-opacity-50">
                    <Spinner size={16} /> {/* Show spinner */}
                </div>
            )}

            <div className="flex w-full h-full rounded-lg overflow-hidden">
                {/* Left Section - Login Form */}
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-10">
                    <div className="w-[300px] sm:w-[350px]">
                        <h2 className="text-3xl font-bold mb-6 text-center">Welcome back</h2>

                        {/* Social Login Buttons */}
                        <div className="w-full flex space-x-4 mb-4">
                            <Button
                                className="mx-auto py-5 flex items-center justify-center bg-gray-700 rounded-[7px]"
                                onClick={handleGoogleLogin}
                                disabled={loading} // Disable button during loading
                            >
                                <Image src="/googleIcon.svg" alt="Google" width={25} height={25} />
                                Log in with Google
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="my-6 w-full flex items-center">
                            <hr className="flex-grow border-gray-700" />
                            <span className="mx-4 text-gray-400">or</span>
                            <hr className="flex-grow border-gray-700" />
                        </div>

                        {/* Email and Password Form */}
                        <div className="w-full space-y-4">
                            <div>
                                <label className="block mb-1 text-gray-300">Email</label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full py-5 bg-gray-700 text-white focus:outline-none border-none rounded-[7px]"
                                    disabled={loading} // Disable input during loading
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-300">Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full py-5 bg-gray-700 rounded-[7px] border-none text-white focus:outline-none"
                                    disabled={loading} // Disable input during loading
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 mt-2">{error}</p>}

                        <div className='w-full flex flex-col items-center'>
                            {/* Login Button */}
                            <Button
                                className="py-3 mt-6 bg-blue-600 rounded-[7px]"
                                onClick={handleLogin}
                                disabled={loading} // Disable button during loading
                            >
                                Sign in
                            </Button>

                            {/* Link to Signup */}
                            <p className="mt-4 text-gray-400">
                                Don&apos;t have an account? <a href="/signup" className="text-blue-500">Sign up here</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image (Hide on mobile) */}
                <div className="hidden sm:flex sm:w-1/2 h-full justify-center items-center">
                    <Image src="/login.jpeg" alt="Login" width={500} height={500} className="w-full h-full rounded-lg object-fill rounded-l-[60px] border-l-4 border-gray-600" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
