/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    // The builds started failing in Vercel due to the size of uploaded functions being too big.
    // See https://github.com/orgs/vercel/discussions/103#discussioncomment-5626211
    outputFileTracingExcludes: {
      "*": [
        "node_modules/@swc/core-linux-x64-gnu",
        "node_modules/@swc/core-darwin-x64",
        "node_modules/@esbuild/darwin-x64",
        "node_modules/@esbuild/linux-x64",
        "node_modules/sass/sass.dart.js",
      ],
    },
    useDeploymentId: true,
    instrumentationHook: true,
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["."],
  },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "**.matsmart.se",
      },
      {
        protocol: "https",
        hostname: "**.matsmart.fi",
      },
      {
        protocol: "https",
        hostname: "**.motatos.se",
      },
      {
        protocol: "https",
        hostname: "**.motatos.dk",
      },
      {
        protocol: "https",
        hostname: "**.motatos.de",
      },
      {
        protocol: "https",
        hostname: "**.motatos.at",
      },
      {
        protocol: "https",
        hostname: "**.platformsh.site",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
