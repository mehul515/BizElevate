"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Rocket } from "lucide-react";

const features = [
  {
    title: "💡 Innovative Solutions",
    description: "Leverage AI, automation, and advanced technologies to simplify complex tasks and drive continuous innovation in your business.",
    icon: <Sparkles className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "⚡ Rapid Deployment",
    description: "Launch your projects in record time with streamlined processes, ensuring faster go-to-market with minimal setup and maximum efficiency.",
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "🛡️ Secure & Reliable",
    description: "Benefit from top-tier security measures and reliable uptime, ensuring protection for your data and uninterrupted operations every day.",
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 text-white text-center">
      <motion.h2
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Makes Us Stand Out?
      </motion.h2>

      <p className="text-xl font-medium text-white mb-12 max-w-[700px] mx-auto">
        Explore the features that set us apart, driving your success through innovation, speed, and reliability.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.1 + index * 0.2 }} // Added a slight delay to each feature
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition"
          >
            <div className="flex flex-col items-center gap-4">
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
