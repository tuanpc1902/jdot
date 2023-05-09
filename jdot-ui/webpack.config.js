const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9090,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                        sourceMap: true
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            //     exclude: /node_modules/,
            //     use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            // },
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     loader: "source-map-loader"
            // }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            manifest: "./public/manifest.json"
        }),
        // new MiniCssExtractPlugin()
    ],
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserPlugin({
    //             minify: TerserPlugin.uglifyJsMinify,
    //             // minifyWhitespace: true,
    //             // minifySyntax: true,
    //             // `terserOptions` options will be passed to `uglify-js`
    //             // Link to options - https://github.com/mishoo/UglifyJS#minify-options
    //             terserOptions: {
    //                 compress: true,
    //                 format: {
    //                     comments: false,
    //                 },
    //                 mangle: true
    //             },
    //             extractComments: false,
    //
    //         }
    //     )],
    // },
}