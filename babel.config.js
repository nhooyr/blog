module.exports = api => {
  api.cache.forever()

  const dev = process.env.NODE_ENV === "development"
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
          development: dev,
        },
      ],
      "@babel/preset-typescript",
      "@emotion/babel-preset-css-prop",
    ],
    plugins: [
      [
        "emotion",
        {
          sourceMap: dev,
        },
      ],
      "@babel/plugin-proposal-class-properties",
    ],
  }
}
