/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'http',
                hostname: 'www.sputnik.kr',
            },
        ],
    },

    async redirects() {
        return [
            { source: '/product/deleted-forever', destination: '/products', permanent: true },
            {
                source: '/product/deleted',
                destination: '/product',
                permanent: false,
            },
        ];
    },

    async rewrites() {
        return [
            {
                source: '/items/:slug',
                destination: '/product/:slug',
            },
        ];
    },
};

module.exports = nextConfig;
