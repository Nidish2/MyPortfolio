/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // This helps with hydration issues in Next.js 15
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
