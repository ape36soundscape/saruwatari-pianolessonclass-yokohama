import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isFirebaseHosting = process.env.FIREBASE_HOSTING === "true";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "saruwatari-pianolessonclass-yokohama";

const staticExportConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { tsconfigPath: "tsconfig.github-pages.json" },
};

const nextConfig: NextConfig = isGitHubPages
  ? {
      ...staticExportConfig,
      basePath: `/${repositoryName}`,
      assetPrefix: `/${repositoryName}`,
    }
  : isFirebaseHosting
    ? staticExportConfig
  : {};

export default nextConfig;
