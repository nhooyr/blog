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
          // See https://github.com/callstack/linaria/issues/420#issuecomment-495979153
          // corejs: 3,
          corejs: 2,
        },
      ],
      [
        "@babel/preset-react",
        {
          development: process.env.NODE_ENV === "development",
        },
      ],
      "linaria/babel",
      "@babel/preset-typescript",
    ],
    plugins: [
      // Makes class property initialization much nicer.
      "@babel/plugin-proposal-class-properties",
    ],
  }
}
