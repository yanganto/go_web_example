let webpackDevServer = require('webpack-dev-server');
let webpack = require('webpack');
let path = require('path');
let express = require('express');
let request = require('request');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
let config = require('./webpack.config.dev.js');
let compiler = webpack(config);
let server = express();
let router = express.Router();

// router.get('/getUserInfoWithADAccount', (req, res) => {
//   request(`http://10.45.38.126:8080/G2multidivision/getUserInfoWithADAccount?userName=${process.env.USERNAME}`, (err, response, body) => {
//     let userContact = {};
//
//     if(err) {
//       userContact.status = 400;
//       userContact.statusInfo = 'Getting user contact from coc api failed';
//     } else {
//       userContact = JSON.parse(JSON.parse(body).entity);
//       userContact['DomainAccount'] = `${userContact['DomainName']}\\${process.env.USERNAME}`;
//     }
//
//     res.send(userContact);
//   });
// })
//
// router.post('/postProxy/*', (req, res) => {
//   let requestQueryParams = req.path
//                                 .split('/')
//                                 .slice(2)
//                                 .join('/');
//
//   request.post({
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     url: `http://tip-stg.trendmicro.com/postservice/postservice.ashx/${requestQueryParams}`,
//     body: JSON.stringify(req.body)
//   }, (err, response, body) => res.send(JSON.parse(body)));
// })

router.get('/$', (req, res) => {
  res.sendFile('templates/base.html', { root: __dirname });
});

server.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
}));
server.use(webpackHotMiddleware(compiler));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/', express.static('public'));
server.use(router);

server.listen(PORT, function (err) {
    if(err) {
      console.log(err);
    } else {
      console.info(`==> Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`, PORT, PORT);
    }
})
