/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URL: process.env.API_URL,
    UNSPLASH_AUTH_URL: process.env.UNSPLASH_AUTH_URL,
    UNSPLASH_CLIENT_ID: process.env.UNSPLASH_CLIENT_ID,
    UNSPLASH_CLIENT_SECRET: process.env.UNSPLASH_CLIENT_SECRET,
    REDIRECT_URL: process.env.REDIRECT_URL
  }
}

module.exports = nextConfig
