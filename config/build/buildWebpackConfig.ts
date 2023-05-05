import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack"
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  
    const {paths, mode} = options
  
    return {
     mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: 'inline-source-map',  
    devServer: buildDevServer(options),
    output: {
      filename: "[name].[contenthash].js",
      path:paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
  } 
}