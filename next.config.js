/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["socialify.git.ci"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "socialify.git.ci",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
