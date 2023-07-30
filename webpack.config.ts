import { BuildEnv } from './config/build/types/config';
// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";


export default (env: BuildEnv) => {

  
const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
};

const mode = env.mode || "development";
const isDev = mode === "development";
const PORT = env.port || 3030;
const apiUrl = env.apiUrl || 'http://localhost:8000'

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port: PORT,
  apiUrl
});

  return config
} ;

// module.exports = {
//   // entry: './src/index.js'
//   mode: "development",
//   entry: path.resolve(__dirname, "src", "index.ts"),
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },

//   output: {
//     filename: "[name].[contenthash].js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: path.resolve(__dirname, "public", "index.html"),
//     }),
//     new webpack.ProgressPlugin(),
//   ],
// };
