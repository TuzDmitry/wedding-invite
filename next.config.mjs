import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
    // output: 'export',
    trailingSlash: true,
    basePath: isGithubPages ? '/wedding-invite' : '',
    assetPrefix: isGithubPages ? '/wedding-invite/' : '',
};

// Enable bundle analyzer when ANALYZE env var is set to 'true'
const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

export default withAnalyzer(nextConfig);
