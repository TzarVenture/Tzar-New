import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimized next/image responses for 7 days (default is 60 seconds).
    minimumCacheTTL: 604800,
  },
  devIndicators: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  // Static files in /public are served with max-age=0 by default, so every
  // repeat visit re-validates every image. These folders hold images, videos,
  // icons and the Lottie WASM. File names are not content-hashed, so keep the
  // lifetime moderate: if a file is replaced under the same name, visitors get
  // the new one within 7 days (rename the file to update it immediately).
  async headers() {
    const cacheControl = "public, max-age=604800, stale-while-revalidate=86400";
    return ["/optimized/:path*", "/assets/:path*", "/mockups/:path*", "/tech-icons/:path*"].map(
      (source) => ({ source, headers: [{ key: "Cache-Control", value: cacheControl }] })
    );
  },
};

export default nextConfig;
