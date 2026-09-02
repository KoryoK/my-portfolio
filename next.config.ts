import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Every route is driven by src/data/*.ts, so all pages statically generate at build time.
  // Left as a standard Next build (not `output: 'export'`) so next/image optimisation and
  // build-time OG image generation stay available on Vercel.
  reactStrictMode: true,
};

export default nextConfig;
