const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
};

module.exports = {
	entry: {
		app: PATHS.app,
	},
	output: {
		path: PATHS.app,
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash:true,
			template: './app/index.html',
		}),
	],
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react']
			}
		},
		// {test: /\.html$/,loader: 'file?name=[name].[ext]'},
        {test: /\.css$/,use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]},
        {test: /\.(jpe?g|png|gif|svg|jpg)$/i, loader: "file-loader?name=./assets/images/[name].[ext]"},
        {test: /\.(ico)$/i, loader: "file-loader?name=./assets/favicon/[name].[ext]"},
        // {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'}
		]
	}
};