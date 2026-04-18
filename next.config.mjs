/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Strict Mode
    reactStrictMode: true,

    // Whitelist domains for next/image if needed in future
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
            },
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
            },
            {
                protocol: 'https',
                hostname: 'unpkg.com',
            },
        ],
    },

    // Build output configuration (if needed for standalone/export)
    // output: 'standalone',
};

export default nextConfig;

