const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");
const NodemonPlugin = require("nodemon-webpack-plugin");

// import { fileURLToPath } from "url";

// // Define __dirname and __filename
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    clean: true,
  },
  devtool: "source-map",
  target: "node",
  externals: [webpackNodeExternals()],
  plugins: [
    new NodemonPlugin({
      ext: "ts,js,json,hbs",
    }),
    new Dotenv({
      path: "./.env",
    }),
  ],
  module: {
    rules: [
      { test: /\.ts?$/, loader: "ts-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: false }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  node: {
    __dirname: false,
  },
};
