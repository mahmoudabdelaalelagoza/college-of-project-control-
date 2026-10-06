import { fileURLToPath, URL } from 'node:url';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || process.env.VITE_GTM_ID || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-build',
  output: 'export',
  pageExtensions: ['next.tsx', 'next.ts', 'next.jsx', 'next.js'],
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath && basePath !== '/' ? basePath : undefined,
  webpack(config, { webpack }) {
    config.resolve.alias['@'] = fileURLToPath(new URL('./src', import.meta.url));
    config.plugins.push(
      new webpack.DefinePlugin({
        __BASE_PATH__: JSON.stringify(basePath || '/'),
        __IS_PREVIEW__: JSON.stringify(false),
        __READDY_PROJECT_ID__: JSON.stringify(''),
        __READDY_VERSION_ID__: JSON.stringify(''),
        __READDY_AI_DOMAIN__: JSON.stringify(''),        'import.meta.env.VITE_GTM_ID': JSON.stringify(gtmId),
      }),
    );
    return config;
  },
};

export default nextConfig;

