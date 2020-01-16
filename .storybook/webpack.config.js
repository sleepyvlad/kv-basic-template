const path = require("path");
const sass = require("sass");

module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [["react-app", { flow: false, typescript: true }]],
            },
          },
        ],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]--[hash:base64:5]",
              },
              localsConvention: "camelCase",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              implementation: sass,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
            },
          },
        ],
        include: path.resolve(__dirname, "../"),
      },
    ],
  },
});
