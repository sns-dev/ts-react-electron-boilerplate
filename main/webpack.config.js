const path = require("path");
const electron = require("electron");
const { spawn } = require("cross-spawn");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

function ReloadElectron(path) {
  let electronProcess = null;
  return {
    apply: function apply(compiler) {
      compiler.hooks.done.tap("ReloadElectron", () => {
        if (electronProcess) process.kill(electronProcess.pid);
        electronProcess = spawn(electron, [path, "-r process"], { stdio: "inherit" });
      });
    },
  };
}

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  entry: "./src/electron.ts",
  target: "electron-main",
  watch: isDev,
  stats: isDev ? "errors-only" : "normal",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // prettier-ignore
  plugins: [
    new ForkTsCheckerWebpackPlugin(), 
    isDev && ReloadElectron("./dist/electron.js"),
  ].filter(Boolean),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "electron.js",
  },
};
