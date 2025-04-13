import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ProfilePrint/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ProfilePrint' : '',
};

export default nextConfig;
