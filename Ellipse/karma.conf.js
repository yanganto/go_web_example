var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry
// delete webpackConfig.output
// delete webpackConfig.devServer
delete webpackConfig.devtool
var path = require('path')

module.exports = function (config) {
  config.set({
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    // browsers: ['ChromeWithAddons'],
    // customLaunchers: {
    //   ChromeWithAddons: {
    //     base: 'Chrome',
    //     //chromeDataDir: path.resolve(__dirname, '.chrome'),
    //     flags: [
    //       '--load-extension=' +
    //           [
    //             path.resolve(__dirname, 'chrome/lfnddfpljnhbneopljflpombpnkfhggl/0.8.0_0'),
    //           ].join(",")
    //     ]
    //   }
    // },
    frameworks: ['jasmine'],
    // this is the entry file for all our tests.
    files: ['test/test_runner.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'test/test_runner.js': ['webpack']
    },
    // use the webpack config
    webpack: webpackConfig,
    // webpack: {
    //   module: {
    //     loaders: [
    //       {
    //         test: /\.js$/,
    //         loader: 'babel',
    //         exclude: /node_modules/
    //       },
    //       {
    //         test: /\.vue$/,
    //         loader: 'vue'
    //       }
    //     ]
    //   }
    // },
    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}
