const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
        alias: {
            assets: path.join(__dirname, 'src', 'assets'),
            containers: path.join(__dirname, 'src', 'containers'),
            components: path.join(__dirname, 'src', 'components'),
            styles: path.join(__dirname, 'src', 'styles')
        }
    },
    module: {
        rules: [
            {
                test:/\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        publicPath: '/',
        port: 8080,
        stats: {
            color: true
        }
    }
}