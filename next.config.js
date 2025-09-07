/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router est stable dans Next.js 14+, pas besoin d'experimental
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Permettre les builds même avec des warnings ESLint
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Permettre les builds même avec des erreurs TypeScript
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
