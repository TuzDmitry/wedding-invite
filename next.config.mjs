/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
    // output: 'export',
    trailingSlash: true,
    basePath: isGithubPages ? '/wedding-invite' : '',
    assetPrefix: isGithubPages ? '/wedding-invite/' : '',
};

export default nextConfig;
