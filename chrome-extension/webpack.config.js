const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    filename: "content.js",
    path: path.resolve(__dirname, "..", "build"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "popup.css", //all styles will be bundled in this file
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/images", to: "images" },
        { from: "public/menifest.json", to: "menifest.json" },
      ], //copies images from public/images to build/images
    }),
    new HtmlWebpackPlugin({
      //generates popup.html in build folder
      template: "./public/index.html",
      filename: "popup.html",
    }),
  ],
};
