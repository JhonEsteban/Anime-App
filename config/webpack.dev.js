const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const developmentConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    historyApiFallback: true,
    open: 'chrome',
    port: 8080,
    compress: true,
  },
  target: 'web',
};

module.exports = merge(commonConfig, developmentConfig);
