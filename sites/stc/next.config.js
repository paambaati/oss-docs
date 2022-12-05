/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  flexsearch: {
    codeblocks: false,
  },
  unstable_staticImage: true,
});
module.exports = withNextra(nextConfig);
