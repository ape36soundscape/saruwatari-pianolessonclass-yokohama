import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "saruwatari-pianolessonclass-yokohama";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath: `/${repositoryName}`,
      assetPrefix: `/${repositoryName}`,
      trailingSlash: true,
      images: { unoptimized: true },
      typescript: { tsconfigPath: "tsconfig.github-pages.json" },
    }
  : {};

export default nextConfig;
