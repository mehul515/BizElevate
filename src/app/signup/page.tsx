"use client";
import { useState, FormEvent, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { supabase } from '../../../lib/supabase';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner'; // Import Sonner for toast notifications
import { Spinner } from '@/components/ui/spinner'; // Import Spinner component
import { useUser } from '@/context/UserContext'; // Assuming this is your custom hook for user context

const SignUpPage = () => {
    const { user } = useUser();
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            // If the user is logged in, redirect to dashboard
            router.push('/dashboard');
        }
    }, [user, router]);

    // Handle email signup
    const handleSignup = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setError(''); // Clear any previous errors

        // Show a loading toast
        toast.loading('Creating your account...', { id: 'signup-loading' });

        try {
            const { data, error } = await supabase.auth.signUp({ email, password });

            console.log(data)
            if (error) {
                if (error.message.includes("already registered")) {
                    toast.error('Your account already exists. Redirecting to login...');
                    setTimeout(() => router.push('/login'), 2000); // Redirect to login
                    return;
                }
                throw error;
            }

            // Success message
            toast.success('Account created successfully! Please check your email for verification.');
            setTimeout(() => router.push('/login'), 2000); // Redirect to login page
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message); // Show error message to the user
                toast.error(`Signup failed: ${error.message}`); // Show error toast
            }
        } finally {
            setLoading(false); // Stop loading
            toast.dismiss('signup-loading'); // Dismiss loading toast
        }
    };


    // Handle Google OAuth signup
    const handleGoogleSignup = async () => {
        setLoading(true); // Start loading
        toast.loading('Signing up with Google...', { id: 'google-loading' });

        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google', // Using Google OAuth provider
            });
            console.log(data)

            if (error) {
                if (error.message.includes("already registered")) {
                    toast.error('Your account already exists. Redirecting to login...');
                    setTimeout(() => router.push('/login'), 2000); // Redirect to login after delay
                    return;
                }
                throw error;
            }

            // Success message
            toast.success('Signed up with Google! Redirecting...');
            setTimeout(() => router.push('/dashboard'), 2000); // Redirect to dashboard
        } catch (error) {
            console.log(error);
            toast.error('Google signup failed. Please try again.');
        } finally {
            setLoading(false);
            toast.dismiss('google-loading');
        }
    };


    return (
        <div className="relative flex h-screen bg-[#060620] text-white justify-center items-center">
            <Toaster position='top-center' />
            {/* Spinner in the center of the page */}
            {loading && (
                <div className="absolute flex items-center justify-center inset-0 bg-black bg-opacity-50">
                    <Spinner size={16} /> {/* Show spinner */}
                </div>
            )}

            <div className="flex w-full h-full rounded-lg overflow-hidden">

                {/* Left Section - Image (Hidden on mobile) */}
                <div className="hidden sm:flex sm:w-1/2 h-full justify-center items-center">
                    <Image src="/login.jpeg" alt="Signup" width={500} height={500} className="w-full h-full rounded-lg object-fill rounded-r-[60px] border-r-4 border-gray-600" />
                </div>

                {/* Right Section - Signup Form */}
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-10">
                    <div className="w-[300px] sm:w-[350px]">
                        <h2 className="text-3xl font-bold mb-6 text-center">Create an account</h2>

                        {/* Social Signup Buttons */}
                        <div className="w-full flex space-x-4 mb-4">
                            <Button
                                className="py-5 flex items-center mx-auto justify-center bg-gray-700 rounded-[7px]"
                                onClick={handleGoogleSignup}
                                disabled={loading} // Disable button during loading
                            >
                                <Image src="/googleIcon.svg" alt="Google" width={25} height={25} />
                                Sign up with Google
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
                                <label className="block mb-1 text-gray-300">Full Name</label>
                                <Input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full py-5 bg-gray-700 text-white focus:outline-none border-none rounded-[7px]"
                                    disabled={loading} // Disable input during loading
                                />
                            </div>
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

                        <div className="flex justify-between w-full text-sm text-gray-400 mt-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> I agree to the terms & conditions
                            </label>
                        </div>

                        {/* Signup Button */}
                        <div className="w-full flex flex-col items-center">
                            <Button
                                className="py-3 mt-6 mx-auto bg-blue-600 rounded-[7px]"
                                onClick={handleSignup}
                                disabled={loading} // Disable button during loading
                            >Sign Up
                            </Button>

                            {/* Link to Login */}
                            <p className="mt-4 text-gray-400">
                                Already have an account? <a href="/login" className="text-blue-500">Log in here</a>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;
