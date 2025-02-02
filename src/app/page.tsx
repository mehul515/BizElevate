"use client"

import { BackgroundLinesDemo } from "@/components/background-lines";
import CallToAction from "@/components/callToAction";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import { HowItWorks } from "@/components/howItWorks";
import { Navigation } from "@/components/navbar";
import { ImpactNumbers } from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // If the user is logged in, redirect to dashboard
      router.push('/dashboard');
    }
  }, [user, router]);
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-[#030313] w-full px-5 md:px-20 lg:px-40 flex flex-col items-center justify-start overflow-hidden">
        {/* <GoogleGeminiEffectDemo/> */}
        <div className="relative w-full min-h-screen flex justify-center items-center">
          <BackgroundLinesDemo />
        </div>
        <div className="relative w-full flex justify-center items-center">
          <Features />
        </div>
        <div className="relative w-full min-h-screen flex justify-center items-center">
          <ImpactNumbers />
        </div>
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}
