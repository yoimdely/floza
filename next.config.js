/** @type {import('next').NextConfig} */
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isGHPages = process.env.BUILD_TARGET === "ghpages";

const config = {
  images: { unoptimized: true },
  experimental: { typedRoutes: true },
};

if (isGHPages) {
  Object.assign(config, {
    output: "export",
    trailingSlash: true,
    basePath: base,
    assetPrefix: base ? `${base}/` : "",
  });
}

module.exports = config;
