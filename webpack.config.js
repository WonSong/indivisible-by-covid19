const path = require('path');

module.exports = {
    target: 'web',
    mode: 'development',
    devtool: 'source-map',
    entry: {
        'app': './src/App.tsx'
    },
    output: {
        path: path.join(__dirname, 'public', 'bundles')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        writeToDisk: true
    }
}