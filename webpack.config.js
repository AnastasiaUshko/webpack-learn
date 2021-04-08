const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
              test: /\.s[ac]ss$/i,
              use: [
                  miniCss.loader,
                  // "style-loader",
                  "css-loader",
                  {
                      loader: "sass-loader",
                      options: {
                          // Prefer `dart-sass`
                          implementation: require("sass"),
                          sassOptions: {
                              // fiber: false,
                              outputStyle: "compressed",
                          },
                      },
                  },
              ],
          },
      ],
    // rules: [{
    //   // test:/\.(s*)css$/, //запустим загрузчик во всех файлах .scss
    //   test: /\.s[ac]ss$/i, //запустим загрузчик во всех файлах .scss or sass
    //   // exclude: /node_modules/, //проигнорируем все файлы в папке  node_modules
    //   use: [
    //     miniCss.loader,
    //     // 'style-loader',
    //     'css-loader',
    //     'sass-loader',
    //   ]
    // }]
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
  ]
};