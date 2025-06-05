import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "spotify-clone-uploads.s3.ap-southeast-2.amazonaws.com",
      "shofy-svelte.vercel.app",
    ],
  },
};

export default nextConfig;
