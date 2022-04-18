const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][hash:6].js",
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@':'/src/*'
        }
    },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             },
    //         },
    //     },
    // },
}