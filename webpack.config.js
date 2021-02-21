module.exports = {
	mode: "development",
	entry: {
		main: __dirname + "/src/main.ts",
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: {
					loader: "ts-loader"
				}
			}
		]
	},
	resolve: {
		extensions: [".ts"],
	}
}