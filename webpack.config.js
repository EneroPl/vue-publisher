const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./serve/index.js",
	output: {
		filename: "index.js",
		library: "VuePartition",
    	libraryTarget: "umd"
	},
	resolve: {
		alias: {
			'~': './src'
		}
	},
	module: {
		rules: [
			{
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]  
			},
			{
				test: /\.(ttf|eot|woff|svg|woff2)/,
				use: "file-loader"
			},
			{
				test: /\.vue$/,
				use: "vue-loader"
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
	]
}