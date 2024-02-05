/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URL: process.env.API_URL,
    UNSPLASH_AUTH_URL: process.env.UNSPLASH_AUTH_URL,
    PERMISSION_SCOPES: process.env.PERMISSION_SCOPES,
    UNSPLASH_CLIENT_ID: process.env.UNSPLASH_CLIENT_ID,
    UNSPLASH_CLIENT_SECRET: process.env.UNSPLASH_CLIENT_SECRET,
    REDIRECT_URL: process.env.REDIRECT_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/images.unsplash.com/**',

      },
    ],
  },
}

module.exports = nextConfig