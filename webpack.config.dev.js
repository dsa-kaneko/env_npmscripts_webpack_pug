const webpack = require('webpack');
const path = require("path");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const writeFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `${__dirname}/src/js/index.js`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/js`,
    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            exclude: /node_modules/,
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    useLocalIp: true,
    watchContentBase: true,
    open: true

  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new writeFilePlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
