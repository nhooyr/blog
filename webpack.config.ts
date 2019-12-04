import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import path from "path"
import webpack from "webpack"

export default (env: {}, argv: { mode: string }): webpack.Configuration => {
  const dev = argv.mode !== "production"

  return {
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
        title: "nhooyr.io",
        meta: {
          viewport: "width=device-width",
        },
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
      historyApiFallback: true,
      writeToDisk: true,
    },
  }
}
