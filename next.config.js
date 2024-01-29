/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    env: {
      API_URL: "https://api.unsplash.com/",
      ACCESS_KEY: "BeQb4D4iCQO3mzSw5bywCnLdNNSA1oD4Jo9GameRxaA",
      SECRETE_KEY: "3Qb_EloCNENroKzWu3VUDlhJ7ltLmptYgdYzQ5XOU6o"
    }
  }
}

module.exports = nextConfig
