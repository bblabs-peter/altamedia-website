import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1536, 1920],
    imageSizes: [256, 384, 512],
  },
  webpack(config) {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/node_modules/**", "**/.git/**", "**/.pi/**", "**/.cocoindex_code/**"],
    };

    return config;
  },
};

export default nextConfig;
