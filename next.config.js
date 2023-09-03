/** @type {import('next').NextConfig} */
const nextConfig = {};

const dotenv = require("dotenv");
dotenv.config();

module.exports = nextConfig;

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "variables.scss";`,
  },
};
