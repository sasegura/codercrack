import type {NextConfig} from 'next';

// Configuración para GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.REPOSITORY_NAME || 'codercrack';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? `/${repositoryName}` : '',
  assetPrefix: isGithubPages ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
