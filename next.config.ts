import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://jwdqnstvkkygznzzdfoj.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jwdqnstvkkygznzzdfoj.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
