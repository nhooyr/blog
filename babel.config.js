// derived from https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/create.js
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function(api) {
  api.cache.never()

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      [
        "@babel/preset-react",
        {
          development: process.env.NODE_ENV === "development",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      "babel-plugin-styled-components",
      // Makes class property initialization much nicer.
      "@babel/plugin-proposal-class-properties",
    ],
  }
}
