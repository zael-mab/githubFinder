/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //add google domain
    domains: ['api.github.com', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
