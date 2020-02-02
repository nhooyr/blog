import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import path from "path"
import webpack from "webpack"

export default (env: {}, argv: { mode: string }) => {
  const dev = argv.mode !== "production"
  const gen = process.env.GEN && process.env.GEN !== ""

  const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                sourceMap: dev,
                hmr: dev,
              },
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: dev,
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: "[name]_[contenthash].js",
      path: path.resolve("out"),
    },
    devtool: dev ? "eval-source-map" : undefined,
    plugins: [
      new CleanWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new CopyPlugin([{ from: "public/", to: "." }]),
      new MiniCssExtractPlugin({
        filename: "[name]_[contenthash].css",
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      port: process.env.PORT ? +process.env.PORT : undefined,
      historyApiFallback: true,
      writeToDisk: true,
    },
  }

  if (gen) {
    config.target = "node"
    config.entry = "./src/gen/index.tsx"
    config.output!.path = path.resolve("src/gen/out")
    config.output!.filename = "index.js"
  }

  return config
}
