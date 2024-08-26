/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  externals: [],
  entry: {
    main: path.resolve(__dirname, "./src/main.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
