process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/21mafia/'
  //   : '/'
}