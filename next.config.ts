import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://api.dylanvaneaton.com:59632/:path*",
      },
    ];
  },
};

export default nextConfig;
