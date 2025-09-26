const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "variables.scss";`,
  },
  // Allow external font domains and handle problematic images
  images: {
    domains: ['fonts.gstatic.com'],
    unoptimized: true, // Disable image optimization to avoid EXIF issues
  },
  // Headers for font loading
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
