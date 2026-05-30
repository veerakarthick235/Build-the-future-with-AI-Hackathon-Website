import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore: Next.js 16 types are sometimes out of sync with actual Turbopack config options
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
