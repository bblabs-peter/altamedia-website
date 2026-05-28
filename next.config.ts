import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/node_modules/**", "**/.git/**", "**/.pi/**", "**/.cocoindex_code/**"],
    };

    return config;
  },
};

export default nextConfig;
