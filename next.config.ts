import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  devIndicators: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
