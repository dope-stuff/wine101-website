/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
  },
};

export default nextConfig;
