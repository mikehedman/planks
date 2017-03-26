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
        "apple-mobile-web-app-title": "Planks",
        "application-name": "Planks",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default"
      }
    };
    return {
      'index.html': context.defaultTemplate(data)
    }
  }
})
