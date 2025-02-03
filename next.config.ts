import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["pages", "components", "lib", "utils"], // Adjust based on your project structure
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
};

export default nextConfig;
