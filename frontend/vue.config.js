const webpack = require('webpack');

const chainWebpack = config => {
  return config.module.rule('md')
    .test(/\.md$/)
    .use('vue-loader')
    .loader('vue-loader')
    .end()
    .use('vue-markdown-loader')
    .loader('vue-markdown-loader/lib/markdown-compiler')
    .options({ raw: true });
};

module.exports = {
  chainWebpack,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          APPLICATION_BACKEND: 'false'
        }
      }),
    ],
    optimization: {
      minimize: true,
    }
  }
};
