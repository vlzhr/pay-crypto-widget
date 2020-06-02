const path = require('path');

const main = (name, minimize) => ({
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
        globalObject: "dApp",
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



