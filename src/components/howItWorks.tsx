"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Users, Settings, Rocket, CheckCircle } from "lucide-react"; // Updated icons

const steps = [
  {
    title: "Sign Up & Create Profile",
    description:
      "Get started by registering on our platform in just a few clicks. Set up your profile with details that match your interests and preferences.",
    color: "bg-blue-500",
    icon: <Users className="w-8 h-8 text-white" />,
  },
  {
    title: "Customize Your Preferences",
    description:
      "Personalize your experience by setting your preferences. Adjust notifications, set goals, and customize your account for a smooth journey.",
    color: "bg-green-500",
    icon: <Settings className="w-8 h-8 text-white" />,
  },
  {
    title: "Explore & Engage",
    description:
      "Dive into our platform’s features, connect with like-minded individuals, and engage with exclusive content, discussions, and events.",
    color: "bg-orange-500",
    icon: <Rocket className="w-8 h-8 text-white" />,
  },
  {
    title: "Achieve Your Goals",
    description:
      "Use our powerful tools and resources to stay on track and accomplish your objectives, whether in learning, networking, or productivity.",
    color: "bg-purple-500",
    icon: <CheckCircle className="w-8 h-8 text-white" />,
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-gray-950 text-white">
      {/* Title and Subtitle */}
      <motion.h2
        className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-5 py-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How Our Platform Works
      </motion.h2>

      <motion.p
        className="text-xl font-medium text-gray-300 mb-12 max-w-[700px] mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Follow these simple steps to make the most of your experience.
      </motion.p>

      {/* Steps Section with 2 items per row */}
      <div className="w-full max-w-4xl grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-indigo-500/70 to-purple-600/70 border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 flex flex-col items-center gap-6 relative">
              {/* Step Number */}
              <div
                className="absolute top-[-12px] left-[-12px] w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-2xl shadow-lg"
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${step.color}`}
              >
                {step.icon}
              </div>

              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-semibold text-gray-200">{step.title}</h3>
                <p className="text-gray-300 text-lg mt-2">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
