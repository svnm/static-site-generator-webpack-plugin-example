var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ss = require('./src/ss_routes')
const webpack = require('webpack')
const path = require('path')

function output (options) {
  //path: 'build',
  return { filename: 'bundle.js', publicPath: '', globalObject: '(typeof self !== `undefined` ? self : this)', libraryTarget: 'umd' }
}

function plugins (options) {
  if (options.mode === 'production') {
    return [
      new StaticSiteGeneratorPlugin('main', ss.routes, ss),
      new webpack.DefinePlugin({'process.env': { NODE_ENV: `'production'` }})
    ]
  }
  return [
    new StaticSiteGeneratorPlugin('main', ss.routes, ss),
  ]
}

function target (options) {
  if (options.mode === 'production') {
    return 'node'
  }
  return 'web'
}


module.exports = (env, options) => {
  return {
    entry: './src/index',
    output: output(options),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [ { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/react'] } } ],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|gif|eot|ico|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets'
          }
        }
      ]
    },
    plugins: plugins(options),
    target: target(options)
  }
}
