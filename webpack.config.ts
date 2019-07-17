import { CleanWebpackPlugin } from "clean-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin"
import path from "path"
import TerserPlugin from "terser-webpack-plugin"
import webpack from "webpack"

const prod = process.env.NODE_ENV === "production"
const dev = !prod

const config: webpack.Configuration = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mode: process.env.NODE_ENV as any,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: dev,
              sourceMap: dev,
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
    chunkFilename: "[name]_[contenthash].js",
    path: path.resolve("out"),
  },
  devtool: dev ? "eval-source-map" : undefined,
  plugins: [
    // Will clean output directory before every prod build.
    ...(prod ? [new CleanWebpackPlugin()] : []),
    // Will enable type checking.
    // babel-loader will just strip typescript.
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash].css",
      chunkFilename: "[name]_[contenthash].css",
    }),
    // Will make webpack generate the index.html for the bundle.
    new HtmlWebpackPlugin({
      template: "public/index.html",
      // Minify in production with the new default config.
      // https://github.com/jantimon/html-webpack-plugin/issues/1094
      minify: prod && {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  resolve: {
    // The javascript extensions for importing.
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 3000,
    // This is necessary for when the server is hit at a specific route.
    // By default webpack-dev-server throws a 404 but we want the bundle served
    // to handle routing ourselves.
    historyApiFallback: true,
  },
  optimization: {
    // @ts-ignore
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
    // Will ensure code that doesn't run through babel like react-min has no comments.
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
}

export default config
