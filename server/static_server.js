

var express = require('express')
var app = express()

app.use(express.static('public'));
app.listen(3001, function () {
  console.log('Static server listening on port 3001!')
})

//import path from 'path';
// app.set('view engine', 'jade');
// app.set('views', path.join(__dirname, 'views'));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
//
// app.use(config.assetsPublicPath, express.static(path.join(__dirname, 'public')));
//
// import api from './api/';
// app.use('/api/', api);
//
// // Development
// if (process.env.NODE_ENV === 'development') {
//   const webpack = require('webpack');
//   const webpackDevServer = require('webpack-dev-server');
//   const webpackDevConfig = require('../webpack.dev.js');
//
//   new webpackDevServer(webpack(webpackDevConfig), {
//     publicPath: config.assetsPublicPath,
//     contentBase: path.resolve(__dirname, 'public'),
//     inline: true,
//     hot: true,
//     historyApiFallback: true,
//     noInfo: true,
//     proxy: {
//       "/api/*": "http://127.0.0.1:3000"
//     }
//   }).listen(8080, "localhost", () => { console.log('[WDS started on 8080]'); });
// } else {
//   app.use('*', uniRouter);
// }
