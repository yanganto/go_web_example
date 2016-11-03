var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry
module.exports = function (config) {
  config.set({
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    // this is the entry file for all our tests.
    files: ['static/js/test/example.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'static/js/test/example.js': ['webpack']
    },
    // use the webpack config
    webpack: webpackConfig,
    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}
