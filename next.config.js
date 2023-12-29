/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

module.exports = nextConfig;
