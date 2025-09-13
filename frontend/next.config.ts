import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  // 讓 Next.js 知道 frontend 才是實際 root 目錄
  outputFileTracingRoot: path.join(__dirname, 'frontend'),
};

export default nextConfig;
