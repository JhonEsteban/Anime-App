const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const productionConfig = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = merge(commonConfig, productionConfig);
