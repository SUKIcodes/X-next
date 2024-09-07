/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.livemint.com",
      },
    ],
  },
};

export default nextConfig;
