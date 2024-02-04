/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URL: process.env.API_URL,
    UNSPLASH_CLIENT_ID: process.env.UNSPLASH_CLIENT_ID,
    UNSPLASH_CLIENT_SECRET: process.env.UNSPLASH_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
  }
}

module.exports = nextConfig
