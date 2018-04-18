const path = require('path')
const config = {
  devServer: {
    historyApiFallback: true
  },
  plugins: [],
  module: {
    rules: []
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx', '.json', '.scss' ]
  }
}

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
)

// Bundle Output
// ------------------------------------
config.output = {
  filename   : `[name].[hash].js`,
  path: path.join(__dirname, 'dist'),
  publicPath: '/'
}

// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
})

// HTML Template
// ------------------------------------
const HtmlWebPackPlugin = require('html-webpack-plugin')

config.module.rules.push({
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: { minimize: true }
    }
  ]
})
config.plugins.push(new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
}))

// Styles
// ------------------------------------
const autoPrefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[md5:contenthash:hex:20].css',
  allChunks: true,
  disable: process.env.NODE_ENV === 'development',
})

config.module.rules.push({
  test: /\.(sass|scss)$/,
  loader: extractStyles.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: { autoprefixer: false, sourceMap: true, importLoaders: 1 }
      },
      { loader: 'postcss-loader'},
      { loader: 'sass-loader' }
    ],
  })
})
config.plugins.push(extractStyles, autoPrefixer)

// Images
// ------------------------------------
config.module.rules.push({
  test    : /\.(png|jpg|gif)$/,
  loader  : 'url-loader',
  options : { limit : 8192 }
})

module.exports = config