const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const buildConfig = require("./common.config");

module.exports = buildConfig({
    name: "server",
    target: "node",
    externals: [nodeExternals()],
});
