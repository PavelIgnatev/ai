import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  api: {
    responseLimit: false,
  },
  serverActions: {
    bodySizeLimit: "10mb",
  },
  experimental: {
    // Включаем экспериментальные функции при необходимости
  },
};

export default nextConfig;
