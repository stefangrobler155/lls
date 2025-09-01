/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lls.sfgweb.co.za',
      },
    ],
  },
};

module.exports = nextConfig;