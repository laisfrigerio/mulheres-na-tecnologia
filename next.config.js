/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [],
        unoptimized: false,
        domains: [],
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = nextConfig;
