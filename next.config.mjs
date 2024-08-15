/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "wbukvccuqofmhnjlxoip.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
