const path = require('path');
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/app/apply-theme.ts",
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "apply-theme.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};