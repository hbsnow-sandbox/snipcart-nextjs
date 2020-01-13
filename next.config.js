/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require('@zeit/next-typescript')
require('dotenv').config()

module.exports = withTypescript({
  env: {
    API_KEY: process.env.API_KEY,
  }
})
