module.exports = {
    entry: "./src/index.js",
    output: {
        path: "/home/axy/Projects/learning-react/redux-basic/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                oneOf: [
                    {
                        resourceQuery: /./,
                        use: 'babel'
                    }
                ]
            },
            {
                test: /.json$/,
                exclude: /(node_modules)/,
                oneOf: [
                    {
                        resourceQuery: /./,
                        use: 'josn-loader'
                    }
                ]
            }
        ]
    }
}