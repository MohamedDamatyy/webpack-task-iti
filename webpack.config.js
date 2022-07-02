const pathModule = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode:"production",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:pathModule.resolve(__dirname,"build"),
        assetModuleFilename: 'images/[name][ext]'
    },
    module:{
        rules: [
            {
              test: /\.css$/i,
             use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
              },
          ],
    },
    plugins:[new HtmlWebpackPlugin()]  
  }