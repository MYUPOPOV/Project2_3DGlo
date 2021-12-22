const path = require("path");

module.exports = {
	context: path.resolve(__dirname, "src"),

	entry: {
		main: "./index.js",
	},
	output: {
		filename: "js/[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "eval-source-map",
	devServer: {
		hot: true,
		static: {
			directory: "./",
			watch: true,
		},
	},
};
