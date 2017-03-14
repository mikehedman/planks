var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'app/client.js',
  out: 'public',
  clearBeforeBuild: true
})
