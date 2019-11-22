import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import TerserPlugin from "terser-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin"
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
      }),
      new CopyPlugin([{ from: "public/", to: "." }]),
      new MiniCssExtractPlugin({
        filename: "[name]_[contenthash].css",
      }),
      new OptimizeCssAssetsPlugin(),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      historyApiFallback: true,
      writeToDisk: true,
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  }
}
