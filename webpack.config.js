var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'app/client.js',
  out: 'public',
  clearBeforeBuild: true,
  devtool: 'eval-source-map',
  html: function (context) {
    let data = {
      title: 'Planks',
      metaTags: {
        "apple-mobile-web-app-title": "Planks3",
        "application-name": "Planks3"
      }
    };
    return {
      'index.html': context.defaultTemplate(data)
    }
  }
})
