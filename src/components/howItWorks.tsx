"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, Rocket, Settings, Users } from "lucide-react"; 
import { cn } from "../../utils/cn"; // Assuming ShadCN utility for styling

const steps = [
  {
    title: "Sign Up & Create Profile",
    description:
      "Register on our platform with just a few clicks and set up your personalized profile. Add your details, preferences, and interests to get a tailored experience.",
    icon: <Users className="w-16 h-16 text-blue-500" />,
    color: "bg-blue-500",
  },
  {
    title: "Customize Your Preferences",
    description:
      "Fine-tune your account settings to match your needs. Choose notification preferences, set goals, and personalize your experience for a seamless journey.",
    icon: <Settings className="w-16 h-16 text-green-500" />,
    color: "bg-green-500",
  },
  {
    title: "Explore & Engage",
    description:
      "Start exploring the platform’s rich features, connect with like-minded individuals, and engage with exclusive content. Participate in discussions, events, and more.",
    icon: <Rocket className="w-16 h-16 text-orange-500" />,
    color: "bg-orange-500",
  },
  {
    title: "Achieve Your Goals",
    description:
      "Leverage our powerful tools and resources to stay on track and reach your objectives. Whether it's learning, networking, or productivity, we help you succeed effortlessly.",
    icon: <CheckCircle className="w-16 h-16 text-purple-500" />,
    color: "bg-purple-500",
  },
];

export function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-gray-950 text-white">
      {/* Title */}
      <motion.h2
        className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-5 py-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How Our Platform Works
      </motion.h2>

      <p className="text-xl font-medium text-gray-300 mb-12 max-w-[700px] mx-auto text-center">
      Follow these simple steps to unleash the power of our platform
      </p>

      {/* Step Progress Indicator */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-all",
              index === currentStep ? `${step.color} scale-125` : "bg-gray-700"
            )}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        className="flex flex-col items-center text-center w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gray-900 border border-gray-700 md:p-6 py-6 rounded-xl shadow-xl w-full max-w-xl">
          <CardContent className="flex flex-col items-center text-center gap-4">
            {steps[currentStep].icon}
            <h3 className="text-2xl font-semibold text-gray-200">{steps[currentStep].title}</h3>
            <p className="text-gray-300 text-lg">{steps[currentStep].description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
