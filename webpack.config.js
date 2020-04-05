const path = require('path');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        app: './src/App.tsx',
    },
    output: {
        path: path.join(__dirname, 'docs', 'bundles'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-is': 'ReactIs',
        'react-router-dom': 'ReactRouterDOM',
        'styled-components': 'styled',
        'chart.js': 'Chart',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        writeToDisk: true,
    },
};
