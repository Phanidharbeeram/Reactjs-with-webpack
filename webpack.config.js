var path = require("path");
var HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\nodemodules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },

      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      // {
      //   test: /\.css|.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "Images"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
};
