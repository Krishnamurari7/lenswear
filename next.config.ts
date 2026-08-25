import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Site bootstraps vanilla Three.js + scroll engine once on mount.
  reactStrictMode: false,
  // Parent E:\package-lock.json otherwise becomes the inferred workspace root.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
