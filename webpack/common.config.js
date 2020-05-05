const path = require("path");

module.exports = ({ name, target, rules = [], ...rest }) => ({
    name,
    target,
    entry: path.join(__dirname, `../src/${name}/index.js`),
    output: {
        path: path.join(__dirname, "../dist"),
        filename: `${name}.bundle.js`,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /(node_modules)/,
            },
            ...rules,
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "../src"), "node_modules"],
        extensions: [".js", ".jsx"],
        alias: {
            shared: path.resolve(__dirname, "../src/shared"),
        },
    },
    mode: "development",
    ...rest,
});
