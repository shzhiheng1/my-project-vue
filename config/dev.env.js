'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SOCKET_API: '"http://localhost:3000"',
  // SOCKET_API: '"ws://124.71.194.39:3000"',//服务器端socket地址
  BASE_URL_API:'"http://localhost:3001"'
})
