/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/new",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
