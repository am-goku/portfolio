/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "updates.theme-fusion.com",
      "placekitten.com",
      "images.unsplash.com",
    ],
  },
  env: {
    RESEND_API: process.env.RESEND_API,
    EMAIL: process.env.EMAIL,
  },
  webpack: (config, { isServer }) => {
    // For handling PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192, // in bytes
            fallback: "file-loader",
            publicPath: "/_next/static/assets/files/",
            outputPath: `${isServer ? "../" : ""}static/assets/files/`,
            name: "[name].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig
