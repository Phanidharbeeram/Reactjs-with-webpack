const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
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
        test: /\.css|.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.png|.jpg$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};
