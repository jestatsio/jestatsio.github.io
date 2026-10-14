/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Directory-style output so /concepts/ serves the showcase as its
  // index page, alongside the static concept folders in public/concepts/.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
