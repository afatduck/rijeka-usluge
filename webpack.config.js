const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const { server } = require('typescript');
const { type } = require('os');

const repoName = "rijeka-usluge";

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `/${repoName}/`,
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(), // loads .env into process.env.*
    new CopyPlugin({
      patterns: [
        { from: "public", to: ".", globOptions: { ignore: ["**/index.html"] } },
      ],
    }),
  ],
  devServer: {
    static: './public',
    port: 3000,
    hot: true,
    allowedHosts: 'all',
    server: {
      type: "https",
      options: {
        key: "cert.key",
        cert: "cert.crt"
      }
    }
  },
};
