/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");

const clientConfig = {
  mode: "development",
  target: "web",
  entry: {
    main: path.resolve(__dirname, "./src/app.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
  },
  resolve: {
    extensions: [".tsx"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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

const serverConfig = {
  mode: "development",
  target: "node",
  externals: [],
  entry: {
    main: path.resolve(__dirname, "./src/main.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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

module.exports = [clientConfig, serverConfig];
