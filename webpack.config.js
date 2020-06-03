const path = require('path');

const main = (name, minimize) => ({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    entry: './src/index.ts',
    mode: "production",
    optimization: {
        minimize,
        usedExports: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        library: "dApp",
        filename: name,
        path: path.resolve(__dirname, 'dist'),
    }
});

module.exports = [
    {
        ...main('paycrypto.js', false),
        devtool: 'inline-source-map',
        mode: "production",
    },
    {
        ...main('paycrypto.min.js', true)
    }
];



