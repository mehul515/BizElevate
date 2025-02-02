"use client";

import { Card } from "@/components/ui/card"; // ShadCN UI
import { motion } from "framer-motion";
import { Users, Globe, ShieldCheck, Rocket } from "lucide-react"; // Icons
import { AnimatedStatistic } from "./ui/animatedStatistics";

const stats = [
    { title: "Active Users", value: 100000, suffix:"+", description: "Trusted by developers worldwide", icon: <Users className="w-10 h-10 text-purple-400" /> },
    { title: "Global Reach", value: 50, suffix:"+ Countries", description: "Serving clients across the globe", icon: <Globe className="w-10 h-10 text-blue-400" /> },
    { title: "Security", value: 99, suffix:"% Uptime", description: "Ensuring top-tier reliability", icon: <ShieldCheck className="w-10 h-10 text-green-400" /> },
    { title: "Performance", value: 10, suffix:"K+ Projects", description: "Helping businesses scale efficiently", icon: <Rocket className="w-10 h-10 text-orange-400" /> },
];

export function ImpactNumbers() {
    return (
        <section className="py-20 text-white flex flex-col items-center">
            {/* Title */}
            <motion.h2
                className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-5 py-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Our Impact in Numbers
            </motion.h2>

            <p className="text-xl font-medium text-white mb-12 max-w-[700px] mx-auto text-center">
                Driving growth with 100,000+ users, global reach, top security, and unmatched performance.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl p-8 flex justify-between items-center w-full md:w-[450px] transition-transform">
                            <div>
                                <h3 className="text-lg font-medium text-gray-300">{stat.title}</h3>
                                <div className="text-2xl md:text-3xl font-bold">
                                    <AnimatedStatistic end={stat.value} suffix={stat.suffix} />
                                </div>
                                {/* <p className="text-4xl font-bold text-white">{stat.value}</p> */}
                                <p className="text-md text-gray-400">{stat.description}</p>
                            </div>
                            {stat.icon}
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};