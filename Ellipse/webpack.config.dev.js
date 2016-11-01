// let webpack = require('webpack');
// let path = require('path');
//
// const PORT = process.env.PORT || 3000;
//
// module.exports = {
//   devtool: 'eval',
//
//   entry: {
//     main: [
//       'webpack-hot-middleware/client?http://localhost:3000',
//       'webpack/hot/only-dev-server',
//       './static/js/app.js'
//     ],
//     vendor: [
//       // 'react',
//       // 'react-dom',
//       // 'react-redux',
//       // 'react-router',
//       // 'react-router-redux',
//       // 'redux',
//       // 'redux-thunk',
//       // 'immutable'
//     ]
//   },
//
//   output: { //js bundle output config
//     path: path.resolve(__dirname, "../public"),
//     filename: '[name].js',
//     chunkFilename: '[name].chunk.js',
//     publicPath: `http://localhost:${PORT}/` // 設定devserver js存放虛擬位置
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.(js|jsx)$/,
//         loaders: ['react-hot', 'babel'],
//         exclude: /node_modules|public/
//       },
//       {
//         test: /\.(scss|css)$/,
//         loader: "style!css?modules&-url!postcss-loader",
//       }
//     ]
//   },
//
//   noParse: [
//     // 'react-redux/dist/react-redux.min.js',
//     // 'react-router/umd/ReactRouter.min.js',
//     // 'react-router-redux/dist/ReactRouterRedux.min.js',
//     // 'redux-thunk/dist/redux-thunk.min.js'
//   ],
//
//   postcss: () => (
//     [
//       require('autoprefixer'),
//       require('precss')
//     ]
//   ),
//
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.DefinePlugin({ //inject global variable to js file
//       'process.env.NODE_ENV': JSON.stringify('dev')
//     }),
//     new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js") //to do code split, and binding common lib(vendor) to vendor.bundle.js
//   ],
//
//   resolve: {
//     extensions: ['', '.js', '.jsx'],
//     alias: {
//       reducers: path.resolve(__dirname, '../Script/src/reducers'),
//       configuration: path.resolve(__dirname, '../Script/src/config/config.dev')
//
//       // 'react-redux': 'react-redux/dist/react-redux.min.js',
//       // 'react-router': 'react-router/umd/ReactRouter.min.js',
//       // 'react-router-redux': 'react-router-redux/dist/ReactRouterRedux.min.js',
//       // 'redux-thunk': 'redux-thunk/dist/redux-thunk.min.js'
//     }
//   }
// };

var path = require('path')
var webpack = require('webpack')


module.exports = {
  entry: path.resolve(__dirname, 'static/js/app.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          // vue-loader options go here
        }
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'babel',
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file',
      //   options: {
      //     name: '[name].[ext]?[hash]'
      //   }
      }
    ]
  },
  resolve: {
    // alias: {
    //   'vue$': 'vue/dist/vue'
    // }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
