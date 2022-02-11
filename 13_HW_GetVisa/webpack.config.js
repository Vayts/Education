const path = require('node:path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(filepath, fileName) {
  return path.resolve(process.cwd(), 'src', filepath, fileName)
}

const isDevMode = /*process.env.DEV_STAGE !== "production"*/ false;

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: {
    app: resolve('ts', 'index.ts'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name]-[hash:8].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', 'js']
  }, // ВАЖНО
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.resolve(process.cwd(), 'src/ts'),
        loader: require.resolve('babel-loader'),
        options: {
          presets: ["@babel/env", "@babel/preset-typescript"],
          plugins: [],
        },
      },
      {
        test: /\.scss$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin({verbose: true}),
    // new CopyPlugin({patterns: [{ from: "public", to: "public" }]}),
    !isDevMode && new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve('html', 'index.html'),
      excludeChunks: []
    }),
  ].filter(Boolean),
  devtool: 'source-map'
}
