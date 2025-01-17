/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'templatecookie.com',
      },
      {
        protocol: 'https',
        hostname: 'jugglehire.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'rosjxfydjsfhbpimtuos.supabase.co',
      }
    ],
  },
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;